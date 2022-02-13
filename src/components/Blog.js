import React, { useState, useEffect } from "react";
import './Blog.css';
import { useLocation } from 'react-router-dom';

function Blog() {
    const location = useLocation();
    const {title,description,img,tag,date} = location.state.data;

    return (
        <>
            <div className="blog">
                <header className="blog__head">
                    <h1>{title}</h1>
                    <p className="blog__date">{`${date}@waWeEat`}</p>
                </header>
                <div className="blog__container">
                    <div className="blog__wrapper">
                        <img src={require(`../images/${img}`).default} alt="Food"
                            className="blog__img" />
                        <p className='blog__desc'>{description}</p>
                    </div>
                </div>
            </div>
        </>


    )

}

export default Blog