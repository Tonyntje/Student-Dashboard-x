

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../css/Students.css'
import Student from './Student'

function Students() {
    let students = useSelector(state => state.StudentData)
    let returnStudents = students.map((student, index) => {
        return <Student key={index} data={student} />
    })

    return (
        <>
            <div className="heading">
                <h1>All Students</h1>
                <div className="actions">
                    filters
                </div>
            </div>
            <div className='student-overview'>
                {returnStudents}
            </div>
        </>
    )
}

export default Students





