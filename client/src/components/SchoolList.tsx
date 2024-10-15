import { useOutletContext } from "react-router-dom"
import SchoolCard from "./SchoolCard"

function SchoolList() {
    const {schools} = useOutletContext()

    // console.log(students)
    
    // This displays Student components via a map of the student list
    const schoolComponents = schools.map(school => {
        return <SchoolCard key={school.id} school={school}/>
    })
    
    return (
        <div>
            <h3 className="list-header">Schools List!</h3>
             <ol className="list">{schoolComponents}</ol>
        </div>
       
    )
}

export default SchoolList;