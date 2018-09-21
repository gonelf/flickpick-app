import React from 'react';
import { View, StyleSheet, Button, ActivityIndicator } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String
});

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLogedin: false }
    this.token = {  }
  }

  handleSubmit = () => {
    // get form values
    const form = this._form.getValue(); // use that ref to get the form value
    console.log('email: ', form.email);
    console.log('pass: ', form.password);
    console.log(JSON.stringify({
      email: form.email,
      password: form.password,
    }));

    // post login info
    fetch('https://flickpick-rails.herokuapp.com/auth/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.todos.v0+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        /*
        this.setState({
          isLogedin: true,
          dataSource: responseJson,
        }, function(){
          console.log(dataSource)
        });
        */
        console.log(responseJson['auth_token'])
      }).catch((error) =>{
        console.log(error);
        // console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User} />
        <Button
          title="Login"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default Login
