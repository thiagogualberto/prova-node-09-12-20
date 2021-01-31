<h1 align="center">
    <p>Users API - Helpper</p>
</h1>

<h3 align="center">
    <!-- Descrição do projeto  -->
    Improvement of the user api provided by the company Helpper.
</h3>

</br>

<div align="center">

[![](https://img.shields.io/badge/made%20by-ThiagoGualberto-%237159C1)](https://www.linkedin.com/in/thiagogualberto84/)
[![](https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS)](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1)
![](https://img.shields.io/github/repo-size/thiagogualberto/prova-node-09-12-20.svg)
[![](https://img.shields.io/github/last-commit/thiagogualberto/prova-node-09-12-20.svg?color=red)](https://github.com/thiagogualberto/prova-node-09-12-20/commits/master)
</br></br>

<p id="insomniaButton" align="center">
    <a href="https://insomnia.rest/run/?label=User%20API%20-%20Helpper&uri=https%3A%2F%2Fgithub.com%2Fthiagogualberto%2Fprova-node-09-12-20%2Fblob%2Fmaster%2FInsomnia_Helpper.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <a href="#man_technologist-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-support">Support</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>
</div>
</br>

# :man_technologist: Project

This project is an improvement on the initial user registration project in order to assess my skills and competences.
</br></br>

# :rocket: Getting Started

## :gear: Back-end

To clone and run this api, you'll need Git, Node.js v12.14 or higher + Typescript + Yarn v1.21 or higher + Docker installed on your computer. </br>
The first thing you need to do is to run these container on your machine:</br>

```bash
# Create a container in 'postgres' with the name of 'helpper_postgres'
$ docker run --name helpper_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

From your command line:

```bash
# Clone this repo to your local machine using
$ git clone https://github.com/thiagogualberto/prova-node-09-12-20.git

# From the project root, enter the backend (prova-node-09-12-20) folder
$ cd prova-node-09-12-20

# Install the dependencies
$ yarn

# Create a database in 'postgres' with the name of 'teste_helpper';

# Run the migrations
$ yarn typeorm migration:run

# Everything ready to start the server
$ yarn dev
```

You can test this API in two ways:</br>
* Import the `Insomnia_Helpper.json` file into Insomnia or,
* Click the button [Run in Insomnia](#insomniaButton)
</br></br>

# :clipboard: Features

## Funcionalities
* User authentication with JWT
* User registration (Create, Read, Update and Delete)

## Build with (Technologies)

This project was developed with the following technologies:
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Generation of User Password Hash
* [Docker](https://www.docker.com/docker-community) - Container
* [EditorConfig](https://editorconfig.org/) - Setting up the development environment
* [ESLint](https://eslint.org/) - JS Linter and code style
* [Express](https://expressjs.com/pt-br/) - Router of the Application
* [ExpressJS Async Errors](https://www.npmjs.com/package/express-async-errors) - Error handling for express
* [JWT](https://jwt.io/) - Authentication Json Web Token
* [Node.js](https://nodejs.org/en/) - Build the server
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Prettier](https://prettier.io/) - Code Formatter
* [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) - Dependency on typescript to use decorator syntax
* [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for Postgres
* [TypeORM](https://typeorm.io/#/) - ORM that can run in NodeJS platform and can be used with TypeScript and JavaScript
* [TypeScript](https://www.typescriptlang.org/) - Build the server
* [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - Tool that compiles projects with Typescript and restarts the project when the file is modified.
* [VS Code](https://code.visualstudio.com/) with [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) + [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [EditorConfig](https://editorconfig.org/) + [TypeORM](https://typeorm.io/#/)
</br></br>

# :pushpin: Support
My name is Thiago de Medeiros Gualberto and my contacts are:

* Email: <thiago.gou@gmail.com>
* Linkedin at [Thiago Medeiros](https://www.linkedin.com/in/thiagogualberto84/)

Connect with me at LinkedIn.

Thank you!
</br></br>

---
Made with ♥ Enjoy it!
