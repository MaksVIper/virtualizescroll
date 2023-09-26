import React from 'react';
import {IComment} from "../../../api/comments";

type ListNodeProps = {
    comment: IComment,
    index: number
}
const ListNode = ({comment, index}: ListNodeProps) => {
    return (
        <div>
            <div className="comment-container">
                <div className="comment-container__title">
                    <div className="comment-container__title-index">{index + 1}</div>
                    <div className="comment-container__title-name">{comment.name}</div>
                </div>
                <div className="comment-container__body">
                    {comment.body}
                </div>
                <a href={`/about?id=${comment.id}`}>Просмотр</a>
            </div>
        </div>
    );
};

export default ListNode;