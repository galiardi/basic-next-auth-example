import Image from "next/image";
import { useSession } from "next-auth/react";

function Example3() {
  const { data, status } = useSession();
  const user = data?.user;
  return (
    <>
      <h1>Get Session with useSession</h1>
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

export default Example3;
