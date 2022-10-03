import React from 'react'
import Modal from 'react-modal';
import './success-modal.css'
import { Link } from 'react-router-dom';

const Successmodal = ({ModalOpen , setModalOpen}) => {
          const customStyles = {
                    content: {
                              top: '50%',
                              left: '50%',
                              right: 'auto',
                              bottom: 'auto',
                              marginRight: '-50%',
                              marginTop : '20px',
                              marginBottom : '20px',
                              boxShadow: '0px 10px 30px #71cccd',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor : "#71ccca",
                              borderRadius : '12px'
                    },
          };
          return (
                    <>
                              
                              <Modal isOpen={ModalOpen} style={customStyles} ariaHideApp={false}>
                              <div className="modal-inner">
                                        <label>Expense Added Successfully</label>
                                        <img src={require('../../assets/images/added-image.png')} alt="Expense added" className='added-image' />
                                        <Link to='/'>
                                        <div className='takehome-btn'>
                                                  <i className='fi-rr-home'></i>
                                                  Home
                                        </div></Link>
                              </div>
                              </Modal>
                    </>
          )
}

export default Successmodal