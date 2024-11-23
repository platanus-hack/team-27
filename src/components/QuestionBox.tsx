'use client';
import QuizQuestion from "./QuizQuestion";
import { useState } from "react";

interface QuestionBoxProps {
  question: {
    p: string;
    r: {
      a: string;
      b: string;
      c: string;
      d: string;
    };
    r_correcta: string;
  };
  questionNumber: number;
}

export default function QuestionBox({ question, questionNumber }: QuestionBoxProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <div className="bg-white w-80 max-h-[500px] overflow-y-auto border-2 border-zinc-200 shadow-lg rounded-lg p-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Pregunta {questionNumber}</h1>
        <h2 className="text-lg text-left w-full">{question.p}</h2>

        {Object.keys(question.r).map((key, index) => {
          const optionKey = key as keyof typeof question.r; 
          return (
            <QuizQuestion
              key={index}
              id={index + 1}
              text={question.r[optionKey]}
              isSelected={selectedOption === index + 1}
              onClick={handleOptionClick}
            />
          );
        })}
      </div>
    </div>
  );
}

