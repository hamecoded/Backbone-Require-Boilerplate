Backbone Client Side Boilerplate
======

[![Coverage Status](https://coveralls.io/repos/hamecoded/Backbone-Require-Boilerplate/badge.png)](https://coveralls.io/r/hamecoded/Backbone-Require-Boilerplate)

A modern fullstack web application boilerplate. 

Technology Stack: node, npm, git, grunt, expressjs, requirejs, backbonejs, marionettejs, twitter bootstrap

Install
----
```sh
git clone --depth 1 --single-branch git@github.com:hamecoded/Backbone-Require-Boilerplate.git newProject
```
Sometime you'd like to delete the `.git` directory, for example if the project will be nested under an existing git repository. To do so execute:
```sh
	rm -rf .git
```
  
Develop
----
```sh
npm install & bower install
grunt
```

once every while run `npm-check-updates -u` to update version in package.json and then `npm install`.

Distribute
----
```sh
npm install
grunt build
```

```sh
NODE_ENV=production node server.js
```

Common Pitfalls
----
For the application to run off of dist folder you must set an http server to root into that directory, otherwize routing won't take place. Consider using ngrok.com for that task if you aren't on the root http dir `./ngrok 127.0.0.1:80/newProject/dist/`.  

License
----

MIT


