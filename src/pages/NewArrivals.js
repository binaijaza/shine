import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


export default function NewArrivals() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((result) => setUser(result.data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  return <div>{/* {user && <UserPro user={user} />} */}</div>;
}
