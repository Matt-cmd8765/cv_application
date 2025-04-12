import { useState } from "react";
import CVForm from "./components/CVForm";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // Add other fields as necessary
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h1>CV Builder</h1>
      <CVForm
        formData={formData}
        handleInputChange={handleInputChange}
        onSubmit={(data) => setFormData(data)}
      />{" "}
      <Preview formData={formData} />
    </>
  );
}

export default App;
