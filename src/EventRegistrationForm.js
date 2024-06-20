import React from "react";
import useFormManagement from "./useFormManagement";

const EventRegistrationForm = () => {
  const { formData, errors, submitted, handleChange, handleSubmit } =
    useFormManagement();

  return (
    <div className="container mt-5">
      {submitted ? (
        <div className="alert alert-success">
          <h2>Form Submitted Successfully</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
          <p>
            <strong>Attending with Guest:</strong> {formData.attendingWithGuest}
          </p>
          {formData.attendingWithGuest === "Yes" && (
            <p>
              <strong>Guest Name:</strong> {formData.guestName}
            </p>
          )}
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className={`form-control ${errors.age ? "is-invalid" : ""}`}
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                {errors.age && (
                  <div className="invalid-feedback">{errors.age}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="attendingWithGuest" className="form-label">
                  Are you attending with a guest?
                </label>
                <select
                  id="attendingWithGuest"
                  name="attendingWithGuest"
                  className="form-select"
                  value={formData.attendingWithGuest}
                  onChange={handleChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              {formData.attendingWithGuest === "Yes" && (
                <div className="mb-3">
                  <label htmlFor="guestName" className="form-label">
                    Guest Name:
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    name="guestName"
                    className={`form-control ${
                      errors.guestName ? "is-invalid" : ""
                    }`}
                    value={formData.guestName}
                    onChange={handleChange}
                    required
                  />
                  {errors.guestName && (
                    <div className="invalid-feedback">{errors.guestName}</div>
                  )}
                </div>
              )}
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
