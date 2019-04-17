import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <AntDesign
        name={this.props.name}
        size={this.props.size}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}