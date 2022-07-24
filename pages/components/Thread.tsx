import React, { useState } from 'react'


export const Thread = () => {
    const url = 'http://localhost:3000/api/threads/new'
    const [data, setData] = useState({
        name: "",
        iduser: ""
    })

    const submitThread = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const actualData = await response.json()
        console.log(actualData)
    }

    function handle(e: React.ChangeEvent<HTMLInputElement>) {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return(
    <>
    <div>
        <form onSubmit={(e)=> submitThread(e)}>
            <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Name" type="text"></input>
            <input onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
            <button>Submit</button>
        </form>
    </div>
    </>
)

}

export default Thread
