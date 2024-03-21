import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const ServiceCard = ({service}) => {
  const {img, title, price} = service;
  return (
    <div>
      <div className="card w-[359px] h-[340px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-[310px] h-[205px]"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex relative">
            <p className="text-red-500 font-semibold absolute">
              Price : ${price}
            </p>
            <p className="text-red-500 font-semibold absolute left-72">
              <Link>
                <BsArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;
