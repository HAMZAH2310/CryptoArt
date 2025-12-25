import clsx from "clsx";
import Link from "next/link";

type FeaturedCardProps = {
  source: string;
  title: string;
  href?: string;
  className?: string;
};

export default function FeaturedCard({
  source,
  title,
  href = "#",
  className,
}: FeaturedCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md",
        "w-full max-w-105 min-h-55",
        className
      )}
    >

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{source}</h3>
        <p className="text-white/80 leading-relaxed">
          {title}
        </p>
      </div>

      <div className="h-px bg-white/10" />
      <Link
        href={href}
        className="flex items-center justify-between px-6 py-4 text-sm text-white/80 hover:text-white transition"
      >
        <span>Read article</span>
        <span className="text-lg">↗</span>
      </Link>
    </div>
  );
}
