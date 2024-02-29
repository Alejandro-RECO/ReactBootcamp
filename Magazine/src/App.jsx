import './App.scss'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
 
function App() {

  return (
    <section className='container'>
      <div>
        <Header/>
        <Main/>
      </div>
      <div>
       <Footer/>
      </div>
    </section>
  )
}

export default App
