import { useState, useEffect } from "react";

function CVForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="snes-form">
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="snes-input"
            required
          />
        </label>
        {errors.name && <p className="snes-error">{errors.name}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="snes-input"
            required
          />
        </label>
        {errors.email && <p className="snes-error">{errors.email}</p>}
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="snes-input"
            required
          />
        </label>
        {errors.phone && <p className="snes-error">{errors.phone}</p>}
      </div>
      <div>
        <label>
          Experience:
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="snes-textarea"
          />
        </label>
      </div>
      <div>
        <label>
          Education:
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="snes-textarea"
          />
        </label>
      </div>
      <button type="submit" className="snes-button">
        Submit
      </button>
    </form>
  );
}

export default CVForm;
