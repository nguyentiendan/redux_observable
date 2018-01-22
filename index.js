import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import configureStore  from './store'

const store = configureStore()

const ReduxApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>    
)

AppRegistry.registerComponent('redux_observable', () => ReduxApp);
