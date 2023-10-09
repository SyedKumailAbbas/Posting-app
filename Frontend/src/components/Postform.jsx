import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Postform = () => {
    const initialValues = {
        Title: "", // Changed from " " to ""
        Description: "",
        Price: ""
    }

    const validationSchema = Yup.object().shape({
        Title: Yup.string().required("Title is required"),
        Description: Yup.string().required("Add some description of your post"),
        Price: Yup.number().positive().required("Enter Price"), // Fixed this line
    })

    const formSubmit = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/post",data).then((res) => {
        console.log("submitted")
    })

    }

    return (
        <div className='Postform'>
            <Formik initialValues={initialValues} onSubmit={formSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>Title: </label>
                    <ErrorMessage name='Title' component="span"/> {/* Updated the name attribute */}
                    <Field
                        autoComplete="off"
                        id='titleinput'
                        name='Title'
                        placeholder='Title' />
                    <label>Description: </label>
                    <ErrorMessage name='Description' component="span"/> {/* Updated the name attribute */}
                    <Field
                        autoComplete="off"
                        id='descinput'
                        name='Description'
                        placeholder='Description' />
                    <label>Price: </label>
                    <ErrorMessage name='Price' component="span"/> {/* Updated the name attribute */}
                    <Field
                        autoComplete="off"
                        id='Priceinput'
                        name='Price'
                        placeholder='Price' />

                    <button type='submit' id='btn-createpost'>Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Postform
