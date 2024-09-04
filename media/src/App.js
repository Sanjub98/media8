import logo from './logo.svg';
import './App.css';
import mahesh from "./images/mahesh2.webp";
import gunturkaram song from "./audios/kurchi Madathapetti.mp3";

function App() {
  return (
    <div className="App">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCz4SSlPq5IvLTDLxed6-LM1Q4RbNXUauJm2PRXZ-qkWcr3CO" alt=""></img>
    <img src="./images/mahesh1.avif" alt=""></img>
    <img src={mahesh}></img>
    <hr></hr>
    <audio src="https://wynk.in/music/album/guntur-kaaram/am_A10400DAMTEFA2405T" controls></audio>
    <audio src="./audios.kurchi Madathapetti.mp3" controls></audio>
    <audio src={gunturkaram song} controls></audio>

    </div>
  );
}

export default App;
