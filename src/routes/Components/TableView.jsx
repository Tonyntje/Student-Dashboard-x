

import { useSelector } from 'react-redux'
import { globalData } from './../Utilities'
import '../../css/Students.css'
import '../../css/StudentOverviews.css'
import FilterActions from './filterActions'

function TableView() {

    const data = globalData()
    const metrics = useSelector(state => state.MetricFilters)
    const difficulty = metrics.includes('difficulty')
    const fun = metrics.includes('fun')

    const tableView = data.map((ele, index) => {
        return (
            <tr key={index}>
                <td>{ele[0]}</td>
                <td>{ele[1]}</td>
                {(difficulty || metrics.length == 0) && <td>{ele[2]}</td>}
                {(fun || metrics.length == 0) && <td>{ele[3]}</td>}
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
                        <th><a onClick={() => { }}>Student <img src="src/assets/arrow-down-a-z-solid.svg" /></a></th>
                        <th><a onClick={() => { }}>Opdracht <img src="src/assets/arrow-down-a-z-solid.svg" /></a></th>
                        {(difficulty || metrics.length == 0) && <th><a onClick={() => { }}>Difficulty <img src="src/assets/arrow-down-short-wide-solid.svg" /></a></th>}
                        {(fun || metrics.length == 0) && <th><a onClick={() => { }}>Fun <img src="src/assets/arrow-down-short-wide-solid.svg" /></a></th>}
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





