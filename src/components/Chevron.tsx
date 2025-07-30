import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Chevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));
  return (
    <Animated.View style={iconStyle}>
      <Ionicons
        name='chevron-down-circle-outline'
        size={24}
        color={'#0A84FF'}
      />
    </Animated.View>
  );
};

export default Chevron;
