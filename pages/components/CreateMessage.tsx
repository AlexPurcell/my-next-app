import React, { useState, useEffect } from "react";



export const CreateMessage = () => {
    const [message, setMessage] = useState<any>(null)
    const [posts, setPosts] = useState<Array<any>>([])


  const url = "http://localhost:3000/api/threads/new";
  const secondUrl = "http://localhost:3000/api/threads/features";


  const addMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValues: any = e.target;
    console.log("name", formValues.name.value);
    console.log("Request", formValues.request.value);

    const name: string = formValues.name.value;
    const request: string = formValues.request.value;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name: name, request: request }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    latestFeatureRequests()
  };
  
  const latestFeatureRequests = async () => {
    const response = await fetch(secondUrl, {
      method: "POST",
      body: JSON.stringify({ posts }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const postsResponse = await response.json();
    setPosts(postsResponse)
  }

  useEffect(() => {
    latestFeatureRequests()
}, []);


// LEAVING OFF ON FIXING THE ARRAY / MAKING A LOOP TO SHOW ALL THE POSTDATA NAMES INSIDE THE <h1></h1>

  return (
    <>
      <div>
        <div>
        {message !== null && <h1>{message?.name} {message?.request}</h1>}
        </div>
        <div>
          {<div>{posts.map((post) => {
            return (<div key={post.id}><label htmlFor="">Title</label><h1>{post.name}</h1></div>)
          })}</div>}
        </div>
        <form onSubmit={(e) => addMessage(e)}>
          <input
            id="name"
            // value={messages.name}
            placeholder="Name"
            type="text"
          ></input>
          <input
            id="request"
            // value={number}
            placeholder="Request"
            type="text"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateMessage;