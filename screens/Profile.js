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
import styled from 'styled-components/native';

import Colors, {
  pink,
  pinkRed,
  yellow,
  green,
  purple,
} from '../constants/Colors';
import Layout from '../constants/Layout';
import Story from '../components/Story';
import {
  StoryContainer,
} from '../components/Story';

const colorTheme = [
  pink,
  pinkRed,
  yellow,
  green,
  purple,
]

const { deviceWidth, deviceHeight } = Layout.window;

const settingComponentWidth = deviceWidth - 40;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 20px;
  height: ${deviceHeight};
  width: ${deviceHeight};
`
const ScrollContainer = styled.ScrollView`
  flex-grow: 1;
  /* background-color: ${props => props.backgroundColorScroll || 'red'}; */
  padding: ${props => props.padding || '10px'};
`
const ThemeContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${props => props.colorTheme || '#fff'};
  margin: 20px;
  border-radius: 25px;
  /* border-width: 3px; */
  /* border-color: #fff; */
  shadow-color: #6459A3;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5px;
  shadow-radius: 5px;
  elevation: 5;
`

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <ScrollContainer
        // backgroundColorScroll={Colors.mainBackground}
        >
          <StoryContainer
            width={settingComponentWidth}
            height={deviceHeight / 6}
            color={Colors.underlayColor}
            borderColor={Colors.underlayColor}
          >
            <ScrollContainer
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {colorTheme.map(theme => (
                <TouchableWithoutFeedback key={theme}>
                  <ThemeContainer
                    colorTheme={theme}
                  ></ThemeContainer>
                </TouchableWithoutFeedback>
              ))}
            </ScrollContainer>
          </StoryContainer>
        </ScrollContainer>
      </Container>
    );
  }
}