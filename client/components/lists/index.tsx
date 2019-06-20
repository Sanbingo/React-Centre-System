import * as React from 'react';
import ListItem from './listItem';

const data = [
    {
        id: 1,
        coverImg: 'http://p0.meituan.net/scarlett/e68918425b62f8cb6f64add8ddcb50df151019.jpg',
        title: '我是一个测试的标题',
        summary: '我是第一段摘要内容有点长长长长长长长长长长长长长长长长长长长长长长长',
        time: '2019-06-20 18:14:53',
        viewCount: 34,
        commentCount: 5,
    },
    {
        id: 2,
        coverImg: 'http://p0.meituan.net/scarlett/e68918425b62f8cb6f64add8ddcb50df151019.jpg',
        title: '我是一个测试的标题',
        summary: '我是第一段摘要内容有点长长长长长长',
        time: '2019-06-20 18:14:53',
        viewCount: 34,
        commentCount: 5,
    },
    {
        id: 3,
        coverImg: 'http://p0.meituan.net/scarlett/e68918425b62f8cb6f64add8ddcb50df151019.jpg',
        title: '我是一个测试的标题',
        summary:
            '我是第一段摘要内容有点长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
        time: '2019-06-20 18:14:53',
        viewCount: 34,
        commentCount: 5,
    },
    {
        id: 4,
        coverImg: 'http://p0.meituan.net/scarlett/e68918425b62f8cb6f64add8ddcb50df151019.jpg',
        title: '我是一个测试的标题',
        summary:
            '我是第一段摘要内容有点长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
        time: '2019-06-20 18:14:53',
        viewCount: 34,
        commentCount: 5,
    },
    {
        id: 5,
        coverImg: 'http://p0.meituan.net/scarlett/e68918425b62f8cb6f64add8ddcb50df151019.jpg',
        title: '我是一个测试的标题',
        summary:
            '我是第一段摘要内容有点长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
        time: '2019-06-20 18:14:53',
        viewCount: 34,
        commentCount: 5,
    },
    {
        id: 6,
        coverImg: 'http://p0.meituan.net/scarlett/e68918425b62f8cb6f64add8ddcb50df151019.jpg',
        title: '我是一个测试的标题',
        summary:
            '我是第一段摘要内容有点长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
        time: '2019-06-20 18:14:53',
        viewCount: 34,
        commentCount: 5,
    },
];

const Lists = () => (
    <React.Fragment>
        {data.map(item => (
            <ListItem key={item.id} {...item} />
        ))}
    </React.Fragment>
);

export default Lists;
