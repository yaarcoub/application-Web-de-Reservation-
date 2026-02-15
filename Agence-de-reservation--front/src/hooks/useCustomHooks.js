import { useState, useCallback } from 'react';

// Hook pour gérer les états de requête API
export const useApi = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setStatus('pending');
      setValue(null);
      setError(null);
      try {
        const response = await asyncFunction(...args);
        setValue(response);
        setStatus('success');
        return response;
      } catch (err) {
        setError(err);
        setStatus('error');
        throw err;
      }
    },
    [asyncFunction]
  );

  if (immediate) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      execute();
    });
  }

  return { execute, status, value, error };
};

// Hook pour gérer le localStorage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};

// Hook pour la pagination
export const usePagination = (items, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = useCallback((page) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  }, [totalPages]);

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
  };
};

// Hook pour le débogage
export const useDebug = (componentName, props) => {
  if (import.meta.env.VITE_ENABLE_DEBUG) {
    console.log(`[${componentName}]`, props);
  }
};

// Hook pour les événements de fenêtre
export const useWindowEvent = (eventName, callback) => {
  useState(() => {
    window.addEventListener(eventName, callback);
    return () => window.removeEventListener(eventName, callback);
  }, [eventName, callback]);
};

// Hook pour les délais
export const useTimeout = (callback, delay) => {
  const savedCallback = useState(() => callback);
  const savedDelay = useState(() => delay);

  useState(() => {
    if (delay === null) return;

    const id = setTimeout(savedCallback.current, delay);

    return () => clearTimeout(id);
  }, [savedCallback, savedDelay]);
};
