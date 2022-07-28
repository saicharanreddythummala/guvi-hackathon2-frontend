import React from "react";

export default function Item({cart, onAdd}) {
  return (
    cart.map(item=>(
        <>
      <div className="row col-8 border p-3" key={item._id}>
        <div className="row col">
            <img
              src={item.img}
              alt="" className="card-img-top"
            />
            
            <div className="d-flex justify-content-around mt-3">
              <button className="btn btn-primary">-</button>
              <input type="text" placeholder="1" defaultValue={item.qty} style={{width:'30%'}}/>
              <button className="btn btn-primary" onClick={()=>onAdd(item)}>+</button>
            </div>
          </div>
        <div className="row col">
            <h3>{item.detail}</h3>
            <p>{item.category}</p>
            <p>{item.price}</p>
        </div>
        <div className="row col">
            <div>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" className="mb-3" />
            </div>
           <div>
           <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" name="endDate" className="mb-3" />
           </div>
           <div>
           <label htmlFor="hours">No. of hours</label>
           <input type="number" name="hours" id="hours" />
           </div>
        </div>
      </div>
    </>
    ))
  );
}
