import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Left, Header, Content, Form, Item, Input, Label, Toast, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Mutation } from 'react-apollo';
import { validateGig } from '../../utils/validator';
import { createGig } from '../../graphql/queries';
import styles from './styles';

class NewGig extends React.Component {
  state = {
    title: null,
    description: null,
    price: null,
    location: null,
    contactName: null,
    contactEmail: null,
    contactPhone: null
  }

  runValidator = (createGigAction) => {
    const errors = validateGig(this.state)
    if (errors.length > 0) {
      return Toast.show({
        type: 'danger',
        text: errors[0],
        duration: 5000
      })
    }
    createGigAction({
      variables: {
        ...this.state
      }
    }).then(() => {
    }).catch(error => error)
  }

  render() {
    const {
      navigation: {
        goBack
      }
    } = this.props;
    return (
      <Mutation mutation={createGig}>
        {(createGigMutation, { data, loading, error }) => {
          if(error) {
            Toast.show({
              type: 'danger',
              text: error.message
            })
          }
          if(data) {
            Toast.show({
              type: 'success',
              text: 'Gig created successfully!'
            })
          }
          return (
          <View style={styles.container}>
            <Header
              androidStatusBarColor="#ffffff"
              style={styles.header}
            >
              <Left>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => goBack()}
                >
                  <Ionicons
                    name="ios-arrow-round-back"
                    size={40}
                    color="black"
                  />
                </TouchableOpacity>
              </Left>
              <Body />
              <Right />
            </Header>
            <View style={styles.title}>
              <Text style={styles.titleText}>Create a new gig</Text>
            </View>
            <Text style={styles.description}>Fill in the details below to request a service</Text>
            <Content>
              <Form>
              <Item floatingLabel>
                  <Label>What's your name?</Label>
                  <Input
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ contactName: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>What do you need?</Label>
                  <Input 
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ title: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Enter a brief description of the service you need</Label>
                  <Input 
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ description: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>How much are you willing to pay?</Label>
                  <Input 
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ price: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>What's the location for this gig?</Label>
                  <Input 
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ location: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Enter your phone number</Label>
                  <Input 
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ contactPhone: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Enter your email address</Label>
                  <Input 
                    style={{ height: 80 }}
                    onChangeText={text => this.setState({ contactEmail: text })}
                  />
                </Item>
              </Form>
              <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.5}
                onPress={() => this.runValidator(createGigMutation)}
              >
                {
                  loading ? (
                    <ActivityIndicator
                      color="#ffffff"
                      size="large"
                    />
                  ) : (
                    <Text style={styles.buttonText}>Submit</Text>
                  )
                }
              </TouchableOpacity>
            </Content>
          </View>
          )
        }}
      </Mutation>
    )
  }
}


export default NewGig;
