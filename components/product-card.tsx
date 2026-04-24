import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProductCard({
  name,
  description,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <div className="flex flex-col rounded-[1.2rem] overflow-hidden bg-card shadow-card-product">
      <div className="relative w-full aspect-[5/3]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-[1rem] p-[2rem] md:p-[2.4rem] flex-1">
        <h3 className="text-[1.6rem] font-semibold text-alshami-brown leading-tight">
          {name}
        </h3>
        <p className="text-[1.4rem] text-text-black-soft leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
