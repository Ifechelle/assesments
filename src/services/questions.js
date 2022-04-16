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
export const submitAnswers = async (answers, onSuccess, onFailure, isLast) => {
  const isCorrect = await checkCorrect(answers);
  answers = { isCorrect, ...answers };
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then(() => {
        if (onSuccess) {
          if (isLast) {
            const correctnumber = await countCorrect(answers.userid);
            const incorrectnumber = await countNotCorrect(answers.userid);
            await submitResults({correctnumber, incorrectnumber, userid: answers.userid})
          }
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
      .then((answers) => {
        if (onSuccess) {
          onSuccess(answers);
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
 
export const getAnswers = async (userid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("userid", "==", userid));
 
  const querySnapshot = await getDocs(q);
  const answers = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    answers[data.questionId] = data;
  });
  store.answers.set(answers);
};
 
export const checkCorrect = async ({ questionId, answer }) => {
  const db = getFirestore();
  const q = query(
    collection(db, "answers"),
    where("questionId", " == ", questionId),
    where("answer", " == ", answer)
  );
 
  const querySnapshot = await getDocs(q);
  const isCorrect = querySnapshot.size === 1;
  return isCorrect;
};
 
export const countCorrect = async (userid) => {
  const db = getFirestore();
  const q = query(
    collection(db, "submissions"),
    where("userid", " == ", userid),
    where("isCorrect", " == ", true)
  );
 
  const querySnapshot = await getDocs(q);
  const numberCorrect = querySnapshot.size;
  return numberCorrect;
};
export const countNotCorrect = async (userid) => {
  const db = getFirestore();
  const q = query(
    collection(db, "submissions"),
    where("userid", " == ", userid),
    where("isCorrect", " == ", false)
  );
 
  const querySnapshot = await getDocs(q);
  const inCorrect = querySnapshot.size;
  return inCorrect;
};
 
export const getResults = async ({ userid }) => {
  const db = getFirestore();
  const q = query(
    collection(db, "submissions"),
    where("userid", " == ", userid)
  );
 
  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    results.push(doc.data());
  });
  store.results.set(results);
};
 
const submitResults = async (results) => {
  const db = getFirestore();
    setDoc(doc(db, "results", results.userid), results, { merge: true })
      .then((d) => {
      })
      .catch((error) => {
        console.log("results not submitted", error.message);
        // ..
        throw error;
      });
};