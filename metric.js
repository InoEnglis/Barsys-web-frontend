import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 768; // Standard width (design width)
const guidelineBaseHeight = 1024; // Standard height (design height)

export const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
