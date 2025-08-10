import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Router, Routes, Route } from 'react-router';
// import Restaurent from './components/restaurent';
import Restaurent from './components/restaurent';
import RestaurentMenu from './components/restaurentMenu';
import Search from './components/search';

import Home from './home';


function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}> </Route>
                    <Route path='/restaurant' element={<Restaurent></Restaurent>}></Route>
                    <Route path='/city/bangalore/:id' element={<RestaurentMenu></RestaurentMenu>}></Route>
                    <Route path='/city/bangalore/:id/search' element={<Search></Search>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)

// Proxy Server "https://cors-anywhere.herokuapp.com/";
// open this then work to limited time : "https://cors-anywhere.herokuapp.com/corsdemo"