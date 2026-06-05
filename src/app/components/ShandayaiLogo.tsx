import Image from "next/image";
import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/ShandayAI.png"
        alt="ShandayAI"
        width={320}
        height={96}
        className="h-12 w-auto md:h-14"
        priority
      />
    </Link>
  );
}
