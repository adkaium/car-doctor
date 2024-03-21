import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row  h-full w-full pl-0">
        <div className="lg:w-1/2 relative mr-0 h-[500px] ">
          <img
            src={person}
            className="w-[430px] rounded-lg shadow-2xl h-[450px] absolute"
          />
          <img
            src={parts}
            className="w-[327px] h-[330px] right-32 top-52 rounded-lg  absolute  border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 ">
          <h4 className="text-2xl font-bold mb-2 text-[rgb(255,56,17)]">About Us</h4>
          <h1 className="text-5xl font-bold w-1/2">
            We are qualified & of experience in this field
          </h1>
          <p className="py-3 w-3/4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className="py-3 w-3/4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
