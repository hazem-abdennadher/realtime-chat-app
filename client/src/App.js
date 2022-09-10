import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Avatar from './pages/Avatar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
