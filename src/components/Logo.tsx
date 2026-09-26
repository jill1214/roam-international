import Image from "next/image";
import Link from "next/link";
import { cx } from "./ui";

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/#top" className={cx("inline-flex shrink-0 items-center", className)} aria-label="ROAM International Travel and Tours, home">
      <Image
        src="/images/brand/logo-horizontal.png"
        alt="ROAM International Travel and Tours"
        width={760}
        height={149}
        priority={priority}
        className="h-7 w-auto min-[390px]:h-8 sm:h-10"
      />
    </Link>
  );
}
