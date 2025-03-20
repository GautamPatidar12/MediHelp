import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/profile");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Login</h1>

        {/* Input fields for email and password */}
        <div className="space-y-4">
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
        </div>

        {/* Error message display */}
        <div className="mt-2 text-center">
          <p className="text-red-600 font-bold text-sm">{errorMsg}</p>
        </div>

        {/* Submit button */}
        <div className="mt-6 text-center">
          <button
            className={`w-full py-2 mt-4 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 ${
              submitButtonDisabled ? "opacity-50" : ""
            }`}
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Login
          </button>

          {/* Signup link */}
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-500 font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;