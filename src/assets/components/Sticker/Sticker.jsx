import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Sticker = ({ data, stickerType }) => {
  // data: results object, containing:

  // - Character:
  // comics
  // description
  // name
  // thumbnail: path, extension
  // _id

  // - Comic:
  // description
  // thumbnail: path, extension
  // title
  // _id));

  //   Character sticker
  return stickerType === "character" ? (
    <div>
      <Link to={`/marvel/comics/${data._id}`}>
        <div>
          <img
            src={`${data.thumbnail.path}/portrait_small.${data.thumbnail.extension}`}
            alt="Thumbnail"
          />
          <p>{data.name}</p>
          <p>{data.description}</p>
        </div>
      </Link>
      <p
        onClick={() => {
          // data id => string
          const newFavoriteId = JSON.stringify(data._id) + "-character";
          // change cookie string
          console.log("sticker, favorites avant: ", Cookies.get("favorites"));
          const newFavorites =
            (Cookies.get("favorites") === undefined
              ? ""
              : Cookies.get("favorites")) +
            newFavoriteId +
            ";";
          // update cookie
          Cookies.set("favorites", newFavorites);
        }}
      >
        Add to favorite
      </p>
    </div>
  ) : (
    // Comic sticker
    stickerType === "comic" && (
      <div>
        <img
          src={`${data.thumbnail.path}/portrait_small.${data.thumbnail.extension}`}
          alt="Thumbnail"
        />
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p
          onClick={() => {
            // data id => string
            const newFavoriteId = JSON.stringify(data._id) + "-comic";
            // change cookie string
            const newFavorites =
              (Cookies.get("favorites") === undefined
                ? ""
                : Cookies.get("favorites")) +
              newFavoriteId +
              ";";
            // const newFavorites = Cookies.get("favorites") + newFavoriteId;
            // update cookie
            Cookies.set("favorites", newFavorites);
          }}
        >
          Add to favorite
        </p>
      </div>
    )
  );
};

export default Sticker;
