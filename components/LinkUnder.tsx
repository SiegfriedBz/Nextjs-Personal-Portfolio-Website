import Link from "next/link";

type TLinkUnderProps = {
  href: string;
  label: string;
  className?: string;
};

const LinkUnder = ({ href, label, className = "" }: TLinkUnderProps) => {
  return (
    <Link
      href={href}
      className={`relative
        ${className}
        transition-all duration-300
        group-hover:text-white
        hover:text-purple

        after:content[' ']
        after:absolute
        after:left-0
        after:-bottom-[0.15rem]
        after:w-0
        after:h-0.5
        after:bg-gradient-to-r
        after:from-purple
        after:to-white
        after:transition-all
        after:duration-300
        group-hover:after:w-full
        hover:after:w-full
      `}
    >
      {label}
    </Link>
  );
};

export default LinkUnder;
