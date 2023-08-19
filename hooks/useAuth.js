import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
export default function authhooks() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      console.log("get user: ", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);

  return { user };
}
