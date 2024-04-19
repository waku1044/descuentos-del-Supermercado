import "./index.css";
import "./assets/css/layout.css";
import Header from "./componentes/header";
import Main from "./componentes/inputs";
import Footer from "./componentes/Footer";
function App() {
  return (
    <>
      <div className="grid">
        <Header className="header"/>
        <Main  className="main"/>
        <Footer className="footer"/>
      </div>
    </>
  );
}

export default App;
