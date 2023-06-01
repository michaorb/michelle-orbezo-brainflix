// Components
import Header from './components/header/header';
import Body from 'components/body/body';
// Stylesheet
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Body">
        <Body />
      </div>
    </div>
  );
}
export default App;
