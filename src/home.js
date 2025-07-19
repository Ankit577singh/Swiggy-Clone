import Header from './components/header';
import Food from './components/food';
import Groceries from './components/groceries';
import Dineout from './components/dineout';


export default function Home(){
    return (
        <>
            <Header></Header>
            <Food row={2} ms=''></Food>
            <Groceries></Groceries>
            <Dineout></Dineout>
        </>
    )
}