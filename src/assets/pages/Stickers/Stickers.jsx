// Packages
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Sticker from "../../components/Sticker/Sticker";

const Stickers = ({ marvelUrl, stickerType }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log("stickers, results >>>> ", response.data.data.results);
        setData(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };
    fetchData(marvelUrl);
  }, [isLoading]);

  return !isLoading ? (
    <main>
      <h1>{`${stickerType}s`}</h1>
      <div>
        {data.results.map((result, index) => {
          return (
            <Sticker key={index} data={result} stickerType={stickerType} />
          );
        })}
      </div>
    </main>
  ) : (
    <main>Loading</main>
  );
};

export default Stickers;
