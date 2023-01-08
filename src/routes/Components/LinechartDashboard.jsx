
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { resizeChart } from "../../redux/actions";

export default function LineChartDasboard({ data }) {
    const chartWidht = useSelector(state => state.ChartResponse)
    const dispatch = useDispatch()

    window.addEventListener('resize', (e) => {
        dispatch(resizeChart(e.target.innerWidth))
    })

    const metrics = useSelector(state => state.MetricFilters)
    const difficulty = metrics.includes('difficulty')
    const fun = metrics.includes('fun')

    const createGraphs = Array.from(data).map((graphData, index) => {
        return (
            <div className="bar-container" key={index}>
                <h2>{graphData.graphname}</h2>
                <LineChart width={chartWidht} height={400} data={graphData.graph}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Legend />
                    {(difficulty || metrics.length == 0) && <Line type="monotone" dataKey='Difficulty' fill='#e95e5e' />}
                    {(fun || metrics.length == 0) && <Line type="monotone" dataKey='Fun' stoke='#82ca9d' />}
                </LineChart>
            </div>
        )
    })

    return (
        <>{createGraphs}</>
    )
}
