import User from "./components/User";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <h1>Tan Stack</h1>
      <User/>
    </ChakraProvider>
  );
}

export default App;
