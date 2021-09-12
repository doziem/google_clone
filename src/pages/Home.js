import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import '../App.css'
import Search from './Search';

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerleft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/image'>Image</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className='home__body'>
                <img className='home__image' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='logo' />
                <div className='body__container'>
                    <Search hideButton />
                </div>
            </div>

        </div>
    )
}

export default Home
