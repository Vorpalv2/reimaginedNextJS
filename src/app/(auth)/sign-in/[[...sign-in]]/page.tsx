import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container p-12 flex justify-center">
      <SignIn />
    </div>
  );
}
