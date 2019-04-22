/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Story from '../components/Story';

const { deviceWidth, deviceHeight } = Layout.window;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${deviceHeight / 5};
  padding-bottom: ${deviceHeight / 10};
`;
export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.backgroundColorScroll || 'red'};
  padding-right: ${props => props.paddingRight || 0};
`;
const Label = styled.View`
  background-color: ${Colors.mainBackground};
  width: ${(deviceWidth * 1) / 2};
  height: ${(deviceHeight * 7) / 12};
  padding: 30px;
`;
const TextLabel = styled.Text`
  font-size: 40;
  font-family: 'pacifico';
`;
const SeperateLine = styled.View`
  background-color: ${Colors.line};
  width: 100px;
  height: 2px;
  margin: 20px;
`;
const FilterLabel = styled.Text`
  color: ${Colors.noMainTextFont};
  font-size: 16;
  font-family: 'space-mono';
`;
const Hashtag = styled.Text`
  color: ${props => props.color || '#fff'};
  font-size: 16;
  font-family: 'kalam';
  padding: ${props => props.padding || '0px'};
`;
const HashtagContainer = styled.View`
  background-color: ${props => props.background || 'red'};
  margin: 5px;
  padding: 2px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  shadow-color: #6459a3;
  shadow-offset: 3px 3px;
  shadow-opacity: 0.5px;
  shadow-radius: 5px;
  elevation: 5;
`;

class MyStory extends React.Component {
  state = {
    choosingStory: '111',
    chossingHashtag: [],
  };

  _onChooseStory = story => {
    this.setState({ choosingStory: story.id });
    this.props.navigation.navigate('EditStory', { story });
  };

  _onFilter = hashtag => {
    const { chossingHashtag } = this.state;
    if (chossingHashtag.includes(hashtag)) {
      this.setState({
        chossingHashtag: chossingHashtag.filter(item => item !== hashtag),
      });
    } else {
      this.setState({
        chossingHashtag: [...chossingHashtag, hashtag],
      });
    }
  };

  render() {
    return (
      <Container>
        <ScrollContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          backgroundColorScroll={Colors.mainBackground}
          paddingRight={50}
        >
          <Label>
            <TextLabel>Your Stories</TextLabel>
            <SeperateLine />
            <FilterLabel>HASHTAG</FilterLabel>
            {this.props.hashtag.slice(0, 4).map(hashtag => (
              <Fragment key={hashtag}>
                {this.state.chossingHashtag.includes(hashtag) ? (
                  <TouchableOpacity onPress={() => this._onFilter(hashtag)}>
                    <HashtagContainer background={Colors.tintColor}>
                      <Hashtag>{`# ${hashtag}`}</Hashtag>
                    </HashtagContainer>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => this._onFilter(hashtag)}>
                    <Hashtag
                      color={Colors.mainTextFont}
                      padding="5px"
                    >{`# ${hashtag}`}</Hashtag>
                  </TouchableOpacity>
                )}
              </Fragment>
            ))}
          </Label>
          {this.props.stories.map(story => (
            <Story
              choosingStory={this.state.choosingStory}
              _onChooseStory={() => this._onChooseStory(story)}
              key={story.id}
              story={story}
              {...this.props}
            />
          ))}
        </ScrollContainer>
      </Container>
    );
  }
}

export default connect(
  state => ({
    hashtag: state.story.hashtag,
    stories: state.story.stories,
  }),
  {}
)(MyStory);
