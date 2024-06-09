import './App.css';
import AuthProvider from './components/AuthContext';

function App({children}) {
  return (
    <div className="App">
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>
  );
}

export default App;
