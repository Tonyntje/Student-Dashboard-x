
const TableView = (state = false, action) => {
    let newState = []

    switch(action.type) {
        case 'set_table_data':
            return action.payload
        case 'sort_by_student_name':
            newState = Array.from(state).sort((a, b) => {
                if(a[0].toUpperCase() > b[0].toUpperCase()) return -1
                if(a[0].toUpperCase() < b[0].toUpperCase()) return 1
                return 0
            })
            return [...newState]
        case 'sort_by_assignment_name':
            newState = state.sort((a, b) => {
                if(a[1].toUpperCase() > b[1].toUpperCase()) return 1
                if(a[1].toUpperCase() < b[1].toUpperCase()) return -1
                return 0
            })
            return [...newState]
        case 'sort_by_difficulty':
            newState = state.sort((a, b) => a[2] - b[2])
            return [...newState]
        case 'sort_by_fun':
            newState = state.sort((a, b) => a[3] - b[3])
            return [...newState]
        case 'asort_by_student_name':
            newState = Array.from(state).sort((a, b) => {
                if(a[0].toUpperCase() < b[0].toUpperCase()) return -1
                if(a[0].toUpperCase() > b[0].toUpperCase()) return 1
                return 0
            })
            return [...newState]
        case 'asort_by_assignment_name':
            newState = state.sort((a, b) => {
                if(a[1].toUpperCase() < b[1].toUpperCase()) return 1
                if(a[1].toUpperCase() > b[1].toUpperCase()) return -1
                return 0
            })
            return [...newState]
        case 'asort_by_difficulty':
            newState = state.sort((a, b) => b[2] - a[2])
            return [...newState]
        case 'asort_by_fun':
            newState = state.sort((a, b) => b[3] - a[3])
            return [...newState]
        default: 
            return state
    }
}

export default TableView