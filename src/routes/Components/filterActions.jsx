import { useDispatch, useSelector } from "react-redux";
import { switchStyle } from "../../actions";

export default function FilterActions() {
    const dispatch = useDispatch()
    const getStudents = useSelector(state => state.Students)
    const uniqStudents = Array.from(new Set(getStudents.map(student => student[0])))
    const studentFilter = uniqStudents.map((student, index) => {
        return <label key={index} htmlFor="students"><input type="checkbox" name="students" id="students" value={student} /> {student}</label>
    })

    return (
        <div className="actions">
            <div className="metricsFilters">
                <strong>Filter by Student</strong>
                {studentFilter}
            </div>
            <div className="metricsFilters">
                <strong>Filter by Metric</strong>
                <label htmlFor="difficulty"><input type="checkbox" name="metrics" id="difficulty" value="difficulty" /> Difficulty</label>
                <label htmlFor="fun"><input type="checkbox" name="metrics" id="fun" value="fun" />Fun</label>
            </div>
            <div className="chartStyles">
                <img onClick={() => { dispatch(switchStyle(true)) }} src='../src/assets/chart-column-solid.svg' />
                <img onClick={() => { dispatch(switchStyle(false)) }} src='../src/assets/chart-line-solid.svg' />
            </div>
        </div>
    )
}