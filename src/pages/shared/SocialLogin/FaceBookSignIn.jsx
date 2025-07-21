import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";

const FaceBookSignIn = () => {
  const { loginWithFacebook } = useContext(AuthContext);

  const handleFacebookLogin = () => {
    loginWithFacebook()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div
        onClick={handleFacebookLogin}
        className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <div className="px-4 py-2">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1877F2"
              d="M24 12.0736C24 5.40525 18.6274 0 12 0C5.37263 0 0 5.40525 0 12.0736C0 18.1004 4.3885 23.0932 10.125 24V15.5625H7.07812V12.0736H10.125V9.4133C10.125 6.40659 11.9167 4.78129 14.6576 4.78129C15.9704 4.78129 17.3438 5.01504 17.3438 5.01504V7.98413H15.8306C14.3394 7.98413 13.875 8.88527 13.875 9.81325V12.0736H17.2031L16.6719 15.5625H13.875V24C19.6115 23.0932 24 18.1004 24 12.0736Z"
            />
          </svg>
        </div>

        <span className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with Facebook
        </span>
      </div>
    </div>
  );
};

export default FaceBookSignIn;
