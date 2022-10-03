import React from 'react'
import Addform from '../../components/Addform'
import TopFold from '../../components/Topfold'
import './add-expense.css'


const AddExpense = () => {
  return (
    <div className='add-expense' > 
          <TopFold/>
          <Addform/>
    </div>
  )
}

export default AddExpense