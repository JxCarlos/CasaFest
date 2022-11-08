import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './commons/theme';

//components
import { Header, Form, BodyContent  } from './components'

//context
import { AmariloProvider } from './context';

//hooks
import { useProcessData, useFormFilter } from './hooks';
import { Footer } from './components/Footer';

function App() {
  
  const projects = useProcessData();
  const formFilter = useFormFilter();

  const data = {
    ...projects,
    ...formFilter
  }

  return (
    <ThemeProvider theme={theme}>
      <AmariloProvider {...data}>
        
        <div className="App">
          <Header />
          <Form />
          <BodyContent />
          <Footer />
        </div>
      </AmariloProvider>
    </ThemeProvider>
  );
}

export default App;
