import { Link } from "react-router-dom"

function Student({ data }) {
    return (
        <div className="student-profile">
            <h3>{data.naam}</h3>

            <Link to={'/students/' + data.naam}>Bekijk student</Link>
        </div>
    )
}

export default Student