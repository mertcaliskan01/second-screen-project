// server.js
const express = require('express');
const { PeerServer } = require('peer');
const path = require('path');

const app = express();
const port = 3000; // Port for web pages
const peerPort = 9000; // Special port for PeerJS

// Specify the folder containing static files (HTML files will be in this folder)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Web server running at http://localhost:${port}`);
    console.log(`Please use http://[YOUR_MAC_IP_ADDRESS]:${port}`);
});

// Start PeerJS Server
const peerServer = PeerServer({ port: peerPort, path: '/myapp' });

peerServer.on('connection', (client) => {
    console.log(`New connection established: ${client.id}`);
});

peerServer.on('disconnect', (client) => {
    console.log(`Connection closed: ${client.id}`);
});

console.log(`PeerJS Server running at :${peerPort}/myapp`);
console.log('---');