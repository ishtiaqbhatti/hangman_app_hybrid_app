import { Easing, Animated } from 'react-native'

export const screenOptions = {
  transitionSpec: {
    duration: 750,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
}
