import React from 'react';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-black px-4">
      <div className="w-full max-w-md md:max-w-sm p-6 md:p-8 bg-stone-950 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 md:mb-6">Sign Up</h2>

        <form className="space-y-4 md:space-y-6">
          {/* Name Input */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-gray-400 text-sm md:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 md:p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone Input */}
          <div className="space-y-1">
            <label htmlFor="phone" className="block text-gray-400 text-sm md:text-base">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-2 md:p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-400 text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 md:p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 md:p-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>

        {/* Social Login Section */}
        <div className="flex items-center justify-center mt-4 md:mt-6 space-x-2 md:space-x-3">
          <div className="flex-1 h-px bg-gray-700" />
          <p className="text-xs md:text-sm text-gray-400">Enter details to view Proceed</p>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <p className="text-center text-xs md:text-sm text-gray-400 mt-4 md:mt-6">
          Already have an account?{' '}
          <a href="#" className="text-indigo-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
