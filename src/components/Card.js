<<<<<<< HEAD
import { GiPistolGun, GiSentryGun } from "react-icons/gi"
import { toast } from "react-toastify"

const Card = ({course, likedCourses, setLikedCourses}) => {

    const changeLikeHandler = () => {
        if(likedCourses.includes(course.id))
        {
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id)))
            toast.warning("Liked Removed")
        }
        else
        {
            if(likedCourses.length === 0)
            {
                setLikedCourses(course.id)
            }
            else
            {
                setLikedCourses( (prev) => [...prev, course.id])
            }
            toast.success("Liked added")
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} className="image" alt="img"/>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={changeLikeHandler}>
                       {
                        likedCourses.includes(course.id) ? <GiSentryGun fontSize = "1.75rem" /> : <GiPistolGun fontSize = "1.75rem"/>
                       }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {course.description.length > 100 ? course.description.substring(0,200) + "...": course.description}
                </p>
=======
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
>>>>>>> a0c9d8708fe36fa5780e6bd0fbec2adda250ba14
            </div>
        </div>
    )
}

export default Card