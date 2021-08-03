import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Issues from "./components/Issues";
import IssuesDetails from "./components/IssuesDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Issues} />
        <Route exact path="/issues/:id" component={IssuesDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
