import {useEffect} from "react";
import {useState} from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="mt-3">
      <div className="text-center mb-3">
        <h3 className="font-bold text-orange-600">Services</h3>
        <h5 className="font-bold text-3xl text-black">Our Service Area</h5>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid  sm:grid-cols-3 justify-center justify-items-center gap-y-5  mt-4 mb-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-10 mb-5">
        <button className="btn btn-outline text-[#FF3811] text-2xl text-center">More Service</button>
      </div>
    </div>
  );
};

export default Services;
