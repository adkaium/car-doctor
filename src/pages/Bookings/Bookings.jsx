import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import BookingRaw from "./BookingRaw";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
     

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[url]);


    const handelDelete = (id) => {
      console.log(id);
      const procced = confirm("Are Your want to Delete");
      if (procced) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              alert("Your Service Deleted Successfully");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    };

    const handelUpdate = (id)=>{
      console.log(id);
      const procced = confirm("Are Your want to Delete");
      if (procced) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({stutas:'Confirmed'})
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = bookings.filter(booking => booking._id !== id);
              console.log(remaining);
              const updated = bookings.find(booking => booking._id === id);
              console.log(updated);
              updated.stutas = 'Confirmed'
              const newUpdated = [updated, ...remaining];
              setBookings(newUpdated)
            }
          })
    }
  }
   
  // const {name,date,img,price}=bookings;
    return (
      <div className="overflow-x-auto">
        <h1>{bookings.length}</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-400">
              <th>
                
              </th>
              <th>Image</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Stutas</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRaw key={booking._id} booking={booking} handelDelete={handelDelete} handelUpdate={handelUpdate}></BookingRaw>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Bookings;