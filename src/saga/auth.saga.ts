import { call, fork, take } from "redux-saga/effects";
import { loginPending, logout } from "../redux/user/user.slide";
import { ILogin } from "../types/backend";
import { PayloadAction } from "@reduxjs/toolkit";

const authorize = (email: string, password: string) => {
    console.log('start login')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login succeed")
            if (email === 'pildo@gmail.com' && password === '123') {
                localStorage.setItem('access_token', email)
                resolve('oke')
            }
            resolve('nothing')
        }, 5000)
    })
}

function* authSaga() {
    while (true) {
        const action: PayloadAction<ILogin> = yield take(loginPending)
        yield take(loginPending)
        // yield call(authorize, action.payload.email, action.payload.password)

        yield fork(authorize, action.payload.email, action.payload.password)
        yield take([logout, 'LOGIN_ERROR'])
        console.log(">>> do logout")
    }
}
export default authSaga;