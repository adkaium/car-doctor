import {Link} from "react-router-dom";
import logImg from "../../assets/images/login/login.svg";
import {CiFacebook} from "react-icons/ci";
import {BsGoogle, BsLinkedin} from "react-icons/bs";
import {useContext} from "react";
import {AuthContext} from "../../ContextProvider/ContextProvider";

const SignUp = () => {
  const newUser = useContext(AuthContext);
  const {createUser} = newUser;
  console.log(createUser);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(name, email, pass);
    createUser(email, pass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left w-1/2">
            <img src={logImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  h-[582px]">
            <div>
              <form className="card-body" onSubmit={handleSignIn}>
                <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] text-white text-2xl">
                    sign Up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <h3 className="font-semibold">Or Sign Up with</h3>
                <div className="flex justify-center space-x-4 items-center mt-2">
                  <p>
                    <Link>
                      <CiFacebook></CiFacebook>
                    </Link>
                  </p>
                  <p>
                    <Link>
                      <BsGoogle></BsGoogle>
                    </Link>
                  </p>
                  <p>
                    <Link>
                      <BsLinkedin></BsLinkedin>
                    </Link>
                  </p>
                </div>
                <h1 className="mt-5">
                  Already have an account?
                  <Link className="text-[#FF3811]" to="/login">
                    login
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
