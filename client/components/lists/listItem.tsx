import * as React from 'react';
import { Icon } from 'antd';
import './index.css';

export interface ItemProps {
    coverImg: string;
    title: string;
    summary: string;
    time: string;
    viewCount: number;
    commentCount: number;
}

const Hello = (props: ItemProps) => (
    <div className="listContainer">
        <div>
            <img src={props.coverImg} alt="" />
        </div>
        <div className="bottomContainer">
            <p className="title">{props.title}</p>
            <p className="summary">{props.summary}</p>
            <div>
                <p>
                    <span>
                        <Icon type="clock-circle" />
                        {props.time}
                    </span>
                    <span>
                        <Icon type="eye" />
                        {props.viewCount}
                    </span>
                    <span>
                        <Icon type="message" />
                        {props.commentCount}
                    </span>
                </p>
                <span className="lastSpan">
                    阅读全文 <span>>></span>
                </span>
            </div>
        </div>
    </div>
);

export default Hello;
