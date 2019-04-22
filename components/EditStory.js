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
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import moment from 'moment';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

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
  padding-top: 10px;
  background-color: ${Colors.tintColor};
`;

const Header = styled.View`
  width: ${props => props.width || deviceWidth - 20};
  padding: 10px;
`;

const Footer = styled.View`
  width: ${props => props.width || deviceWidth - 20};
  flex-direction: column;
  padding: 10px;
  padding-bottom: 30px;
`;

const AnimatedCustomScrollView = Animated.createAnimatedComponent(ScrollView);

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

  myCustomTransitionFunction = transitionInfo => {
    const { progress, start, end } = transitionInfo;
    const scaleInterpolation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [0, 1, 1, 0],
    });
    return { transform: [{ opacity: scaleInterpolation }] };
  };

  render() {
    const { navigation } = this.props;
    const { storyContent } = this.props;
    const story = navigation.getParam('story', '');
    return (
      <Container>
        <KeyboardAvoidingView>
          <Header>
            <TouchableOpacity onPress={this._goBack}>
              <FeatherIcon
                size={deviceWidth / 10}
                name="arrow-down-circle"
                color="#fff"
              />
            </TouchableOpacity>
          </Header>
          <Transition shared={story.id} appear="scale" disappear="scale">
            <View
              style={{
                width: deviceWidth,
                height: deviceHeight,
                backgroundColor: Colors.tintColor,
                // paddingTop: 20,
              }}
            >
              <ImageBackground
                style={{
                  flex: 1,
                  borderWidth: 0,
                  borderColor: Colors.tintColor,
                }}
                source={Colors.image}
                resizeMode="cover"
              >
                <ParallaxScrollView
                  backgroundColor={Colors.tintColor}
                  contentBackgroundColor={Colors.noticeText}
                  backgroundScrollSpeed={1}
                  parallaxHeaderHeight={300}
                  renderForeground={() => (
                    <ImageBackground
                      style={{
                        flex: 1,
                        borderWidth: 0,
                        borderColor: Colors.tintColor,
                      }}
                      source={Colors.image}
                      resizeMode="cover"
                    />
                  )}
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
                      <Transition
                        shared={`title_${story.id}`}
                        appear="scale"
                        disappear="scale"
                      >
                        <Text
                          style={{
                            color: Colors.mainTextFont,
                            fontSize: 24,
                            fontFamily: 'pacifico',
                          }}
                        >
                          {story.title}
                        </Text>
                      </Transition>
                      <View style={{ flexDirection: 'row' }}>
                        <Transition
                          shared={`year_${story.id}`}
                          appear="horizontal"
                          disappear="vertical"
                        >
                          <Text
                            style={{
                              color: Colors.mainTextFont,
                              fontSize: Layout.storyDateSize,
                              opacity: 1,
                            }}
                          >
                            {moment(story.createDate).format('YYYY, ')}
                          </Text>
                        </Transition>
                        <Transition
                          shared={`month_${story.id}`}
                          appear="horizontal"
                          disappear="vertical"
                        >
                          <Text
                            style={{
                              color: Colors.mainTextFont,
                              fontSize: Layout.storyDateSize,
                              opacity: 1,
                            }}
                          >
                            {moment(story.createDate).format('MMM, ')}
                          </Text>
                        </Transition>
                        <Transition
                          shared={`date_${story.id}`}
                          appear="horizontal"
                          disappear="vertical"
                        >
                          <Text
                            style={{
                              color: Colors.mainTextFont,
                              fontSize: Layout.storyDateSize,
                              opacity: 1,
                            }}
                          >
                            {moment(story.createDate).format('DD')}
                          </Text>
                        </Transition>
                      </View>
                      <TextInput
                        autoCapitalize="sentences"
                        multiline
                        onChangeText={text =>
                          this.setState({ storyContent: text })
                        }
                        value={storyContent}
                        placeholder="Write your story"
                      />
                    </Footer>
                  </View>
                </ParallaxScrollView>
              </ImageBackground>
            </View>
          </Transition>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default EditStory;
