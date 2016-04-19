import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as types from '../constants/actionTypes';
import * as counterActions from '../actions/counterActions';

class AppContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This is a simple counter. Press the button below to count.
        </Text>
        <Text style={styles.instructions}>
          {this.props.count}
        </Text>
        <TouchableOpacity onPress={this.props.counterActions.increment}>
          <Text style={styles.action}>
            plus
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.counterActions.decrement}>
          <Text style={styles.action}>
            minus
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.counterActions.incrementAsync}>
          <Text style={styles.action}>
            Async Plus
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  action: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default connect(
  (state) => ({
    count: state.counterReducer.count
  }),
  (dispatch) => ({
    counterActions: bindActionCreators(counterActions, dispatch)
  })
)(AppContainer);
