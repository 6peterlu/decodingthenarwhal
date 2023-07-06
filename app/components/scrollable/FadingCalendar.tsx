import { useMemo } from "react";
import Month from "../../resources/Month.svg";
import { clipYValue } from "../../utils/scroll";

function EventBlock({
  text,
  dateInterval,
  topPixels,
  dayOfWeek,
  color,
  fadePercentage,
}: {
  text: string;
  dateInterval: string;
  topPixels: number;
  dayOfWeek: number;
  color: string;
  fadePercentage: number;
}) {
  return (
    <div
      style={{
        width: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "absolute",
        top: topPixels,
        backgroundColor: color,
        flexDirection: "column",
        paddingBottom: 4,
        paddingLeft: 4,
        borderRadius: 4,
        left: 100 * dayOfWeek - 100 * fadePercentage,
        opacity: 1 - fadePercentage,
      }}
    >
      <p style={{ fontWeight: "bold" }}>{text}</p>
      <p style={{ fontSize: 8 }}>{dateInterval}</p>
    </div>
  );
}

function DaysOfWeek() {
  return (
    <div style={{ display: "flex" }}>
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
          key={Math.random()}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

function AnimationSecondHalf({
  calendarAnimationPercentage,
}: {
  calendarAnimationPercentage: number;
}) {
  console.log("calendarAnimationPercentage", calendarAnimationPercentage);
  const fadePercentage = useMemo(() => {
    return clipYValue((calendarAnimationPercentage - 0.6) * 2, 0, 1);
  }, [calendarAnimationPercentage]);
  console.log("fadePercentage", fadePercentage);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
      }}
    >
      <div
        style={{
          opacity: fadePercentage,
          padding: 70,
          backgroundColor: "black",
          borderRadius: 100,

        }}
      >
        and no one would think to check on me.
      </div>
    </div>
  );
}

function computeTransitionPercentage(
  calendarAnimationPercentage: number,
  index: number
) {
  const scaledAnimationPercentage = clipYValue(
    calendarAnimationPercentage * 1.8,
    0,
    1
  );
  const totalIndices = 8;
  const overlap = 0.05;
  const start = Math.max(index / totalIndices - overlap, 0);
  const end = Math.min((index + 1) / totalIndices + overlap, 1);
  const transitionPercentage = clipYValue(
    (scaledAnimationPercentage - start) / (end - start),
    0,
    1
  );
  return transitionPercentage;
}

export default function FadingCalendar({
  calendarAnimationPercentage,
}: {
  calendarAnimationPercentage: number;
}): JSX.Element {
  return (
    <div style={{ position: "relative" }}>
      <DaysOfWeek />
      <Month />
      <EventBlock
        text="...it"
        dateInterval="8-9am"
        topPixels={100}
        dayOfWeek={0}
        color="#0a2239"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          0
        )}
      />
      <EventBlock
        text="felt"
        dateInterval="8-9am"
        topPixels={100}
        color="#53A2BE"
        dayOfWeek={1}
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          1
        )}
      />
      <EventBlock
        text="like"
        dateInterval="8-9am"
        topPixels={100}
        dayOfWeek={2}
        color="#1D84B5"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          2
        )}
      />
      <EventBlock
        text="I"
        dateInterval="8-9am"
        topPixels={100}
        dayOfWeek={3}
        color="#132E32"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          3
        )}
      />
      <EventBlock
        text="could"
        dateInterval="8-9am"
        topPixels={100}
        dayOfWeek={4}
        color="#176087"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          4
        )}
      />
      <EventBlock
        text="just"
        dateInterval="8-9am"
        topPixels={100}
        dayOfWeek={5}
        color="#2C6E92"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          5
        )}
      />
      <EventBlock
        text="fade"
        dateInterval="8-9am"
        topPixels={100}
        dayOfWeek={6}
        color="#3F7B9C"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          6
        )}
      />
      <EventBlock
        text="away"
        dateInterval="8-9am"
        topPixels={300}
        dayOfWeek={6}
        color="#5087A5"
        fadePercentage={computeTransitionPercentage(
          calendarAnimationPercentage,
          7
        )}
      />
      <AnimationSecondHalf
        calendarAnimationPercentage={calendarAnimationPercentage}
      />
    </div>
  );
}
