Приложение PixelPlanet
Это приложение запускается с использованием Node.js, PM2 и Docker. Переменные окружения могут быть переданы как при сборке, так и при запуске контейнера.

Структура проекта
server.js — основной файл приложения.

ecosystem.yml — конфигурация PM2.

Dockerfile — инструкции для сборки Docker-образа.

docker-compose.yml (опционально) — для управления контейнерами с помощью Docker Compose.

Требования
Перед началом работы убедитесь, что у вас установлены следующие инструменты:

Docker

Docker Compose (опционально)

Настройка переменных окружения
Переменные окружения используются для настройки приложения. Вы можете передать их при запуске контейнера.

Пример переменных окружения:

env
Copy
PORT=5000
HOST=0.0.0.0
REDIS_URL=redis://redis:6379
MYSQL_HOST=mysql
MYSQL_USER=pixelplanet
MYSQL_DATABASE=pixelplanet
MYSQL_PW=sqlpassword
SESSION_SECRET=ayyylmao
Сборка Docker-образа
Чтобы собрать Docker-образ, выполните следующую команду:

bash
Copy
docker build -t my-app .
Запуск контейнера
Запуск с переменными окружения
Вы можете передать переменные окружения при запуске контейнера:

bash
Copy
docker run -d \
  -e PORT=5000 \
  -e HOST="0.0.0.0" \
  -e REDIS_URL="redis://redis:6379" \
  -e MYSQL_HOST="mysql" \
  -e MYSQL_USER="pixelplanet" \
  -e MYSQL_DATABASE="pixelplanet" \
  -e MYSQL_PW="sqlpassword" \
  -e SESSION_SECRET="ayyylmao" \
  -p 5000:5000 \
  my-app
Запуск с использованием .env файла
Создайте файл .env в корне проекта с переменными окружения (как показано выше) и запустите контейнер:

bash
Copy
docker run -d \
  --env-file .env \
  -p 5000:5000 \
  my-app
Использование Docker Compose
Если вы хотите использовать Docker Compose, создайте файл docker-compose.yml следующего содержания:

yaml
Copy
version: '3'
services:
  app:
    image: my-app
    ports:
      - "5000:5000"
    environment:
      - PORT=5000
      - HOST=0.0.0.0
      - REDIS_URL=redis://redis:6379
      - MYSQL_HOST=mysql
      - MYSQL_USER=pixelplanet
      - MYSQL_DATABASE=pixelplanet
      - MYSQL_PW=sqlpassword
      - SESSION_SECRET=ayyylmao
Запустите сервис с помощью команды:

bash
Copy
docker-compose up -d
Проверка работы
После запуска контейнера приложение будет доступно по адресу:

Copy
http://localhost:5000
Дополнительная информация
Для управления приложением используется PM2. Конфигурация PM2 находится в файле ecosystem.yml.

Переменные окружения могут быть изменены в соответствии с вашими требованиями
