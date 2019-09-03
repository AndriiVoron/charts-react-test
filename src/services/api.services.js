import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3030');

function subscribeToData(getData, getErrorData) {
  socket.on('data', getData);
  socket.on('error', getErrorData);
}

export { subscribeToData };