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
  console.log("background animation percentage", animationPercentage);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url("https://images.unsplash.com/photo-1599036495538-ee049546a069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: computeOpacityFromAnimationPercentage(animationPercentage),
      }}
    />
  );
}
