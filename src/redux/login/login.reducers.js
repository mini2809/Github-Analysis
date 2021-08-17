import { SAVE_LOGIN } from "./login.types";

const INITIAL_STATE = {
    loginStatus: false,
    accessToken: "",
};

const reducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case SAVE_LOGIN :
            return {
                loginStatus:true,
                accessToken:action.payload.access_token
            }
        default: return state;
    }

}
export default reducer;