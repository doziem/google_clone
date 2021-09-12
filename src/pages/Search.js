import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'

function Search({ hideButton = false }) {
    const [, dispatch] = useStateValue()
    const [input, setInput] = useState('');
    const history = useHistory();


    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: input
        })
        history.push('/searchPage')
    }
    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__icon' />
                <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='search Google or type URL' />
                <MicIcon />
            </div>

            {!hideButton ?
                (<div className='search__button'>
                    <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                    <Button variant='outlined'>I'm feeeling lucky</Button>

                </div>) :
                (<div className='search__button'>
                    <Button type='submit' className='search__hiddenButton' variant='outlined' onClick={search}>Google Search</Button>
                    <Button className='search__hiddenButton' variant='outlined'>I'm feeeling lucky</Button>
                </div>)}
        </form>
    )
}

export default Search
