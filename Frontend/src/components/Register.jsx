import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const Register = () => {
  return (
    <>
      <div className="max-w-xs mx-auto justify-center pt-20 items-center min-h-screen">
        <Formik>
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name: </label>
            <Field
              autoComplete="off"
              id="fname"
              name="fname"
              placeholder="Firstname"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name: </label>
            <Field
              autoComplete="off"
              id="lname"
              name="lname"
              placeholder="Lastname"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Username: </label>
            <Field
              autoComplete="off"
              id="username"
              name="username"
              placeholder="@username" />

            <label className="block text-gray-700 text-sm font-bold mb-2">Email: </label>
            <Field
              type="email"
              autoComplete="off"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone NO: </label>
            <Field
              type="number"
              autoComplete="off"
              id="phoneno"
              name="phoneno"
              placeholder="phone# 1234567890"
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Gender: </label>
            <Field
              as="select"
              id="gender"
              name="gender"

            >
              <option value="male">male</option>
              <option value="female">female</option>
            </Field>





          </Form>
        </Formik>
      </div>

    </>
  )
}

export default Register
