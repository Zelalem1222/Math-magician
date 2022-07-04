import './App.css';

function Welcome(props) {
  return (
    <h1>
      Hello,
      {props.name}
    </h1>
  );
}

function App(){
  return (
    <div>
    <Welcome name='Zola'/>
    <Welcome name='Zola'/>
    <Welcome name='Zola'/>
    </div>
  )
}

export default App;
