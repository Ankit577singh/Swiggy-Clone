import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Router, Routes, Route } from 'react-router';
// import Restaurent from './components/restaurent';
import Restaurent from './components/restaurent';
import RestaurentMenu from './components/restaurentMenu';
import Search from './components/search';
import { store } from './Stores/store';
import { Provider } from 'react-redux';
import Home from './home';
import Cart from './components/cart';
import Login from './components/login';

function App(){
    return (
        <>
           <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}> </Route>
                    <Route path='/restaurant' element={<Restaurent></Restaurent>}></Route>
                    <Route path='/city/bangalore/:id' element={<RestaurentMenu></RestaurentMenu>}></Route>
                    <Route path='/city/bangalore/:id/search' element={<Search></Search>}></Route>
                    <Route path='/city/bangalore/cart' element={<Cart></Cart>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)

// Proxy Server "https://cors-anywhere.herokuapp.com/";
// open this then work to limited time : "https://cors-anywhere.herokuapp.com/corsdemo"