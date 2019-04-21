import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

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
  padding-top: 20px;
  flex: 1;
  width: ${deviceWidth};
  height: ${deviceHeight};
`;

class EditStory extends Component {
  _goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', '');
    return (
      <Container>
        <Transition shared={id} appear="scale" disappear="scale">
          <View style={{ width: deviceWidth, height: deviceHeight }}>
            <ImageBackground
              style={{
                flex: 1,
                borderWidth: 0,
                borderColor: Colors.tintColor,
              }}
              source={Colors.image}
              resizeMode="cover"
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity onPress={this._goBack}>
                  <FeatherIcon
                    size={deviceWidth / 10}
                    name="arrow-down-circle"
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Transition>
      </Container>
    );
  }
}

export default EditStory;
