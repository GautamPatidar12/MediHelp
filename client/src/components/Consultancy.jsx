// Consultancy.js
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore methods

function Consultancy({ onBackClick }) {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const querySnapshot = await getDocs(collection(db, "doctors"));
      const doctors = querySnapshot.docs.map(doc => doc.data());
      setDoctorData(doctors);
    };

    fetchDoctors();
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Back Button */}
      <button
        onClick={onBackClick}
        className="bg-blue-600 text-white p-2 rounded-lg mb-4 self-start"
      >
        Back
      </button>

      {/* Doctor Cards */}
      <div className="overflow-y-auto flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctorData.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Doctor Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialization}</p>
              <p className="text-gray-600">Experience: {doctor.experience || 'N/A'}</p>

              {/* Buttons */}
              <div className="mt-4 flex justify-between items-center">
                <button className="bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Call
                </button>
                <button className="bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consultancy;