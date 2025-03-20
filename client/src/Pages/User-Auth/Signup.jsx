import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../../firebase"; // Import Firestore instance
import { collection, doc, setDoc } from "firebase/firestore"; // Firestore functions
import InputControl from "./InputControl";
import { auth } from "../../firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    address: "",
    city: "",
    district: "",
    state: "",
    contactNo: "",
    gender: "",
    age: "",
    bloodGroup: "",
    weight: "",
    height: "",
    termsAccepted: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.pass ||
      !values.termsAccepted
    ) {
      setErrorMsg("Please fill all required fields and accept terms.");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        // Store user profile data in Firestore
        try {
          await setDoc(doc(db, "users", user.uid), {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            address: values.address,
            city: values.city,
            district: values.district,
            state: values.state,
            contactNo: values.contactNo,
            gender: values.gender,
            age: values.age,
            bloodGroup: values.bloodGroup,
            weight: values.weight,
            height: values.height,
            profilePicture: "", // You can add this later if the user uploads a profile picture
            createdAt: new Date(), // Store creation timestamp
          });

          // Update display name in Firebase Authentication profile
          await updateProfile(user, {
            displayName: `${values.firstName} ${values.lastName}`,
          });

          // Navigate to profile page
          navigate("/profile");
        } catch (error) {
          setErrorMsg("Error saving user data to Firestore: " + error.message);
        }
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-300">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Signup</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputControl
            label="First Name"
            placeholder="Enter your first name"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <InputControl
            label="Last Name"
            placeholder="Enter your last name"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Enter email address"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, pass: e.target.value }))
            }
            type="password"
          />
          <InputControl
            label="Address"
            placeholder="Enter your address"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, address: e.target.value }))
            }
          />
          <InputControl
            label="City"
            placeholder="Enter your city"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, city: e.target.value }))
            }
          />
          <InputControl
            label="District"
            placeholder="Enter your district"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, district: e.target.value }))
            }
          />
          <InputControl
            label="State"
            placeholder="Enter your state"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, state: e.target.value }))
            }
          />
          <InputControl
            label="Contact No."
            placeholder="Enter your contact number"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, contactNo: e.target.value }))
            }
          />
          <InputControl
            label="Gender"
            placeholder="Enter your gender"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, gender: e.target.value }))
            }
          />
          <InputControl
            label="Age"
            placeholder="Enter your age"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, age: e.target.value }))
            }
          />
          <InputControl
            label="Blood Group"
            placeholder="Enter your blood group"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, bloodGroup: e.target.value }))
            }
          />
          <InputControl
            label="Weight (kg)"
            placeholder="Enter your weight"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, weight: e.target.value }))
            }
          />
          <InputControl
            label="Height (cm)"
            placeholder="Enter your height"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, height: e.target.value }))
            }
          />
        </div>

        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={values.termsAccepted}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                termsAccepted: e.target.checked,
              }))
            }
          />
          <label htmlFor="terms" className="text-sm">
            I accept the{" "}
            <Link to="/terms" className="text-purple-500 font-bold">
              Terms and Conditions
            </Link>
          </label>
        </div>

        <div className="mt-6 text-center">
          <p className="text-red-600 font-bold text-sm">{errorMsg}</p>
          <button
            className={`w-full py-2 mt-4 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 ${
              submitButtonDisabled ? "opacity-50" : ""
            }`}
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Signup
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;