// filepath: /home/mmarini/repos/cv_application/src/components/Preview.jsx
function Preview({ formData }) {
  if (!formData) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h2>Preview</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Experience: {formData.experience}</p>
      <p>Education: {formData.education}</p>
    </div>
  );
}

export default Preview;
