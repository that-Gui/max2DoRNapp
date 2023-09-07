import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ListItem({ item, deleteListItem }) {
	const handledeleteListItem = () => {
		deleteListItem(item.id);
	};

	return (
		<Pressable onPress={handledeleteListItem}>
			<View style={styles.listItem}>
				<Text style={{ color: 'white' }}>{item.text}</Text>
				<Text style={{ color: 'white' }}>{item.id}</Text>
			</View>
		</Pressable>
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
