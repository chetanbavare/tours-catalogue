import { useState } from "react"

function Card({id,name,info,image,price,removeTour})
{
    
    const [readmore, setReadmore] = useState(false)

    function readmoreHandler()
    {
        setReadmore(!readmore)
    }

    const description = readmore ? info : `${info.substring(0,200)}...`

    return(
        <div className="card">

            <img src={image} className="image" alt="imgs"></img> 

            <div className="tour_info">
                <div className="tour_details">
                    <h2 className="tour_price">${price}</h2>
                    <h2 className="tour_name">{name}</h2>
                </div>

                <div className="description">
                    {description}
                    <span className="readmore" onClick={readmoreHandler}>
                        {readmore ? " Show Less" : " Read More"}
                    </span>
                </div>

                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Card