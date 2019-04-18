import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

import styled from 'styled-components';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const { deviceWidth, deviceHeight } = Layout.window;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${deviceHeight / 5};
  padding-bottom: ${deviceHeight / 10};
`
const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.backgroundColorScroll || 'red'};
  padding-right: 50;
`
const StoryContainer = styled.View`
  background-color: ${Colors.tintColor};
  width: ${deviceWidth * 3 / 4};
  height: ${deviceHeight * 7 / 12};
  margin: 10px;
  border-radius: 10px;
  shadow-color: #6459A3;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5px;
  shadow-radius: 5px;
  elevation: 5;
`
const Label = styled.View`
  background-color: ${Colors.mainBackground};
  width: ${deviceWidth * 1 / 2};
  height: ${deviceHeight * 7 / 12};
  padding: 30px;
`
const TextLabel = styled.Text`
  font-size: 40;
  font-family: 'pacifico';
`
const SeperateLine = styled.View`
  background-color: ${Colors.line};
  width: 100px;
  height: 2px;
  margin: 20px;
`
const FilterLabel = styled.Text`
  color: ${Colors.noMainTextFont};
  font-size: 16;
  font-family: 'space-mono';
`
const Hashtag = styled.Text`
  color: ${Colors.mainTextFont};
  font-size: 16;
  padding-top: 8px;
  font-family: 'kalam';
`

export default class MyStory extends React.Component {
  render() {
    return (
      <Container>
        <ScrollContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          backgroundColorScroll={Colors.mainBackground}
        >
          <Label>
            <TextLabel>Your Stories</TextLabel>
            <SeperateLine />
            <FilterLabel>HASHTAG</FilterLabel>
            <TouchableOpacity>
              <Hashtag># Friend</Hashtag>
            </TouchableOpacity>
            <TouchableOpacity>
              <Hashtag># Work</Hashtag>
            </TouchableOpacity>
            <TouchableOpacity>
              <Hashtag># Love</Hashtag>
            </TouchableOpacity>
          </Label>
          <TouchableWithoutFeedback>
            <StoryContainer></StoryContainer>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <StoryContainer></StoryContainer>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <StoryContainer></StoryContainer>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <StoryContainer></StoryContainer>
          </TouchableWithoutFeedback>
        </ScrollContainer>
      </Container>
    );
  }
}
