import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const current = await currentUser();
  console.log(current?.id);

  return (
    <div className="container ">
      <div className="navbar">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>
          <Link href={"/create"} className="btn btn-ghost text-xl">
            Create Post
          </Link>
          <Link href={"/all-post"} className="btn btn-ghost text-xl">
            All Post
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width={25}
                  height={25}
                  alt="Tailwind CSS Navbar component"
                  src={
                    current?.hasImage
                      ? current.imageUrl
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href={"/setting"}>Settings</Link>
              </li>
              {current ? (
                <li>
                  <SignOutButton redirectUrl={"/logged-out"} />
                </li>
              ) : (
                <li>
                  <SignInButton forceRedirectUrl={"/create"} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
