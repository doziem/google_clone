import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SearchPage.css'
import { useStateValue } from '../context/StateProvider'
// import useGoogleSearch from '../context/useGoogleSearch'
import Response from '../response'
import { Link } from 'react-router-dom'
import Search from './Search'

function SearchPage() {
    const [{ term }] = useStateValue()
    // const { data } = useGoogleSearch(term)
    const data = Response
    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='logo' />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButton />

                    <div className='searchPage__options'>
                        <div className='searchPage__optionLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='/image'>Image</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionRight'>
                            <div className='searchPage__option'>
                                <Link to='/setting'>Setting</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {true && (
                <div className='searchPage__results'>
                    <p>
                        <div className='searchPage__resultCount'>
                            About {data?.searchInformation.formattedTotalResults} result
                           ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </div>
                    </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link}>{item.displayLink} </a>
                            <a
                                className='searchPage__resultTitle'
                                href={item.link}><h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
