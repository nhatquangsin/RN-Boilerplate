/* eslint-disable global-require */
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import moment from 'moment';
import ParallaxScrollView from './ParallaxScrollView';

import FeatherIcon from './FeatherIcon';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const { deviceWidth, deviceHeight } = Layout.window;

const Image = styled.ImageBackground`
  flex: 1;
  border-width: 0;
  border-color: ${Colors.tintColor};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  width: ${deviceWidth};
  height: ${deviceHeight};
  background-color: ${Colors.tintColor};
`;

const Header = styled.View`
  width: ${props => props.width || deviceWidth - 30};
  padding: 15px;
`;

const Footer = styled.View`
  width: ${props => props.width || deviceWidth - 20};
  flex-direction: column;
  padding: 10px;
  padding-bottom: 200px;
`;

class EditStory extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const story = navigation.getParam('story', '');
    this.state = {
      storyContent: (story && story.content) || '',
    };
  }

  _goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  _onBlur = story => {
    const { navigation } = this.props;
    const editContent = navigation.getParam('editContent', '');
    const { storyContent } = this.state;
    if (story.content !== storyContent) {
      editContent(story.id, storyContent);
    }
  };

  myCustomTransitionFunction = transitionInfo => {
    const { progress, start, end } = transitionInfo;
    const scaleInterpolation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [0, 0, 0, 1],
    });
    return { transform: [{ scale: scaleInterpolation }] };
  };

  render() {
    const { navigation } = this.props;
    const { storyContent } = this.state;
    const story = navigation.getParam('story', '');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? -100 : 0;
    return (
      <Container>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Transition shared={story.id} appear="scale" disappear="scale">
            <View
              style={{
                width: deviceWidth,
                height: deviceHeight,
                backgroundColor: Colors.tintColor,
              }}
            >
              <ParallaxScrollView
                showsVerticalScrollIndicator={false}
                windowHeight={deviceHeight * 0.5}
                backgroundSource={require('../assets/images/purple.png')}
                navBarTitle={story.title}
                navBarColor={Colors.tintColor}
                navBarTitleColor={Colors.mainTextFont}
                userName={story.title}
                userTitle={moment(story.createDate).format('YYYY, MMM, DD')}
                userImage="https://images.unsplash.com/photo-1555865661-725e46d6748d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                leftIcon={{
                  name: 'arrow-down-circle',
                  color: '#fff',
                  size: 30,
                  type: 'feather',
                }}
                leftIconOnPress={this._goBack}
                rightIcon={{
                  name: 'user',
                  color: '#fff',
                  size: 30,
                  type: 'font-awesome',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 10,
                    paddingTop: 20,
                    paddingBottom: 60,
                    borderRadius: 20,
                  }}
                >
                  <Footer>
                    <TextInput
                      autoCapitalize="sentences"
                      multiline
                      onChangeText={text =>
                        this.setState({ storyContent: text })
                      }
                      value={storyContent}
                      placeholder="Write your story"
                      scrollEnabled={false}
                      style={{
                        fontSize: 18,
                        padding: 10,
                        marginTop: 10,
                        borderLeftColor: Colors.tintColor,
                        borderLeftWidth: 2,
                        fontFamily: 'enriqueta',
                      }}
                      onBlur={() => this._onBlur(story)}
                    />
                  </Footer>
                </View>
              </ParallaxScrollView>
            </View>
          </Transition>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default EditStory;
