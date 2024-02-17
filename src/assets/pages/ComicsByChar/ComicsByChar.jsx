// Packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Sticker from "../../components/Sticker/Sticker";

const ComicsByChar = ({ marvelUrl }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { charId } = useParams();
  // console.log("comics by char, id >>>> ", charId);
  // console.log("comics by char, url >>>> ", marvelUrl);

  useEffect(() => {
    const fetchData = async (url) => {
      // console.log("comics by char, fetchData, url >>> ", `${url}/${charId}`);
      const response = await axios.get(`${url}/${charId}`);
      console.log(response.data.data);
      setData(response.data.data);
      // console.log(data);
      setIsLoading(false);
    };
    fetchData(marvelUrl);
  }, []);

  return !isLoading ? (
    <main>
      <div>
        <p>CHARACTER</p>
        <Sticker data={data} stickerType="character" />
      </div>
      <div>
        <p>COMICS</p>
        {data.comics.map((comic, index) => {
          return <Sticker data={comic} key={index} stickerType="comic" />;
        })}
      </div>
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default ComicsByChar;
