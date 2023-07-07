export enum Animations {
  CALENDAR = "CALENDAR",
  NOTE = "NOTE",
  MESSAGESEND = "MESSAGESEND",
}

type AnimationBlock = {
  startHeight: number;
  length: number;
  animationName: Animations;
};

export type AnimationsConfigList = AnimationBlock[];
const TOLERANCE = 0.001;

export const ANIMATIONS_CONFIG: AnimationsConfigList = [
  {
    startHeight: 50,
    length: 500,
    animationName: Animations.CALENDAR,
  },
  {
    startHeight: 460,
    length: 500,
    animationName: Animations.NOTE,
  },
  {
    startHeight: 1250,
    length: 500,
    animationName: Animations.MESSAGESEND,
  },
];

export type AnimationState = {
  [Animations.CALENDAR]: number; // percentage complete
  [Animations.NOTE]: number;
  [Animations.MESSAGESEND]: number;
  pageHeight: number;
};

export const INITIAL_ANIMATION_STATE: AnimationState = {
  [Animations.CALENDAR]: 0,
  [Animations.NOTE]: 0,
  [Animations.MESSAGESEND]: 0,
  pageHeight: 0,
};

export function getUpdatedAnimationState(
  currentAnimationState: AnimationState,
  animationConfig: AnimationsConfigList,
  deltaY: number,
  maxHeight: number
): AnimationState {
  let newAnimationState = { ...currentAnimationState };
  let deltaRemaining = deltaY;
  if (deltaY > 0) {
    for (const config of animationConfig) {
      if (config.startHeight < newAnimationState.pageHeight) {
        continue;
      }
      if (newAnimationState.pageHeight < config.startHeight - TOLERANCE) {
        const deltaToConsume = Math.min(
          config.startHeight - newAnimationState.pageHeight,
          deltaRemaining
        );
        newAnimationState.pageHeight =
          newAnimationState.pageHeight + deltaToConsume;
        deltaRemaining -= deltaToConsume;
      }
      if (
        Math.abs(config.startHeight - newAnimationState.pageHeight) < TOLERANCE
      ) {
        // increment animation state
        const deltaToConsume = Math.min(
          config.length * (1 - newAnimationState[config.animationName]),
          deltaRemaining
        );
        newAnimationState[config.animationName] =
          newAnimationState[config.animationName] +
          deltaToConsume / config.length;
        deltaRemaining -= deltaToConsume;
      }
      if (deltaRemaining === 0) break;
    }
    if (deltaRemaining > 0) {
      newAnimationState.pageHeight = Math.min(
        maxHeight,
        newAnimationState.pageHeight + deltaRemaining
      );
    }
  } else if (deltaY < 0) {
    for (const config of animationConfig.slice().reverse()) {
      if (config.startHeight > newAnimationState.pageHeight) {
        continue;
      }
      if (config.startHeight < newAnimationState.pageHeight - TOLERANCE) {
        const deltaToConsume = Math.max(
          config.startHeight - newAnimationState.pageHeight,
          deltaRemaining
        );
        newAnimationState.pageHeight =
          newAnimationState.pageHeight + deltaToConsume;
        deltaRemaining -= deltaToConsume;
      }
      if (
        Math.abs(config.startHeight - newAnimationState.pageHeight) < TOLERANCE
      ) {
        // increment animation state
        const deltaToConsume = Math.max(
          -1 * config.length * newAnimationState[config.animationName],
          deltaRemaining
        );
        newAnimationState[config.animationName] =
          newAnimationState[config.animationName] +
          deltaToConsume / config.length;
        deltaRemaining -= deltaToConsume;
      }
      if (deltaRemaining === 0) break;
    }
    if (deltaRemaining < 0) {
      newAnimationState.pageHeight = Math.max(
        0,
        newAnimationState.pageHeight + deltaRemaining
      );
    }
  }
  return newAnimationState;
}
