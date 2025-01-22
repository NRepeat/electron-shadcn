import { Manager } from 'socket.io-client';

// Create a new Socket.IO Manager instance
const manager = new Manager('http://127.0.0.1:3333', {
	reconnectionDelayMax: 10000, // Maximum delay for reconnection attempts
});

// Create a socket connection for the "clientConnected" namespace
export const websocketClient = manager.socket('/');
