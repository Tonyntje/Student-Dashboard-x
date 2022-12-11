import { combineReducers } from "redux"
import ChartResponse from "./ChartResponse"
import ChartStyle from "./ChartStyle"
import StudentData from "./StudentData"
import StudentsReducers from './Students'
import StudentFilters from './StudentFilters'
import MetricFilters from './MetricFilters'

export default combineReducers({
    Students: StudentsReducers,
    StudentData: StudentData,
    ChartResponse: ChartResponse,
    ChartStyle: ChartStyle,
    StudentFilters: StudentFilters,
    MetricFilters: MetricFilters
})