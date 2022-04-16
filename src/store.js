import { createState } from "@hookstate/core"

export const initial = {
    user: {isAuthenticated:false},
    questions: [],
    answers: {},
    results: []
}
const store = createState(initial)
export default store