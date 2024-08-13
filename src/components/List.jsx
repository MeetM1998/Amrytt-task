import React from "react";

const List = ({ profiles }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Profile List</h2>
      <ul className="divide-y divide-gray-200">
        {profiles.length === 0 ? (
          <p className="text-center text-gray-500">No Profiles Available</p>
        ) : (
          profiles.map((profile, index) => (
            <li key={index} className="py-2 flex justify-between items-center">
              <div className="">
                <span className="font-medium text-gray-700">
                  {index + 1}. {profile.firstName} {profile.lastName}
                </span>
              </div>
              <div>
                <span className="text-gray-500">{profile.gender}</span>
              </div>
              <div>
                <span className="text-gray-500">{profile.age}</span>
              </div>
              <div>
                <span className="text-gray-500">{profile.country}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
