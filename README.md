# Email Helper

<img width="100%" src="https://github.com/cooljasonmelton/email-automater/blob/master/demo.gif"/>

## features
* create, read, update, and delete email templates
* create, read, update, and delete contacts
* select specific / select all contacts
* open local email client with chosen contacts and template, ready to email 

## built with
Front end 
- JavaScript 
- React.js
- Redux
- Semantic UI React

Back end 
- Ruby on Rails RESTful API
- Postgres Database

- <a href="https://github.com/cooljasonmelton/email-helper-backend"> see the back end </a>

## installation
- open preferred directory and clone repo for front and back end:
```
git clone git@github.com:cooljasonmelton/email-helper.git
git clone git@github.com:cooljasonmelton/email-helper-backend.git
```
- cd into directory 'email-helper-backend' to create and migrate database:
```
rails db:create && rails db:migrate
```
- Start rails server:
```
rails server
```
- In terminal, open new tab. Cd into 'paperclips-front-end'. Install and run npm:
```
npm install && npm start
```
- When prompted, run npm in a new port. Navigate browser to window opened by npm.

## built by 
Jason Melton

## contact
jason.melton2@gmail.com

### coming soon
* search inputs work
* display error message when login fails
