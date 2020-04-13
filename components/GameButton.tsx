import { Text } from '@ui-kitten/components'
import Color from 'color'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type GameButtonProps = {
  color?: string
  textColor?: string
  [key: string]: any
}

const GameButton = ({
  children,
  color = 'gray',
  textColor = 'white',
  ...props
}: GameButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={
        [
          styles.button,
          {
            backgroundColor: color,
            borderColor: Color(color).darken(0.1),
          },
        ] as any
      }
    >
      <Text
        style={[
          styles.text,
          {
            color: textColor,
          },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5c5c5c57',
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 40,
  },
  text: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: 'bold',
  },
})

export default GameButton
