import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit"
import { Api } from "../api/config/Api"
import { ToastReducer } from "@shared/store/global-slices/ToastSlice"
import { SettingsMenuReducer } from "@entities/Settings/model/SettingsSlice"
import { AvatarMenuReducer } from "@entities/Avatar/model/AvatarMenuSlice"
import { AuthReducer } from "@entities/Auth"
import { GameReducer } from "@entities/Game"

const rootReducer = combineReducers({
  AvatarMenu: AvatarMenuReducer,
  SettingsMenu: SettingsMenuReducer,
  Auth: AuthReducer,
  Toast: ToastReducer,
  Game:GameReducer,
  // QuickMath: QuickMathReducer,
  // HardMath: HardMathReducer,
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


export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>

