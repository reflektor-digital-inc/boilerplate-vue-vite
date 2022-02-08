import { SCREEN_SIZE_MATRIX } from '@settings/settings.support';

const checkWindowTooSmall = (windowSize) => {
  let tooSmall = false;

  if (windowSize) {
    tooSmall = (
      windowSize.width < SCREEN_SIZE_MATRIX.minimum.width ||
      windowSize.height < SCREEN_SIZE_MATRIX.minimum.height
    );
  }

  return tooSmall;
};

const checkWindowTooLarge = (windowSize) => {
  let tooLarge = false;

  if (windowSize) {
    tooLarge = (
      windowSize.width > SCREEN_SIZE_MATRIX.maximum.width ||
      windowSize.height > SCREEN_SIZE_MATRIX.maximum.height
    );
  }

  return tooLarge;
};

export { checkWindowTooSmall, checkWindowTooLarge };
