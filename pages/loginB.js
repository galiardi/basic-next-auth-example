import { useRouter } from "next/router";

export default function LoginB() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push("/api/auth/signin");
        }}
      >
        SignIn with google
      </button>
    </>
  );
}
