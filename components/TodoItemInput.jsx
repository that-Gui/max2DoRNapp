import React from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from 'react-native';

export default function TodoItemInput({ handleAdd, visible }) {
	const [tingtxt, setTingtxt] = React.useState('');

	const handleAddTwo = () => {
		handleAdd(tingtxt);
		setTingtxt('');
	};

	return (
		<Modal animationType='slide' visible={visible}>
			<View style={styles.inputDiv}>
				<Image source={require('../assets/favicon.png')} />
				<TextInput
					style={styles.txtInput}
					value={tingtxt}
					placeholder='enter ur next 2do'
					onChangeText={(e) => setTingtxt(e)}
				/>
				<Button title='ADD' onPress={handleAddTwo} color={'#5e0acc'} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputDiv: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
		backgroundColor: 'teal',
		gap: 8,
	},
	txtInput: {
		borderWidth: 1,
		borderColor: 'darkslategray',
		borderRadius: 8,
		width: '80%',
		marginRight: 8,
		padding: 4,
		color: 'white',
	},
});
