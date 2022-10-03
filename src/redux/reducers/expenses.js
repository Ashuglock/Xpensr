import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";

const initialList =()=>{
          const list = localStorage.getItem("expense-list")
          let expenses = [];
          if(list){
                    expenses = JSON.parse(list)
          }
          return expenses ;
}
const initialState = {
          expenseList : initialList(),
          query : ""
}



export const expenseReducer = (state=initialState, action) => {
          switch(action.type){
                    case ADD_EXPENSE: {
                              localStorage.setItem("expense-list" , JSON.stringify([...state.expenseList, action.data ]))
                    //          console.log(...state)
                              return {
                                        ...state,
                                         expenseList : [...state.expenseList, action.data ]
                              }
                    }
                    case DELETE_EXPENSE:{
                              // console.log(action)
                              const {data} = action;
                              // console.log(data)
                              const updatedList  = state.expenseList.filter(
                                        (item )=> item.createdAt !==data.createdAt
                              )
                              localStorage.setItem("expense-list" , JSON.stringify(updatedList))
                              return{
                                        ...state,
                                        expenseList: updatedList

                              }
                    }
                    case SEARCH_EXPENSE : {
                              const {query} = action;
                              // console.log(query)
                              return{
                                        ...state,
                                        query,
                              }
                    }
                    default: 
                    return state;
          }
}