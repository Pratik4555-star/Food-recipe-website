import { useEffect, useState } from "react"
import style from "./search.module.css"

const URL ="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY ="1e7ac03d32954516ad0f3b30fd5831fa"
export default function Search({fooddata, setfooddata}){
    const [query, setquery] = useState("pizza")
    useEffect(() =>{
        async function fetchfood(){
           const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
           const data = await res.json()
           console.log(data.results)
           setfooddata(data.results)
        }
        fetchfood()
    },[query])
    return(
        <div className={style.searchCon}>
            <input className={style.search} value={query} onChange={(e) => setquery(e.target.value)} type="text" />
        </div>
    )
}