import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/solid'
import {BlogContext} from './InfoCards'


function InfoCardItem(props) {
    const context = useContext(BlogContext);
    const blog = context.find((data)=>data.fd_id == props.id);

    return (
        <div className='infoCards__item'>
            <Link className="infoCards__item__link" to={{pathname:'/blog',state:{data:blog}}}>
                <div className="infoCards__item__pic-wrap">
                    <img src={props.src} alt="Food"
                        className="infoCards__item__img" />
                </div>
                <div className="infoCards__item__info">
                    <p className="infoCards__item__text infoCards__item__text__title">{props.name}</p>
                    <br />
                    <p className="infoCards__item__text infoCards__item__text__content">{props.text}</p>
                    <div className="infoCards__wrapper__foot">
                        <div className="infoCards__line" />
                        <div className='infoCards__item__text__footer'>
                            <p className='infoCards__item__text infoCards__item__text__love'>
                                <StarIcon className='icon__love' />
                                {props.star}
                            </p>
                            <p className="infoCards__item__text infoCards__item__text__address">地址：{props.location}</p>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default InfoCardItem