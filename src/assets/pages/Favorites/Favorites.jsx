// Packages
import Cookies from "js-cookie";
import axios from "axios";
// Components
import Sticker from "../../components/Sticker/Sticker";

const Favorites = () => {
  const characters = [];
  const comics = [];
  const favoritesObj = {};
  // console.log("Favorites, cookies >>>>> ", Cookies.get());
  const favorites = Cookies.get("favorites");
  // console.log("Favorites, favorites >>> ", favorites);

  const favoritesArray = favorites.split(";");
  // console.log("favoritesArray", favoritesArray);
  for (let i = 0; i < favoritesArray.length; i++) {
    const favoriteId = favoritesArray[i];
    const keyValue = favoriteId.split("-");
    favoritesObj[keyValue[0]] = keyValue[1];
    // console.log("keyValue", keyValue);
    // console.log(favoriteId);
  }
  // console.log("favorites obj >> ", favoritesObj);

  for (const [key, entry] of Object.entries(favoritesObj)) {
    console.log("object.entries", key, entry);
    if (entry === "character") {
      characters.push(key);
    } else if (entry === "comic") {
      comics.push(key);
    }
  }
  console.log("favorites, characters array >>> ", characters);
  console.log("favorites, comics array >>> ", comics);

  return (
    <main>
      FAVORITES
      {characters.length !== 0 || comics.length !== 0 ? (
        <p>FAVORITES</p>
      ) : (
        <p>NO FAVORITE YET</p>
      )}
      {characters.length !== 0 && (
        <div>
          <p>CHARACTERS</p>
          <div>
            {characters.map((character, index) => {
              return (
                <Sticker key={index} data={character} stickerType="character">
                  Character
                </Sticker>
              );
            })}
          </div>
        </div>
      )}
      {/* {comics.length !== 0 && (
        <div>
          <p>COMICS</p>
          <div>
            {comics.map((comic, index) => {
              // return <div key={index}>Comic</div>;
              return (
                <Sticker key={index} data={comic} stickerType="comic">
                  Comic
                </Sticker>
              );
            })}
          </div>
        </div>
      )} */}
    </main>
  );
};

export default Favorites;
