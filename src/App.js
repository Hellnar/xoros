import { QueryClient, QueryClientProvider} from "react-query";
import Home from "./components/pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesPage from "./components/pages/ActivitiesPage";
import ResultsPage from "./components/pages/ResultsPage";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

function App() {
    return (
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/activities" element={<ActivitiesPage />}/>
                            <Route path="/results" element={<ResultsPage />}/>
                        </Routes>
                </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
