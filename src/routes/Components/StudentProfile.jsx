
import '../../css/Students.css'
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from 'react';
import '../../css/StudentProfile.css'
import { useSelector } from 'react-redux';


export function loader({ params }) {
    return params.contactId
}

function StudentProfile() {
    let students = useSelector(state => state.StudentData)
    let contact = useLoaderData();
    let { naam, opdrachten, details } = students.filter(e => e.naam == contact)[0]

    useEffect(() => {
        console.log(naam, opdrachten, details)
    }, [])

    return (
        <>
            <img width="100px" height="100px" src={details?.profilepicture} />
            <div className="heading">
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
        </>
    )
}

export default StudentProfile





