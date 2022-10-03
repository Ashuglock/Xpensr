import React from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import Card from './card'
import './expense-list.css'




const ExpenseList = () => {

  const { expenseList: list , query} = useSelector(state => state.expenses)
  const filtertedList = list.filter(item=> item.title.includes(query))
  const notifysuccess = () => toast.success("Expense Deleted")

  return (
    <div className='expense-list'>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filtertedList.length ? filtertedList.map((item) => (
        <Card item={item} notifysuccess={notifysuccess} />)) :
        <div className='empty-state' >
          <img src={require('../../assets/images/empty.png')} alt='empty list' className='empty-image' />
          <label> Uh Oh! Your expense list is empty</label>
        </div>
      }
    </div>
  )
}

export default ExpenseList