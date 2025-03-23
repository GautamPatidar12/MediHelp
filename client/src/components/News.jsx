import React from 'react';

function News({ onBackClick }) {
  const newsData = [
    {
      id: 1,
      title: 'Free Vaccine Camps in Your City',
      description: 'Join us for free vaccination campaigns across the city!',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 2,
      title: 'Blood Donation Camps Starting Soon',
      description: 'Save lives by donating blood in our upcoming donation camps!',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 3,
      title: 'Health Check-up Camps in Rural Areas',
      description: 'Free health check-up camps in rural areas. Get your health checked!',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 4,
      title: 'Free Eye Care Camps this Weekend',
      description: 'Get free eye check-ups and consultations at our upcoming camps.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 5,
      title: 'Free Dental Check-up Camp',
      description: 'Free dental care services and consultations available at our camps.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 6,
      title: 'Mental Health Awareness Programs',
      description: 'Join our free mental health awareness seminars and support groups.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 7,
      title: 'Free Fitness Classes and Camps',
      description: 'Join our free fitness classes and outdoor workout sessions this month.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 8,
      title: 'Free Nutrition Workshops',
      description: 'Learn about healthy eating and balanced diets at our free workshops.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 9,
      title: 'Free Blood Pressure Monitoring Camps',
      description: 'Get your blood pressure monitored for free at our upcoming camps.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
    },
    {
      id: 10,
      title: 'Free Cancer Screening Camps',
      description: 'We are offering free cancer screenings and awareness campaigns.',
      imgUrl: 'https://via.placeholder.com/400x200',
      link: '#'
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
      
      {/* News Cards */}
      <div className="overflow-y-auto max-h-[80vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={news.imgUrl}
                alt={news.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">{news.title}</h3>
              <p className="text-gray-600">{news.description}</p>
              <a href={news.link} className="text-blue-600 mt-2 inline-block">Visit Site</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;