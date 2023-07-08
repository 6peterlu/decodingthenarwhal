import { clipYValue } from "../../utils/scroll";
import FloorLampsPng from "../../resources/FloorLamps.png";
import Lamp1 from "../../resources/lamp1.png";
import Lamp2 from "../../resources/lamp2.png";
import Lamp3 from "../../resources/lamp3.png";
import Lamp4 from "../../resources/lamp4.png";
import Lamp5 from "../../resources/lamp5.png";
import { Animations } from "@/app/utils/animationController";

const LAMP_ARRAY = [Lamp1, Lamp2, Lamp3, Lamp4, Lamp5];

function computeLampOpacity(
  animationPercentage: number,
  index: number,
  total: number
) {
  return clipYValue(animationPercentage * total - index / total, 0, 1);
}

export default function FloorLamps({
  animationPercentage,
}: {
  animationPercentage: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
      id={`scrollable-${Animations.LAMPS}`}
    >
      <div
        style={{ width: "100%", maxWidth: 400, display: "flex", height: 300 }}
      >
        {LAMP_ARRAY.map((lamp, index) => (
          <div
            key={`floor-lamps-${lamp.src}`}
            style={{
              backgroundImage: `url(${lamp.src})`,
              flex: 1,
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              opacity: computeLampOpacity(
                animationPercentage,
                index,
                LAMP_ARRAY.length
              ),
            }}
          />
        ))}
      </div>
    </div>
  );
}
