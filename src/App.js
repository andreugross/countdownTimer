import './style.css'
import Timer from './components/Timer';
import Onboarding from './components/Onboarding';


function App() {
  return (
    <div className="container">
      <Onboarding />
      <Timer />
    </div>
  );
}

export default App;
