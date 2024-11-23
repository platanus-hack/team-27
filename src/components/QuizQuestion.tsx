interface QuizQuestionProps {
    id: number;
    text: string;
    isSelected: boolean;
    onClick: () => void;
  }
  
  export default function QuizQuestion({ id, text, isSelected, onClick }: QuizQuestionProps) {
    return (
      <div
        key={id}
        onClick={onClick}  
        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors duration-300
          ${isSelected ? 'bg-blue-100 text-gray-800' : 'bg-white text-gray-800 border-gray-300'}
        `}
      >
        <div>{text}</div>
      </div>
    );
  }
  