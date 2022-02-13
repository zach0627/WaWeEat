import React, { useState, useEffect,createContext } from 'react'
import './InfoCards.css'
import InfoCardItem from './InfoCardItem'
export const BlogContext = createContext();

function InfoCards() {
    const [foodData, setFoodData] = useState([{
        name: "",
        text: "",
        path: "",
        img: "",
        location: "",
        star: "",
        category: ""
    }
    ])

    const [blogData, setBlogData] = useState([]);

    const fetchData = async () => {
        return await fetch("foodData.json").then((res) => res.json()).then((data) => setFoodData(data.foods));
    }

    const fetchBlogData = async () => {
        return await fetch("foodBlogData.json").then((res) => res.json()).
            then((data) => setBlogData(data.foods));
    }

    const fetchAll = () => {
        fetchData();
        fetchBlogData();
    }

    useEffect(() => { fetchAll() }, []);

    return (
        <div className="infoCards">
            <div className="infoCards__container">
                <div className="infoCards__title">
                    <h1>
                        中式
                    </h1>
                </div>
                <div className="infoCards__wrapper">
                    {foodData.filter((data) => data.category === "中式").map((food, index) => {
                        return (
                            <BlogContext.Provider value={blogData} key={food.id}>
                            <InfoCardItem
                                src={require(`../images/${food.img}`).default}
                                text={food.text}
                                name={food.name}
                                location={food.location}
                                star={food.star}
                                id={food.id}
                                key={food.id}
                            />
                            </BlogContext.Provider>
                        )
                    })}
                </div>

                <div className="infoCards__title">
                    <h1>
                        日式
                    </h1>
                </div>
                <div className="infoCards__wrapper">
                    {foodData.filter((data) => data.category === "日式").map((food, index) => {
                        return (
                            <BlogContext.Provider value={blogData} key={food.id}>
                            <InfoCardItem
                                src={require(`../images/${food.img}`).default}
                                text={food.text}
                                name={food.name}
                                location={food.location}
                                star={food.star}
                                id={food.id}
                                key={food.id}
                            />
                            </BlogContext.Provider>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default InfoCards