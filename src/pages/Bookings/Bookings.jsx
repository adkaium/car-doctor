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
    },[]);
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
              <BookingRaw key={booking._id} booking={booking}></BookingRaw>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Bookings;