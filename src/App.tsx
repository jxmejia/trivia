import { Global } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import globalStyles from "./styles/global";
import { QuestionsContextProvider } from "./context";
import { Home, Quiz, Results } from "./views";

function App() {
  // TODO: Add error boundary https://www.npmjs.com/package/react-error-boundary
  return (
    <>
      <Global styles={globalStyles} />
      <QuestionsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </QuestionsContextProvider>
    </>
  );
}

export default App;
