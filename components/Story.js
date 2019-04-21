/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import { Transition } from 'react-navigation-fluid-transitions';

import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import EditStory from './EditStory';

const { deviceWidth, deviceHeight } = Layout.window;

export const StoryContainer = styled.View`
  background-color: ${props => props.color || Colors.tintColor};
  width: ${props => props.width || (deviceWidth * 3) / 4};
  height: ${props => props.height || (deviceHeight * 7) / 12};
  margin: 10px;
  border-width: 5px;
  border-color: ${props => props.borderColor || Colors.tintColor};
  border-radius: 10px;
  shadow-color: ${Colors.tintColor};
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5px;
  shadow-radius: 5px;
  elevation: 5;
`;
const Image = styled.ImageBackground`
  flex: 1;
  border-width: 0;
  border-color: ${Colors.tintColor};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StoryHeader = styled.View`
  height: ${(deviceHeight * 1) / 6};
  width: ${(deviceWidth * 3) / 4};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StoryDateText = styled.Text`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || '16'};
  opacity: ${props => props.opacity || 1};
`;
const DateContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StoryFooter = styled.View`
  height: ${(deviceHeight * 1) / 6};
  width: ${(deviceWidth * 3) / 4};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.Text`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || 16};
  font-family: 'pacifico';
`;

// const images = {
//   'purple.png': require('../assets/images/purple.png'),
//   'pink.png': require('../assets/images/pink.png'),
// };

export default class Story extends React.Component {
  _onPress = () => {
    const { story, _onChooseStory } = this.props;
    // this.props.navigation.navigate('EditStory');
    _onChooseStory(story);
  };

  render() {
    const { story } = this.props;
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View>
            <Transition shared={story.id}>
              <View
                style={{
                  width: (deviceWidth * 3) / 4,
                  height: (deviceHeight * 7) / 12,
                  backgroundColor: Colors.tintColor,
                  margin: 10,
                  borderWidth: 5,
                  borderColor: Colors.tintColor,
                  borderRadius: 10,
                  shadowColor: Colors.tintColor,
                  shadowOffset: { width: 5, height: 5 },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                {/* <StoryContainer> */}
                <ImageBackground
                  style={{
                    flex: 1,
                    borderWidth: 0,
                    borderColor: Colors.tintColor,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  source={Colors.image}
                  resizeMode="cover"
                >
                  <StoryHeader>
                    <DateContainer>
                      <StoryDateText
                        color={Colors.noticeText}
                        fontSize={Layout.storyDateSize}
                      >
                        {moment(story.createDate).date()}
                      </StoryDateText>
                      <StoryDateText
                        color={Colors.noticeText}
                        fontSize={Layout.storyDateSize}
                      >
                        {moment(story.createDate).format('MMM')}
                      </StoryDateText>
                      <StoryDateText
                        color={Colors.noticeText}
                        fontSize={16}
                        opacity={0.8}
                      >
                        {moment(story.createDate).year()}
                      </StoryDateText>
                    </DateContainer>
                  </StoryHeader>
                  <StoryFooter>
                    <Title color={Colors.noticeText} fontSize={24}>
                      {story.title}
                    </Title>
                  </StoryFooter>
                </ImageBackground>
                {/* </StoryContainer> */}
              </View>
            </Transition>
          </View>
        </TouchableWithoutFeedback>
      </Fragment>
    );
  }
}
