import Image from "next/image";
import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/ShandayAI.png"
        alt="ShandayAI"
        width={360}
        height={108}
        className="h-14 w-auto md:h-16"
        priority
      />
    </Link>
  );
}
