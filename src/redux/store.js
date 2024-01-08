import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/app/appSlice'


export default configureStore({
  reducer: {
    app:  appReducer
  }
})