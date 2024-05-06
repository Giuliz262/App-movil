import React, { useRef, useCallback } from 'react';
import { SafeAreaView, ScrollView, View, ImageBackground, Animated, useWindowDimensions, StyleSheet, Text } from 'react-native';

const images = [
  'https://images.squarespace-cdn.com/content/v1/5fd56e513c1f6275809ed7d1/1633502681708-2N00GGCCYRTPVONA8KBF/Cranky+cat.PNG',
  'https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg',
  'https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-70.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/gato-instagram-stepan-fiestas-1639136864.jpg?crop=0.471xw:0.838xh;0.265xw,0.162xh&resize=1200:*',
  'https://i.pinimg.com/originals/9f/f5/85/9ff585c33875ff6e16a4c3d591fe3ba6.jpg',
  'https://img.redbull.com/images/c_crop,x_234,y_0,h_876,w_657/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/08/08/549852b7-44c6-49da-b3a3-b8bcbbddec4c/cat-asparragus',
];

const HomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const handleScroll = useCallback((event) => {
    const { contentOffset } = event.nativeEvent;
    const offsetX = contentOffset.x;
    scrollX.setValue(offsetX);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/736x/76/41/44/7641440e5c4fcb99ca0dd614caf9d572.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {images.map((image, index) => (
              <View key={index} style={{ width: windowWidth, height: 250 }}>
                <ImageBackground source={{ uri: image }} style={styles.card}>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;
