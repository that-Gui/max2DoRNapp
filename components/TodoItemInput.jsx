import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function TodoItemInput({ handleAdd }) {
	const [tingtxt, setTingtxt] = React.useState('');
	const handleAddTwo = () => {
		handleAdd(tingtxt);
		setTingtxt('');
	};
	return (
		<View style={styles.inputDiv}>
			<TextInput
				style={styles.txtInput}
				value={tingtxt}
				placeholder='enter ur next 2do'
				onChangeText={(e) => setTingtxt(e)}
			/>
			<Button title='ADD' onPress={handleAddTwo} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputDiv: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	txtInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 4,
	},
});
