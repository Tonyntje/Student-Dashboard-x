
const TableView = (state = false, action) => {
    switch(action.type) {
        case 'set_table_data':
            return action.payload
        default: 
            return state
    }
}

export default TableView