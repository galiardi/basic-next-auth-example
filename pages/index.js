import { getSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home({ session }) {
  return (
    <>
      <main>
        <h1>Index rendered from server</h1>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <Image
          src={session.user.image}
          width={20}
          height={20}
          alt="user logo"
        />
        <button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  return {
    props: {
      session,
    },
  };
};
