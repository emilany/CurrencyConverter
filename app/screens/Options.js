import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static PropTypes: {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  handlePressThemes = () => {
    this.props.navigation.navigate('Themes')
  };

  handlePressSite = () => {
    Linking.openURL('http://fixer.io').catch(() => this.props.alertWithType('error', 'Sorry', "Fixer.io can't be opened"));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Icon name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={
            <Icon name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
