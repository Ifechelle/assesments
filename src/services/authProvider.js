import login from "../services/auth"
import signUp from "../services/auth"

let AuthContext = React.createContext(null);

function AuthProvider({children}) {
    const value = {login}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}