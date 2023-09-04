FROM python:3.11 AS base

WORKDIR /app

RUN apt-get update && apt-get install -y nodejs npm

COPY package*.json ./

RUN npm install

COPY python-scripts/requirements.txt ./
COPY python-scripts/summarize.py ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
