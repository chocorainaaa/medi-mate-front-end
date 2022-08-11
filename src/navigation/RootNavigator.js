import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

import app from "../../config/firebase";
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import PetRegistrationStack from "./PetRegistrationStack";

//   this is already auth /// const auth = Firebase.auth();

const auth = app.auth();

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://medi-mate-app.herokuapp.com/pet-id/";
  const [petId, setPetId] = useState("");

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
      fetch(`${url}${user.uid}`)
        .then((response) => response.json())
        .then((json) => setPetId(json.pet_id))
        .catch((error) => console.error(error));
    }
  });

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    );
    //unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {petId ? <HomeStack /> : <PetRegistrationStack />}
      {/* {user ? <HomeStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
}
