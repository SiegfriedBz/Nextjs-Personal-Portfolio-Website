import { ButtonMagicAs } from "@/components/ui/ButtonMagicAs";
import { FaLocationArrow } from "react-icons/fa";

const LastCardButtonMagic = () => {
  return (
    <div className="relative z-[500] mt-5 h-full w-full">
      <ButtonMagicAs
        as="a"
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        label="Send me a mail"
        icon={<FaLocationArrow />}
        iconPosition="left"
        otherClassNames="!bg-[#161a31]"
      />
    </div>
  );
};

export default LastCardButtonMagic;
