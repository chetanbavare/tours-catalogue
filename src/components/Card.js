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
            </div>
        </div>
    )
}

export default Card