


const MetricFilters = (state = [], action) =>  {
    switch(action.type) {
        case 'set_filters':
            return action.payload
        default:
            return state
    }
}

export default MetricFilters