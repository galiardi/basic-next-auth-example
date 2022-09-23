import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function HomeB() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <>
      {session ? (
        <>
          <h1>Index rendered from client</h1>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <Image
            src={session.user.image}
            width={20}
            height={20}
            alt="user logo"
          />
        </>
      ) : (
        <p>Squeleton</p>
      )}
    </>
  );
}

export default HomeB;
