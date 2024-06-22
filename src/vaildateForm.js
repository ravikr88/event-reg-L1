import { useState } from "react";

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.age) {
      formErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      formErrors.age = "Age must be a number greater than 0";
    }
    if (formData.attendingWithGuest === "Yes" && !formData.guestName) {
      formErrors.guestName = "Guest Name is required";
    }
    return formErrors;
  };

  return {
    formData,
    errors,
    handleChange,
    validate,
    setErrors,
  };
};

export default useFormValidation;
