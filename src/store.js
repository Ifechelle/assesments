import { createState } from "@hookstate/core"

export const initial = {
    user: {isAuthenticated:false},
    questions:[],
    answers: {}
}
const store = createState(initial)
export default store