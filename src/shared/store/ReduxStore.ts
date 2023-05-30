import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit"
import { Api } from "../api/config/Api"
import { ToastReducer } from "@shared/store/global-slices/ToastSlice"
import { SettingsMenuReducer } from "@entities/Settings/model/SettingsSlice"
import { AvatarMenuReducer } from "@entities/Avatar/model/AvatarMenuSlice"
import { AuthReducer } from "@entities/Auth"
import { BalanceReducer, HardReducer, InputReducer, QuickReducer, StageReducer, TrueFalseReducer } from "@entities/Game"

const rootReducer = combineReducers({
  AvatarMenu: AvatarMenuReducer,
  SettingsMenu: SettingsMenuReducer,
  Auth: AuthReducer,
  Toast: ToastReducer,
  Stage: StageReducer,
  Balance: BalanceReducer,
  Quick: QuickReducer,
  TrueFalse: TrueFalseReducer,
  Input: InputReducer,
  Hard: HardReducer,
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

