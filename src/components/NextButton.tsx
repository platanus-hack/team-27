import React from 'react';
import { ChevronRight } from 'lucide-react';


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
      className={`flex m-2 py-2 px-4 rounded-md text-zinc-700 
                  bg-white hover:bg-zinc-300
                  transition-colors duration-300`}
    >
      {text}
      <ChevronRight />
    </button>
  );
}
