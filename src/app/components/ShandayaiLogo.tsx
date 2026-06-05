import Image from "next/image";
import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/ShandayAI.png"
        alt="ShandayAI"
        width={217}
        height={72}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}
