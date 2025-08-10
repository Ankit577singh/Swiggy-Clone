import Header from './components/header';
import Food from './components/food';
import Groceries from './components/groceries';
import Dineout from './components/dineout';
import Footer from './components/footer';


export default function Home(){
    return (
        <>
            <Header></Header>
            <Food row={2} ms='Explore our menu'></Food>
            <Groceries></Groceries>
            <Dineout></Dineout>
            <Footer></Footer>
        </>
    )
}