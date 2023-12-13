import { useState } from "react";
import Card from "./Card"

const Cards = ({courses, category}) =>
{
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);

    // console.log("from cards.js")
    // console.log(courses)
    const getCourses = () =>
    { 
        
        // .values is used to access only values out of key valye pair 
        // then 1st for each for array of business, department, etc 
        // then 2nd for each for array inside business, department, etc
        // every single course is added to the array irrespective of category 
       
        if(category === "All")
        {
            Object.values(courses).forEach((courseCategory) => 
                {
                    courseCategory.forEach( (course) => 
                        {
                            allCourses.push(course);
                        })
                })
            return allCourses
        }
        else
        {
            return courses[category]
        }
        
    }

    console.log(getCourses());

    return(
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {   
                
                getCourses().map( (course) => {
                    return <Card key = {course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} />
                    
                })
            }
            {/* unlike arrays we will use single object course as it has json inside every index instead of ...course  */}
        </div>
    )
}

export default Cards