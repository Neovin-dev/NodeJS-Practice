import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();


eventEmitter.on('start', (number, rank) => {
    console.log(`started ${number + rank} `);
})

eventEmitter.emit('start', 23, 7);
