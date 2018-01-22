import { createStore, applyMiddleware } from 'redux'
import app from '../reducer'

import { createEpicMiddleware } from 'redux-observable'
import fetchCoffeeEpic from '../epic/epic'

const epicMiddleware = createEpicMiddleware(fetchCoffeeEpic)

export default function configureStore () {
  const store = createStore(app, applyMiddleware(epicMiddleware))
  return store
} 