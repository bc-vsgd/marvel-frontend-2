// Packages
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Sticker from "../../components/Sticker/Sticker";

const Comics = ({ marvelUrl, favorites, setFavorites }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log("comics, response.data.data >>>>> ", response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };
    fetchData(marvelUrl);
  }, []);

  return !isLoading ? (
    <main>
      {data.results.map((result, index) => {
        return (
          <Sticker
            key={index}
            data={result}
            stickerType="comic"
            favorites={favorites}
            setFavorites={setFavorites}
          />
        );
      })}
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default Comics;
