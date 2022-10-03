import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { addExpense } from '../../redux/actions/expenses';
import { categories } from '../constants/add-expense'
import './addform.css'
import 'react-toastify/dist/ReactToastify.css';
import Successmodal from './success-modal';


const Addform = () => {

          const cat = categories;

          const [categoryOpen, setCategoryOpen] = useState(false)
          const [title, setTitle] = useState("")
          const [amount, setAmount] = useState("")
          const [category, setCategory] = useState()
          const [ModalOpen, setModalOpen] = useState(false)
          const dispatch = useDispatch();

          const handleTitle = (e) => {
                    setTitle(e.target.value)
          }

          const handleAmount = (e) => {
                    const val = parseFloat(e.target.value)
                    if (isNaN(val)) {
                              setAmount("")
                              return;
                    }
                    setAmount(val);
          }
          const handleCategory = (category) => {
                    setCategory(category)
                    setCategoryOpen(false)
          }
          const handleSubmit = () => {
                    if (title === '' || amount === '' || !category) {
                              const notify = () => toast("Enter valid data");
                              notify();
                              return;
                    }
                    const data = {
                              title,
                              amount,
                              category,
                              createdAt: new Date()
                    }
                    dispatch(addExpense(data))
                    setModalOpen(!ModalOpen)

          }


          return (
                    <div className='add-form' >
                              <ToastContainer
                                        position="bottom-left"
                                        autoClose={1000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                               />
                               
                              <div className='form-item'>
                                        <label className='label'>Title</label>
                                        <input placeholder='Give a name to your Expenditure' value={title} onChange={(e) => handleTitle(e)} />
                              </div>
                              <div className='form-item'>
                                        <label className='label'>Amount ₹</label>
                                        <input placeholder='Enter the Amount' className='amount-input' value={amount} onChange={(e) => handleAmount(e)} />
                              </div>
                              <div className="category-container-parent">
                                        <div className="category">
                                                  <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                                                            <label >{category ? category.title : "Category"}</label>
                                                            <i className='fi-rr-angle-down'></i>
                                                  </div>
                                                  {categoryOpen &&
                                                            <div className='category-container'>
                                                                      {cat.map((category) => (
                                                                                <div key={category.id} className='category-item' style={{ borderRight: `5px solid ${category.color}` }}
                                                                                          onClick={() => { handleCategory(category) }} >
                                                                                          <label>{category.title}</label>
                                                                                          <img src={category.icon} alt={category.title} />

                                                                                </div>
                                                                      ))}
                                                            </div>}
                                        </div>
                              </div>
                              <div className='form-add-btn'>
                                        <div onClick={handleSubmit}>
                                                  <label>Add</label>
                                                  <i className='fi-rr-paper-plane'></i>
                                        </div>
                              </div>

                              <Successmodal ModalOpen={ModalOpen}  setModalOpen={setModalOpen} />                        
                                              
                    </div>
          )
}

export default Addform