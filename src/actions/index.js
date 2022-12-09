

export const updateStudents = (studentData) => {
    return {
        type: 'get_data',
        payload: studentData
    }
}

export const makeProfiles = (studentData) => {
    return {
        type: 'make_profiles',
        payload: studentData
    }
}

export const resizeChart = (chartWidth) => {
    return {
        type: 'resize_charts',
        payload: chartWidth
    }
}

export const switchStyle = (style) => {
    return {
        type: 'switchChartStyle',
        payload: style
    }
}

export const setStudentFilters = (filters) => {
    return {
        type: 'set_filters',
        payload: filters
    }
}

export const setMetricFilters = (filters) => {
    return {
        type: 'set_metrics',
        payload: filters
    }
}


