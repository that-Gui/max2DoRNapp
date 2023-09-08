import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ListItem({ item, deleteListItem }) {
	/* const handledeleteListItem = () => {
		deleteListItem(item.id);
	}; */

	return (
		<Pressable
			onPress={deleteListItem.bind(this, item.id)}
			android_ripple={{ color: 'lime' }}
			style={({ pressed }) => pressed && styles.pressItem}
		>
			<View style={styles.listItem}>
				<Text style={{ color: 'white', padding: 8 }}>{item.text}</Text>
				<Text style={{ color: 'white', padding: 8 }}>{item.id}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	listItem: {
		margin: 8,
		backgroundColor: '#5e0acc',
		borderWidth: 1,
		borderColor: 'darkslategray',
		borderRadius: 8,
	},
	pressItem: {
		opacity: 0.5,
	},
});
