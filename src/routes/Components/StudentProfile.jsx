
import '../../css/Students.css'
import { Link, useLoaderData } from "react-router-dom";
import '../../css/StudentProfile.css'
import { useSelector } from 'react-redux';
import BarChartDasboard from './BarchartDashboard'
import { graphSetup } from '../Utilities';


export function loader({ params }) {
    return params.contactId
}

export default function StudentProfile() {
    const students = useSelector(state => state.Students)
    const student = useSelector(state => state.StudentData)

    const contact = useLoaderData();

    const { naam, details } = student.find(e => e.naam == contact)
    const data = graphSetup(students.filter(e => e[0] == contact))

    return (
        <>
            <img width="100px" height="100px" src={details?.profilepicture} />
            <div className="heading student">
                <h1>{naam} {details?.lastname}</h1>
                <div className="actions">
                    <Link to={"/students"}>Terug naar het overzicht</Link>
                </div>
            </div>
            <div className='user-information'>
                <p><strong>Email:</strong> {details?.email}</p>
                <p><strong>Age:</strong> {details?.age}</p>
                <p><strong>Phone:</strong>{details?.phone}</p>
            </div>

            <div className='student-grades'>
                {(data) && <BarChartDasboard data={data} />}
            </div>
        </>
    )
}
