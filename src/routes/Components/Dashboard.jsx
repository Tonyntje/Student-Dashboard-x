
import '../../css/Dashboard.css'
import { useSelector } from "react-redux";
import LineChartDasboard from "./LinechartDashboard";
import BarChartDasboard from "./BarchartDashboard";
import FilterActions from './filterActions';

function Dashboard() {
    const chartStyle = useSelector(state => state.ChartStyle)
    return (
        <>
            <div className="heading">
                <h1>Student Statistics</h1>
                <FilterActions />
            </div>
            {!chartStyle ? <LineChartDasboard /> : <BarChartDasboard />}
        </>
    )
}

export default Dashboard