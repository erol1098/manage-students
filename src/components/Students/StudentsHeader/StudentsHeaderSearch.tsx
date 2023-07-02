'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const StudentsHeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [timerId, setTimerId] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const timer = setTimeout(() => {
        router.push(`?search=${encodeURIComponent(searchTerm)}`);

        fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
          .then((response) => response.json())
          .then((data) => setSearchResults(data))
          .catch((error) => {
            console.error('Error fetching search results:', error);
          });
      }, 1000);

      setTimerId(timer);
    } else {
      setSearchResults([]);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);
  };

  return (
    <label>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Image
        src='/assets/icons/search.svg'
        alt='search'
        width={16}
        height={16}
      />
    </label>
  );
};

export default StudentsHeaderSearch;
