import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useFetch } from "use-http";
import User,{iUser} from "./User";

const UserList = () => {
  const [users, setUsers] = useState<iUser[]>([]);
  const { get, post, response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com"
  );

  useEffect(() => {
    loadInitUsers();
  }, []);

  async function loadInitUsers() {
    const initialUsers = await get("/users");
    if (response.ok) setUsers(initialUsers);
  }

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Users:</h1>
      {error && <h1 style={{ textAlign: "center" }}>Error...</h1>}
      {loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      <>
        {users.map((user) => (
          <User user={user}/>
        ))}
      </>
    </Container>
  );
};

export default UserList;
