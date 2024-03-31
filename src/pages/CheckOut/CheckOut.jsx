import {useContext} from "react";
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../ContextProvider/ContextProvider";

const CheckOut = () => {
  const checkService = useLoaderData();
  const {title, price,img} = checkService;
  const {user} = useContext(AuthContext);
  const handelCheckOut = (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    console.log(form);
    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking = {
      name,
      price,
      date,
      email,
      img
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form onSubmit={handelCheckOut}>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            name="name"
            type="text"
            className="grow"
            placeholder="Daisy"
            defaultValue={title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            name="email"
            type="text"
            className="grow"
            defaultValue={user?.email}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="price"
            type="text"
            className="grow"
            placeholder="Price"
            defaultValue={price}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="date"
            type="date"
            className="grow"
            placeholder="Search"
          />
          <span className="badge badge-info">Optional</span>
        </label>
        <input className="btn btn-primary btn-block" type="submit" />
      </form>
    </div>
  );
};

export default CheckOut;
