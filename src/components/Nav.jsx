import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  return (
    <header>
      <nav className="container w-10/12 mx-auto flex items-center justify-between  py-4">
        <div className="block lg:hidden">
          {/* <button className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
        </button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="deafult" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-4 mx-5">
              <DropdownMenuItem>
                <a href="#">About</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Blog</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Contact</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Action</DropdownMenuItem>
              <DropdownMenuItem>Another Action</DropdownMenuItem>
              <DropdownMenuItem>Dropdown Submenu</DropdownMenuItem>
              <DropdownMenuItem>404 Page</DropdownMenuItem>
              <div className="flex  items-center space-x-4 mt-3 ">
                <Button variant="outline" className="text-xs">
                  Log in
                </Button>
                <Button variant="default" className="text-xs">
                  Sign up
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" font-semibold">
          Tailwind <span className="font-normal">css</span>
        </div>

        <div className="hidden lg:flex  items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-black flex items-center">
              Features{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Action</DropdownMenuItem>
              <DropdownMenuItem>Another Action</DropdownMenuItem>
              <DropdownMenuItem>Dropdown Submenu</DropdownMenuItem>
              <DropdownMenuItem>404 Page</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </div>

        <div className="hidden lg:flex  items-center space-x-4">
          <Button variant="outline">Log in</Button>
          <Button variant="default">Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
