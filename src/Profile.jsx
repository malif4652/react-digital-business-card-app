import profile from "./assets/img/profile.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <img className="profile--image" src={profile} alt="profile" />
      <h1>Md. Alif Dewan</h1>
      <h3>Frontend Developer</h3>
      <p>malifd.website</p>
    </div>
  );
}
