
import '../../css/Dashboard.css'
import { useSelector } from "react-redux";
import LineChartDasboard from "./LinechartDashboard";
import BarChartDasboard from "./BarchartDashboard";
import FilterActions from './filterActions';
import { graphSetup } from '../Utilities';

export default function Dashboard() {

    const students = useSelector(state => state.Students)
    const setUp = graphSetup(students)

    const chartStyle = useSelector(state => state.ChartStyle)
    return (
        <>
            <div className="heading">
                <h1>Student Statistics</h1>
                <FilterActions />
            </div>
            {!chartStyle ? <LineChartDasboard data={setUp} /> : <BarChartDasboard data={setUp} />}
        </>
    )
}
