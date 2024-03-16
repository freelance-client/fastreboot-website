import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-gray-800 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h1 className="text-3xl text-white mb-6">Login</h1>
        <input
          {...register("email", { required: true })}
          className={`w-full py-3 px-4 mb-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none transition-shadow duration-300 ease-in-out ${errors.email ? 'border-red-500' : ''}`}
          type="text"
          placeholder="Email"
          id="email"
          name="email"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input
          {...register("password", { required: true })}
          className={`w-full py-3 px-4 mb-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none transition-shadow duration-300 ease-in-out ${errors.password ? 'border-red-500' : ''}`}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        {errors.password && <p className="text-red-500">Password is required</p>}
        <input
          className="w-full py-3 px-4 mb-4 rounded-full bg-green-500 text-white font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
