// Packages
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Sticker from "../../components/Sticker/Sticker";

const Characters = ({ marvelUrl }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log(
        //   "characters, response.data.data.results >>>> ",
        //   response.data.data.results
        // );
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
      <div>
        {data.results.map((result, index) => {
          return <Sticker key={index} data={result} stickerType="character" />;
        })}
      </div>
    </main>
  ) : (
    <main>Loading</main>
  );
};

export default Characters;
