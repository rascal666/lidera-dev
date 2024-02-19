import ReactDOM from 'react-dom/client'

import {Provider} from "react-redux";
const store = setupStore()
import {setupStore} from "./store";

import App from './App.tsx'
import '../src/scss/index.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>

)
