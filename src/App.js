import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './components/styled/GlobalStyles';
import useLocalStorage from './hooks/useLocalStorage';
import useAxiosFetch from './hooks/useAxiosFetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './pages/Index';
import Details from './pages/Details';

const api_url = 'https://restcountries.com/v3.1/all';

const App = () => {
  const { data, fetchError, isLoading } = useAxiosFetch(api_url);
  const [allCountries, setAllCountries] = useState([]);
  const [filterValue, setFilterValue] = useState('all');
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    setAllCountries(data);
  }, [data]);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Header
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Routes>
            <Route path='/' element={
              <Index
                allCountries={allCountries}
                fetchError={fetchError}
                isLoading={isLoading}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />}
            />
            <Route path='details' element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App