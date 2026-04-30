import React from 'react';

const CategoryFilter: React.FC = () => {
  return (
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 bg-green-200 rounded-full">Santé</button>
      <button className="px-3 py-1 bg-green-200 rounded-full">Esprit</button>
      <button className="px-3 py-1 bg-green-200 rounded-full">Bonus</button>
    </div>
  );
};

export default CategoryFilter;