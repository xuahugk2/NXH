import React from 'react';
import ReactDOM from 'react-dom/client';
// import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
import dotenv from 'dotenv';
import App from './App.jsx';
// import rootReducer from './reducers/index.jsx';
import './index.css';

dotenv.config;
// const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        {/* <Provider store={store}> */}
        {/* <SnackbarProvider maxSnack={5} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}> */}
        {/* <App /> */}
        {/* </SnackbarProvider> */}
        {/* </Provider> */}
        <div>
            hello bae
        </div>
    </React.Fragment>,
);
