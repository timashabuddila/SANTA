FROM fusuf/whatsasena:latest

RUN git clone https://github.com/timashabuddila/SANTA /root/SANTA
WORKDIR /root/SANTA/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
