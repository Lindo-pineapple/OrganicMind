ARG NODE_VERSION=22

FROM node:${NODE_VERSION}

# Create and define the node_modules's cache directory.
WORKDIR /cache

# # Copy package.json and package-lock.json into the working directory
# COPY package*.json .

# install app dependencies and mount to cache to speed up subsequent builds.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --silent --include=dev

# App Work directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .

# Run the application as a non-root user.
RUN  chown -R node /app
USER node