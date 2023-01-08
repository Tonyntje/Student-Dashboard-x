
const Students = (state = false, action) => {
    switch(action.type) {
        case 'get_data':
            return [...action.payload]
        default: 
            return state
    }
}

export default Students