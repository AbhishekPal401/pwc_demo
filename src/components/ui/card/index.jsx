import style from "./card.module.css"

function Card({children, customClassName}) {


    return ( 
        <>
            <div className={`${customClassName || styles.card}`}>
                {children}
            </div>
        </>
     );
}

export default Card;