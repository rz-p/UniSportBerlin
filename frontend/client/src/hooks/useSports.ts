
import { useState, useEffect, useCallback } from 'react';
import { getAllSports } from '../actions/SportActions'; 
import { Sport } from "../common/types";

type FetchState = 'initial' | 'loading' | 'success' | 'error';

export const useSports = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [state, setState] = useState<FetchState>('initial');
  const [error, setError] = useState<Error | null>(null);

  const fetchSports = useCallback(async () => {
    setState('loading');

    // to test loading state 
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    try {
      const data = await getAllSports();
      if (data) {
        setSports(data);
        setState('success');
      } else {
        throw new Error('No data received');
      }
    } catch (e) {
      setError(e as Error);
      setState('error');
    }
  }, []);

  useEffect(() => {
    fetchSports();
    // call the refresh function every 60 seconds
    const refresh = setInterval(fetchSports, 60000); 

    return () => clearInterval(refresh); 
  }, [fetchSports]);

  return { sports, state, error, refresh: fetchSports };
};
