import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Header from "./component/common/Header";
import Article from "./component/pages/Article";
import { icons } from "./assets/icons";
import Footer from "./component/common/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingWrapper
            isDark={isDark}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <LoadingImage
              src={icons.loading}
              alt="Loading..."
              initial={{ scale: 1 }}
              animate={{ scale: 1.5, transition: { duration: 0.6 } }}
              exit={{ scale: 1, transition: { duration: 0.6 } }}
            />
          </LoadingWrapper>
        )}
      </AnimatePresence>

      {!isLoading && (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Header />
          <Article />
          <Footer />
          {/* <button onClick={toggleTheme}>모드 변경</button> */}
        </ThemeProvider>
      )}
    </>
  );
}

const LoadingWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props ? "#fff" : "000")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoadingImage = styled(motion.img)`
  width: 120px;
  height: 120px;
`;

export default App;
