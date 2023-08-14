# build environment
FROM node:latest as keycloakify_jar_builder
COPY package.json yarn.lock /opt/app/
WORKDIR /opt/app/
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build-keycloak-theme

# production environment
FROM quay.io/keycloak/keycloak:latest as builder
WORKDIR /opt/keycloak
COPY --from=keycloakify_jar_builder /opt/app/build_keycloak/target/keycloakify-starter-keycloak-theme-4.6.5.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]