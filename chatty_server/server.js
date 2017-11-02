
const express = require('express');
const SocketServer = require('ws').Server;
const ws = require('ws')


const PORT = 3001;


const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('message', data => {
    data = JSON.parse(data)
    wss.clients.forEach(client => {
      if(client.readyState === ws.OPEN) {
        console.log('** ' + data.type + ' ** ' + data.username + " says " + data.content)
      client.send(JSON.stringify(data))
      }
    })
  })

 
  socket.on('close', () => console.log('Client disconnected'));
});
