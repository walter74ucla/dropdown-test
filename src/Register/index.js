import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Information Technology', value: 'IT' },
  { key: 2, text: 'Human Resources', value: 'HR' },
  { key: 3, text: 'Finance', value: 'Fin' },
]

class RegisterForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo192.png' /> Register to this website
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid 
                icon='signup' 
                iconPosition='left' 
                placeholder='Name'
                required
              />
              <Form.Select
                fluid
                options={options}
                placeholder='Choose a Department'
                onChange={this.handleChange}
                value={value}
                required
              />
              <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                required
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                required
              />

              <Button color='teal' fluid size='large'>
                Register
              </Button>
            </Segment>
          </Form>
          <Segment secondary>
            <pre>Current value: {value}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
    
  }
} 

export default RegisterForm
