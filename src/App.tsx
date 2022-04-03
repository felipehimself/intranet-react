import HeaderLine from './components/HeaderLine';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroContainer from './components/HeroContainer';
import GlobalStyle from './components/GlobalStyle';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderLine />
      <Sidebar />
      <Header />
      <HeroContainer />
      <UserContainer/>
    </>
  );
}

export default App;
