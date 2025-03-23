import React from 'react';

function Insurance({ onBackClick }) {
  const insuranceData = [
    {
      id: 1,
      company: 'HealthGuard Insurance',
      description: 'Comprehensive health insurance covering all basic needs including hospitalization, doctor visits, and medication.',
      imgUrl: 'https://via.placeholder.com/400x200',
      termsLink: '#'
    },
    {
      id: 2,
      company: 'LifeCare Health Insurance',
      description: 'Affordable health plans with a focus on preventive care, wellness, and mental health support.',
      imgUrl: 'https://via.placeholder.com/400x200',
      termsLink: '#'
    },
    {
      id: 3,
      company: 'MedicPlus Health Insurance',
      description: 'Premium coverage for individuals and families, including maternity care, surgeries, and emergency care.',
      imgUrl: 'https://via.placeholder.com/400x200',
      termsLink: '#'
    },
    {
      id: 4,
      company: 'CareFirst Insurance',
      description: 'Affordable insurance options for all ages, including senior citizens and children.',
      imgUrl: 'https://via.placeholder.com/400x200',
      termsLink: '#'
    },
    {
      id: 5,
      company: 'SecureHealth Insurance',
      description: 'Provides coverage for major surgeries, critical illness, and regular health checkups.',
      imgUrl: 'https://via.placeholder.com/400x200',
      termsLink: '#'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <button
        onClick={onBackClick}
        className="text-blue-600 mb-4 text-lg font-semibold"
      >
        ← Back to Dashboard
      </button>

      {/* Insurance Plans Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {insuranceData.map((insurance) => (
          <div key={insurance.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={insurance.imgUrl}
              alt={insurance.company}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">{insurance.company}</h3>
            <p className="text-gray-600 mb-4">{insurance.description}</p>
            <a href={insurance.termsLink} className="text-blue-600 inline-block">View Terms & Conditions</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insurance;