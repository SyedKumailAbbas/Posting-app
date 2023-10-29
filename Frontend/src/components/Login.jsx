import React from 'react'
import { Formik, Form, Field } from 'formik'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from "./Register"
const Login = () => {
  return (
    <>
      <div className="max-w-xs mx-auto justify-center pt-20 items-center min-h-screen">
        <legend className='signin'>Sign in</legend>
        <Formik>
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>

            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>

            <Link className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">New here Sign up!</Link>
         
          </Form>
        </Formik>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Gharent. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Login
