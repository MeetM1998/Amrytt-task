import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white p-2 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-semibold">{content}</p>
    </div>
  );
};

export default Card;
