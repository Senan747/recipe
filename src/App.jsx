import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import {Link} from 'react-router-dom';
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}>
          <Div>Home</Div>
        </Link>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Div = styled.div`
font-size: 28px;
padding: 10px;
text-decoration: none;
`

export default App;
