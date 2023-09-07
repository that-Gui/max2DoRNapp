import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './components/ListItem';
import TodoItemInput from './components/TodoItemInput';

export default function App() {
	const [todolist, setTodolist] = React.useState([]);

	const handleAdd = (listitemtxt) => {
		setTodolist((curr) => [...curr, { key: Math.random(), text: listitemtxt }]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputDivPlaceHolder}>
				<TodoItemInput handleAdd={handleAdd} />
			</View>
			<View style={styles.tdzContainer}>
				<FlatList
					data={todolist}
					renderItem={(item) => <ListItem item={item.item} />}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 32,
		paddingHorizontal: 16,
	},
	inputDivPlaceHolder: {
		flex: 1,
	},
	tdzContainer: {
		flex: 5,
	},
	listItem: {
		padding: 8,
		margin: 8,
		backgroundColor: '#5e0acc',
		borderRadius: 8,
	},
});
