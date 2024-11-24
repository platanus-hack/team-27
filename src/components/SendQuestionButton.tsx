"use client";

import axios from "axios";
import { useState } from "react";

export default function SendQuestionButton({
  // eslint-disable-next-line
  questionData,
  userAnswer,
  // eslint-disable-next-line
  userQuery,
  onSendQuestion,
  onReceiveResponse,
  // eslint-disable-next-line
  onSessionReceived,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questionData: any;
  userAnswer?: string;
  userQuery: string;
  onSendQuestion?: () => void;
  onReceiveResponse?: (response: string) => void;
  onSessionReceived?: (sessionId: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const sendQuestion = async () => {
    setIsLoading(true);
    const urlLambda = "https://hack-backend-gwys.onrender.com/ai-tutor/";
    /*const agentAliasId = "3WUDBKQFAO";
    const agentId = "FJZGDZOHZV";

    const updatedQuestionData = {
      ...questionData,
      r_usuario: userAnswer || "no-option-selected-yet",
      consulta_usuario: userQuery,
    };

    const jsonData = {
      input_text: JSON.stringify(updatedQuestionData),
      agent_alias_id: agentAliasId,
      agent_id: agentId
    };

    console.log({ updatedQuestionData });*/

    const body = {
      question: userAnswer ?? userQuery,
    };
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://hack-backend-gwys.onrender.com",
      },
    };
    console.log({ body, options });

    try {
      console.log(userAnswer, userQuery);
      const responseData = await axios
        .post(urlLambda, body, options)
        .then((res) => {
          console.log(res);
          if (res.status === 200) return res.data;
        })
        .catch((error: Error) => {
          console.error("Error sending question:", error);
        });

      /*const newChatbotMessage = responseData?.response || "";
      const currentChatbotSessionId = responseData?.session_id;
      if (onSessionReceived) onSessionReceived(currentChatbotSessionId);*/
      console.log(responseData);
      if (onSendQuestion) onSendQuestion();
      if (onReceiveResponse) onReceiveResponse(responseData?.msg);
    } catch (error) {
      console.error("Error sending question:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={sendQuestion}
      className="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      disabled={isLoading}
    >
      {isLoading ? "Enviando..." : "Enviar"}
    </button>
  );
}
