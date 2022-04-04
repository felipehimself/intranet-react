import HeaderLine from './components/HeaderLine';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroContainer from './components/HeroContainer';
import GlobalStyle from './components/GlobalStyle';
import GeneralContainer from './components/GeneralContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderLine />
      <Sidebar />
      <Header />
      <HeroContainer />
      <GeneralContainer />
    </>
  );
}

export default App;
