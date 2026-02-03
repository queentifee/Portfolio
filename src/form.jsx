import {React, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"


const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
  
 
    const handleSubmit = async (values, { setSubmitting }) => {
      setIsLoading(true);
    setErrorMessage('');

    const fullName = values.name || "";
    const [firstName = "", lastName = ""] = fullName.trim().split(" ");
  


    const requestBody =  {
      firstName,
      lastName,
      email: values.email,
      project_description: values.project
    };

    try {
      const response = await fetch (import.meta.env.VITE_SUBMIT_CONTACT_FORM, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();

      if (response.ok) {
setSuccessMessage ('Form Submitted! We will get in touch.' )
setTimeout(() => {
  setSuccessMessage('');
  // onClose();
}, 4000);
} else {
  const message = result.message;
  setErrorMessage(`Form not submitted: ${message}`);
}
} catch (error) {
  setErrorMessage (`${error.message}`)
} finally {
  setIsLoading(false)
}
}

  return (
   <div className="container bg-[#FFFAFA] mx-auto px-4 lg:px-0 py-5">
  <div className="flex flex-col lg:flex-row mt-3 gap-8">

    {/* FORM SECTION */}
    <div className="w-full lg:w-[40%] flex justify-center">
      <div className="bg-gradient-to-b from-purple-300 to-purple-200 rounded-3xl text-white p-6 lg:p-8 shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl lg:text-3xl font-bold mb-6">
          Get in Touch!
        </h1>

        <Formik
          initialValues={{ email: "", name: "", project: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            name: Yup.string().min(2, "Too Short!").required("Required"),
            project: Yup.string().min(10, "Please describe more").required("Required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">

              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

              <Field
                as="textarea"
                name="project"
                placeholder="Briefly describe your project"
                className="w-full p-3 border rounded-lg bg-transparent text-white min-h-[120px]"
              />
              <ErrorMessage name="project" component="div" className="text-red-500 text-sm" />

              {successMessage && (
                <div className="border border-green-200 bg-green-100 rounded-lg p-3 text-center text-green-700 font-semibold">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-700 transition"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>

    {/* TEXT / SOCIAL SECTION */}
    <div className="w-full lg:w-[60%] flex flex-col justify-center px-4 lg:px-0 text-center lg:text-left">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-400 leading-tight">
        Smart Designs, Sharp Results
        <br />
        <span className="bg-gradient-to-r from-[#D8BFD8] to-purple-500 text-transparent bg-clip-text">
          For Captivating Designs, <br /> Get In Touch With Queen_Codes!
        </span>
      </h2>

      <h3 className="mt-6 text-2xl font-bold text-gray-400">Follow Me</h3>

      <p className="text-gray-400 mt-2">
        Don't be a stranger!
        <br />
        You can also check out my Github.
      </p>

      <div className="flex justify-center lg:justify-start gap-6 mt-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" bounce-text p-4 bg-purple-400 rounded-full hover:bg-purple-600 transition"
        >
          <FaGithub className="text-white text-2xl" />
        </a>

              {/* <a href="http://linkedin.com/in/queen-samuell" 
              target="_blank" 
  rel="noopener noreferrer"
              className="bounce-text p-5 bg-[#D8BF] rounded-full hover:bg-purple-400 transition">
                <FaLinkedinIn className="text-white" />
              </a> */}
            </div>
            </div>
            </div>
            </div>
         
  );
};

export default ContactForm;
