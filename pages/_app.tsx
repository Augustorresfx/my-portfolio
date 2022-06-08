import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
const App: React.FC<AppProps> = ({Component, pageProps}) => {

  return (
    <ChakraProvider>
      
        <Layout>
          <Component {...pageProps}/>
        </Layout>
       
    </ChakraProvider>
  );
};

export default App;
