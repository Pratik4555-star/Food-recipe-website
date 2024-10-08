import Item from "./Item";

export default function ItemList({foodd, isLoading}){
    return(
        <div>
        {isLoading ? <p>loading...</p>:(foodd.extendedIngredients.map((item)=>(
            <Item item={item} key={item.id}/>
        )))}
     </div>
    )
}