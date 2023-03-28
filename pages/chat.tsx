// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return <button onClick={signInWithGoogle}>Sign in with Google</button>;
// }

// function SignOut() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return (
//     auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
//   );
// }

// function ChatRoom() {
//   const messageRef = firestore.collection("messages");
//   const query = messageRef.orderBy("createdAt").limit(25);

//   const [messages] = useCollectionData(query, { idField: "id" });

//   const [formValue, setFormValue] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });

//     setFormValue('');
//   };

//   return (
//     <>
//       <div>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} messages={msg} />)}
//       </div>

//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL} />
//       <p>{text}</p>
//     </div>
//   );
// }

// const chat = () => {
//   const [user] = useAuthState(auth);

//   return <div>{user ? <ChatRoom /> : <SignIn />}</div>;
// };

// export default chat;
import React from "react";

const chat = () => {
  return <div>chat</div>;
};

export default chat;
