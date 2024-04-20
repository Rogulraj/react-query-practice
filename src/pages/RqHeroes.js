import { useQuery, useQueryClient, } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useHeroesData } from '../hooks/useHeroesData'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const RqHeroes = () => {

    const [polling, setPolling] = useState(3000)

    const { data, isError, error, isLoading, refetch } = useHeroesData()

    // queryClient.invalidateQueries({ queryKey: ['heroes'], exact: true })


    if (isLoading) {
        return (
            <div><h2>Loading...</h2></div>
        )
    }

    else if (isError) {
        return (
            <div>
                <h2>{error.message}</h2>
            </div>
        )
    }

    // console.log("data ++>", data)

    // if (data.data.length >= 3 && polling !== false) {
    //     setPolling(false)
    // } else if (data.data.length < 3 && polling === false) {
    //     setPolling(3000)
    // }

    // console.log('polling ->', polling)
    return (

        <div>
            <h1 onClick={refetch}>RqHeroes</h1>
            {
                data?.map((item, index) =>
                    <Link key={index} to={`/hero/${item.id}`}>
                        <p key={index}>{item.name}</p>
                    </Link>
                )
            }
        </div>
    )
}

export default RqHeroes