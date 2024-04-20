import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const getHeroData = ({ queryKey }) => {
    const heroId = queryKey[1];
    console.log(heroId)
    return axios.get(`http://localhost:4000/heroes/${heroId}`)
}

export const useHeroData = ({ heroId }) => {
    return useQuery({ queryKey: ['heroes', heroId], queryFn: getHeroData })
}