import React from 'react';

interface ChallengeCardProps {
  title: string;
  subtitle: string;
  progress: number;
  goal: number;
  points: number;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, subtitle, progress, goal, points,  }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <div className="flex items-center gap-2"><h3 className="font-semibold">{title}</h3></div>
        <p className="text-sm">{subtitle}</p>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 bg-green-500 rounded-full" style={{ width:`${(progress / goal) * 100}%` }}></div>
        <p className="text-xs mt-1">{progress}/{goal}</p>
      </div>
      <p className="text-yellow-500 font-bold">{points} ⭐</p>
    </div>
    </div>
  );
};

export default ChallengeCard;