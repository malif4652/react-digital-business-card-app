import Profile from "./Profile";
import EmailButton from "./EmailButton";
import About from "./About";
import Interests from "./Interests";
import SocialIcons from "./SocialIcons";

export default function Card() {
  return (
    <div className="card">
      <Profile />
      <EmailButton />
      <div className="card--pad">
        <About />
        <br />
        <Interests />
        <SocialIcons />
      </div>
    </div>
  );
}
