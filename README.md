# Sahabat Setia API


Sahabat Setia API is a RESTfull API for Sahabat Setia Web and Mobile. Built with NodeJs using the ExpressJs Framework.
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.16.2-yellow.svg?style=rounded-square)](https://nodejs.org/)

## Installation
1. [Node Js](https://nodejs.org/)
2. [Postman](https://www.postman.com/)
3. Web Server (ex. localhost)

## How to run
1. Clone this repository.
2. Open app's directory in CMD or Terminal.
3. Type `npm install` or `yarn install` is you use yarn.
4. Turn on Web Server and MySQL can using Third-party tool like Xampp, etc.
5. Create a database by name library_app_api, and Import file [library_app_api.sql](library_app_api.sql) to **phpmyadmin GUI**
6. Open Postman desktop.
7. Choose HTTP Method and enter request url.(ex. localhost:8080/books)
8. You can see all the end point [here](#end-point)

## Set up .env file
Create .env file on your root file, open your favorite code editor, and copy paste this code below :
```
TOKEN_SECRET=emangrahasiabanget
REFRESH_TOKEN_SECRET=rahasiabangetdah
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB=library_app_api
PORT=8080
```

## End Point
**1. GET**
* `/books`
* `/books?search=harry&sort=true&page=1&limit=6`
* `/genre`
* `/author`
* `/status`


**2. POST**
* `/books`
    * ``` { "title": "Harry Potter", "description": "About Harry Potter", "genre": 1, "author": 1, "status": 1, "image": image-harry.jpg } ```

* `/genre`
    * ```{"genre": "Sci-Fi"}```    
* `/author`
    * ```{"author": "JK Rowling"}``` 
* `/status`
    * ```{"status": "Available"}``` 

**3. PUT**
* `/books/:id` (Update book by id)
   * ``` { "title": "Harry Potter and Sorcerer's Stone" } ```
* `/genre/:id` (Update genre by id)
   * ``` { "genre": "Fiction" } ```
* `/author/:id` (Update author by id)
   * ``` { "author": "JRR Tolkien" } ```
* `/status/:id` (Update status by id)
   * ``` { "status": "Unavailable" } ```

**4. DELETE**
* `/books/:id` (Delete book by id)
* `/genre/:id` (Delete genre by id)
* `/author/:id` (Delete author by id)
* `/status/:id` (Delete status by id)

# HTTP
| HTTP METHOD | POST | GET | UPDATE | DELETE
| ------ | ------ | ------ | ------ | ------ |
| CRUD | CREATE | READ | UPDATE | DELETE
| /books | Create new books | List book | Description Update | Delete books

# Packages
- express
- mysql
- body-parser
- nodemon
- morgan
- multer
- cors
- jsonwebtoken
- bcrypt
- dotenv
