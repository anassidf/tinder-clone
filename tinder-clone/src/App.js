
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// ? BEM class naming convention

function App() {
  return (
    <div className="app">
    
    {/* Header */}
    
    <Header/>

    {/* Body */}
    <Body/>
    {/* Footer */}
    <Footer/>
    
    </div>
  );
}

export default App;
