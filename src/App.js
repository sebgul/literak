import './App.css';
import Board from "./Board";
import {set01} from "./wordSets";

function App() {
    return (
        <div className="App">
            <Board words={set01}/>
        </div>
    );
}

export default App;
