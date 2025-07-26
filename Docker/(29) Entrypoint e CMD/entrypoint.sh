#!/bin/sh

echo "Aguardando o banco de dados em 5432"

while ! nc -z banco 5432; do
  sleep 1
done

echo "Banco de Dados ON! Executando migrations"

npx prisma migrate deploy

echo "Iniciando a aplicação"

npm start