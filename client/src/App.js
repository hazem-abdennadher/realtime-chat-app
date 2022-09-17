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
        <Route path="https://chatdotio.netlify.app" element={<Chat />} />
        <Route
          path="https://chatdotio.netlify.app/avatar"
          element={<Avatar />}
        />
        <Route
          path="https://chatdotio.netlify.app/register"
          element={<Register />}
        />
        <Route path="https://chatdotio.netlify.app/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
