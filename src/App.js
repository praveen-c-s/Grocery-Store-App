import logo from './logo.svg';
import './App.css';
import AddGro from './components/AddGro';
import SearchGro from './components/SearchGro';
import DeleteGro from './components/DeleteGro';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (


    <BrowserRouter>
    <Routes>

<Route path="/" element= { <AddGro/>} />
<Route path="/search" element= { <SearchGro/>} />
<Route path="/delete" element= { <DeleteGro/>} />
<Route path="/view" element= { <View/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
