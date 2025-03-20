// DoctorSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Import Firestore methods

function Doctor() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    phone: "",
    medicalLicense: "",
    licenseAuthority: "",
    licenseExpiry: "",
    specialization: "",
    practiceName: "",
    practiceLocation: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.pass || !values.phone || !values.medicalLicense || !values.licenseAuthority || !values.licenseExpiry || !values.specialization || !values.practiceName || !values.practiceLocation) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    try {
      // Add doctor details to Firestore
      await addDoc(collection(db, "doctors"), {
        name: values.name,
        email: values.email,
        phone: values.phone,
        medicalLicense: values.medicalLicense,
        licenseAuthority: values.licenseAuthority,
        licenseExpiry: values.licenseExpiry,
        specialization: values.specialization,
        practiceName: values.practiceName,
        practiceLocation: values.practiceLocation,
        image: "url_to_default_image_or_uploaded_image", // Replace with actual image URL
      });

      setSubmitButtonDisabled(false);
      navigate("/doctor-profile");  // Navigate to doctor profile page after successful registration
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Doctor Signup</h1>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pass" className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            id="pass"
            value={values.pass}
            onChange={(e) => setValues({ ...values, pass: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="medicalLicense" className="block text-sm font-semibold text-gray-700">Medical License Number</label>
          <input
            type="text"
            id="medicalLicense"
            value={values.medicalLicense}
            onChange={(e) => setValues({ ...values, medicalLicense: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your medical license number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="licenseAuthority" className="block text-sm font-semibold text-gray-700">License Authority</label>
          <input
            type="text"
            id="licenseAuthority"
            value={values.licenseAuthority}
            onChange={(e) => setValues({ ...values, licenseAuthority: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter the authority that issued your license"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="licenseExpiry" className="block text-sm font-semibold text-gray-700">License Expiry Date</label>
          <input
            type="date"
            id="licenseExpiry"
            value={values.licenseExpiry}
            onChange={(e) => setValues({ ...values, licenseExpiry: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="specialization" className="block text-sm font-semibold text-gray-700">Specialization</label>
          <input
            type="text"
            id="specialization"
            value={values.specialization}
            onChange={(e) => setValues({ ...values, specialization: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your specialization"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="practiceName" className="block text-sm font-semibold text-gray-700">Practice Name</label>
          <input
            type="text"
            id="practiceName"
            value={values.practiceName}
            onChange={(e) => setValues({ ...values, practiceName: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your practice name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="practiceLocation" className="block text-sm font-semibold text-gray-700">Practice Location</label>
          <input
            type="text"
            id="practiceLocation"
            value={values.practiceLocation}
            onChange={(e) => setValues({ ...values, practiceLocation: e.target.value })}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your practice location"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-red-600 font-bold text-sm">{errorMsg}</p>
          <button
            className={`w-full py-2 mt-4 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 ${submitButtonDisabled ? "opacity-50" : ""}`}
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Doctor;