import './App.css';
import Searchbar from './components/searchbar.js'
import  Banner from './components/anner.js';
import Menu from './components/menu.js';
import Product from './components/Products.js';
import Form from './components/Form.js'
import './css/bootstrap.css'

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Product/>
                <Form/>
        </div>
   </div>
   </>
  );
}

export default App;

