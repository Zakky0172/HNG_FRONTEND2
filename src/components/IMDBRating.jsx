import IMDB from "../assets/imdb.svg";

const IMDBRating = ({ children, color = "white" }) => {
  return (
    <>
      <div className="justify-start items-center gap-3 flex">
        <img src={IMDB} alt="IMDB rating" />
        <p
          className={`text-${color} text-xs font-normal font-['DM Sans'] leading-3`}
        >
          {(children * 10).toFixed(1)} / 100
        </p>
      </div>
    </>
  );
};

export default IMDBRating;
