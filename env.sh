#!/bin/sh

# Define the environment variable prefix
ENV_PREFIX="FLICKIT_LANDING"

# Loop through environment variables
for i in $(env | grep "^$ENV_PREFIX")
do
    key=$(echo $i | cut -d '=' -f 1)
    value=$(echo $i | cut -d '=' -f 2-)
    
    # Replace occurrences of the environment variable in files
    find .next -type f \( -name '*.js' -o -name '*.css' \) -exec sed -i "s|${key}|${value}|g" '{}' +
done
