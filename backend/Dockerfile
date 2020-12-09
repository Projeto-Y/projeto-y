FROM composer:2 AS composer
FROM php:7.2-apache

# hadolint ignore=DL3008
RUN apt-get update \
    && apt-get install -y --no-install-recommends libxml2-dev git unzip \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install bcmath pdo_mysql

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY docker/ensure_deps.sh /usr/bin/ensure_deps

COPY --from=composer /usr/bin/composer /usr/bin/composer

EXPOSE 8000

CMD [ "bash" ]
