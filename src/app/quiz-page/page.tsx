'use client'
import { useEffect, useState } from "react";



export default function PageQuiz() {
    const [data, setData] = useState<any>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);


    useEffect(() => {
        const fetchData = async () => {
          const url = 'https://v7574x625rfp77q6wjzpyk6s7i0cdrho.lambda-url.us-east-1.on.aws/';
          try {
            const response = await fetch(url);
            console.log(response)
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return (
        <>
        <div className="flex justify-center container mx-auto p-4">
            <div>
                <h1>Pregunta</h1>
                
            </div>
            <div>
                Opciones

            </div>
        </div>
        </>
    );

}