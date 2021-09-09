import { IEventEmitter } from './IEventEmitter'

export function getListeners(
  emitter: IEventEmitter,
  event: string
): Function[] {
  const out: Function[] = []
  const listeners = emitter.events.get(event)
  listeners.forEach((listener) => {
    out.push(listener.callback)
  })
  return out
}
