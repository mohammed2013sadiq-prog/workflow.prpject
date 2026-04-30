import React from 'react';

interface StreakTrackerProps {
  days: number;
  points: number;
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ days, points }) => {
  return (
    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow">
      <div>
        <p className="font-semibold flex items-center gap-1">🔥 Série actuelle</p>
        <p>{days} jours - Continue comme ça !</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">Points</p>
        <p className="text-red-500 font-bold">{points} ⭐</p>
      </div>
    </div>
  );
};

export default StreakTracker;