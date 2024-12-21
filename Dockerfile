# Используйте базовый образ Node.js
FROM node:16

# Установите рабочую директорию
WORKDIR /app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Установите глобально PM2
RUN npm install -g pm2

# Скопируйте исходный код приложения
COPY . .

# Откройте порт, который будет использоваться приложением
EXPOSE 5000

RUN apt-get update && apt-get install -y wget
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz
RUN tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz

# Команда для запуска приложения
CMD ["sh", "-c", "dockerize -wait tcp://mariadb:3306 -timeout 60s pm2-runtime start ecosystem.yml"]# Команда для запуска приложения
#CMD ["pm2-runtime", "start", "ecosystem.yml"]
