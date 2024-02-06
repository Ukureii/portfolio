import React, { useState, useEffect } from 'react';

export default function useRemoteData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);

            if (result.ok === true) {
            const jsonData = await response.json();
            setData(jsonData);
            } else {
            throw new Error('Impossible de contacter le serveur');
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
