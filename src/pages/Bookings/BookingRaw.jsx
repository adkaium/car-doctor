const BookingRaw = ({booking, handelDelete, handelUpdate}) => {
  console.log(booking);
  const {_id, img, name, date, price, email, stutas} = booking;
  console.log(stutas);
  return (
    <tr>
      <th>
        <button onClick={() => handelDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded  w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="text-sm opacity-50">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {stutas === "Confirmed" ? 
          <button className="btn btn-ghost btn-xs text-green-700">Confirmed</button>
         : 
          <button
            onClick={() => handelUpdate(_id)}
            className="btn btn-ghost btn-xs text-red-600"
          >Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookingRaw;
