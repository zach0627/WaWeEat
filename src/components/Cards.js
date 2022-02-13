import React, { useState, useEffect,createContext } from 'react'
import CardItem from './CardItem'
import './Cards.css'
export const BlogContext = createContext();

function Cards() {
    const [foodData, setFoodData] = useState([{
        name: "",
        text: "",
        id: "",
        img: "",
        location: "",
        star: "",
        category: ""
    }
    ]);

    const [blogData, setBlogData] = useState([]);

    const fetchData = async () => {
        return await fetch("foodData.json").then((res) => res.json()).then((data) => setFoodData(data.foods));
    }

    const fetchBlogData = async () => {
        return await fetch("foodBlogData.json").then((res) => res.json()).
        then((data) => setBlogData(data.foods));
    }

    const fetchAll = ()=>{
        fetchData();
        fetchBlogData();
    }

    useEffect(() => { fetchAll()}, []);

    return (
        <div className="cards">
            <h1>中式</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {foodData.filter((data) => data.category === "中式").map((food) => {
                            return (
                                <BlogContext.Provider value={blogData} key={food.id}>
                                <CardItem
                                    src={require(`../images/${food.img}`).default}
                                    text={food.text}
                                    label={food.name}
                                    id={food.id}
                                    key={food.id}
                                />
                                </BlogContext.Provider>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <h1>日式</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    {foodData.filter((data) => data.category === "日式").map((food) => {
                        return (
                            <BlogContext.Provider value={blogData} key={food.id}>
                            <CardItem
                                src={require(`../images/${food.img}`).default}
                                text={food.text}
                                label={food.name}
                                id={food.id}
                                key={food.id}
                            />
                            </BlogContext.Provider>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards

