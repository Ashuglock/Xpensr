import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchexpense } from '../../redux/actions/expenses'
import './topfold.css'


const TopFold = () => {

          const [query, setQuery] = useState("")
          const dispatch = useDispatch();

          const handleQuery = (e) => {
                    setQuery(e.target.value)
                    dispatch(searchexpense(e.target.value))
          }

          return (

                    <div className='topfold' >
                              {window.location.pathname === '/' ? (<div className="home-topfold">
                                        <div className="search-bar">
                                                  <i className="fi fi-rr-search"></i>
                                                  <input placeholder='Search for Expenses' value={query} onChange={(e) => handleQuery(e)} ></input>
                                        </div>

                                        <Link to="/add-expense" >
                                        <div className="add-btn">
                                                  <i className="fi fi-rr-add"></i>
                                                  <label>Add</label>
                                        </div></Link>
                              </div>) : (
                                        <div className="add-topfold">
                                                  <Link to="/" ><div className='add-topfold-btn'>
                                                  <i className="fi fi-rr-angle-left"></i>
                                                  <label >Back</label>
                                                  </div></Link>
                                                  <Link to="/" ><div className='add-topfold-btn'>
                                                  <i className="fi fi-rr-cross-circle"></i>
                                                  <label >Cancel</label>
                                                  </div></Link> 

                                        </div>
                              )}

                    </div>
          )
}

export default TopFold