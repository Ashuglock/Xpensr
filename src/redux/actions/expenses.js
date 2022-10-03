import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses"



export const addExpense= (data)=>{
          return{
                    type: ADD_EXPENSE,
                    data: data
          }
}

export const deleteexpense= (data)=>{
          return{
                    type: DELETE_EXPENSE,
                    data: data
          }
}

export const searchexpense = (query)=>{
          return{
                    type : SEARCH_EXPENSE,
                     query, 
          }
}