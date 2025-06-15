import "./Button.scss";

export const Button = () => {
  return (
    <div className="button">
      <p className="button__text">Zobrazit více</p>
      <img src="/arrow-right.svg" className="button__icon" alt="icon arrow" />
    </div>
  );
};
