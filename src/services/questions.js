import { collection, query, where, getDocs, getFirestore, doc, setDoc, addDoc } from "firebase/firestore";
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
export const submitAnswers = async (answers, onSuccess, isLast, onFailure,) => {
  const isCorrect = await checkCorrect(answers)
  answers = { isCorrect, ...answers }
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then((d) => {
        if (onSuccess) {
          if (isLast) {
            const calculateResults = async () => {
              const numberOfCorrect = await countCorrect(answers.uid)
              const numberOfIncorrect = await countIncorrect(answers.uid)
              await submitResults({ numberOfCorrect, numberOfIncorrect, uid: answers.uid })
            }
            calculateResults()
          }
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log("emailNotSent", error.message);
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  } else {
    addDoc(collection(db, "submissions"), answers)
      .then((d) => {
        if (onSuccess) {
          answers = { id: d.id, ...answers }
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
export const checkCorrect = async ({ questionId, answer }) => {
  const db = getFirestore();
  const q = query(collection(db, "answers"),
    where("questionid", "==", questionId),
    where("answer", "==", answer?.toLowerCase()));
 
  const querySnapshot = await getDocs(q);
  const isCorrect = querySnapshot.size === 1
  return isCorrect
}
 
export const getAnswers = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("uid", "==", uid));
 
  const querySnapshot = await getDocs(q);
  const answers = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    data.id = doc.id
    answers[data.questionId] = data
  });
  store.answers.set(answers);
};
 
export const countCorrect = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"),
    where("isCorrect", "==", true),
    where("uid", "==", uid));
 
  const querySnapshot = await getDocs(q);
  const correct = []
  querySnapshot.forEach((doc) => {
 
    correct.push(doc.data())
 
  });
  return correct.length
 
 
};
 
export const countIncorrect = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"),
    where("isCorrect", "==", false),
    where("uid", "==", uid));
 
    const querySnapshot = await getDocs(q);
    const incorrect = []
    querySnapshot.forEach((doc) => {
 
      incorrect.push(doc.data())
 
    });
    return incorrect.length
 
 
};
 
export const showResults = async ( uid ) => {
  const db = getFirestore();
  try {
    const q = query(collection(db, "results"),
      where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const results = []
    querySnapshot.forEach((doc) => {
 
      results.push(doc.data())
 
    });
    store.results.set(results)
  } catch (e) {
    console.log(e.message)
  }
}
 
const submitResults = async (results) => {
  const db = getFirestore();
  setDoc(doc(db, "results", results.uid), results, { merge: true })
    .then((d) => {
    })
    .catch((error) => {
      console.log("resultsNotSubmitted", error.message);
      throw error
    });
};
