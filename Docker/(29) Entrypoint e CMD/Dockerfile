FROM node:22

WORKDIR /app

# Faz o que for necessário

COPY . . 

# Caso aimagem seja Linux
RUN apt-get update && apt-get install -y netcat

# Caso a imagem seja alphine
RUN apk add --no-cache netcat-openbsd

# Da permissões para o entrypoint.sh
RUN chmod +x ./entrypoint.sh 

ENTRYPOINT ["sh", "./entrypoint.sh"]

# CMD ["npm", "start"]