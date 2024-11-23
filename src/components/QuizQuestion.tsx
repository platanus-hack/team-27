// Definir los tipos de las props
interface QuizQuestionProps {
    id: number;
    text: string;
    isSelected: boolean;
    onClick: (id: number) => void;
  }
  
  export default function QuizQuestion({
    id,
    text,
    isSelected,
    onClick,
  }: QuizQuestionProps) {
    return (
      <div
        key={id}
        onClick={() => onClick(id)}  
        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors duration-300
          ${isSelected ? 'bg-green-500 text-white' : 'bg-white text-gray-800 border-gray-300'}
        `}
      >
        <div>{text}</div>
      </div>
    );
  }
  
  