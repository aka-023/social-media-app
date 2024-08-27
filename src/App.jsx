import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostListProvider from './store/PostListProvider'
import { Outlet } from 'react-router-dom'

function App(){

  return(
    <>
    <PostListProvider>
      <div className="mainContainer">
        <div className="left">
          <Sidebar/>
        </div>

        <div className="right">
          <Header/>
          {/* children components of App will appear here... */}
          <Outlet/> 
          <Footer/>
        </div>
      </div>
    </PostListProvider>
    </>
  )
}

export default App;