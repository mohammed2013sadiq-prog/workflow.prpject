import React from 'react';

interface HistoryItemProps {
  title: string;
  date: string;
  completed: boolean;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ title, date, completed }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow mb-2">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <div>{completed ? '✅' : '❌'}</div>
    </div>
  );
};

export default HistoryItem;