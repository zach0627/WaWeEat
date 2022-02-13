import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>&emsp;找美食？</h1>
            <p>從這開始</p>
            <div className="hero-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                按我搜尋
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
