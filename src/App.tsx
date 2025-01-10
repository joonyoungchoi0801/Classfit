// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient } from '@tanstack/react-query';
import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return <Router />;
}

export default App;
