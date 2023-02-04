import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//make reducer
const feedbackReducer = (state = {}, action) => {
    if (action.type === "ADD_FEELING"){
        return {...state, feeling: action.payload};
    } else if (action.type === "ADD_UNDERSTANDING"){
        return {...state, understanding: action.payload};
    } else if (action.type === "ADD_SUPPORT"){
        return {...state, support: action.payload};
    } else if (action.type === "ADD_COMMENTS"){
        return {...state, comments: action.payload};
    } else if (action.type === "CLEAR"){
        return {};
    }
    return state;
};



//store
const store = createStore(feedbackReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
