import { useParams } from "react-router-dom";

const ComicsByChar = () => {
  const { charId } = useParams();
  console.log("comics by char, id >>>> ", charId);
  return <main>ComicsByChar</main>;
};

export default ComicsByChar;
