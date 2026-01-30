
import LoginForm from "@/components/Auth/LoginForm";
import { ArrowLeftFromLine } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="pt-4 ">
        <Link
          className="px-4 flex w-fit text-sm items-center gap-2 py-2 bg-green-600 text-white cursor-pointer rounded-md"
          href={"/"}
        >
          <ArrowLeftFromLine size={20} />
          Back home
        </Link>
      </div>
      <LoginForm />
    </div>
  );
}
