import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export function getHeroes() {
    return axios.get('http://localhost:4000/heroes')
}

export const useHeroesData = () => {
    return useQuery({
        queryKey: ['heroes'], queryFn: getHeroes,
        select: (data) => {
            const selectData = data.data.map((item) => { return { id: item.id, name: item.name } })
            return selectData
        }
    })
}