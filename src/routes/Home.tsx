import { useState } from "react";

import { UserProps } from "../types/user.ts";

import UserData from "../components/UserData/index.tsx";
import Header from "../components/Header/index.tsx";
import Error from "../components/Error/index.tsx";
import { UserContainer } from "../styles/globalStyles.tsx";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, name, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      name,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <>
      <Header loadUser={loadUser} />
      <UserContainer>
        {user && <UserData {...user} />}
        {error && <Error />}
      </UserContainer>
    </>
  );
};

export default Home;
