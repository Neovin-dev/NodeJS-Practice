'use strict'

import Greetr from "./classEmitter.js"

const greetr1 = new Greetr();

greetr1.on('greet', data => {
    console.log(`someone greeted ${data}`)
})

greetr1.greet('Tony');