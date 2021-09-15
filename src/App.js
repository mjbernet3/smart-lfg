import Router from "components/shared/Router";
import AuthProvider from "contexts/AuthProvider";
import SocketProvider from "contexts/SocketProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
