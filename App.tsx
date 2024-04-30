
import AppNavigation from "./src/navigation/AppNavigation";
import { applyMiddleware, createStore } from "redux";
import  {thunk}  from "redux-thunk";
import store from "./src/redux/reducer";
import { Provider } from "react-redux";
import { Store } from "redux";

const GlobalState = createStore(store,applyMiddleware(thunk))
export default function App() {
  return (

  <Provider store={GlobalState}>
    <AppNavigation />
  </Provider>
  )
}
