import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/app/appSlice'
import modalReducer from '../redux/app/modalSlice'


export default configureStore({
  reducer: {
    app:  appReducer,
    modal: modalReducer
  }
})