import {React, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
    // <div className="w-full px-0 lg:px-8 py-10 h-full" >
    <div className="container bg-[#FFFAFA] mx-auto px-5 lg:px0 py-5">

<div className="flex flex-wrap  mt-5">
        
        <div className="pt-12 w-full lg:w-[60%]">
          <div className="overflow-hidden rounded-lg min-h-[600px] md:h-[500px] relative">
            <h2 className="text-4xl font-bold text-gray-400 leading-tight">
              Smart Designs, Sharp Results  
              <br />
              <span className="bg-gradient-to-r from-[#D8BFD8] to-purple-500 text-transparent bg-clip-text">
              Choose Pitchers for Digital <br /> Excellence. <br /> Get In Touch With Us Today!
              </span>
            </h2>
          
             <h3 className="text-2xl mt-20 font-bold text-gray-300">Follow Us</h3>
            <p className="text-gray-400 mt-2">
              Stay connected and inspired! Follow us on our social media platforms 
              <br/>to keep up with the latest design trends,
              
               project updates, 
               <br/>and behind-the-scenes insights.
            </p>

            {/* Social Media Icons */}
            <div className="flex  gap-6 mt-4">
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        
 <div className="w-full md:w-[30%] flex flex-col justify-center h-full">
 <div className="bg-gradient-to-b from-purple-300 to-purple-200 m-6 rounded-3xl text-white p-8 shadow-lg w-full h-full">
 <h1 className="text-center text-3xl font-bold  leading-tight mb-6">
              Let's Connect!
            </h1>

            {/* Formik Form */}
            <Formik
              initialValues={{ email: "", name: "", project: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("Invalid email").required("Required"),
                name: Yup.string().min(2, "Too Short!").required("Required"),
                project: Yup.string().min(10, "Please describe more").required("Required"),
              })}
              onSubmit={ handleSubmit }
               
            >
              {({ isSubmitting, }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="email"
                      name="email"
                      
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-600 rounded-lg text-white"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="name"
                      
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-600 rounded-lg  text-white"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="project"
                      
                      placeholder="Briefly describe your project"
                    //   className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white h-32 resize-none"
                      className="w-full p-3 border rounded-lg  text-white min-h-[120px]"

/>
                    <ErrorMessage name="project" component="div" className="text-red-500 text-sm" />
                  </div>
                  {successMessage && (
                          <div className="item-added-box border border-green-100 bg-green-100 rounded-lg p-3 mt-4 text-orange-700 max-w-md mx-auto shadow-md">
                            <p className="mt-2 text-lightBlue font-bold">{successMessage}</p>
                          </div>
                        )}
                  <button
                    type="submit"
                     className="mt-4 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-700"
                    // onClick={handleSubmit}
                    disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                  
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
