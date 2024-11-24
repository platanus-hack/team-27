"use client";

import { useState } from "react";

export default function SendQuestionButton({
  questionData,
  userAnswer,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questionData: any;
  userAnswer: string;
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
      r_usuario: userAnswer,
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
      console.log("Response:", responseData);
    } catch (error) {
      console.error("Error sending question:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={sendQuestion}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Enviando..." : "Enviar Pregunta"}
    </button>
  );
}
