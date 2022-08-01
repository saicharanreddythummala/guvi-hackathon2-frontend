import React from "react";
import Context from "../context/Context";
import { useState } from "react";

export default function Item() {

  const [start, setStart] = useState()
  const [end, setEnd] = useState()

  
  const dateDiffInDays = (a, b) => {
    const _MS_PER_DAY = 1000 * 60 * 60;
    
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours());
  
    return Math.ceil((utc2 - utc1) / _MS_PER_DAY);
  }
   const difference = dateDiffInDays(new Date(start),new Date(end));
  

  return (
    <Context.Consumer>
      {(consumer) =>
        consumer.cart.map((item) => (
          <>
            <div className="row col border p-3" key={item._id}>
              <div className="row col">
                <img src={item.img} alt="" className="card-img-top" />

                <div className="d-flex justify-content-around mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => consumer.onRemove(item)}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => consumer.onAdd(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row col">
                <h2>{item.detail}</h2>
                <p>Category: <strong>{item.category}</strong> </p>
                <p>Price: <strong>${item.price}</strong></p>
              </div>
              <div className="row col">
                <div>
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="text"
                    id="startDate"
                    name="startDate"
                    className="mb-3"
                    placeholder="YYYY/MM/DD HH:MM"
                    onChange={(e)=>setStart(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="text"
                    id="endDate"
                    name="endDate"
                    className="mb-3"
                    placeholder="YYYY/MM/DD HH:MM"
                    onChange={(e)=>setEnd(e.target.value)}
                  />
                </div>
                <div>
                  <p>No. of hours: {isNaN(difference)? null:<span className="border"><strong> {difference}</strong></span>}</p>
                </div>
              </div>
            </div>
          </>
        ))
      }
    </Context.Consumer>
  );
}
