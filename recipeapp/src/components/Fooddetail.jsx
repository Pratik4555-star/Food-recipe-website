import { useEffect, useState } from "react"
import style from "./fooddetails.module.css"
import Itemlist from "./Itemlist"

export default function Fooddetails({foodId}){
    const [foodd, setfoodd] = useState({})
    const[isLoading, setisLoading] = useState(true)
    const  url =`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY ="1e7ac03d32954516ad0f3b30fd5831fa"
    useEffect(()=>{
        async function fetchfood() {
            const res = await fetch(`${url}?apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data)
            setfoodd(data)
            setisLoading(false);
        }
        fetchfood()
    },[foodId])

    return(
        <div >
         <div className={style.recipeCard}>
         <h1 className={style.rname}>{foodd.title}</h1>
         <img className={style.rimage} src={foodd.image} alt="" />
         <div className={style.rdetail}>
            <span>
                <strong>{foodd.readyInMinutes}Minutes</strong>
            </span>
            <span>
                <strong>Serves{foodd.servings}</strong>
            </span>
            <span>{foodd.vegetarian ? "Veg":"Non-veg"}</span>
            <span>{foodId.vegan ? "Vegan" : " "}</span>
         </div>  
         <div>
         <span>${foodd.pricePerServing} per serve</span>
         </div>
        <h2>Ingridents</h2>
        <Itemlist key={foodd.id}foodd={foodd} isLoading={isLoading}/>
       
        {/* {foodd.extendedIngredients.map((item)=>(<div>{item.name}</div>))} */}
         <h2>Instructions</h2>
         <div className={style.rinst}>
            <ol>
        
         {isLoading ? (<p>loading...</p>):
         (foodd.analyzedInstructions[0].steps.map((step) =>(<li>{step.step}</li>)))}
            </ol>
         </div>

         </div>
        </div>
    )
}