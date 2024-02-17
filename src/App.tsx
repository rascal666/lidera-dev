
import Header from "./components/header/Header";
import './scss/App.scss'
import General from "./components/general/General";
import Information from "./components/information/Information";
import HistoryBlock from "./components/historyBlock/HistoryBlock";

function App() {

  return (
    <div className='App'>
        <Header/>
        <General/>
        <Information/>
        <HistoryBlock/>
    </div>
  )
}

export default App
