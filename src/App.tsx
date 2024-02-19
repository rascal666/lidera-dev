
import Header from "./components/header/Header";
import './scss/App.scss'
import General from "./components/general/General";
import Information from "./components/information/Information";
import HistoryBlock from "./components/historyBlock/HistoryBlock";
import Business from "./components/businessBlock/business";
import Education from "./components/educationBlock/education";
import News from "./components/newBlock/News";
import Footer from "./components/footer/Footer";
import {useAppDispatch} from "./hooks/redux";
import {isDropdownAction} from './reducers/reducer'

function App() {
    const dispatch = useAppDispatch();



  return (
    <div className='App' onClick={() => dispatch(isDropdownAction(false))}>
        <Header/>
        <General/>
        <Information/>
        <HistoryBlock/>
        <Business/>
        <Education/>
        <News/>
        <Footer/>
    </div>
  )
}

export default App
