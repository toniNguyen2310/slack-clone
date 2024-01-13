
import { SpinnerCircular } from 'spinners-react'

export default function Loading(props) {
  // const { color, secondaryColor } = props
  return (
    <SpinnerCircular
      style={{ marginLeft: '5px' }}
      size={40}
      thickness={250}
      speed={180}
      color={'#4e1d51'}
      secondaryColor={'#dcc7dd'}
      // color={color}
      // secondaryColor={secondaryColor}
    />
  )
}