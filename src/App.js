import './App.css';

import Home from './pages/home';
import { Header, Footer } from './layout/index';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
