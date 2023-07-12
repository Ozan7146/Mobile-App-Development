
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const handleGoToSecondPage = () => {
    navigate('SecondPage');
  };

  return (
    <View>
      <Button title="Go to Second Page" onPress={handleGoToSecondPage} />
    </View>
  );
};

// export default HomeScreen;

