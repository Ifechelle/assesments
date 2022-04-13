import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: Yup.string(),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    userName: Yup.string().required("Username is required")
        .min(3, 'Must be a minimum of 3 digits')
        .max(10, 'Must be a maximum 10 digits'),
    password1: Yup.string().required("Password is required")
        .min(3, 'Must be a minimum of 3 digits')
        .max(12, 'Must be a maximum 12 digits'),
    password2: Yup.string().required('Please retype your password.')
    .oneOf([Yup.ref('password1')], 'Your passwords do not match.'),
    address: Yup.string().required("Home Address required"),
});
export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required")
    .min(3, 'Must be a minimum of 3 digits')
    .max(28, 'Must be a maximum 28 digits'),
});
export const fpValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
});
