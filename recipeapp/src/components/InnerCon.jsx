import style from "./innercon.module.css"
export default function InnerCon({children}){
    return(
        <div className={style.innerco}>
        {children}
        </div>
    )
}