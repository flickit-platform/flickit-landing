#!/bin/sh

# Define the environment variable prefix
for i in $(env | grep FLICKIT_)
do
    key=$(echo $i | cut -d '=' -f 1)
    value=$(echo $i | cut -d '=' -f 2-)
    echo $key=$value
    
    # Replace occurrences of the environment variable in files
    find .next -type f \( -name '*.js' -o -name '*.css' \) -exec sed -i "s|${key}|${value}|g" '{}' +
done
