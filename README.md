# wetube
Youtube를 클론 합니다.

- express, babel, nodemon -D, morgan, helmet, cookie-parser, pug
- app -> middleware(req, res, next) -> router
- GET, POST
  - GET request : url로 접근을 하면 response를 해줘야 한다.
    <pre>
      <code>
      const express = require('express');
      const app = express();
      const PORT = 4000;
      //handlers
      function handleListening(){
        console.log(`Listening on : http://localhost:${PORT}`)
      }
      function handleHome(req, res){
        res.send("Hello from Home");
      }
      function handleProfile(req, res){
        res.send("you are on my profile");
      }
      app.get('/', handleHome);
      app.get('/profile', handleProfile)
      app.listen(PORT, handleListening);
      </code>
    </pre>
  - POST request :

- babel : npm i @babel/node @babel/preset-env @babel/core
  - .babelrc 를 생성하고 설정을 해야 사용할 수 있다.
    <pre>
      <code>
      {
        "presets":["@babel/preset-env"]
      }
      </code>
    </pre>

- MVC
  - M : Data
  - V : View (how look)
  - C : Controler (function)

- Webpack
  -
