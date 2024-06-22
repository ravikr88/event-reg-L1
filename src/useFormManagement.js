import { useState } from "react";
import useFormValidation from "./vaildateForm";

const useFormManagement = () => {
  const initialState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "No",
    guestName: "",
  };
  const { formData, errors, handleChange, validate, setErrors } =
    useFormValidation(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  };
};

export default useFormManagement;
