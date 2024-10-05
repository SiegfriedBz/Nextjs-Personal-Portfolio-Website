import { ButtonMagicAs } from "@/components/ui/ButtonMagicAs";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import ShimmerButtonAsLink from "./ui/ShimmerButtonAsLink";
import { SOCIAL_MEDIA } from "@/constants.ts";
import LinkUnder from "./LinkUnder";
import { LinkPreview } from "./ui/link-preview";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full flex flex-col relative h-40">
      <div className="absolute -left-64 -right-64 -bottom-12 h-full overflow-hidden ">
        <Image
          src="/footer-grid.png"
          fill
          alt="bg-image"
          className="opacity-50"
        />
      </div>

      <div className="w-full flex justify-center items-center space-x-8">
        <ShimmerButtonAsLink
          download={true}
          className="w-fit flex items-center space-x-4"
          href="/bozza-siegfried_resume.pdf"
        >
          <IoMdCloudDownload />
          <span>Resume</span>
        </ShimmerButtonAsLink>

        <ButtonMagicAs
          as="a"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          label="Contact me"
          icon={<FaLocationArrow />}
          iconPosition="right"
          className="w-fit"
        />
      </div>

      <div
        className="flex my-4 flex-col sm:flex-row justify-center items-center
          font-light md:font-normal
        "
      >
        <p className="pt-4 pb-2 text-sm md:text-base sm:p-0">
          <span>
            Copyright &copy;{year}
            {` `}
            <LinkUnder
              href={process.env.NEXT_PUBLIC_EMAIL as string}
              label="Siegfried"
            />
          </span>
        </p>

        <div className="sm:ms-auto flex items-center justify-center space-x-3 md:space-x-6">
          {SOCIAL_MEDIA.map((social) => {
            if (!social.href) return null;

            return (
              <div
                key={social.id}
                className="w-fit h-fit
                backdrop-filter backdrop-blur-lg backdrop-saturate-200 

                flex justify-center items-center
                rounded-md
              "
              >
                <LinkPreview
                  url={social.href}
                  className="font-bold border-none"
                >
                  <span className="relative w-8 h-8 flex justify-center items-center">
                    <Image src={social.img} fill alt="social" />
                  </span>
                </LinkPreview>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
