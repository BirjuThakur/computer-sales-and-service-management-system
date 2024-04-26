import React from "react";

const HeroTable = ({ data, columns, handleUpdate, handleDelete }) => {
  // Render table rows and cells based on the provided data and columns
  const renderRows = () => {
    return data.map((row, rowIndex) => (
      <tr key={rowIndex} className="border-b">
        {columns.map((column, colIndex) => (
          <td key={colIndex} className="py-2 whitespace-nowrap">{row[column]}</td>
        ))}
        <td className="py-2 whitespace-nowrap">
          <button onClick={() => handleUpdate(row)} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
          <button onClick={() => handleDelete(row)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="mt-4 overflow-x-auto flex justify-center items-center">
      <table className="min-w-[90%] divide-y divide-gray-200">
        <thead>
          <tr className="bg-blue-200">
            {columns.map((column, colIndex) => (
              <th key={colIndex} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column}</th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default HeroTable;