'use client';
import { useState, useEffect } from "react";
import QuestionBox from "@/components/QuestionBox";
import NextButton from "@/components/NextButton";
import BackButton from "@/components/BackButton";

export default function QuizPage() {
  const [data, setData] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://v7574x625rfp77q6wjzpyk6s7i0cdrho.lambda-url.us-east-1.on.aws/';
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    if (data && currentQuestionIndex < data.preguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Ensure data is loaded before rendering QuestionBox
  if (!data) {
    return <div>Loading...</div>;
  }

  const currentQuestion = data.preguntas[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <QuestionBox
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}  // For display purposes (1-based index)
      />
      <div className="flex justify-center space-x-4 mt-4">
        <BackButton text="Anterior" onClick={handleBack} />
        <NextButton text="Siguiente" onClick={handleNext} />
      </div>
    </div>
  );
}
