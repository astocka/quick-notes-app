# quick-notes-app
Simple app for managing quick notes in Node.js.

Functions
--
Avaible functions:
* add
* remove
* list
* read

Getting started
--
* get copy of the project
* verify in command prompt, if you have node.js and npm installed:
```sh
> node -v
> npm -v
```
* you can get node.js from here: https://nodejs.org/en/
* install npm:
```sh
> npm install
```
* open project and install 3 packeges:
```sh
> npm install yargs
> npm install chalk
> npm install fs-extra
```

Commands
--
* add note
```sh
> node app.js add --title="write title here" --body="body of the note"
```
* remove note
```sh
> node app.js remove --title="write title here"
```
* list notes
```sh
> node app.js list
```
* read note
```sh
> node app.js read --title="write title here"
```
* help menu
```sh
> node app.js --help
```
* version of the project
```sh
> node app.js --version
```

Used technologies/code editors:
--
* JavaScript
* Node.js
* Visual Studio Code
