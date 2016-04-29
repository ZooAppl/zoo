/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,

} from 'react-native';

class ZooApp extends Component {
  render() {
    return (

      <Image 
        style={styles.container}
        source={require('./zoo_background.jpg')}
      >
      </Image>  


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});

AppRegistry.registerComponent('ZooApp', () => ZooApp);
