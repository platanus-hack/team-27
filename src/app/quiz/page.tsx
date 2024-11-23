'use client';
import { useState, useEffect } from "react";
import QuestionBox from "@/components/QuestionBox";
import NextButton from "@/components/NextButton";
import BackButton from "@/components/BackButton";


export default function QuizPage() {
    const [data, setData] = useState(null);
    

    const handleNext = () => {

    }

    const handleBack = () => {

    }


    useEffect(() => {
        const fetchData = async() => {
            const url = 'https://v7574x625rfp77q6wjzpyk6s7i0cdrho.lambda-url.us-east-1.on.aws/';
            const data = await fetch(url).then((res) => res.json()).catch(error => console.log(error));


            console.log(data);
            setData(data);
        }

        fetchData()
    }, [])
    
    return (
    <>
    <div></div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <QuestionBox />
        <div className="flex justify-center">
            <BackButton 
                text="Anterior"
                onClick={handleBack}
            />
            <NextButton 
                text="Siguiente"
                onClick={handleNext}
            />
        </div>
      </div>
    </>
  );
}
