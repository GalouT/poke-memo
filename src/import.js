import image001 from "./images/pokemons/001.png";
import image004 from "./images/pokemons/004.png";
import image007 from "./images/pokemons/007.png";
import image025 from "./images/pokemons/025.png";
import image052 from "./images/pokemons/052.png";
import image054 from "./images/pokemons/054.png";
import image050 from "./images/pokemons/050.png";
import image132 from "./images/pokemons/132.png";
import image066 from "./images/pokemons/066.png";
import image143 from "./images/pokemons/143.png";
import image095 from "./images/pokemons/095.png";
import image063 from "./images/pokemons/063.png";

const IMAGES = [
  image001,
  image004,
  image007,
  image025,
  image052,
  image054,
  image050,
  image132,
  image066,
  image143,
  image095,
  image063,
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export { IMAGES };
