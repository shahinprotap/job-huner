import mystyle from "./Style.module.css";
// import Header from "./Component/Header";
import Homepage from "./Component/Homepage";
import Tranding from "./Component/Tranding";
import Coinpage from "./Component/Coinpage";
// import PasswordGenaretor from "./Component/PasswordGenaretor";
const App = () => {
  return (
    <>
      <div className={mystyle.app}>
        {/* <Header /> */}
        {/* <PasswordGenaretor /> */}
        <Homepage />
        <Tranding />
        <Coinpage />
      </div>
    </>
  );
};

export default App;
