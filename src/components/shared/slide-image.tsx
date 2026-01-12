import Image from "next/image";

interface SlideImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const SlideImage: React.FC<SlideImageProps> = ({
  src,
  alt = "Slide Image",
  width = 1920,
  height = 1080,
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} d2c_slide_animation w-full object-cover`}
      priority
    />
  );
};

export default SlideImage;
