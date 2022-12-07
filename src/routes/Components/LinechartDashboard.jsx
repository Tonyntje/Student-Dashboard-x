
import { graphSetup } from "../Utilities"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { useSelector } from "react-redux";
import { resizeChart } from "../../actions";

function LineChartDasboard() {
    const chartWidht = useSelector(state => state.ChartResponse)
    const studentProfiles = graphSetup()
    window.addEventListener('resize', (e) => {
        dispatch(resizeChart(e.target.innerWidth))
    })

    const createGraphs = studentProfiles.map((graphData, index) => {
        return (
            <div className="bar-container" key={index}>
                <h2>{graphData.graphname}</h2>
                <LineChart width={chartWidht} height={400} data={graphData.graph}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey='Difficulty' fill='#e95e5e' />
                    <Line type="monotone" dataKey='Fun' stoke='#82ca9d' />
                </LineChart>
            </div>
        )
    })

    return (
        <>{createGraphs}</>
    )
}

export default LineChartDasboard