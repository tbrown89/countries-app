import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './components/styled/GlobalStyles';
import useLocalStorage from './hooks/useLocalStorage';
import useAxiosFetch from './hooks/useAxiosFetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './pages/Index';
import Details from './pages/Details';
import { Container } from './components/styled/Container';
import { Status } from './components/styled/Status';

const api_url = 'https://restcountries.com/v2/all';

const App = () => {
  const { data, fetchError, isLoading } = useAxiosFetch(api_url);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterByRegion, setFilterByRegion] = useLocalStorage('region', 'all');
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // FILTER BY REGION & SEARCH
  useEffect(() => {
    const regionFilterHandler = (country) => {
      if (filterByRegion === 'all') {
        return country;
      }
      return country.region.toLowerCase() === filterByRegion;
    }

    const searchFilterHandler = (country) => {
      if (searchValue === '') {
        return country;
      }
      return country.name.toLowerCase().includes(searchValue.toLowerCase())
    }

    setFilteredCountries(data.filter(regionFilterHandler).filter(searchFilterHandler))
  }, [data, filterByRegion, searchValue]);

  // TOGGLE DARK & LIGHT THEME
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
          {isLoading &&
            <Container>
              <Status>Loading...</Status>
            </Container>
          }
          {fetchError &&
            <Container>
              <Status error><span>Page not found!</span> {fetchError}</Status>
            </Container>
          }
          {!isLoading && !fetchError &&
            <Routes>
              <Route path='/' element={
                <Index
                  filterByRegion={filterByRegion}
                  setFilterByRegion={setFilterByRegion}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  filteredCountries={filteredCountries}
                />}
              />
              <Route path='details/:name' element={<Details data={data} />} />
            </Routes>
          }

        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App