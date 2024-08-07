import "./madeWith.css";

export const MadeWith = () => {
  return (
    <div className="made-with">
      Made with{" "}
      <a href="https://github.com/bellingcat/ukraine-timemap"> TimeMap</a>
      <br />
      Free software made by
      <br />
      <a href="https://forensic-architecture.org"> Forensic Architecture </a>
      <br />
      and <a href="https://www.bellingcat.com/"> Bellingcat</a>
    </div>
  );
};
