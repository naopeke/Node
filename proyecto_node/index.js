//https://stackoverflow.com/questions/70355404/when-to-use-import-and-when-to-use-require-in-node-js
// https://www.youtube.com/watch?v=mK54Cn4ceac 

// import { writeAndRead } from "./writeAndReadObject";
// import { readConsole } from "./readConsole";

const f1 = require('./writeAndReadObject');
const f2 = require('./readConsole');

// f1.writeAndRead('./miFichero.json', {calle:'Teruel', numero: 8});

f2.readConsole(console.log);
