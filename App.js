/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { Fragment } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Platform,
  Dimensions,
  TouchableHighlight,
  LayoutAnimation,
  NativeModules,
  Animated,
  Easing,
} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './navigations/AppNavigator';
import NavigationService from './components/NavigationService';

import robotDev from './assets/images/robot-dev.png';
import robotProd from './assets/images/robot-prod.png';
import font from './assets/fonts/Pacifico-Regular.ttf';
import SpaceMono from './assets/fonts/SpaceMono-Regular.ttf';
import Cardo from './assets/fonts/Cardo-Regular.ttf';
import Kalam from './assets/fonts/Kalam-Regular.ttf';
import Alegreya from './assets/fonts/Alegreya-Regular.ttf';
import IndieFlower from './assets/fonts/IndieFlower.ttf';
import Enriqueta from './assets/fonts/Enriqueta-Regular.ttf';
import Colors from './constants/Colors';
import TabBarIcon from './components/TabBarIcon';
import store, { persistor } from './store';
import Layout from './constants/Layout';

const { deviceWidth, deviceHeight } = Layout.window;

const { UIManager } = NativeModules;

// eslint-disable-next-line no-unused-expressions
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const DURATION = 200;
const NAVIGATE_BUTTON_LEFT = (deviceWidth * 2) / 5;
const NAVIGATE_BUTTON_MARGIN_BOTTOM = 20;
const ACTION_BUTTON_MARGIN_BOTTOM = 6.5;

const NavigateButtonContainer = styled.View`
  position: absolute;
  height: ${props => props.height || 90};
  width: ${props => props.width || 100};
  bottom: 0;
  left: ${props => props.left || 0};
  background-color: ${props => props.backgroundColor || 'white'};
`;
const NavigateButtonTouchable = styled.TouchableHighlight`
  position: absolute;
  height: ${props => props.height || 100};
  width: ${props => props.width || 100};
  bottom: ${props => props.bottom || 0};
  left: ${props => props.left || 0};
  background-color: ${props => props.backgroundColor || 'white'};
  border-radius: ${props => props.borderRadius || 100};
  z-index: ${props => props.zIndex || 0};
  shadow-color: #6459a3;
  shadow-offset: 3px 3px;
  shadow-opacity: 0.25px;
  shadow-radius: 5px;
  elevation: 5;
`;
const OnPressNavigatePanel = styled.TouchableHighlight`
  position: absolute;
  height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundColor || 'white'};
  opacity: 0.3;
  z-index: 0;
`;
const NavigateButtonView = styled.View`
  position: absolute;
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  height: ${props => props.height || 100};
  width: ${props => props.width || 100};
`;
const AnimatedNavigateButton = Animated.createAnimatedComponent(
  NavigateButtonTouchable
);
const AnimatedPanel = Animated.createAnimatedComponent(OnPressNavigatePanel);
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isOnNavigatePanelOpen: false,
    anim: new Animated.Value(
      NAVIGATE_BUTTON_MARGIN_BOTTOM + ACTION_BUTTON_MARGIN_BOTTOM
    ),
    anim2: new Animated.Value(
      NAVIGATE_BUTTON_MARGIN_BOTTOM + ACTION_BUTTON_MARGIN_BOTTOM
    ),
    anim2Left: new Animated.Value(
      NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM
    ),
    anim3: new Animated.Value(
      NAVIGATE_BUTTON_MARGIN_BOTTOM + ACTION_BUTTON_MARGIN_BOTTOM
    ),
    anim3Left: new Animated.Value(
      NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM
    ),
  };

  _onPressNavigate = async () => {
    const { anim, anim2, anim2Left, anim3, anim3Left } = this.state;
    await LayoutAnimation.easeInEaseOut();
    await this.setState({
      isOnNavigatePanelOpen: !this.state.isOnNavigatePanelOpen,
    });
    const open = this.state.isOnNavigatePanelOpen;
    const toValue = open
      ? 150
      : NAVIGATE_BUTTON_MARGIN_BOTTOM + ACTION_BUTTON_MARGIN_BOTTOM;
    const toValue2 = open
      ? 100
      : NAVIGATE_BUTTON_MARGIN_BOTTOM + ACTION_BUTTON_MARGIN_BOTTOM;
    const toValue2Left = open
      ? NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM - 100
      : NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM;
    const toValue3 = open
      ? 100
      : NAVIGATE_BUTTON_MARGIN_BOTTOM + ACTION_BUTTON_MARGIN_BOTTOM;
    const toValue3Left = open
      ? NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM + 100
      : NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM;
    const createAnimation = function(
      value,
      duration,
      toValue,
      easing,
      delay = 0
    ) {
      return Animated.timing(value, {
        toValue,
        duration,
        easing,
        delay,
      });
    };
    Animated.parallel([
      createAnimation(anim, DURATION, toValue, Easing.ease),
      createAnimation(anim2, DURATION, toValue2, Easing.ease),
      createAnimation(anim2Left, DURATION, toValue2Left, Easing.ease),
      createAnimation(anim3, DURATION, toValue3, Easing.ease),
      createAnimation(anim3Left, DURATION, toValue3Left, Easing.ease),
    ]).start();
  };

  _loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([robotDev, robotProd]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        pacifico: font,
        'space-mono': SpaceMono,
        cardo: Cardo,
        kalam: Kalam,
        alegreya: Alegreya,
        'indie-flower': IndieFlower,
        enriqueta: Enriqueta,
      }),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const {
      isLoadingComplete,
      isOnNavigatePanelOpen,
      anim,
      anim2,
      anim2Left,
      anim3,
      anim3Left,
    } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <View style={styles.container}>
              {Platform.OS === 'ios' && (
                <StatusBar barStyle={Layout.barStatusColor} />
              )}
              <AppNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
              {isOnNavigatePanelOpen ? (
                <AnimatedPanel
                  backgroundColor={Colors.tintColor}
                  width={deviceWidth}
                  height={deviceHeight}
                  onPress={this._onPressNavigate}
                  isOnNavigatePanelOpen={isOnNavigatePanelOpen}
                >
                  <View />
                </AnimatedPanel>
              ) : null}
              {/* <NavigateButton
              anim={anim}
              anim2={anim2}
              anim2Left={anim2Left}
              anim3={anim3}
              anim3Left={anim3Left}
              isOnNavigatePanelOpen={isOnNavigatePanelOpen}
              _onPressNavigate={this._onPressNavigate}
              {...this.props}
            /> */}
            </View>
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

