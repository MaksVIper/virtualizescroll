import React, {useEffect, useState} from 'react';
import {getComments, IComment} from "../../api/comments";
import ListNode from "./ListNode/ListNode";

type ListProps = {
    scrollEnd: boolean;
    setScroll: any;
}

const List = ({scrollEnd, setScroll}: ListProps) => {
    const [data, setData] = useState(new Array<IComment>());
    const [prevState, setPrevState] = useState(true);
    const [sizeData, setSizeData] = useState(0);
    const fixSize:number = 10;

    useEffect(() => {
        if ((scrollEnd || prevState)) {
            const upSize = sizeData + fixSize;
            setSizeData(upSize);
            getComments().then((res) => setData(res.slice(0, upSize)));
            setPrevState(false);
            setScroll(false);
        }
    }, [scrollEnd, prevState, setScroll, sizeData]);
    return (
        <div>
                {data.map((comment, index) => {
                    return <ListNode comment={comment} key={index} index={index}/>
                })}
        </div>
    );
};

export default List;