import React from "react"
import Title from '../components/Title.js'
import NewsItemList from '../components/NewsItemList.js'
import Form from '../components/Form.js'


const NewsContainer = () => {
    return (

        <>
            <Title/>
            <Form/>
            <NewsItemList/>
        </>
    )
}

export default NewsContainer;