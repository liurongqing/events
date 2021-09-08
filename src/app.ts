import { IEventEmitter } from "./IEventEmitter";
import { EventEmitter, Emit, On } from "./index";

const emitter: IEventEmitter = new EventEmitter()

On(emitter, 'update', (...rest)=>{
  console.log('update1...', rest)
})

Emit(emitter, 'update', 1, 2, 3)