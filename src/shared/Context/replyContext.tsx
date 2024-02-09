import React from "react";

type ReplyContextType = {
    value: string;
    onChange: (value: string) => void
}

export const replyContext = React.createContext<ReplyContextType>({
    value: '',
    onChange: () => { }
});