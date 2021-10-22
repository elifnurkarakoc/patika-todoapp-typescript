import {
  Avatar,
  AvatarStatus,
  Profile,
  ProfileText,
  HeaderContainer,
  HeaderText,
  AvatarImg,
} from "./layouts.styled";
import profilePhoto from "../assets/profile.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Todo App</HeaderText>
      <Profile>
        <ProfileText>elifnurkarakoc</ProfileText>
        <Avatar>
          <AvatarImg src={profilePhoto} alt="profile" />
          <AvatarStatus />
        </Avatar>
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
