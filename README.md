
# url-shortener

This app should serve as example or boilerplate for MEVN projects with some test examples in Jest and docker and docker-compose files.
Its function is only create a shorter version of the an URL storing it as a document in the database.

## Project setup

### Clone the project and
```bash
git clone https://github.com/knbs/url-shortener.git
npm install #node_modules are served from the host machine
```
### Run docker-compose
```bash
docker-compose build
docker-compose up -d
```
This will create and run the image for mongo database and for the app. You should be able to access at http://localhost:8080/

## npm commands
To run other commands for building or running the tests you should access to bash of docker
```bash
docker exec -it express-mongo /bin/bash
```
Then any of the script of package.json will be accessible
```bash
npm serve #Run dev server for client and server
npm run dev:client #Run only client dev-server
npm run dev:server #Run only express server
npm run build #Build client and server in dist folder
npm run build:client #Build only client files in dist folder
npm run build:server #Build only server files in dist folder
npm run lint #Run linter for code standars
npm run test:unit #Run all test under test/unit folder
```
