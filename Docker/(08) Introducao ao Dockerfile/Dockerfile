FROM node:18

# Cria uma pasta chamada app
WORKDIR /app

# Copia os arquivos package e tudo oque tiver dentro da pasta
COPY package*.json ./

# Roda o comando
RUN npm install

# Copia tudo para a pasta
COPY . .

# Expondo a porta 3001
EXPOSE 3001

# Comando para rodar a aplicação
CMD ["npm", "start"]