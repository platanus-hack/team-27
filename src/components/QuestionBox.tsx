'use client';
import QuizQuestion from "./QuizQuestion";
import { useState } from "react";

export default function QuestionBox() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <>
      <div className="bg-white h-96 w-80 border-2 border-zinc-200 shadow-lg sm:h-72 sm:w-64 md:h-96 md:w-80 lg:h-96 lg:w-96 rounded-lg p-4">
        <div className="space-y-4">
            <h1 className="text-2xl font-bold" >Pregunta 1</h1>
          
            <h1 className="text-xl text-left w-full">¿Cuál es la raíz de 5?</h1>

            <QuizQuestion
              id={1}
              text="Opción 1"
              isSelected={selectedOption === 1}
              onClick={handleOptionClick}
            />
            <QuizQuestion
              id={2}
              text="Opción 2"
              isSelected={selectedOption === 2}
              onClick={handleOptionClick}
            />
            <QuizQuestion
              id={3}
              text="Opción 3"
              isSelected={selectedOption === 3}
              onClick={handleOptionClick}
            />
            <QuizQuestion
              id={4}
              text="Opción 4"
              isSelected={selectedOption === 4}
              onClick={handleOptionClick}
            />
        </div>
      </div>
    </>
  );
}
