import { useState } from "react";
import CVForm from "./components/CVForm";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true); // Hide the form after submission
  };

  const handleEdit = () => {
    setIsSubmitted(false); // Show the form again
  };

  return (
    <>
      <h1>CV Builder</h1>
      {!isSubmitted ? (
        <CVForm onSubmit={handleFormSubmit} initialData={formData} />
      ) : (
        <div>
          <Preview formData={formData} />
          <button onClick={handleEdit}>Edit</button> {/* Edit button */}
        </div>
      )}
    </>
  );
}

export default App;
