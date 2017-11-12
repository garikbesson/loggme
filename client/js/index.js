import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import reducers from './reducers';
import {createLogger} from 'redux-logger';
import LogMe_App from './app';
import MainComponent from './containers/MainComponent';

const logger = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

window.logme_app = new LogMe_App(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route  path='/'
                        render={(props) => (
                            <MainComponent  {...props} store={store}/>
                        )}
                />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);