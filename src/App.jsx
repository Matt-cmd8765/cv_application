import { useState } from "react"; // Importing useState hook for managing component state
import CVForm from "./components/CVForm"; // Importing the CVForm component
import Preview from "./components/Preview"; // Importing the Preview component
import "./App.css"; // Importing CSS for styling

function App() {
  // State to store form data, initialized with empty values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
  });

  // State to track whether the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data); // Update formData with the submitted data
    setIsSubmitted(true); // Set isSubmitted to true to hide the form
  };

  // Function to handle editing the form
  const handleEdit = () => {
    setIsSubmitted(false); // Set isSubmitted to false to show the form again
  };

  return (
    <>
      <h1>CV Builder</h1> {/* Main heading of the application */}
      {!isSubmitted ? (
        // If the form is not submitted, show the CVForm component
        <CVForm onSubmit={handleFormSubmit} initialData={formData} />
      ) : (
        // If the form is submitted, show the Preview component and an Edit button
        <div>
          <Preview formData={formData} /> {/* Display the preview of the CV */}
          <button onClick={handleEdit}>Edit</button>{" "}
          {/* Button to switch back to editing */}
        </div>
      )}
    </>
  );
}

export default App; // Exporting the App component as the default export
