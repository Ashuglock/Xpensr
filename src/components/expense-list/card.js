import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteexpense } from "../../redux/actions/expenses";
import "./card.css";

const Card = ({ item , notifysuccess }) => {

  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () =>{
       dispatch(deleteexpense(item))
        notifysuccess();
  }
  
  return (
    <>
      <div className="card" style={{ borderRight: `6px solid ${item.category.color}` }} key={item.category.id}>
        <div className="card-image-container">
          <img className="card-image" src={item.category.icon} alt={item.category.title} />
        </div>
        <div className="card-info">
          <label className="card-title">{item.title}</label>
          <label className="card-time">{time}</label>
        </div>
        <div className="card-right">
          <div>
            <label className="card-amount">₹ {item.amount}</label>
          </div>
          <div className="delete-icon" onClick={handleDelete} >
            <i className="fi-rr-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
