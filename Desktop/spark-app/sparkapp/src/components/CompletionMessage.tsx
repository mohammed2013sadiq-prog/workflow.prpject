import React from 'react';

interface CompletionMessageProps {
  message: string;
}

const CompletionMessage: React.FC<CompletionMessageProps> = ({ message }) => {
  return (
    <div className="bg-green-200 text-black p-4 rounded-lg shadow my-4">
      {message}
    </div>
  );
};

export default CompletionMessage;