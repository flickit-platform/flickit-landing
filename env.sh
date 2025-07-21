#!/bin/sh

for i in $(env | grep PLATFORM_)
do
    key=$(echo "$i" | cut -d '=' -f 1)
    value=$(echo "$i" | cut -d '=' -f 2-)
    echo "Replacing __${key}__ with ${value}"

    find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.html' \) \
        -exec sed -i "s|__${key}__|${value}|g" '{}' +
done

exec "$@"
