"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { WheelEvent, useCallback, useEffect, useRef, useState } from "react";
import { clipYValue } from "./utils/scroll";
import useWindowDimensions from "./hooks/useWindowDimensions";
import FadingCalendar from "./components/scrollable/FadingCalendar";

const FIXED_THRESHOLD = 100;

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const [pageHeight, setPageHeight] = useState(0);
  console.log("pageHeight", pageHeight);
  const [yScrollLevel, setYScrollLevel] = useState(0);
  const [fixed, setFixed] = useState(false);
  const [textSize, setTextSize] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowDimensions();

  const [calendarAnimationPercentage, setCalendarAnimationPercentage] =
    useState(0);
  const CALENDAR_ANIMATION_SIZE = 500;

  useEffect(() => {
    if (contentRef.current?.clientHeight) {
      setTextSize(contentRef.current?.clientHeight);
    }
  }, [contentRef.current?.clientHeight]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setYScrollLevel(latest);
    if (latest > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });
  const onWheel = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      if (textSize) {
        if (
          (calendarAnimationPercentage === 1 && e.deltaY > 0) ||
          (calendarAnimationPercentage === 0 && e.deltaY < 0) ||
          pageHeight > 0
        ) {
          const targetPageHeight = clipYValue(
            pageHeight + e.deltaY,
            0,
            textSize - windowHeight
          );
          setPageHeight(targetPageHeight);
        } else {
          // animate calendar
          setCalendarAnimationPercentage(
            clipYValue(
              calendarAnimationPercentage + e.deltaY / CALENDAR_ANIMATION_SIZE,
              0,
              1
            )
          );
        }
      }
    },
    [calendarAnimationPercentage, pageHeight, textSize, windowHeight]
  );
  return (
    <div
      style={{ position: "fixed", width: "100%", height: "100%" }}
      onWheel={onWheel}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: -1 * pageHeight,
          maxHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: 700 }} ref={contentRef}>
          <p style={{ marginBottom: 20 }}>
            {`This is what you wanted, I tell myself for the millionth time. The you
          of a year ago would have been so excited to be here. Eight months ago,
          I quit my job to look for and seek out a startup idea. Now, I'm
          building one, a chatbot to help people remember their medications.
          When I first started, I remember having so much difficulty finding a
          way to focus and drive myself forward. The age of standups and
          check-ins was over, and in the middle of the pandemic, it felt like I
          could just fade away, and no one would even think to check on me.
          Things were a bit different now. I used the sun as a clock now,
          getting up at sunrise, and taking stock of my progress at sunset, as
          if I lived in an ancient agrarian society instead of Divisadero in San
          Francisco. The radio silence on my calendar was precious to me now, so
          I could just focus on my product and code. When I scheduled events, it
          was almost always Friday evening, to avoid disrupting the natural
          cadence of my work.`}
          </p>
          <FadingCalendar
            calendarAnimationPercentage={calendarAnimationPercentage}
          />
          <p style={{ marginBottom: 20 }}>
            {`I felt more productive than I ever had since my last job. Even so, I
          felt stuck. I had a few users, but growth was stagnant. I didn't see
          how the product could be monetized. When users reported bugs, I would
          excitedly jump into the code to fix them, but when they didn't, it was
          hard not to wonder what I was doing, and whether it was a real job at
          all. A couple of weeks ago, I put a sticky note on my mirror that read
          "People are counting on you to remember their medications!" along with
          a few smiley faces. Many days, that sticky note felt like the only
          thing tethering my daily toil to the world outside. The day-night
          cycles that formed my rhythm started to feel more and more like
          sitting in a dark room, and watching a door to the outside light close
          day after day.`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`Tonight was Friday, but I didn't have anything scheduled. The faintest
          red streaks were beginning to creep across the sky. There was a
          database migration that needed to get done, and I would stay up until
          it was complete. Before I dove in, I mentally steeled myself in the
          generally recommended way: scrolling through Instagram. I had a
          message from David, a high school sophomore year classmate whom I
          hadn't spoken to at all in eight years. As I went to see what the
          message was, I accidentally double tapped, and it starts video calling
          him. Hurriedly, I end the call.`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`"sorry accident!" I quickly message. As I start typing a longer
          response, David suddenly starts calling me back. I think briefly about
          how this call is probably the only opportunity I will ever have to
          connect with him again. It's not like we were particularly close, but
          at the same time, it feels like that hardly matters. Excitement rises
          inside me, and I pick up, and there he is, in front of me. Jenny is
          there too, another classmate. They're in a bar or club of some sort,
          and they seem surprised that I actually picked up. I'm probably more
          surprised than they are.`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`"Hello Peter!" David's voice comes through, a bit muffled by the audio
          correction for the background noise. A second ago I was just
          responding to some text on a screen, and all of a sudden a person I
          haven't seen in 8 years is in front of me on the screen, waiting for a
          response. It's hard to wrap my head around.`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`"Hey man! Wow, where are you guys?" I have so many questions but the
          signal is lagging already, and I know the call will be short. How long
          can you call from a bar, really. I didn't remember David and Jenny
          being friends back then, how did they end up in the same place, I
          wonder? I didn't remember much of anything from back then.`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`"Jenny came to visit me in Denver! You look the same, it's so good to
          see you."`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`"That's amazing. You two look the same too, wow! Have you kept up
          since high school?"`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`And then we're reminiscing together on the cramped, brick-lined halls
          of our old high school building, now torn down. We joke about the
          idiosyncrasies of all the sophomore year teachers, and the cringe
          moments we thought we would never want to recall. We talk about our
          world history homework and math homework and english homework. It
          feels like only ten minutes before they go back to their night out,
          and I return to my quiet reality, but when I look up from my screen
          the sky is dark and cloudy, and even the moonlight is blocked out.`}
          </p>
          <p style={{ marginBottom: 20 }}>
            {`I get up from the bed of the studio apartment I'm crashing in, and
          click on the floor lamp. At night it always feels like that lamp is
          very important, as if it's working hard to push back the creeping
          darkness outside. Tonight, it's not like that. I think about all the
          infinitely-scrolling lists of messages in my phone, and the little
          video call button in the top right, and I imagine little portals
          opening up to all of their worlds and to the memories we had together
          so many years ago. I think about all the messages my dozen users send
          to my medication reminding chatbot, and the floor lamps they turn on
          at night, when the sky darkens. I feel full of light, as if I were the
          one shining through the third story windows onto the sidewalk below,
          and not the hot filament of the IKEA floor lamp in the corner.`}
          </p>
        </div>
      </div>
    </div>
  );
}
