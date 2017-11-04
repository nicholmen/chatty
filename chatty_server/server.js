
const express = require('express');
const SocketServer = require('ws').Server;
const ws = require('ws')

const PORT = 3001;


const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

function broadcast(data) {
  wss.clients.forEach(client => {
    if(client.readyState === ws.OPEN) {
      // console.log('** ' + data.type + ' ** ' + data.username + " says " + data.content)
    client.send(JSON.stringify(data));
    }
  })
}

wss.on('connection', (socket) => {

  let userNumber = {type: "userCount", value: wss.clients.size};
  broadcast(userNumber);
  console.log('Client connected', userNumber);

  socket.on('message', data => {
    console.log('message', data)
    data = JSON.parse(data)
    broadcast(data);
  })

  socket.on('close', () => {
    let userNumber = {type: "userCount", value: wss.clients.size};
    console.log('Client disconnected', userNumber)
    broadcast(userNumber);
  });

});
