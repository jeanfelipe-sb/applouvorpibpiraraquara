import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Animated} from 'react-native';
import {Container, Ball} from './styles';

export default function Loader() {
  const animations = {
    one: new Animated.Value(0),
    two: new Animated.Value(0),
    three: new Animated.Value(0),
  };

  function onAnimate(animation, nextAnimation) {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -10,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(nextAnimation, 200);
  }

  function onStartAnimate() {
    function onThreeAnimation() {
      onAnimate(animations.three, () => {
        setTimeout(onStartAnimate, 800);
      });
    }

    function onTwoAnimation() {
      onAnimate(animations.two, onThreeAnimation);
    }

    onAnimate(animations.one, onTwoAnimation);
  }

  useEffect(() => {
    onStartAnimate();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Ball
          style={{transform: [{translateY: animations.one}]}}
          color="#1A659E"
        />
        <Ball
          style={{transform: [{translateY: animations.two}]}}
          color="#e9c46a"
        />
        <Ball
          style={{transform: [{translateY: animations.three}]}}
          color="#e76f51"
        />
      </Container>
    </View>
  );
}