import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        SignIn with google
      </button>
    </>
  );
}
