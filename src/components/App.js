import './App.css';
//import img1 from '../data/img1.png';
import Container from './itemsContainer'; //Reto 01
import { items } from '../data/items';

const App = () => {
    return (
        <div className="container">
            <div className="leftPanel">
                <div className="row subtitle">We Live By</div>
                <div className="row title"><h1>The Design Process</h1></div>
                <div className="row arrow"></div>
            </div>
            <div className="main">
                <div className="row">
                    {items.map( item => 
                        <Container 
                                title={item.title}
                                img={item.img}
                                content={item.content}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App;