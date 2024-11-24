"use client";

import { useState } from "react";

export default function SendQuestionButton({
  questionData,
  userAnswer,
  userQuery,
  onSendQuestion,
  onReceiveResponse,
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
    const urlLambda =
      "https://3d25cyx4zhfawzxp7ao5l3roke0xqbdu.lambda-url.us-east-1.on.aws/";
    const agentAliasId = "3WUDBKQFAO";
    const agentId = "ZY63BV4ZTK";

    const updatedQuestionData = {
      ...questionData,
      r_usuario: userAnswer || "no-option-selected-yet",
      consulta_usuario: userQuery,
    };

    const jsonData = {
      input_text: JSON.stringify(updatedQuestionData),
      agent_alias_id: agentAliasId,
      agent_id: agentId,
    };

    console.log({ updatedQuestionData });

    try {
      const response = await fetch(urlLambda, {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
      const responseData = await response.json();
      const newChatbotMessage = responseData.response || "";
      const currentChatbotSessionId = responseData.session_id;
      if (onSessionReceived) onSessionReceived(currentChatbotSessionId);
      if (onReceiveResponse) onReceiveResponse(newChatbotMessage);
      console.log("Response:", { responseData });
    } catch (error) {
      console.error("Error sending question:", error);
    } finally {
      setIsLoading(false);
      if (onSendQuestion) onSendQuestion();
    }
  };

  return (
    <button
      onClick={sendQuestion}
      className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      disabled={isLoading}
    >
      {isLoading ? "Enviando..." : "Enviar Pregunta"}
    </button>
  );
}
