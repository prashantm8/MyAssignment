
export const Employee = {
    createTask:'employee/createTask',
    assignEmployee:'employee/assignEmployee',
    clearEmployee:'employee/clearEmployee'
};

export const createTask= (data) => ({
        type: Employee.createTask,
        data
    })

export const assignEmployee =(data) =>({
    type:Employee.assignEmployee,
    data
})

export const clearEmployee =() =>({
    type:Employee.clearEmployee,
})