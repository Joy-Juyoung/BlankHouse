import React, { useState, useEffect } from 'react';

const MainInfiniteScroll = ({ RoomData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchDataAndAppend = async () => {
      setIsLoading(true);
      const newData = await RoomData(page);
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    };

    fetchDataAndAppend();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [RoomData, page]);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default MainInfiniteScroll;
