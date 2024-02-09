import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export function useCommentsData(postId: string) {
    const token = useSelector<RootState, string>(state => state.token);
    const [comments, setComments] = useState([]); 

    useEffect(() => {
        if (postId && postId !== undefined) {
            axios.get(`https://oauth.reddit.com/comments/${postId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((resp) => {
                    const commentsData = resp.data[1].data.children;
                    setComments(commentsData);
                })
        }
    }, [postId])
    
    return [comments];
}
