import "./App.css";
import AntDesign from "./components/ant-design/AntDesign";
import ModuleCss from "./components/module-css/ModuleCss";
import MoreCoolLibraries from "./components/more-cool-libraries/MoreCoolLibraries";
import StyledComponents from "./components/styled-components/StyledComponents";
import Tailwind from "./components/tailwind/Tailwind";

function App() {
  return (
    <div className="app-container flex flex-col">
      <p>Tailwind:</p>
      <Tailwind />
      <p>Ant Design:</p>
      <AntDesign />
      <p>Module CSS:</p>
      <ModuleCss />
      <p>Styled components:</p>
      <StyledComponents />
      <p>More cool libraries:</p>
      <MoreCoolLibraries />
    </div>
  );
}

export default App;
