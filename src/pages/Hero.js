import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useHeroData } from '../hooks/useHeroData'

const Hero = () => {
    const { heroId } = useParams()

    console.log('hero id ->', heroId)

    const { data, isLoading, isFetching, isError, error, refetch } = useHeroData({ heroId })

    if (isLoading || isFetching) {
        return (
            <div>Loading ...</div>
        )
    } else if (isError) {
        return (
            <div>{error?.message}</div>
        )
    }



    return (
        <div>{data?.data?.name} - {data?.data?.alterEgo}</div>
    )
}

export default Hero