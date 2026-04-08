import './App.css'

// Membuat Component Header

function Header() {
  return(
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  );
}

function Content() {
  return <h1>Content</h1>
}

function Hello() {
  const nama = "Hilmi";

  return(
    <>
    <h2>Hello React</h2>
    <p>Saya { nama } - Frontend Develope</p>
    </>

  );
}

function Greetings(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Profile(props){
  return(
    <>
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
    </>
    
  );
}

function Footer() {
  return(
    <footer>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </footer>
  );
}

function App() {

  return (
    <>
    <Header />
    <Content />
    <Hello />
    <Greetings name="Budi"/>
    <Greetings name="Alice"/>
    <Profile name="Hilmi" age={21} city="Depok"/>
    <Footer />
     </>
  );

 
}

export default App
