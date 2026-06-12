import Image from "next/image";
import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center bg-[#030712]">
      <Image
        src="/ShandayAI.png"
        alt="ShandayAI"
        width={360}
        height={108}
        className="h-14 w-auto bg-transparent md:h-16"
        priority
      />
    </Link>
  );
}
