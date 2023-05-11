import PropTypes from "prop-types";

// assets
import gryffindor from "../../../public/assets/image/Gryffindor.png";
import hufflepuff from "../../../public/assets/image/Hufflepuff.png";
import ravenclaw from "../../../public/assets/image/Ravenclaw.png";
import slytherin from "../../../public/assets/image/Slytherin.png";

export default function HousesCards({ setSelectedHouse }) {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-xl w-full font-serif">Choose your house</h2>
      <p className="italic">
        Select the house you want to be in for your fight, your character will
        depend of the house you pick
      </p>
      <div className="space-y-4">
        <div className="flex gap-4 house-intro">
          <div className="house">
            <input
              type="radio"
              id="gryffindor"
              name="house"
              onChange={() => setSelectedHouse("Gryffindor")}
            />
            <label htmlFor="gryffindor">
              <img src={gryffindor} alt="Gryffindor" />
              <p className="character">
                Justice, brave, courageous, helping others, protector and
                daring.
              </p>
            </label>
          </div>
          <div className="house">
            <input
              type="radio"
              id="hufflepuff"
              name="house"
              onChange={() => setSelectedHouse("Hufflepuff")}
            />
            <label htmlFor="hufflepuff">
              <img src={hufflepuff} alt="Hufflepuff" />
              <p className="character">
                Humble, loyal and unassuming, fairness and impartiality.
              </p>
            </label>
          </div>
          <div className="house">
            <input
              type="radio"
              id="ravenclaw"
              name="house"
              onChange={() => setSelectedHouse("Ravenclaw")}
            />
            <label htmlFor="ravenclaw">
              <img src={ravenclaw} alt="Ravenclaw" />
              <p className="character">
                Analytical and logical, love of learning and intellectual
                curiosity.
              </p>
            </label>
          </div>
          <div className="house">
            <input
              type="radio"
              id="slytherin"
              name="house"
              onChange={() => setSelectedHouse("Slytherin")}
            />
            <label htmlFor="slytherin">
              <img src={slytherin} alt="Slytherin" />
              <p className="character">
                Strategic, calculating, strong sens of self-preservation.
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
HousesCards.propTypes = {
  setSelectedHouse: PropTypes.func.isRequired,
};
