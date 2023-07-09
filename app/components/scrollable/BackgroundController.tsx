import LockerHallway from "../../resources/LockerHallway.png";

function computeOpacityFromAnimationPercentage(animationPercentage: number) {
  if (animationPercentage < 0.2) {
    return animationPercentage * 2.5;
  } else if (animationPercentage < 0.7) {
    return 0.5;
  } else {
    return 0.5 - ((animationPercentage - 0.7) * 0.5) / 0.3;
  }
}

export default function BackgroundController({
  animationPercentage,
}: {
  animationPercentage: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${LockerHallway.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: computeOpacityFromAnimationPercentage(animationPercentage),
      }}
    />
  );
}
