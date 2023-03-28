import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit"
import { Reducer } from "redux"
import { Api } from "../api/config/Api"
import { AvatarMenuReducer } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"

const rootReducer: Reducer = combineReducers({
  AvatarMenu: AvatarMenuReducer,
  // ViewMode: ViewModeModel.ViewModeReducer,
  [Api.reducerPath]: Api.reducer

})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware =>
      getDefaultMiddleware().concat(Api.middleware)),
    devTools: true
  })
}

export type RootState = ReturnType<typeof rootReducer>

export const store = setupStore()


