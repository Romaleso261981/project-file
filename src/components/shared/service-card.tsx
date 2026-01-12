import Link from "next/link";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import { useRouter } from "next/navigation";

interface ServiceItemProps {
  name: string;
  slug: string;
  image: string;
  description: string;
  variant?: "card" | "accordion";
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ServiceItem({
  name,
  slug,
  image,
  description,
  variant = "card",
  isOpen = false,
  onToggle,
}: ServiceItemProps) {
  const isAccordion = variant === "accordion";
  const router = useRouter();

  const handleCardClick = () => {
    if (!isAccordion) {
      router.push(`/services/${slug}`);
    }
  };

  return (
    <div
      className={`bg-[#FEFCFB] border border-primary-light-shade block ${
        isAccordion ? "" : "block group"
      }`} data-aos="fade-up"
      onClick={handleCardClick}
    >
      {/* Header */}
      <div
        className={`flex justify-between gap-10 p-6 cursor-pointer`}
        onClick={isAccordion ? onToggle : undefined}
      >
        <Link href={`/services/${slug}`}>
          <h4
            className={`text-xl md:text-2xl 2xl:text-3xl font-primary font-bold capitalize tracking-[-1px] text-secondary ${
              !isAccordion ? "group-hover:text-primary" : ""
            }`}
          >
            {name}
          </h4>
        </Link>

        <span className="text-secondary w-8 h-8 bg-primary rounded-full grid place-items-center text-white text-base">
          {isAccordion ? (
            isOpen ? (
              <LuMoveRight className="rotate-0 transition-all duration-500" />
            ) : (
              <LuMoveRight className="rotate-45 transition-all duration-500" />
            )
          ) : (
            <LuMoveRight className="rotate-0 transition-all duration-600 group-hover:-rotate-45" />
          )}
        </span>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${
          isAccordion
            ? isOpen
              ? "max-h-[300px] p-5 -mt-3 pt-0"
              : "max-h-0 p-0 px-5 pt-0"
            : "max-h-[300px] p-5 -mt-3 pt-0"
        }`}
      >
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={342}
            height={192}
            className={`w-full h-[130px] lg:h-[192px] object-cover ${
              isAccordion
                ? "max-h-[192px]"
                : "group-hover:scale-105 transition-all duration-600"
            }`}
          />
        </div>

        <div className="flex flex-col justify-between xl:p-6">
          <p className="text-secondary-light line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
            {description}
          </p>

          {isAccordion ? (
            <Link
              href={`/services/${slug}`}
              className="text-secondary-light underline text-lg mt-4"
            >
              Посмотреть услугу
            </Link>
          ) : (
            <Link href={`/services/${slug}`}>
              <p className="text-secondary-light underline text-lg mt-4 group-hover:text-primary">
                Посмотреть услугу
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
