// assets
import gryfBanner from "../../../public/assets/image/gryfbanner.png";
import huffBanner from "../../../public/assets/image/huffbanner.png";
import ravBanner from "../../../public/assets/image/ravenbanner.png";
import slythBanner from "../../../public/assets/image/slythbanner.png";

export default function AccountBanner() {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col gap-3 items-center">
        <img src={gryfBanner} alt="Gryffindor banner" />
        <p>12</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src={huffBanner} alt="Hyfflepuff banner" />
        <p>10</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src={ravBanner} alt="Ravenclaw banner" />
        <p>8</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src={slythBanner} alt="Slytherin banner" />
        <p>23</p>
      </div>
    </div>
  );
}
