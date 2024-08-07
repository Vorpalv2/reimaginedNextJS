import { SignIn, SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import ThemeComponent from "./ThemeComponent";
import Modal from "./Modal";

export default async function Navbar() {
  const current = await currentUser();
  // console.log(current?.fullName);

  return (
    <div className="container ">
      <div className="navbar">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>

          {current ? (
            <>
              <Link href={"/create"} className="btn btn-ghost text-xl">
                Create Post
              </Link>
              <Link href={"/all-post"} className="btn btn-ghost text-xl">
                All Post
              </Link>
              <Link href={"/themes"} className="btn btn-ghost text-xl">
                Themes
              </Link>
              <Link href={"/Services"} className="btn btn-ghost text-xl">
                Services
              </Link>
              <Link
                href={"/custom/styles/grid-background"}
                className="btn btn-ghost text-xl"
              >
                Background
              </Link>
            </>
          ) : (
            <Modal ModalName={"Sign In"}>
              <SignIn routing="hash" />
            </Modal>
          )}
        </div>
        <div className="flex-none gap-2">
          <Modal ModalName={"Theme Switcher"}>
            <ThemeComponent />
          </Modal>
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
                <Link href={"/user-profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href={"/setting"}>Settings</Link>
              </li>
              {current ? (
                <li>
                  <SignOutButton redirectUrl={"/loggedout"} />
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
