import FoodItem from "./Fooditem";

export default function Foodlist({fooddata, setupfooddata ,setfoodId}){
    return(
        <div>
            {fooddata.map((food) => (<FoodItem  setfoodId={setfoodId} key={food.id} food={food}/>))}
        </div>
    )
}