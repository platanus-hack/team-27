"use client";
import QuizQuestion from "./QuizQuestion";

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
  selectedOption: number | null;
  onOptionClick: (questionId: number, optionId: number) => void;
}

export default function QuestionBox({
  question,
  questionNumber,
  selectedOption,
  onOptionClick,
}: QuestionBoxProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 sm:space-y-0">
      <div className="w-80 p-4 min-h-30 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-xl">
        <h1 className="text-2xl font-bold">Pregunta {questionNumber}</h1>
        <h2 className="text-lg text-left w-full">{question.p}</h2>
      </div>
      <div className="w-80 space-y-6 items-center justify-center">
        {Object.keys(question.r).map((key, index) => {
          const optionKey = key as keyof typeof question.r;
          return (
            <QuizQuestion
              key={index}
              id={index + 1}
              text={question.r[optionKey]}
              isSelected={selectedOption === index + 1}
              onClick={() => onOptionClick(questionNumber - 1, index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}
