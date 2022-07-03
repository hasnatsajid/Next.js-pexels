import { useState, useEffect } from 'react';

import Image from './Image';

const Gallery = ({ photos, setPhotos }) => {
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const res = await fetch(url, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: '563492ad6f91700001000001a6302b3004b54911be85dfca7876986b',
            },
          });
          const data = await res.json();
          setData(data);
        } catch (err) {
          setError(err.message);
        }
      })();
    }, []);

    return { data, loading: !(data || error), error };
  };

  const useLocalStorage = (url) => {
    let { data, error, loading } = useFetch(url);

    const [saveData, setSaveData] = useState(JSON.parse(localStorage.getItem('data')));

    useEffect(() => {
      if (!data) return;
      const images = data.photos;
      const columnSize = Math.floor(images.length / 4);
      const imgLists = [];
      for (let i = 0, j = 0; i < images.length; i += columnSize, j++) {
        imgLists.push(images.slice(i, i + columnSize));
      }

      setSaveData(imgLists);
      setPhotos(imgLists);

      localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    return { data: saveData, loading, error };
  };

  const { data, loading, error } = useLocalStorage('https://api.pexels.com/v1/search?query=nature?page=1&per_page=20');
  const photoLists = data.photos;
  if (!data) return <p>Loading</p>;
  if (error) return <p>error</p>;

  return (
    <div className="gallery">
      {photos?.map((photoList, i) => (
        <div className={`gallery__column ${i % 2 === 0 ? 'tablet' : ''} `} key={i}>
          {photoList?.map((img) => (
            <Image photo={img} key={img.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
