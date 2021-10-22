import { Profile,ProfileText,HeaderContainer, HeaderText, ProfileImg } from "./layouts.styled";
import profilePhoto from "../assets/profile.jpg";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Todo App</HeaderText>
      <Profile>
        <ProfileText>elifnurkarakoc</ProfileText>
        <ProfileImg src={profilePhoto} alt="profile" />
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
