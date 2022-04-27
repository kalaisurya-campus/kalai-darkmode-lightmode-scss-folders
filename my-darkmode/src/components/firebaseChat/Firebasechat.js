// import React, { useState, useRef } from "react";
// // import firebase from 'firebase';
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import "./styles/Fires.scss";
// firebase.initializeApp({
//     apiKey: "AIzaSyB0XbzF0DH9zpEKibxOxtrw49aX6iRE_FM",

//     authDomain: "fir-chat-users.firebaseapp.com",

//     projectId: "fir-chat-users",

//     storageBucket: "fir-chat-users.appspot.com",

//     messagingSenderId: "84146428975",

//     appId: "1:84146428975:web:d688984992fe9771e67ada",
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function Firebasechat(props) {
//     const [user] = useAuthState(auth);
//     return (
//         <div>
//             <header>
             
//                 <SignOut />
//             </header>
//             {user ? <ChatRoom /> : <SignIn />}
//         </div>
//     );
// }
// function ChatRoom() {
//     const dummy = useRef();
//     const messagesRef = firestore.collection("messages");
//     const query = messagesRef.orderBy("createdAt");

//     const [messages] = useCollectionData(query, { idField: "id" });

//     const [formValue, setFormValue] = useState("");

//     const sendMessage = async (e) => {
//         e.preventDefault();

//         const { uid, photoURL } = auth.currentUser;

//         await messagesRef.add({
//             text: formValue,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//             uid,
//             photoURL,
            
//         });

//         setFormValue("");
//         dummy.current.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <>
//             <main className="box">
//                 {messages &&
//                     messages.map((msg) => (
//                         <ChatMessage key={msg.id} message={msg} />
//                     ))}

//                 <span ref={dummy}></span>
//             </main>

//             <form onSubmit={sendMessage}>
//                 <input
//                     value={formValue}
//                     onChange={(e) => setFormValue(e.target.value)}
//                     placeholder="Enter Your Message"
//                 />

//                 <button type="submit" disabled={!formValue}>
//                     Send
//                 </button>
//             </form>
//         </>
//     );
// }

// function SignIn() {
//     const signInWithGoogle = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         return auth.signInWithPopup(provider);
//     };
//     return (
//         <div>
//             <button className="sign-in" onClick={()=>signInWithGoogle()}>
//                 Sign In
//             </button>
//         </div>
//     );
// }

// function SignOut() {
//     return (
//         auth.currentUser && (
//             <button className="sign-out" onClick={() => auth.signOut()}>
//                 Sign Out
//             </button>
//         )
//     );
// }

// function ChatMessage(props) {
//     const { text, uid, photoURL,name } = props.message;

//     const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

//     return (
//         <>
//             <div className={`message ${messageClass}`}>
//                 <img
//                     src={
//                         photoURL ||
//                         "https://api.adorable.io/avatars/23/abott@adorable.png"
//                     }
//                 />
//                 <p>{text}</p>
               
//             </div>
//         </>
//     );
// }

// export default Firebasechat;
