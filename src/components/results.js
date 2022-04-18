// import { React,  useState, useEffect } from "react";
// import { getFirestore } from 'firebase';
// import store from "../store";



// function Results() {
//     const [user, setUser] = useState("")
//     const db = getFirestore();
//     const { results } = useState(store)
//     const uid = user.uid.get()
//     // const [results, showResults] = useState(null);

//     async function fetchUserData(id) {
//         const response = await fetch("/showResults" + uid);
//         setUser(await response.json());
//     }

//     useEffect(() => {
//         fetchUserData(results);
//     }, []);

//     if (!uid) {
//         return "loading...";
//     }

//     return (
//         <details>
//             <summary>{uid.results.get()}</summary>
//         </details>
//     );
// }

// export default Results;