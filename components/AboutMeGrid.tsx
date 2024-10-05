import { Button } from "@/components/ui/MovingBorder";
import Image from "next/image";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

type TData = {
  id: number;
  linkUrl?: string;
  linkLabel?: string;
  title: string;
  description: string;
  className: string;
  thumbnail: string;
  flags: string[];
};

type TProps = {
  data: TData[];
  children: React.ReactNode;
};
const AboutMeGrid = ({ data, children }: TProps) => {
  return (
    <>
      {children}
      <Body data={data} />
    </>
  );
};

AboutMeGrid.Body = Body;

function Body({ data }: { data: TData[] }) {
  const isSingleItem = data.length === 1;

  return (
    <div
      className={`w-full mt-12 ${
        isSingleItem
          ? "flex justify-center items-center lg:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[40vw]  mx-auto"
          : "grid grid-cols-1 lg:grid-cols-4 gap-10"
      }`}
    >
      {data.map((d) => {
        const { id, title, description, linkUrl, linkLabel, thumbnail, flags } =
          d;

        return (
          <Button
            key={id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 7500 + 10000)}
            className="relative flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="absolute space-x-2 top-2 right-4 p-2 h-10 w-10 flex items-center justify-center">
              {flags.map((flag, idx) => {
                return (
                  <Image
                    key={idx}
                    src={flag}
                    width={24}
                    height={24}
                    alt="country"
                    className="opacity-80"
                  />
                );
              })}
            </div>
            <div className="flex w-full flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="relative lg:w-24 md:w-16 w-12 lg:h-24 md:h-16 h-12 overflow-hidden">
                <Image
                  src={thumbnail}
                  fill
                  alt={title}
                  className="object-contain"
                />
              </div>

              <div className="ms-2 lg:ms-5 w-full">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  <span>{title}</span>
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {description}
                </p>

                {linkUrl && (
                  <LinkPreview
                    url={linkUrl}
                    className="font-bold inline-block mt-2.5 w-full text-left"
                  >
                    {linkLabel}
                  </LinkPreview>
                )}
              </div>
            </div>
          </Button>
        );
      })}
    </div>
  );
}

export default AboutMeGrid;
