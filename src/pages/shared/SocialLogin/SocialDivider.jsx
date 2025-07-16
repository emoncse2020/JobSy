const SocialDivider = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

      <a
        href="#"
        className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or login with email
      </a>

      <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
    </div>
  );
};

export default SocialDivider;
