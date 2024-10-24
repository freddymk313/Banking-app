import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) router.push('/')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
