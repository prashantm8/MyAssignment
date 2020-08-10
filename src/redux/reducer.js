import { Employee } from "./action";

const defaultState = {
    title:'',
    dueDate:'',
    employeeList:[],
    description:'',
    attachment:''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Employee.createTask:{
            console.log(action.data)

            return {
                ...state,
                ...action.data           
            };
        }

        case Employee.assignEmployee:{

            console.log(action.data)
            return{
                ...state,
                employeeList:action.data
            }
        }

        case Employee.clearEmployee:{
            return{
                ...defaultState
            }
        }
            
        default:
			return state;
    }
};
