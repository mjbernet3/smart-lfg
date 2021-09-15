import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/shared/Layout";
import Router from "components/shared/Router";
import AuthProvider from "contexts/AuthProvider";
import SocketProvider from "contexts/SocketProvider";
import { BrowserRouter } from "react-router-dom";
import theme from "utils/theme";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <SocketProvider>
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
        </SocketProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
