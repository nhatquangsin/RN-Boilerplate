import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { name, size, focused, tabIconDefault, tabIconSelected } = this.props;
    return (
      <AntDesign
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={focused ? tabIconSelected : tabIconDefault}
      />
    );
  }
}
