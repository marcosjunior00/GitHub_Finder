import * as C from "./styles";

const UserData = ({
  name,
  login,
  avatar_url,
  followers,
  following,
  location,
}) => {
  return (
    <C.Container>
      <C.CenterContainer>
        <C.Avatar src={avatar_url} alt={login} />
      </C.CenterContainer>
      <C.Name>{name}</C.Name>
      <C.Login>@{login}</C.Login>
      {location && (
        <C.Location>
          <i className="bx bxs-map-pin"></i>
          <span>{location}</span>
        </C.Location>
      )}
      <C.FollowContainer>
        <C.FollowersContainer>
          <p>Followers:</p>
          <p>{followers}</p>
        </C.FollowersContainer>
        <C.FollowingContainer>
          <p>Following:</p>
          <p>{following}</p>
        </C.FollowingContainer>
      </C.FollowContainer>
    </C.Container>
  );
};

export default UserData;
