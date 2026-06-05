import Image from "next/image";
import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/ShandayAI.png"
        alt="ShandayAI"
        width={180}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
