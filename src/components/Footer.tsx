import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-24 py-8">

        <h2 className="text-lg font-semibold">CryptoPunks</h2>
        <nav className="flex gap-8 text-sm text-white/80">
          <Link href="#">Buy a Punk</Link>
          <Link href="#">View Full Collection</Link>
        </nav>

        <div className="flex gap-4">
          <Image src="/assets/images/twitter.png" width={18} height={18} alt="twitter" />
          <Image src="/assets/images/discord.png" width={18} height={18} alt="discord" />
        </div>

      </div>

      <div className="mx-auto h-px max-w-7xl bg-white/10" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-24 py-6 text-xs text-white/60">

        <p>© 2021 CryptoPunks. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookies Settings</Link>
        </div>

      </div>
    </footer>
  );
}
