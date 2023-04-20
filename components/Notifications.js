import React from 'react'
import {View, Text} from 'react-native'

const Notifications = (props) => {
	return (
		<View style={props.styleProps}>
		<Text>Notifications: {props.fruit}</Text>
		</View>
		)
}

export default Notifications

