import React from 'react';


const InstructorCard = ({ name, role, courses, students, imageUrl, socialLinks }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 m-4 transform transition-all hover:scale-105">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="bg-purple-500 text-white rounded-full p-2 hover:bg-purple-600 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 mb-2">{role}</p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.04a1 1 0 00-.788 0l-7 3a1 1 0 000 1.832l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.832l-7-3z" />
                <path d="M16.322 7.632l-7.322 3.11a1 1 0 01-.788 0L2 7.632m14.322 0l.992.422a1 1 0 010 1.832l-7 3a1 1 0 01-.788 0l-7-3a1 1 0 010-1.832l.992-.422" />
              </svg>
              {courses} Courses
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              {students}k Students
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default InstructorCard;