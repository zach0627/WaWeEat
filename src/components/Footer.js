import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>關於我們</h2>
                        <Link to='/'>服務</Link>
                        <br/>
                        <Link to='/'>作者</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>粉絲團連結</h2>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook"
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link className="social-icon-link instagram"
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link
                            className='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'>
                                <i className='fab fa-youtube' />
                            </Link>
                            <Link
                            className='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'>
                                <i className='fab fa-twitter' />
                            </Link>
                            <Link
                            className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'>
                                <i className='fab fa-linkedin' />
                            </Link>
                        </div>
                        <small className="website-rights">WaWeEat©2022</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
