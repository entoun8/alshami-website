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
    <div
      className="flex flex-col rounded-[1.2rem] overflow-hidden bg-white"
      style={{
        boxShadow:
          "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24), 0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Image — top 60% of card */}
      <div className="relative w-full" style={{ paddingBottom: "60%" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
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
