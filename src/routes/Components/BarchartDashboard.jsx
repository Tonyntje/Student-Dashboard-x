
import { graphSetup } from "../Utilities"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { resizeChart } from "../../actions";

function BarChartDasboard() {
    const chartWidht = useSelector(state => state.ChartResponse)
    const studentProfiles = graphSetup()
    const dispatch = useDispatch()

    const tooltipStyle = {
        background: 'white',
        borderRadius: '10px',
        color: '#000',
        boxShadow: '0 5px 25px rgba(0,0,0,0.1)',
        border: 'solid 2px #eee',
        lineHeight: '22px',
        fontWeight: '700'
    }

    window.addEventListener('resize', (e) => {
        dispatch(resizeChart(e.target.innerWidth))
    })

    const metrics = useSelector(state => state.MetricFilters)
    const difficulty = metrics.includes('difficulty')
    const fun = metrics.includes('fun')

    const createGraphs = studentProfiles.map((graphData, index) => {
        return (
            <div className="bar-container" key={index}>
                <h2>{graphData.graphname}</h2>
                <BarChart width={chartWidht} height={400} data={graphData.graph}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />
                    {(difficulty || metrics.length == 0) && <Bar dataKey="Difficulty" fill="#e95e5e" />}
                    {(fun || metrics.length == 0) && <Bar dataKey="Fun" fill="#82ca9d" />}
                </BarChart>
            </div>
        )
    })

    return (
        <>{createGraphs}</>
    )
}

export default BarChartDasboard