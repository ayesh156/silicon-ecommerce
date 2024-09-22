import contactUsImg from "../assets/contact/contact_us_img.webp";
import {
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik} from "formik";
import * as yup from "yup";
import {contactUsCategories, contactUsPhoneEmails, contactUsPhoneNumbers} from "../constants/index.jsx"; // Import Categories data

const userSchema = yup.object().shape({
    name: yup.string().required("Your Name is required"),
    email: yup.string().email("Invalid Email address").required("Email address is required"),
    model: yup.string().required("Model is required"),
    subject: yup.string().required("Subject is required"),
    details: yup.string().required("Briefly provide the details that you think we need to know is required"),
});

const Contact = () => {
    // State to manage selected contact option (email or phone)
    const [selectedOption, setSelectedOption] = useState('email'); // Track the selected option
    const [toastMsg, setToastMsg] = useState(""); // State for toast messages

    // Initial values for the form fields
    const initialValues = {
        name: "",
        email: "",
        category: "",
        orderId: "",
        model: "",
        subject: "",
        details: "",
    };

    // Function to handle the selection of contact method (email or phone)
    const handleOptionSelect = (option) => {
        setSelectedOption(option); // Set the selected option
    };

    // Form submission handler
    const handleSubmit = (values, {resetForm}) => {
        console.log(values); // Log submitted values for debugging

        axios
            .post(``, values) // Send form data via POST request (URL to be defined)
            .then((response) => {
                // Show success message if submission is successful
                if (response.data.status === 1) {
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                 } else {
                    setToastMsg(response.data.message); // Set error message if not successful
                }
            })
            .catch((error) => {
                setToastMsg(error); // Set error message if there's an error

            })
            .finally(function () {
                resetForm(); // Reset the form fields after submission
            });

        // Show error message if it exists
        if (toastMsg !== "") {
            toast.error(toastMsg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    };

    return (
        <div className="w-full">
            <ToastContainer/>

            {/* Company Image */}
            <img src={contactUsImg} alt="Company Image" className="w-full h-full mt-20"/>

            <div className="flex flex-col justify-center md:px-10 py-4 max-w-7xl mx-auto">

                <div className="flex space-x-5 md:space-x-12 px-2 md:px-0">
                    {/* Option buttons for selecting contact method */}
                    <button
                        className={`px-0 py-0 text-lg ${selectedOption === 'email' ? 'font-semibold' : 'font-normal'}`}
                        onClick={() => handleOptionSelect('email')}
                    >
                        Send us an Email
                    </button>
                    <button
                        className={`px-0 py-0 text-lg ${selectedOption === 'phone' ? 'font-semibold' : 'font-normal'}`}
                        onClick={() => handleOptionSelect('phone')}
                    >
                        Contact us by Phone
                    </button>
                </div>
            </div>

            {/* Display container based on the selected option */}
            {selectedOption && (
                <div className="bg-[#F2F2F2] pt-8 pb-[4.4rem] w-full">

                    <div className="flex flex-col pl-2 pr-5 md:pl-10 md:pr-10 pt-2 pb-4 md:max-w-7xl mx-auto">

                        {/* Conditional rendering based on the selected contact method */}
                        {selectedOption === 'email' && (
                            <div>
                                {/* Display contact email options */}
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    {contactUsPhoneEmails.map((contact, index) => (
                                        <div key={index} className="flex flex-row items-center space-x-7 pt-2">
                                            <h4 className="text-xl">{contact.label}</h4>
                                            <span className="text-[14px]">{contact.email}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Instruction for filling out the form */}
                                <div className="mt-12 md:mt-20">
                                    <h5>Please fill out the form below and we will reply by email within 48
                                        hours</h5>
                                    {/* Formik form setup for email contact */}
                                        <Formik
                                            onSubmit={handleSubmit}
                                            initialValues={initialValues}
                                            validationSchema={userSchema}
                                        >
                                            {({
                                                  values,
                                                  errors,
                                                  touched,
                                                  handleBlur,
                                                  handleChange,
                                                  handleSubmit,
                                                  setFieldValue,
                                                  isValid,
                                              }) => (
                                                <form onSubmit={handleSubmit}
                                                      className="flex flex-col space-y-10 lg:space-y-8 md:w-[400px] mt-6">
                                                    {/* Email input field */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="name"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            <span className="text-red-500">*</span> Email address
                                                        </label>
                                                        <TextField type="text" sx={{
                                                            "& .MuiInputBase-input": {
                                                                fontFamily: "Roboto", // Change to your desired font family
                                                                fontSize: "16px", // Custom font size
                                                                lineHeight: "1.6", // Custom line height
                                                                padding: "9px 16px", // Custom padding (top-bottom, left-right)
                                                                fontWeight: "500", // Custom font weight

                                                            },
                                                            "& .MuiInputLabel-root": {
                                                                fontFamily: "Roboto", // Change label font family
                                                                fontSize: "26px", // Custom font size
                                                            },
                                                            "& .MuiFormHelperText-root": {
                                                                position: "absolute", // Position error text absolutely
                                                                bottom: "-26px", // Position the error text below the input field
                                                                left: "-12px", // Align error text with the left of the input
                                                                fontSize: "12px", // Custom font size for error text
                                                                color: "red", // Set error text color to red
                                                            },
                                                        }}
                                                                   className="w-full"
                                                                   value={values.email}
                                                                   name="email"
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                                   error={!!touched.email && !!errors.email}
                                                                   helperText={touched.email && errors.email}
                                                        />
                                                    </div>

                                                    {/* Name input field */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="name"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            <span className="text-red-500">*</span> Your Name
                                                        </label>
                                                        <TextField type="text" sx={{
                                                            "& .MuiInputBase-input": {
                                                                fontFamily: "Roboto", // Change to your desired font family
                                                                fontSize: "16px", // Custom font size
                                                                lineHeight: "1.6", // Custom line height
                                                                padding: "9px 16px", // Custom padding (top-bottom, left-right)
                                                                fontWeight: "500", // Custom font weight

                                                            },
                                                            "& .MuiInputLabel-root": {
                                                                fontFamily: "Roboto", // Change label font family
                                                                fontSize: "26px", // Custom font size
                                                            },
                                                            "& .MuiFormHelperText-root": {
                                                                position: "absolute", // Position error text absolutely
                                                                bottom: "-26px", // Position the error text below the input field
                                                                left: "-12px", // Align error text with the left of the input
                                                                fontSize: "12px", // Custom font size for error text
                                                                color: "red", // Set error text color to red
                                                            },
                                                        }}
                                                                   className="w-full"
                                                                   value={values.name}
                                                                   name="name"
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                                   error={!!touched.name && !!errors.name}
                                                                   helperText={touched.name && errors.name}
                                                        />
                                                    </div>

                                                    {/* Category selection */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="category"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            <span className="text-red-500">*</span> Category
                                                        </label>
                                                        <Select
                                                            value={values.category}
                                                            name="category"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className="w-full"
                                                            sx={{
                                                                "& .MuiSelect-select": {
                                                                    padding: "9px 16px", // Ensure padding is applied to the select area
                                                                },
                                                                "& .MuiInputBase-input": {
                                                                    fontFamily: "Roboto", // Change to your desired font family
                                                                    fontSize: "16px", // Custom font color
                                                                    lineHeight: "1.6", // Custom line height
                                                                    fontWeight: "500", // Custom font weight

                                                                },
                                                            }}
                                                        >
                                                            {/* Map through categories to create options */}
                                                            {contactUsCategories.map((category) => (
                                                                <MenuItem key={category} value={category}>
                                                                    {category}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </div>

                                                    {/* Order ID field */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="orderId"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            orderId
                                                        </label>
                                                        <TextField type="text" sx={{
                                                            "& .MuiInputBase-input": {
                                                                fontFamily: "Roboto", // Change to your desired font family
                                                                fontSize: "16px", // Custom font size
                                                                lineHeight: "1.6", // Custom line height
                                                                padding: "9px 16px", // Custom padding (top-bottom, left-right)
                                                                fontWeight: "500", // Custom font weight

                                                            },
                                                            "& .MuiInputLabel-root": {
                                                                fontFamily: "Roboto", // Change label font family
                                                                fontSize: "26px", // Custom font size
                                                            },
                                                        }}
                                                                   className="w-full"
                                                                   value={values.orderId}
                                                                   name="orderId"
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                        />
                                                    </div>

                                                    {/* Model field */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="model"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            <span className="text-red-500">*</span> Model
                                                        </label>
                                                        <TextField type="text" sx={{
                                                            "& .MuiInputBase-input": {
                                                                fontFamily: "Roboto", // Change to your desired font family
                                                                fontSize: "16px", // Custom font size
                                                                lineHeight: "1.6", // Custom line height
                                                                padding: "9px 16px", // Custom padding (top-bottom, left-right)
                                                                fontWeight: "500", // Custom font weight

                                                            },
                                                            "& .MuiInputLabel-root": {
                                                                fontFamily: "Roboto", // Change label font family
                                                                fontSize: "26px", // Custom font size
                                                            },
                                                            "& .MuiFormHelperText-root": {
                                                                position: "absolute", // Position error text absolutely
                                                                bottom: "-26px", // Position the error text below the input field
                                                                left: "-12px", // Align error text with the left of the input
                                                                fontSize: "12px", // Custom font size for error text
                                                                color: "red", // Set error text color to red
                                                            },
                                                        }}
                                                                   className="w-full"
                                                                   value={values.model}
                                                                   name="model"
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                                   error={!!touched.model && !!errors.model}
                                                                   helperText={touched.model && errors.model}
                                                        />
                                                    </div>

                                                    {/* Subject field */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="subject"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            <span className="text-red-500">*</span> Subject
                                                        </label>
                                                        <TextField type="text" sx={{
                                                            "& .MuiInputBase-input": {
                                                                fontFamily: "Roboto", // Change to your desired font family
                                                                fontSize: "16px", // Custom font size
                                                                lineHeight: "1.6", // Custom line height
                                                                padding: "9px 16px", // Custom padding (top-bottom, left-right)
                                                                fontWeight: "500", // Custom font weight

                                                            },
                                                            "& .MuiInputLabel-root": {
                                                                fontFamily: "Roboto", // Change label font family
                                                                fontSize: "26px", // Custom font size
                                                            },
                                                            "& .MuiFormHelperText-root": {
                                                                position: "absolute", // Position error text absolutely
                                                                bottom: "-26px", // Position the error text below the input field
                                                                left: "-12px", // Align error text with the left of the input
                                                                fontSize: "12px", // Custom font size for error text
                                                                color: "red", // Set error text color to red
                                                            },
                                                        }}
                                                                   className="w-full"
                                                                   value={values.subject}
                                                                   name="subject"
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                                   error={!!touched.subject && !!errors.subject}
                                                                   helperText={touched.subject && errors.subject}
                                                        />
                                                    </div>

                                                    {/* Details field */}
                                                    <div className="flex flex-col">
                                                        <label htmlFor="details"
                                                               className="text-sm text-textBlack font-roboto mb-3">
                                                            <span className="text-red-500">*</span> Briefly provide the
                                                            details that you think we need to know

                                                        </label>

                                                        <TextField
                                                            type="text"
                                                            sx={{
                                                                "& .MuiInputBase-input": {
                                                                    fontFamily: "Roboto", // Change to your desired font family
                                                                    fontSize: "16px", // Custom font size
                                                                    lineHeight: "1.6", // Custom line height
                                                                    padding: "9px 16px", // Custom padding (top-bottom, left-right)
                                                                    fontWeight: "500", // Custom font weight
                                                                    resize: "vertical", // Enable vertical resizing
                                                                },
                                                                "& .MuiInputLabel-root": {
                                                                    fontFamily: "Roboto", // Change label font family
                                                                    fontSize: "26px", // Custom font size
                                                                },
                                                                "& .MuiInputBase-root": {
                                                                    margin: 0, // Remove default margin from the input base
                                                                    padding: 0, // Remove default padding from the input base
                                                                    border: "none", // Remove border for a cleaner look
                                                                },
                                                                "& .MuiFormHelperText-root": {
                                                                    position: "absolute", // Position the helper text absolutely within the input container
                                                                    bottom: "-46px", // Place the helper text below the input field
                                                                    left: "-12px", // Align the helper text with the left of the input
                                                                    fontSize: "12px", // Set font size for the helper text
                                                                    color: "red", // Set the color of the helper text to red for visibility
                                                                    transition: "bottom 0.2s ease", // Smooth transition effect for the position of the helper text
                                                                },
                                                            }}
                                                            className="w-full"
                                                            multiline
                                                            minRows={1} // Set minimum rows for the textarea
                                                            value={values.details}
                                                            name="details"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={!!touched.details && !!errors.details}
                                                            helperText={touched.details && errors.details}
                                                        />
                                                    </div>
                                                    {/* Submit button */}
                                                    <div className="flex justify-center">
                                                        <button
                                                            type="submit"
                                                            className="bg-[#FE5200] text-white rounded-3xl px-9 py-[7px] text-lg font-semibold">Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                                )}

                                {/* Display phone contact information */}
                                {selectedOption === 'phone' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {contactUsPhoneNumbers.map((number, index) => (
                                            <div key={index} className="flex flex-row items-center space-x-7 pt-2">
                                                <h4 className="text-xl">Tel{index + 1}:</h4>
                                                <span className="text-[14px]">{number}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}


                            </div>
                            </div>
                            )}

        </div>
    )
}

export default Contact;
