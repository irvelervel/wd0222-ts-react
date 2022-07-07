import { ChangeEvent, FormEvent, useState } from 'react'
import { Alert, Spinner, Form, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const Bootstrap = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  // if you're going to write the handler for the onChange separately,
  // like in this case, you'll have to provide the type of the e manually
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hurray!')
    navigate('/')
  }

  return (
    <div>
      <div>
        <Alert variant="success">{location.pathname}</Alert>
        <Spinner animation="border" variant="danger" />
      </div>
      <div>
        <Form
          onSubmit={handleSubmit}

          // or otherwise just write your logic in the JSX
          //   onSubmit={(e) => {
          //     e.preventDefault()
          //     console.log('hurray!')
          //   }}
        >
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              // otherwise just write your logic here, in the JSX,
              // where the React.ChangeEvent is detected automatically
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Bootstrap
