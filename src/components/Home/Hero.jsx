// assets
import heroImg from "../../../public/assets/image/Hogwarts.png";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-white absolute text-center text-xl space-y-2">
        <h1>Welcome to,</h1>
        <h1 className="text-2xl font-serif">Hogwarts Magic Card$</h1>
      </div>
      <img
        className="object-center object-cover max-h-96"
        src={heroImg}
        alt="hogward castle"
      />
    </div>
  );
}
