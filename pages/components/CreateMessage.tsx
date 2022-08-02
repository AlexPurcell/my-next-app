import React, { useState } from "react";




export const CreateMessage = () => {
    const [message, setMessage] = useState<any>(null)

  const url = "http://localhost:3000/api/threads/new";

  const addMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValues: any = e.target;
    console.log("name", formValues.name.value);
    console.log("number", formValues.number.value);

    const name: string = formValues.name.value;
    const number: number = formValues.number.value;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name: name, number: number }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const actualData = await response.json();
    const messageData = {name: actualData.messageObj.name, number: actualData.messageObj.number}
    console.log("Response from API Route:", actualData);
    setMessage(messageData)

  };

  

  return (
    <>
      <div>
        {message !== null && <h1>{message?.name} {message?.number}</h1>}
        <form onSubmit={(e) => addMessage(e)}>
          <input
            id="name"
            // value={messages.name}
            placeholder="Name"
            type="text"
          ></input>
          <input
            id="number"
            // value={number}
            placeholder="number"
            type="number"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateMessage;