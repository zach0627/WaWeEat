import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {BlogContext} from './Cards'

function CardItem(props) {
    const context = useContext(BlogContext);
    const blog = context.find((data)=>data.fd_id == props.id);
    
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={{pathname:'/blog',state:{data:blog}}} >
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image"
                            className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
