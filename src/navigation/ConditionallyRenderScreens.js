import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import PetRegistrationStack from "./PetRegistrationStack";

export default function ConditionallyRenderScreens({ user }) {
  const [petName, setPetName] = useState("");
  const url = "https://medi-mate-app.herokuapp.com/pet-id/";

  useEffect(() => {
    if (user) {
      console.log(user.uid);
      fetch(`${url}${user.uid}`)
        .then((response) => response.json())
        .then((json) => setPetName(json.pet_id))
        .catch((error) => console.error(error));
    }
  }, [user]);

  return (
    <>
      {!user && <AuthStack />}
      {user && petName === null && <PetRegistrationStack />}
      {user && petName && <HomeStack />}
      {!user || (!petName && <Text>Loading</Text>)}
    </>
  );
}
