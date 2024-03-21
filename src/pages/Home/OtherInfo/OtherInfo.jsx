import {CiClock2, CiLocationArrow1, CiPhone} from "react-icons/ci";

const OtherInfo = () => {
  return (
    <div className="w-[1230px] h-[284px] bg-stone-900 mx-auto mb-10 mt-10 rounded flex justify-between gap-2 p-5">
      <div className="flex items-center gap-4">
        <p className="text-white text-6xl font-bolder">
          <CiClock2 />
        </p>
        <div>
          <p className="text-white text-2xl font-bold">
            We are open monday-friday
          </p>
          <h2 className="text-white text-3xl font-bold">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-white text-6xl font-bolder">
          <CiPhone />
        </p>
        <div>
          <h1 className="text-white text-2xl font-bold">Have a question?</h1>
          <h2 className="text-white text-3xl font-bold">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-white text-6xl font-bolder">
          <CiLocationArrow1 />
        </p>
        <div>
          <h1 className="text-white text-2xl font-bold">
            Need a repair? our address
          </h1>
          <h2 className="text-white text-3xl font-bold">
            Liza Street, New York
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
