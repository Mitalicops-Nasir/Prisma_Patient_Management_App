import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutButton } from "./logout-button";
import { ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { currentUser } from "@/lib/auth";

export const UserButton = async () => {
  const loggedIn = await currentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60 p-4 border-[2px] border-solid border-gray-700 bg-blue-950"
        align="end"
      >
        <div className="flex items-center gap-2 flex-col">
          <LogoutButton className="text-white bg-green-500 rounded-lg px-3 flex items-center gap-2 py-[5px]">
            <ExitIcon className="h-4 w-4" />
            Logout
          </LogoutButton>

          <Link
            href={`/auth/${loggedIn?.id}/new-appointment`}
            className="text-white bg-green-500 rounded-lg px-3 py-[5px]"
          >
            New Appointment
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
