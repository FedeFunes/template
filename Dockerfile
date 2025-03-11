# Build
FROM node:18-alpine AS builder

ARG CI_JOB_TOKEN  # Define the build argument

WORKDIR /app

# Configure NPM to use the GitLab registry
RUN echo "@fravega-it:registry=https://gitlab.com/api/v4/packages/npm/" >> .npmrc && \
    echo "//gitlab.com/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}" >> .npmrc

COPY package*.json ./  
RUN npm install
COPY . .  
RUN npm run build  

# Production
FROM node:18-alpine  

WORKDIR /app  

# Copy only necessary files for production
COPY --from=builder /app/package*.json ./  

# Configure NPM again in case production dependencies need authentication
ARG CI_JOB_TOKEN
RUN echo "@fravega-it:registry=https://gitlab.com/api/v4/packages/npm/" >> .npmrc && \
    echo "//gitlab.com/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}" >> .npmrc

RUN npm install --production  

COPY --from=builder /app/.next ./.next  
COPY --from=builder /app/public ./public  

EXPOSE 3000  

CMD ["npm", "start"]
