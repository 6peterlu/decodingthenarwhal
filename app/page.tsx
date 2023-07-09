"use client";

import {
  TouchEvent,
  WheelEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import FadingCalendar from "./components/scrollable/FadingCalendar";
import HandwrittenNote from "./components/scrollable/HandwrittenNote";
import {
  ANIMATIONS_CONFIG,
  AnimationState,
  Animations,
  INITIAL_ANIMATION_STATE,
  getUpdatedAnimationState,
} from "./utils/animationController";
import MessageSend from "./components/scrollable/MessageSend";
import BackgroundController from "./components/scrollable/BackgroundController";
import Portals from "./components/scrollable/Portals";
import { useInterval } from "./hooks/useInterval";
import FloorLamps from "./components/scrollable/FloorLamps";
import Mailchimp from "./components/mailchimp/EmailSubmitForm";

const MIN_VELOCITY = 0.1;
const url =
  "https://draftzero.us21.list-manage.com/subscribe/post?u=a55e1fc43149a5a4f4df3914a&amp;id=3f3fff1d44&amp;f_id=00162ae7f0";

export default function Home() {
  const [textSize, setTextSize] = useState<number | null>(null);
  const [lastTouchY, setLastTouchY] = useState<{
    y: number;
    timestamp: number;
  } | null>(null);
  const [lastVelocity, setLastVelocity] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowDimensions();
  const [animationState, setAnimationState] = useState<AnimationState>(
    INITIAL_ANIMATION_STATE
  );

  useEffect(() => {
    if (contentRef.current?.clientHeight) {
      setTextSize(contentRef.current?.clientHeight);
    }
  }, [contentRef.current?.clientHeight]);

  const onWheel = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      if (textSize) {
        const newAnimationState = getUpdatedAnimationState(
          animationState,
          ANIMATIONS_CONFIG,
          e.deltaY,
          textSize - windowHeight
        );
        setAnimationState(newAnimationState);
      }
    },
    [animationState, textSize, windowHeight]
  );
  const onTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      const currentTimestamp = Date.now();
      e.stopPropagation();
      e.preventDefault();
      if (e.touches.length > 1) return;
      if (!lastTouchY) {
        setLastTouchY({ y: e.touches[0].clientY, timestamp: Date.now() });
        setLastVelocity(0);
        return;
      }
      const deltaY = lastTouchY.y - e.touches[0].clientY;
      const velocity = deltaY / (currentTimestamp - lastTouchY.timestamp);

      // clamp velocity
      if (Math.abs(velocity) > MIN_VELOCITY) {
        setLastVelocity(velocity);
      } else {
        setLastVelocity(0);
      }
      if (textSize) {
        const newAnimationState = getUpdatedAnimationState(
          animationState,
          ANIMATIONS_CONFIG,
          deltaY,
          textSize - windowHeight
        );
        setAnimationState(newAnimationState);
      }
      setLastTouchY({ y: e.touches[0].clientY, timestamp: Date.now() });
    },
    [animationState, lastTouchY, textSize, windowHeight]
  );
  const onTouchEnd = useCallback(() => {
    setLastTouchY(null);
  }, []);
  useInterval(() => {
    if (lastVelocity !== 0 && textSize && lastTouchY === null) {
      const newAnimationState = getUpdatedAnimationState(
        animationState,
        ANIMATIONS_CONFIG,
        lastVelocity * 4,
        textSize - windowHeight
      );
      setAnimationState(newAnimationState);
      const newVelocity = lastVelocity * 0.99;
      if (Math.abs(newVelocity) < MIN_VELOCITY) {
        setLastVelocity(0);
      } else {
        setLastVelocity(newVelocity);
      }
    }
  }, 1);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "white",
      }}
      onWheel={onWheel}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <BackgroundController
        animationPercentage={animationState[Animations.HALLWAY]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: -1 * animationState.pageHeight,
          maxHeight: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
        }}
      >
        <div
          ref={contentRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 50,
              marginTop: 50,
            }}
          >
            <p style={{ fontSize: 40, fontWeight: "bold" }}>Portals</p>
            <p>by Peter Lu</p>
          </div>
          <div
            style={{
              maxWidth: 700,
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            <p style={{ marginBottom: 20 }}>
              {`This is what you wanted, I tell myself for the millionth time. The you
          of a year ago would have been so excited to be here. Eight months ago,
          I quit my job to look for and seek out a startup idea. Now, I'm
          building one, a chatbot to help people remember their medications.
          When I first started, I remember having so much difficulty finding a
          way to focus and drive myself forward.`}
            </p>
            <p>
              {`The age of standups and
          check-ins was over, and in the middle of the pandemic...`}
            </p>
            <FadingCalendar
              calendarAnimationPercentage={animationState[Animations.CALENDAR]}
            />
            <p style={{ marginBottom: 20 }}>
              {`Things were a bit different now. I used the sun as a clock now,
          getting up at sunrise, and taking stock of my progress at sunset, as
          if I lived in an ancient agrarian society instead of Divisadero in San
          Francisco. The radio silence on my calendar was precious to me now, so
          I could just focus on my product and code. When I scheduled events, it
          was almost always Friday evening, to avoid disrupting the natural
          cadence of my work.`}
            </p>

            <p style={{ marginBottom: 20 }}>
              {`I felt more productive than I ever had since my last job. Even so, I
          felt stuck. I had a few users, but growth was stagnant. I didn't see
          how the product could be monetized. When users reported bugs, I would
          excitedly jump into the code to fix them, but when they didn't, it was
          hard not to wonder what I was doing, and whether it was a real job at
          all. A couple of weeks ago, I put a sticky note on my mirror that read`}
            </p>
            <HandwrittenNote
              animatePercentage={animationState[Animations.NOTE]}
            />
            <p style={{ marginBottom: 20 }}>
              {`along with
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
            <MessageSend
              animatePercentage={animationState[Animations.MESSAGESEND]}
            />
            <p style={{ marginBottom: 20 }}>
              {`I quickly message. As I start typing a longer
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
            <p
              style={{
                marginBottom: 200,
                marginTop: 200,
                padding: 20,
                marginLeft: -20,
                marginRight: -20,
                backgroundColor: "black",
              }}
              id={`scrollable-${Animations.HALLWAY}`}
            >
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
          so many years ago.`}
            </p>
            <Portals animationPercentage={animationState[Animations.PORTALS]} />
            <p className="endmark">
              {`I think about all the messages my dozen users send
          to my medication reminding chatbot, and the floor lamps they turn on
          at night, when the sky darkens. I feel full of light, as if I were the
          one shining through the third story windows onto the sidewalk below,
          and not the hot filament of the IKEA floor lamp in the corner.`}
            </p>
          </div>
          <div style={{ color: "black", backgroundColor: "white" }}>
            <Mailchimp />
          </div>
          <FloorLamps animationPercentage={animationState[Animations.LAMPS]} />
        </div>
      </div>
    </div>
  );
}
