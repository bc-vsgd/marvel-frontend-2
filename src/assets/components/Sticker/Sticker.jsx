import { Link } from "react-router-dom";

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
  // _id

  //   Character sticker
  return stickerType === "character" ? (
    <div>
      <Link
        to={`/marvel/comics/${data._id}`}
        // onClick={() => {
        //   console.log("character link: click");
        // }}
      >
        <div>
          <img
            src={`${data.thumbnail.path}/portrait_small.${data.thumbnail.extension}`}
            alt="Thumbnail"
          />
          <p>{data.name}</p>
          <p>{data.description}</p>
        </div>
      </Link>
      <Link
        onClick={() => {
          console.log("character favorite link: click");
        }}
      >
        Add to favorite
      </Link>
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
        <Link
          onClick={() => {
            console.log("comic favorite link: click");
          }}
        >
          Add to favorite
        </Link>
      </div>
    )
  );
};

export default Sticker;
