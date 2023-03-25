import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Story from "./components/Story";
import Services from "./components/Services";
import Deals from "./components/Deals";
import Maximum from "./components/Maximum";
import Instagram from "./components/Instagram";
import Lodder from "./components/Lodder";
import Contacts from "./components/Contacts";
import Constructor from "./components/Constructor";

function App() {
  return (
    <>
      <Lodder />
      <Header />
      <Story />
      <Services />
      <Deals />
      <Maximum />
      <Instagram />
      <Contacts />
      <Constructor />
    </>
  );
}

export default App;