class ActionButton extends React.Component {
  render() {
    const { left, bottom, onPress, icon } = this.props;
    return (
      <AnimatedNavigateButton
        width={deviceWidth / 6}
        height={deviceWidth / 6}
        borderRadius={deviceWidth / 10}
        left={left}
        bottom={bottom}
        backgroundColor={Colors.actionButtonColor}
        underlayColor={Colors.underlayColor}
        onPress={onPress}
        zIndex={1}
      >
        <NavigateButtonView
          top={deviceWidth / 30}
          left={deviceWidth / 30}
          width={deviceWidth / 10}
        >
          <TabBarIcon
            size={deviceWidth / 10}
            name={icon || 'plus'}
            backgroundColor={Colors.backgroundColor}
            tabIconSelected="#fff"
            tabIconDefault="#fff"
          />
        </NavigateButtonView>
      </AnimatedNavigateButton>
    );
  }
}

class NavigateButton extends React.Component {
  _onPress = async () => {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props._onPressNavigate();
  };

  _onAddStory = async () => {
    await this.props._onPressNavigate();
    NavigationService.navigate('EditStory');
  };

  render() {
    const { anim, anim2, anim2Left, anim3, anim3Left } = this.props;
    return (
      <Fragment>
        <NavigateButtonTouchable
          width={deviceWidth / 5}
          height={deviceWidth / 5}
          borderRadius={deviceWidth / 10}
          left={NAVIGATE_BUTTON_LEFT}
          bottom={NAVIGATE_BUTTON_MARGIN_BOTTOM}
          backgroundColor={Colors.tintColor}
          underlayColor={Colors.underlayColor}
          onPress={this._onPress}
          zIndex={2}
        >
          <NavigateButtonView
            top={deviceWidth / 20}
            left={deviceWidth / 20}
            width={deviceWidth / 10}
          >
            <TabBarIcon
              size={deviceWidth / 10}
              name="calendar"
              backgroundColor={Colors.backgroundColor}
              tabIconSelected="#fff"
              tabIconDefault="#fff"
            />
          </NavigateButtonView>
        </NavigateButtonTouchable>
        <ActionButton
          left={NAVIGATE_BUTTON_LEFT + ACTION_BUTTON_MARGIN_BOTTOM}
          bottom={anim}
          onPress={this._onAddStory}
          icon="plus"
        />
        <ActionButton left={anim2Left} bottom={anim2} onPress={this._onPress} />
        <ActionButton left={anim3Left} bottom={anim3} onPress={this._onPress} />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
