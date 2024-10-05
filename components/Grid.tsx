import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { GRID_ITEMS } from "@/constants.ts";

export function Grid() {
  return (
    <BentoGrid>
      {GRID_ITEMS.map((item, i) => {
        const {
          id,
          title,
          description,
          className,
          imgClassName,
          titleClassName,
          img,
          secondImg,
        } = item;
        return (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            img={img}
            secondImg={secondImg}
          />
        );
      })}
    </BentoGrid>
  );
}
