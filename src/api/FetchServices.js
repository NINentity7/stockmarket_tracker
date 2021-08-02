import { useState, useEffect, useCallback } from 'react';

function FetchServices(url) {
  const [companies, setCompanies] = useState([]);

  const getCompanies = useCallback(async () => {
    const resp = await fetch(url);
    const companiesList = await resp.json();
    setCompanies(companiesList);
  }, [url]);

  useEffect(() => {
    getCompanies();
  }, [url, getCompanies]);

  return { companies };
}

export default FetchServices;