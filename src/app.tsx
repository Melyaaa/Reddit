import React from "react";
import './main.global.css';
import thunk from "redux-thunk";
import { hot } from 'react-hot-loader/root'
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { CardsList } from "./shared/CardsList";
import { replyContext } from "./shared/Context/replyContext";
import { applyMiddleware, createStore } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./store/reducer";
import { saveTokenAsync } from "./store/me/actions";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

function AppComponent() {
    const [replyValue, setReplyValue] = React.useState('');
    const dispatch = useDispatch<any>();

    React.useEffect(() => {
        if (window.__token__) {
            dispatch(saveTokenAsync(window.__token__))
        }
    }, [])

    const ReplyProvider = replyContext.Provider;

    return (
        <ReplyProvider value={{
            value: replyValue,
            onChange: setReplyValue
        }}>
            <Layout>
                <Header />
                <CardsList />
            </Layout>
        </ReplyProvider>
    );
}

export const App = hot(() => (
    <Provider store={store}>
        <AppComponent />
    </Provider>
));