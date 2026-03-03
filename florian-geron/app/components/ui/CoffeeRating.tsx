import React from "react";

type IconType = "coffee" | "hotdog" | "food" | "drink";

const codepoints: Record<IconType, string> = {
  coffee: "2615",
  hotdog: "1f32d",
  food: "1f35d",
  drink: "1f379",
};

function isApplePlatform() {
  if (typeof navigator === "undefined") return false;

  const platform = navigator.platform?.toLowerCase() ?? "";
  const ua = navigator.userAgent?.toLowerCase() ?? "";

  return (
    platform.includes("mac") ||
    platform.includes("iphone") ||
    platform.includes("ipad") ||
    ua.includes("mac os") ||
    ua.includes("ios")
  );
}

function useIsApplePlatform() {
  const [isApple, setIsApple] = React.useState(false);

  React.useEffect(() => {
    setIsApple(isApplePlatform());
  }, []);

  return isApple;
}

function TwemojiIcon({
  type,
  fillPercent,
}: {
  type: IconType;
  fillPercent: number; // 0–100
}) {
  const src = `/twemoji/${codepoints[type]}.svg`;

  return (
    <span className="relative inline-block w-7 h-7">
      {/* empty */}
      <img
        src={src}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        style={{
          filter: "grayscale(1) opacity(0.2) contrast(0.9)",
        }}
      />

      {/* filled via mask */}
      <img
        src={src}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        style={{
          WebkitMaskImage: `linear-gradient(to right, black ${fillPercent}%, transparent ${fillPercent}%)`,
          maskImage: `linear-gradient(to right, black ${fillPercent}%, transparent ${fillPercent}%)`,
        }}
      />
    </span>
  );
}

function TwemojiScale({
  rating,
  icon = "coffee",
}: {
  rating: number;
  icon?: IconType;
}) {
  return (
    <div
      className="flex items-center gap-1"
      title={`${rating}/5`}
      aria-label={`Rating ${rating} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercent = Math.max(0, Math.min(100, (rating - i) * 100));

        return (
          <TwemojiIcon
            key={i}
            type={icon}
            fillPercent={fillPercent}
          />
        );
      })}
    </div>
  );
}

function NativeEmojiScale({ 
  rating, 
  icon = 'coffee' 
}: { 
  rating: number; 
  icon?: IconType; 
}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const glyph =
    icon === 'coffee' ? '☕️' : icon === 'hotdog' ? '🌭' : icon === 'food' ? '🍝' : '🍹';

  return (
    <div
      className="flex items-center"
      title={`${rating}/5`}
      aria-label={`Rating ${rating} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return (
            <span
              key={i}
              className="inline-block text-2xl leading-none mr-0.5"
              aria-hidden="true"
            >
              {glyph}
            </span>
          );
        }

        if (i === full && hasHalf) {
          return (
            <span
              key={i}
              className="relative inline-block text-2xl w-6 h-6 leading-none mr-0.5"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 block"
                style={{ filter: 'grayscale(1) opacity(.2)' }}
              >
                {glyph}
              </span>
              <span
                className="absolute left-0 top-0 overflow-hidden block"
                style={{ width: '50%' }}
              >
                {glyph}
              </span>
            </span>
          );
        }

        return (
          <span
            key={i}
            className="inline-block text-2xl leading-none mr-0.5"
            style={{ filter: 'grayscale(1) opacity(.2)' }}
            aria-hidden="true"
          >
            {glyph}
          </span>
        );
      })}
    </div>
  );
}


export function CoffeeScale({
  rating,
  icon = "coffee",
}: {
  rating: number;
  icon?: IconType;
}) {
  const isApple = useIsApplePlatform();

  if (isApple) {
    return <NativeEmojiScale rating={rating} icon={icon} />;
  }

  return <TwemojiScale rating={rating} icon={icon} />;
}