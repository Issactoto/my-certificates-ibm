import './App.css';

import CertTable from './pages/landing';
import Header from './components/header';
import Footer from './components/footer'; 
import "./index.scss"
function App() {
  return (
    <div className="App">
      <Header />

        <body>
          <CertTable />
        </body>
      <Footer /> 
    </div>
  );
}

export default App;