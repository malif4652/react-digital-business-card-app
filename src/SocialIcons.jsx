import reactLogo from "./assets/react.svg";
import facebookLogo from "./assets/img/facebook.svg";
import twitterLogo from "./assets/img/twitter.svg";
import linkedinLogo from "./assets/img/linkedin.svg";
import pinterestLogo from "./assets/img/pinterest.svg";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <img src={facebookLogo} alt="" />
      <img src={twitterLogo} alt="" />
      <img src={linkedinLogo} alt="" />
      <img src={pinterestLogo} alt="" />
    </div>
  );
}
