import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Heroes = () => {
    const [isLoading, setLoading] = useState(true);
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/heroes').then((response) => {
            setApiData(response?.data)
            setLoading(false)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    // console.log('data -->', apiData)

    if (isLoading) {
        return (
            <div><h3>Loading...</h3></div>
        )
    }
    return (
        <div>Heroes</div>
    )
}

export default Heroes