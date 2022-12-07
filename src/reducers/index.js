import { combineReducers } from "redux"
import ChartResponse from "./ChartResponse"
import ChartStyle from "./ChartStyle"
import StudentData from "./StudentData"
import StudentsReducers from './Students'

export default combineReducers({
    Students: StudentsReducers,
    StudentData: StudentData,
    ChartResponse: ChartResponse,
    ChartStyle: ChartStyle
})