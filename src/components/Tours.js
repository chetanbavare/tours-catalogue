
import Card from "./Card"

function Tours({tours, removeTour})
{
    return(
        <div className="container">
            <div>
                <h2 className="heading">Plan with Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => { 
                        return <Card key = {tour.id} {...tour} removeTour = {removeTour}></Card>
                    })
                }
                {/* tour is the temporary object so each tour == each card  when using map function always pass id or index as key   */}
            </div>
        </div>
    )
}

export default Tours