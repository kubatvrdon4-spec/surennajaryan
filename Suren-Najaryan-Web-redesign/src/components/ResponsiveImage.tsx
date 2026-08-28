type ImageName = "hero" | "portrait" | "training" | "movement" | "conditioning" | "process";

const imageData: Record<ImageName, { width: number; height: number }> = {
  hero: { width: 960, height: 1637 },
  portrait: { width: 1054, height: 1492 },
  training: { width: 1053, height: 1493 },
  movement: { width: 951, height: 1653 },
  conditioning: { width: 941, height: 1672 },
  process: { width: 960, height: 1637 },
};

type ResponsiveImageProps = {
  name: ImageName;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

export function ResponsiveImage({
  name,
  alt,
  className,
  eager = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: ResponsiveImageProps) {
  const { width, height } = imageData[name];
  return (
    <picture className={className}>
      <source
        srcSet={`/images/${name}-720.webp 720w, /images/${name}-1440.webp ${width}w`}
        sizes={sizes}
        type="image/webp"
      />
      <img
        src={`/images/${name}-1440.webp`}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        alt={alt}
      />
    </picture>
  );
}
