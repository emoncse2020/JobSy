import Lottie from "lottie-react";
import programmerLogin from "../../assets/Young rogrammersworkingwithcomputer.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import GoogleSingIn from "../shared/SocialLogin/GoogleSingIn";
import FaceBookSignIn from "../shared/SocialLogin/FaceBookSignIn";
import SocialDivider from "../shared/SocialLogin/SocialDivider";

const SignIn = () => {
  const { signInUser, signOutUser } = useContext(AuthContext);
  const handleSignIn = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-[calc(100vh-338px)] flex justify-center items-center ">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden  dark:bg-gray-800 lg:max-w-7xl ">
        <div className="max-w-2xl">
          <Lottie
            className="hidden bg-cover lg:block"
            animationData={programmerLogin}
          ></Lottie>
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt="Company Logo"
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          <GoogleSingIn></GoogleSingIn>
          <FaceBookSignIn></FaceBookSignIn>

          <SocialDivider></SocialDivider>

          <form action={handleSignIn}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </a>
              </div>

              <input
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up
              </a>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
