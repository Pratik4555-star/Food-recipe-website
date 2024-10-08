import style from "./fooditem.module.css"
export default function FoodItem({food,setfoodId}){
    return(
        <div className={style.itemcon}>
            <img className={style.itemimg} src={food.image} alt="" />
            <div className={style.itemcontent}>
            <p className={style.itemname}>{food.title}</p>
            </div>
            <div className={style.buttoncontainer}>
            <button onClick={() =>{
                console.log(food.id)
                setfoodId(food.id)}
                } className={style.itembutton}>View Recipe</button>
            </div>
            
        </div>
    )
}