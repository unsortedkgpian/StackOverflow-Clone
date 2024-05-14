import * as api from "../api";

export const signup = (authData, navigate) => async dispatch => {
    try {
        const { data } = await api.signUp(authData);
        dispatch({ type: "AUTH", data });
        dispatch()
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const login = (authData, navigate) => async dispatch => {
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: "AUTH", data });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
