import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.dummyText}>This will be a to do list App...</Text>
			</View>
			<View>
				<Text style={styles.dummyText}>Dummy text</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	dummyText: {
		marginTop: 16,
		padding: 16,
		borderWidth: 1,
		borderColor: 'pink',
	},
});
