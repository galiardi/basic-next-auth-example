import Image from "next/image";
import { getSession } from "next-auth/react";

function Example2({ session }) {
  const user = session?.user;
  return (
    <>
      <h1>Get session from backend with getSession</h1>
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default Example2;
