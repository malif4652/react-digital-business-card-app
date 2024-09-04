import Profile from "./Profile";
import EmailButton from "./EmailButton";
import About from "./About";
import Interests from "./Interests";

export default function Card() {
  return (
    <div className="card">
      <Profile />
      <EmailButton />
      <div className="card--pad">
        <About />
        <br />
        <Interests />
      </div>
    </div>
  );
}
