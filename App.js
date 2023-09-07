import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputDiv}>
				<TextInput style={styles.txtInput} placeholder='enter ur next 2do' />
				<Button title='ADD' />
			</View>
			<View>
				<Text>Item 1</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 32,
	},
	inputDiv: {
		flexDirection: 'row',
		backgroundColor: 'pink',
		justifyContent: 'space-evenly',
	},
	txtInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '80%',
		marginRight: 8,
		padding: 4,
	},
});
