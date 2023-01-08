


const MetricFilters = (state = [], action) =>  {
    switch(action.type) {
        case 'set_metrics':
            return action.payload
        default:
            return state
    }
}

export default MetricFilters