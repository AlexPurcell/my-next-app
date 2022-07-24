// import  React, { useState , useEffect } from 'react'

// var Today = new Date()

// export const CurrentDateTime = () => {
//     var [date,setDate] = useState(Today);
    
//     useEffect(() => {
//         var timer = setInterval(() => setDate(new Date()), 1000)
//         return function cleanup() {
//             clearInterval(timer)
//         }
    
//     });

//     return(
//         <>
        
//         <div>
//             <h2 id='timer'> Time : {date.toLocaleTimeString()}</h2>
//             <h2 id='timer'> Date : {date.toLocaleDateString()}</h2>
//         </div>
        
//         </>
//     )
// }

// export default CurrentDateTime