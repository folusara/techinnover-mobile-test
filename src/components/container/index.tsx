import React from 'react';
import {View} from 'react-native';
import {IContainerProps} from './container.types';
import ContainerStyles from './container.styles';

const Container = (props: IContainerProps) => {
  const {children, style} = props;

  return <View style={[ContainerStyles.canvas, style]}>{children}</View>;
};

export default Container;
