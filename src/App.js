import './App.css';
import SearchBar from './Components/SearchBar';
import github from './Assets/github.png'

const App =()=>  {

  return (
    <div className='app'>
     <div className='header'>
       <div><h3>Search Github User App</h3></div>
       <div><img src={github} alt='github logo' height='40px' width='40x' /></div>
     </div>
     
       <SearchBar /> 
    </div>
  );
}

export default App;
