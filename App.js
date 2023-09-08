import React from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import ListItem from './components/ListItem';
import TodoItemInput from './components/TodoItemInput';

export default function App() {
	const [todolist, setTodolist] = React.useState([]);
	const [modalio, setModalio] = React.useState(false);

	const handleModal = () => {
		setModalio(!modalio);
	};

	const handleAdd = (listitemtxt) => {
		setTodolist((curr) => [...curr, { id: Math.random(), text: listitemtxt }]);
		handleModal();
	};

	const deleteListItem = (item2delete) => {
		console.log('deleteListItem', item2delete);
		const updatedTodoList = todolist.filter((item) => item.id !== item2delete);
		setTodolist(updatedTodoList);
	};

	return (
		<View style={styles.appContainer}>
			<Button title='Add New 2do' color={'#5e0acc'} onPress={handleModal} />
			{modalio && <TodoItemInput handleAdd={handleAdd} visible={modalio} />}

			<View style={styles.tdzContainer}>
				<FlatList
					data={todolist}
					renderItem={(item) => (
						<ListItem item={item.item} deleteListItem={deleteListItem} />
					)}
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
		backgroundColor: 'teal',
	},
	inputDivPlaceHolder: {
		flex: 1,
	},
	tdzContainer: {
		flex: 5,
	},
});
