import PropTypes from "prop-types";

// assets
import defaultImage from "../../public/assets/image/placeholder.jpg";
import gryffindor from "../../public/assets/image/CardGryf.png";
import gyffindorLogo from "../../public/assets/icon/gryf-logo.svg";
import hufflepuff from "../../public/assets/image/CardHuff.png";
import hufflepuffLogo from "../../public/assets/icon/huff-logo.svg";
import ravenclaw from "../../public/assets/image/CardRav.png";
import ravenclawLogo from "../../public/assets/icon/rav-logo.svg";
import slytherin from "../../public/assets/image/CardSly.png";
import slytherinLogo from "../../public/assets/icon/sly-logo.svg";
import defaultCard from "../../public/assets/image/CardDefault.png";
import defaultLogo from "../../public/assets/image/Hogwarts-icon.png";

// data
import missingImg from "../db/imgData.json";

function Card({
  name,
  image,
  house,
  idwizard,
  setPickedUpCard,
  selected,
  setNext,
  isMyTurn,
}) {
  let backgroundSrc;
  let logoSrc;
  const imageSrc =
    image ||
    missingImg.find((img) => img.id === idwizard)?.image ||
    defaultImage;
  switch (house) {
    case "Gryffindor":
      backgroundSrc = gryffindor;
      logoSrc = gyffindorLogo;
      break;
    case "Hufflepuff":
      backgroundSrc = hufflepuff;
      logoSrc = hufflepuffLogo;
      break;
    case "Ravenclaw":
      backgroundSrc = ravenclaw;
      logoSrc = ravenclawLogo;
      break;
    case "Slytherin":
      backgroundSrc = slytherin;
      logoSrc = slytherinLogo;
      break;
    default:
      backgroundSrc = defaultCard;
      logoSrc = defaultLogo;
      break;
  }
  function handleClick() {
    const cardInfo = { name, house, image: imageSrc, idwizard };
    localStorage.setItem("pickedUpCard", JSON.stringify(cardInfo));
    setPickedUpCard(cardInfo);
    setNext(false);
  }
  return (
    <div
      role="button"
      tabIndex={0}
      className={`relative rounded-xl card ${isMyTurn ? "my-turn" : ""}`}
      onClick={handleClick}
      onKeyDown={handleClick}
      style={{
        filter: selected && "drop-shadow(0 2px 8px rgb(255, 244, 226, 0.75))",
        transform: selected && "scale(1.05)",
      }}
    >
      <img
        className="relative object-cover object-center w-[184px] h-[265px] rounded-xl shadow-sm"
        src={backgroundSrc}
        alt={`${house} Card background`}
      />
      <img
        className="absolute top-3 left-3 object-cover w-[160px] h-[210px] rounded-t-md"
        src={imageSrc}
        alt={name}
      />
      <img
        className="absolute bottom-2 right-1 w-10 h-10"
        src={logoSrc}
        alt={`${house} logo`}
      />
      <p className="absolute bottom-3 left-3">{name}</p>
    </div>
  );
}

Card.defaultProps = {
  idwizard: "",
  selected: false,
  setNext: () => {},
  setPickedUpCard: () => {},
  isMyTurn: false,
};

Card.propTypes = {
  idwizard: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  setNext: PropTypes.func,
  setPickedUpCard: PropTypes.func,
  isMyTurn: PropTypes.bool,
};

export default Card;
