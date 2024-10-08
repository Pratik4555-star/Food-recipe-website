import style from "./item.module.css"
export default function Item({item}){
    return(
        <div>
            <div className={style.itemcon}>
                <div className={style.imgcon}>
                <img className={style.img} src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
                </div>
                <div className={style.namecon}>
                <div className={style.name}>{item.name}</div>
                <div className={style.amo}> {item.amount}{item.unit}</div>
                </div>
                
            </div>
        </div>
    )
}