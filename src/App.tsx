import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { Task } from './components/TaskView'
import {DataProvider} from './context/DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header/>
        <Task/>
      </DataProvider>
    </div>
  )
}

export default App
