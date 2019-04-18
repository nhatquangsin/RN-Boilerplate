import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';
import moment from 'moment';

import styled from 'styled-components';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import EditStory from '../components/EditStory';

import background from '../assets/images/story-background.png';

const { deviceWidth, deviceHeight } = Layout.window;

const StoryContainer = styled.View`
  background-color: ${Colors.tintColor};
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  width: ${props => props.width || deviceWidth * 3 / 4};
  height: ${props => props.height || deviceHeight * 7 / 12};
  z-index: ${props => props.zIndex || 0};
  margin: 10px;
  border-radius: 10px;
  shadow-color: #6459A3;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5px;
  shadow-radius: 5px;
  elevation: 5;
`
const Image = styled.ImageBackground`
  flex: 1;
  width: ${deviceWidth * 3 / 4};
  height: ${deviceHeight * 7 / 12};
  border-radius: 10px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const StoryHeader = styled.View`
  height: ${deviceHeight * 1 / 6};
  width: ${deviceWidth * 3 / 4};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StoryDateText = styled.Text`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || '16'};
  opacity: ${props => props.opacity || 1};
`
const DateContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StoryFooter = styled.View`
  height: ${deviceHeight * 1 / 6};
  width: ${deviceWidth * 3 / 4};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.Text`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || 16};
  font-family: 'pacifico';
`

export default class Story extends React.Component {
  state = {
    position: 'relative',
    top: 0,
    left: 0,
    width: deviceWidth * 3 / 4,
    height: deviceHeight * 7 / 12,
    zIndex: 0,
  }
  _onPress = () => {
    // this.props.navigation.navigate('EditStory');
    this.props._onChooseStory(this.props.story.id);
  }
  render() {
    const { position, top, left, width, height, zIndex } = this.state;
    return (
      <Fragment>
        <TouchableWithoutFeedback
          onPress={this._onPress}
        >
          <StoryContainer
            position={position}
            top={top}
            left={left}
            width={width}
            height={height}
            zIndex={zIndex}
          >
            <Image
              source={background}
            >
              <StoryHeader>
                <DateContainer>
                  <StoryDateText
                    color={Colors.noticeText}
                    fontSize={Layout.storyDateSize}
                  >
                    {moment(this.props.story.createDate).date()}
                  </StoryDateText>
                  <StoryDateText
                    color={Colors.noticeText}
                    fontSize={Layout.storyDateSize}
                  >
                    {moment(this.props.story.createDate).format('MMM')}
                  </StoryDateText>
                  <StoryDateText
                    color={Colors.noticeText}
                    fontSize={16}
                    opacity={0.8}
                  >
                    {moment(this.props.story.createDate).year()}
                  </StoryDateText>
                </DateContainer>
              </StoryHeader>
              <StoryFooter>
                <Title
                  color={Colors.noticeText}
                  fontSize={24}
                >
                  {this.props.story.title}
                </Title>
              </StoryFooter>
            </Image>
          </StoryContainer>
        </TouchableWithoutFeedback>
      </Fragment>
    )
  }
}