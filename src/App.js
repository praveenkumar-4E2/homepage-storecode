
import './App.css';
import NavbarPage from './pages/NavbarPage';
import RouterPage from './pages/RouterPage';
import { TopNavPage } from './pages/TopNavPage';

function App() {
  return (
    <div className="App">
      <TopNavPage/>
      <RouterPage />
      <NavbarPage/>
    
    </div>
  );
}

export default App;
