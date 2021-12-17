# APM
<img src=https://cdn.worldvectorlogo.com/logos/prisma-2.svg>

## About:
This is an api developed for sending messages with the authentication done through the github api<br>
this api was developed in rocketseat's nlwheat
<br>
<br>
API with github oauth

## Clone:

### With HTTPS:
```git
git clone https://github.com/LucasCorpT5/APM.git
```
### With SSH:
```git
git clone git@github.com:LucasCorpT5/APM.git
```

### With GitHub CLI:
```git
git clonegh repo clone LucasCorpT5/APM
```

## Tools:
* Prism 
* Typescript 
* Express 
* Node 
* Axios 
* Jsonwebtoken
* Docker
* Postgresql
* ts-node-dev
* socket.io


## JSON CONFIGS:
```json
{
  "name": "nlwheat",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "ts-node-dev --exit-child src/server.ts"
  },
  "dependencies": {
    "@prisma/client": "3.6.0",
    "axios": "^0.24.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "socket.io": "^4.4.0"
  },
  "devDependencies": {
    "@types/axios": "^0.14.0",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.6",
    "@types/socket.io": "^3.0.2",
    "prisma": "3.6.0",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.5.3"
  }
}
```

## Routes:
### Authenticate User:
```http
POST /authenticate
```
#### Example Request Body
```json
{
"code": "ee62c274cfa46aa91736"
}
```
### Create Messages:
```http
POST /messages
```
#### Example Request Body:
```json
{
"message": "Nova mensagem"
}
```
### Last 3 Messages:
```http
GET /messages/last3
```
### Return Profile:
```http
GET /profile
```
#### Example Request Body:
```json
{
"code": "ee62c274cfa46aa91736"
}
```
#### Example Bearer:
```token
Token: eyhsi28js9jHJjsodjT
```

## Models:
```prisma
model User {
  id           String @id @default(uuid())
  name         String
  github_id    Int
  avatar_url   String
  login        String

  @@map("users")
  messages Message[]
}

model Message {
  id            String @id @default(uuid())
  text          String
  created_At    DateTime @default(now())

  user User @relation(fields: [user_id], references: [id])

  user_id String
  @@map("messages")
}
```

## Running the project:
### Build Database:
```git
sudo docker start nlwheat
```
### Running:
```bash
ts-node-dev --exit-child src/server.ts
```
