import { useState, useEffect } from 'react'
import API_KEY from './key'
const CONTEXT_KEY = 'fc8e7af97420f9e9e'
// fc8e7af97420f9e9e

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData();
    }, [term])
    return { data }
}

export default useGoogleSearch



// cacheId: "rHYp-0etoiEJ"
// displayLink: "www.tesla.com"
// formattedUrl: "https://www.tesla.com/"
// htmlFormattedUrl: "https://www.<b>tesla</b>.com/"
// htmlSnippet: "<b>Tesla</b> is accelerating the world&#39;s transition to sustainable energy with electric cars<br>↵, solar and integrated renewable energy solutions for homes and businesses."
// htmlTitle: "<b>Tesla</b>: Electric Cars, Solar &amp; Clean Energy"
// kind: "customsearch#result"
// link: "https://www.tesla.com/"