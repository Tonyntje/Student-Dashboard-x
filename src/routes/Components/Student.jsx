import { Link } from "react-router-dom"

export default function Student({ data }) {
    return (
        <div className="student-profile">
            <h3>{data.naam}</h3>

            <Link to={'/students/' + data.naam}>Bekijk student</Link>
        </div>
    )
}
