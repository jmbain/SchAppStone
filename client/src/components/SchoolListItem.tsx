import {Link} from "react-router-dom"

function StudentCard({student}) {
    
    console.log(student)

    return (
        <li className="card">
            <Link to={`${student.id}`} replace> {student.first_name} {student.last_name} </Link>
        </li>
    )
}

export default StudentCard;