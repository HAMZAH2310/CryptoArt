import Link from "next/link";
import Image from "next/image";
import Button from "../ui/components/Button";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="mx-auto max-w-304.25 h-21 px-6 flex items-center justify-between">

        <div className="flex items-center gap-12">
          <Link href="/">
            <Image
              src="/assets/images/Frame.png"
              width={30}
              height={30}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-8">
            <li className="cursor-pointer"><Link href="/">About</Link></li>
            <li className="cursor-pointer"><Link href="/">Collection</Link></li>
            <li className="cursor-pointer"><Link href="/">FAQs</Link></li>
          </ul>

          <Button className="bg-[rgba(196,235,255,0.15)] text-[#C4EBFF] border border-[#C4EBFF]/30 rounded-full px-6 cursor-pointer">
            Connect Wallet
          </Button>

          <Image
            src="/assets/images/twitter.png"
            width={28}
            height={28}
            alt="twitter"
            className="cursor-pointer"
          />
          <Image
            src="/assets/images/discord.png"
            width={28}
            height={28}
            alt="discord"
            className="cursor-pointer"
          />
        </div>

      </div>
    </nav>
  );
}
