import React from "react";

const ListTop = ({ data }) => {
  console.log("data______________________>", data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((list, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4">
          <img
            src={list.images.show}
            alt={list.title}
            className="rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{list.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{list.description}</p>
          <div className="flex items-center mb-2">
            <span className="text-gray-700 mr-2">Genres:</span>
            {Object.values(list.genres).map((genre, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md mr-1"
              >
                {genre}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Network:</span>
            <span className="text-sm text-gray-600">{list.network}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTop;
