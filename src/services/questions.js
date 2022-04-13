import { getDocs, getFirestore, collection, where, query, doc, setDoc, addDoc } from "firebase/firestore";
import store from "../store";


export const getListOfQuestions = async () => {
  const db = getFirestore();
  const q = query(collection(db, "questions"));

  const querySnapshot = await getDocs(q);
  const questions = []
  querySnapshot.forEach((doc) => {
    questions.push(doc.data())
  });
  store.questions.set(questions)
}
export const submitAnswers = async (answers, onSuccess, onFailure) => {
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then(() => {
        if (onSuccess) {
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log("emailNotSent");
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  } else {
    addDoc(collection(db, "submissions"), answers)
      .then((answerz) => {
        if (onSuccess) {
          onSuccess(answerz);
        }
      })
      .catch((error) => {
        console.log(error.message);
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  }
 };

 export const getAnswers = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("uid", "==", uid));
  
  const querySnapshot = await getDocs(q);
  const answers = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    data.id=doc.id
    answers[data.questionId] = data
  });
  store.answers.set(answers);
  console.log(answers, "+++")
 };
 

export const checkCorrect = async (questionId, answerId) => {
  const db = getFirestore();
  const q = query(collection(db, "answers"),
    where("questionId", "==", questionId),
    where("answerId", "==", answerId));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}