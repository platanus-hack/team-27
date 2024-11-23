import React from 'react';


interface ButtonProps {
  onClick?: () => void; 
  text: string;
}

export default function NextButton({
  onClick,
  text
}: ButtonProps) {
  return (
    <button
      onClick={onClick} 
      className={`m-2 py-2 px-4 rounded-md text-white 
                  bg-purple-600 hover:bg-purple-400
                  transition-colors duration-300`}
    >
      {text}
    </button>
  );
}
