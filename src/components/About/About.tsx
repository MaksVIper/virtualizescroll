import React, {useEffect, useState} from 'react';
import {getComments, IComment} from "../../api/comments";
import {useNavigate, useSearchParams} from "react-router-dom";

const About = ({}) => {
    const [comment, setComment] = useState({} as IComment);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        // @ts-ignore
        const id = parseInt(searchParams.get('id'));
        getComments().then((data: IComment[]) => {
            data.filter((comment) => {
                if (comment.id === id) {
                    setComment(comment);
                }
            })
        })
    }, []);
    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)}>Назад</button>
                {comment.name}
            </div>
            <div>{comment.body}</div>
        </div>
    );
};

export default About;