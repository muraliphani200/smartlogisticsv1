From node:6.10.2
Add ./ /code/
RUN npm install
RUN npm install -g pm2
EXPOSE 3000
WORKDIR /code
ENTRYPOINT [ "pm2-docker", "app.js" ]
