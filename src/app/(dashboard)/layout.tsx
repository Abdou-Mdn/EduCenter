import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        {/* ASIDE */}
        <aside className="w-[16%] md:w-[8%] lg:w-[16%] bg-background-200 text-text-200 overflow-auto">
          <Link href="/" className="p-1 flex gap-1 items-center justify-center">
            <Image src="/logo.svg" alt="logo" width={48} height={48}/>
            <div className="text-xl font-semibold hidden lg:block">
              <span className="text-accent">Edu</span>
              <span className="text-primary-400">Center</span>
            </div>
          </Link>
          <Menu />
        </aside>
        {/* MAIN */}
        <main className="w-[84%] md:w-[92%] lg:w-[84%] bg-background-100 text-text-200 flex flex-col overflow-auto">
          <Navbar />
          {children}
        </main>
    </div>
  );
}