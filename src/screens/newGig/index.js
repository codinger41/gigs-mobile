import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Left, Header, Content, Form, Item, Input, Label, Toast, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Mutation } from 'react-apollo';
import { TagSelect } from 'react-native-tag-select'
import { validateGig } from '../../utils/validator';
import { createGig } from '../../graphql/queries';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';



const categoryOptions = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'Electronics' },
  { id: 3, label: 'Fashion' },
  { id: 4, label: 'Others' },
]

class NewGig extends React.Component {
  state = {
    title: null,
    description: null,
    price: null,
    location: null,
    contactName: null,
    contactEmail: null,
    contactPhone: null,
    category: null
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
                <Text style={styles.description2}>Select a category for this gig.</Text>
                <ScrollView horizontal>
                <TagSelect
                  data={categoryOptions}
                  max={1}
                  onMaxError={() => {
                    Alert.alert('Ops', 'You can only select 3 tags')
                  }}
                  itemStyle={styles.itemStyle}
                  itemStyleSelected={styles.itemStyleSelected}
                  itemLabelStyle={styles.label}
                  value={[]}
                  onItemPress={value => this.setState({ category: value.label })}
                />
                </ScrollView>
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
