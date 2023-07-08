import { clipYValue } from "@/app/utils/scroll";
import everydayscene1 from "../../resources/everydayscene1.png";
import everydayscene2 from "../../resources/everydayscene2.png";
import everydayscene3 from "../../resources/everydayscene3.png";
import everydayscene4 from "../../resources/everydayscene4.png";
import InstagramMessageList from "../../resources/InstagramMessageList.svg";
import { Animations } from "@/app/utils/animationController";
import useResizeObserver from "use-resize-observer";

function computePortalExpansionPercentages(
  animationPercentage: number,
  index: number,
  total: number
) {
  return clipYValue(
    (animationPercentage * total - index / total) * 100,
    0,
    100
  );
}

export default function Portals({
  animationPercentage,
}: {
  animationPercentage: number;
}) {
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const heightUnits = height / 20;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
      ref={ref}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          height: 600,
          position: "relative",
        }}
        id={`scrollable-${Animations.PORTALS}`}
      >
        <InstagramMessageList />
        <div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: heightUnits,
            left: 100,
            // backgroundColor: "red",
            clipPath: `circle(${computePortalExpansionPercentages(
              animationPercentage,
              0,
              4
            )}%)`,
            // backgroundImage: `url(${everydayscene1})`,
            backgroundImage: `url("${everydayscene1.src}")`,
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: heightUnits * 3,
            left: 200,
            // backgroundColor: "red",
            clipPath: `circle(${computePortalExpansionPercentages(
              animationPercentage,
              1,
              4
            )}%)`,
            // backgroundImage: `url(${everydayscene1})`,
            backgroundImage: `url("${everydayscene2.src}")`,
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: heightUnits * 5,
            left: 40,
            // backgroundColor: "red",
            clipPath: `circle(${computePortalExpansionPercentages(
              animationPercentage,
              2,
              4
            )}%)`,
            // backgroundImage: `url(${everydayscene1})`,
            backgroundImage: `url("${everydayscene3.src}")`,
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: heightUnits * 8,
            left: 70,
            // backgroundColor: "red",
            clipPath: `circle(${computePortalExpansionPercentages(
              animationPercentage,
              3,
              4
            )}%)`,
            // backgroundImage: `url(${everydayscene1})`,
            backgroundImage: `url("${everydayscene4.src}")`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
}
