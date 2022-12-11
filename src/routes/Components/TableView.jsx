

import { useSelector } from 'react-redux'
import '../../css/Students.css'
import '../../css/StudentOverviews.css'
import FilterActions from './filterActions'

function TableView() {

    const data = useSelector(state => state.Students)

    const tableView = data.map((ele, index) => {
        return (
            <tr key={index}>
                <td>{ele[0]}</td>
                <td>{ele[1]}</td>
                <td>{ele[2]}</td>
                <td>{ele[3]}</td>
            </tr>
        )
    })

    return (
        <>
            <div className="heading">
                <h1>Student Table overview</h1>
                <FilterActions />
            </div>
            <table width="100%" cellPadding='15px'>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Opdracht</th>
                        <th>Difficulty</th>
                        <th>Fun</th>
                    </tr>
                </thead>
                <tbody>
                    {tableView}
                </tbody>
            </table>
        </>
    )
}

export default TableView





