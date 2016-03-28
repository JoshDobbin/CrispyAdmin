FROM risingstack/alpine:3.3-v5.9.0-3.3.1

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
export NODE_ENV=production
CMD ["npm","start"]  

