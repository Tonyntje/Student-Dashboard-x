import { useDispatch, useSelector } from "react-redux";
import { switchStyle, setStudentFilters } from "../../actions";

export default function FilterActions() {
    const dispatch = useDispatch()
    const getStudents = useSelector(state => state.Students)
    const chartStyle = useSelector(state => state.ChartStyle)
    const uniqStudents = Array.from(new Set(getStudents.map(student => student[0])))

    const getActiveStudentFilters = () => {
        const checks = document.querySelectorAll('input[name="students"]')
        dispatch(setStudentFilters(Array.from(checks).filter(filter => filter.checked === true).map(e => e.value)))
    }

    const studentFilter = uniqStudents.map((student, index) => {
        return <label key={index} htmlFor={student}><input onClick={getActiveStudentFilters} type="checkbox" name="students" id={student} value={student} /> {student}</label>
    })

    return (
        <>
            <div className="actions">
                <div className="heading labelStudents">
                    <strong>Filter by Student</strong>
                </div>
                <div className="heading labelMetrics">
                    <strong>Filter by Metric</strong>
                </div>
                <div className="heading chartStyles">
                    <strong>Chartstyle</strong>
                </div>
                <div className="metricsFilters">
                    {studentFilter}
                </div>
                <div className="metricsFilters">
                    <label htmlFor="difficulty"><input type="checkbox" name="metrics" id="difficulty" value="difficulty" /> Difficulty</label>
                    <label htmlFor="fun"><input type="checkbox" name="metrics" id="fun" value="fun" />Fun</label>
                </div>
                <div className="chartStyles">
                    <img className={(chartStyle) ? 'active' : ''} onClick={() => { dispatch(switchStyle(true)) }} src='../src/assets/chart-column-solid.svg' />
                    <img className={(!chartStyle) ? 'active' : ''} onClick={() => { dispatch(switchStyle(false)) }} src='../src/assets/chart-line-solid.svg' />
                </div>
            </div>
        </>
    )
}