import emailIcon from "./assets/email.svg";

export default function EmailButton() {
  return (
    <div className="emailButton">
      <button className="emailButton--btn">
        <img src={emailIcon} alt="email" />
        Email
      </button>
    </div>
  );
}
