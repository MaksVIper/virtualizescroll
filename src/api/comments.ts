import axios from "axios";

export interface IComment {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: number;
}

export const getComments = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => {
            return res.data;
        })
}