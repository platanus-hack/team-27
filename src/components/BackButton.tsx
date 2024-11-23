import React from 'react';


interface ButtonProps {
  onClick?: () => void; 
  text: string;
}

export default function BackButton({
  onClick,
  text
}: ButtonProps) {
  return (
    <button
      onClick={onClick} 
      className={`m-2 py-2 px-4 rounded-md text-white 
                  bg-zinc-400 hover:bg-zinc-300
                  transition-colors duration-300`}
    >
      {text}
    </button>
  );
}