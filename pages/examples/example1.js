import Image from "next/image";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";

function Example1() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const session = await getSession();
      setUser(session?.user);
    })();
  }, []);
  return (
    <>
      <h1>Get session from client with getSession</h1>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <Image src={user.image} width={20} height={20} alt="user logo" />
        </>
      )}
    </>
  );
}

export default Example1;
