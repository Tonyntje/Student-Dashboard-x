

import { useDispatch, useSelector } from 'react-redux'
import {
    sortByAssignmentName,
    sortByDifficulty,
    sortByFun,
    sortByStudentName,
    aSortByAssignmentName,
    aSortByDifficulty,
    aSortByFun,
    aSortByStudentName
} from '../../redux/actions'
import '../../css/Students.css'
import '../../css/StudentOverviews.css'
import FilterActions from './filterActions'
import { globalData } from '../Utilities'

export default function TableView() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.TableView)
    const metrics = useSelector(state => state.MetricFilters)
    const difficulty = metrics.includes('difficulty')
    const fun = metrics.includes('fun')

    const tableView = Array.from(globalData(data)).map(ele => {
        const newKey = `${ele[0]}-${ele[1]}`
        return (
            <tr key={newKey}>
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
                        <th>
                            <a>Student
                                <img onClick={() => dispatch(sortByStudentName())} src="src/assets/arrow-up-solid.svg" />
                                <img onClick={() => dispatch(aSortByStudentName())} src="src/assets/arrow-down-solid.svg" />
                            </a>
                        </th>

                        <th>
                            <a> Opdracht
                                <img onClick={() => dispatch(sortByAssignmentName())} src="src/assets/arrow-up-solid.svg" />
                                <img onClick={() => dispatch(aSortByAssignmentName())} src="src/assets/arrow-down-solid.svg" />
                            </a>
                        </th>

                        {(difficulty || metrics.length == 0)
                            &&
                            <th>
                                <a> Difficulty
                                    <img onClick={() => dispatch(sortByDifficulty())} src="src/assets/arrow-up-solid.svg" />
                                    <img onClick={() => dispatch(aSortByDifficulty())} src="src/assets/arrow-down-solid.svg" /></a>
                            </th>}

                        {(fun || metrics.length == 0)
                            &&
                            <th>
                                <a> Fun
                                    <img onClick={() => dispatch(sortByFun())} src="src/assets/arrow-up-solid.svg" />
                                    <img onClick={() => dispatch(aSortByFun())} src="src/assets/arrow-down-solid.svg" />
                                </a>
                            </th>}
                    </tr>
                </thead>
                <tbody>
                    {tableView}
                </tbody>
            </table>
        </>
    )
}