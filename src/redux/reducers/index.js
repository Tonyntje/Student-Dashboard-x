import { combineReducers } from "redux"
import ChartResponse from "./ChartResponse"
import ChartStyle from "./ChartStyle"
import StudentData from "./StudentData"
import Students from './Students'
import StudentFilters from './StudentFilters'
import MetricFilters from './MetricFilters'
import TableView from "./TableData"

export default combineReducers({
    Students,
    StudentData,
    ChartResponse,
    ChartStyle,
    StudentFilters,
    MetricFilters,
    TableView
})