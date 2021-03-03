import React, { useState, useEffect }from "react";
import Title from '../components/Title.js';
import NewsItemList from '../components/NewsItemList.js';
import Form from '../components/Form.js'


const NewsContainer = () => {

    const [news, setNews] = useState([]);

    const [newsIds, setNewsIds] = useState([]);
    
    const getNewsIds = () => {
        console.log("You getting some HackerNews!")
        // fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
        .then(res => res.json())
        .then(data => setNewsIds(data))

    }

    useEffect(() => {
        console.log("UseEffect triggered by getNewsIds")
        getNewsIds();
    }, [])

    return (

        <>
            <Title/>
            <Form/>
            <NewsItemList/>
        </>
    )
}

export default NewsContainer;