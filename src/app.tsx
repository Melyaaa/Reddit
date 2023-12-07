import React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { UserContextProvider } from "./shared/Context/userContext";
import { tokenContext } from "./shared/Context/tokenContext";
import { PostsContextProvider } from "./shared/Context/postsContext";
import { commentContext } from "./shared/Context/commentContext";

function AppComponent() {
    const [commentValue, setCommentValue] = React.useState('');
    const [token] = useToken();

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <tokenContext.Provider value={token}>
                <PostsContextProvider>
                    <UserContextProvider>
                        <Layout>
                            <Header />
                            <CardsList />
                        </Layout>
                    </UserContextProvider>
                </PostsContextProvider>
            </tokenContext.Provider>
        </CommentProvider>
    );
}

export const App = hot(() => <AppComponent />);