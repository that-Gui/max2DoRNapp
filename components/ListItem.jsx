import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListItem({ item }) {
	return (
		<View style={styles.listItem}>
			<Text style={{ color: 'white' }}>{item.text}</Text>
			<Text style={{ color: 'white' }}>{item.key}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 8,
		margin: 8,
		backgroundColor: '#5e0acc',
		borderRadius: 8,
	},
});
