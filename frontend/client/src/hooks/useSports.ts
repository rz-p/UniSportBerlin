import { useState, useEffect, useCallback } from 'react';
import { getAllSports } from '../actions/SportActions';
import { Sport } from '../common/types';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

const useSports = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [state, setState] = useState<FetchState>('initial');
  const [error, setError] = useState<Error | null>(null);

  const fetchSports = useCallback(async () => {
    setState('loading');

    // to test loading state 
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    setError(null);
    try {
      const sportsData = await getAllSports();
      if (sportsData) {
        setSports(sportsData);
        setState('success');
      } else {
        throw new Error('No sports data returned from the server.');
      }
    } catch (error: any) {
      setError(error);
      setState('error');
    }
  }, []);

  useEffect(() => {
    fetchSports();
  }, [fetchSports]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSports();
      console.log('Refreshing sports data...');
    }, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [fetchSports]);

  return { sports, state, error, refresh: fetchSports };
};

export default useSports;
