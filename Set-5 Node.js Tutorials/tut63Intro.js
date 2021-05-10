// _ means last variable used so --
// a=34
//    34
// _ + 4
//  38
//as _ means
//repl means READ, EVALUATE, PRINT, LOOP used in node
//use .exit for exitting this loop
//Copy this code from node js site in about section
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Key Frames & Animations</title>
      <style>
          .cont {
              display: flex;
              background-color: khaki;
          }
  
          .box {
              background-color: gold;
              width: 200px;
              height: 200px;
  
              vertical-align: middle;
              text-align: center;
              line-height: 200px;
  
              padding: 10px 10px;
  
              position: relative;
              /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  
              /* OR USE */
  
              animation-name: ARS;
  
              animation-duration: 5s;
  
              animation-timing-function: linear;
              /* Means progress rate - Default - ease (at start & end) */
              /* also use ease in or ease out */
  
              animation-delay: 2s;
  
              animation-iteration-count: 2;
              /* Means no of repeat - Default 1*/
              /* use infinite also */
  
              animation-direction: alternate-reverse;
              /* Means FROM to TO (use forwards) or TO to FROM  (usd backwards) */
              /* Alternate means forward to backward & Alternate reverse means backward then forward */
  
              animation-fill-mode: backwards;
              /* means property to acquire at end of animation FROM property (use backwards) or TO property (use forwards) */
  
              /* IMP if u are using combined then use one out of last two */
          }
  
          @keyframes ARS {
              from {
                  width: 200px;
                  background-color: greenyellow;
              }
  
              to {
                  width: 1200px;
                  background-color: green;
              }
          }
  
          .cont1 {
              display: flex;
          }
  
          .box1 {
              border: 5px solid;
              height: 100px;
              width: 100px;
              vertical-align: middle;
              text-align: center;
              line-height: 100px;
              background-color: green;
  
              animation: ARSN 10s linear 1s 2 backwards;
              animation-direction: reverse;
              /* IMP if u are using combined then use only one out of last two i.e. FORWARDS OR BACKWARDS */
              /* hence mention animation direction separately */
  
              position: relative;
          }
  
          @keyframes ARSN {
              0% {
                  top: 0px;
                  left: 0px;
                  background-color:green ;
              }
  
              25% {
                  top: 0px;
                  left: 400px;
                  background-color: yellow;
              }
  
              50% {
                  top: 200px;
                  left: 400px;
                  background-color: red;
              }
  
              75% {
                  top: 200px;
                  left: 0px;
                  background-color: blue;
              }
  
              100% {
                  top: 0px;
                  left: 0px;
                  background-color: brown;
              }
          }
      </style>
  </head>
  
  <body>
      <div class="cont">
          <div class="box">This is a box !</div>
      </div>
      <div class="cont1">
          <div class="box1">This is a box1 !</div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});