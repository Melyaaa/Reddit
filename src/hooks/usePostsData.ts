import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/Context/tokenContext";

export function usePostsData() {
    const [posts, setPosts] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        if (token && token !== "undefined") {
            axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then((resp) => {
                    const postsData = resp.data.data.children;
                    setPosts(postsData);
                })
        }
    }, [token]);

    return [posts]
}