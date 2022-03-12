import React, { useEffect, useState } from 'react';
import classes from './App.module.scss';
import { Todo } from './Components/Todo';
import { ReactComponent as Close } from './Assets/Close.svg';

let count = 0;

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		(async () => {
			await fetch('http://localhost:3001/todos');
		})();
	}, []);

	const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTodo: Todo = {
			id: count++,
			content: e.target[0].value.trim(),
			checked: false,
		};

		if (newTodo.content.length) {
			setTodos((prev) => [...prev, newTodo]);
		}
	};

	const checkTodo = (todo: Todo, checked: boolean) => {
		const indexOfTodoToCheck = todos.findIndex((item) => item.id === todo.id);
		if (indexOfTodoToCheck === -1) {
			throw new Error('Something wrong with your id logic');
		}

		setTodos([
			...todos.slice(0, indexOfTodoToCheck),
			{ id: todo.id, content: todo.content, checked: checked },
			...todos.slice(indexOfTodoToCheck + 1),
		]);
	};

	const editTodo = (todo: Todo, newContent: string) => {
		const indexOfTodoToEdit = todos.findIndex((item) => item.id === todo.id);
		if (indexOfTodoToEdit === -1) {
			throw new Error('Something wrong with your id logic');
		}

		setTodos([
			...todos.slice(0, indexOfTodoToEdit),
			{ id: todo.id, content: newContent, checked: todo.checked },
			...todos.slice(indexOfTodoToEdit + 1),
		]);
	};

	const removeTodo = (todo: Todo) => {
		const indexOfTodoToRemove = todos.findIndex((item) => item.id === todo.id);
		if (indexOfTodoToRemove === -1) {
			throw new Error('Something wrong with your id logic');
		}

		const newTodos: Todo[] = [
			...todos.slice(0, indexOfTodoToRemove),
			...todos.slice(indexOfTodoToRemove + 1),
		];

		setTodos([...newTodos]);
	};

	const removeAllChecks = () => {
		setTodos([...todos.map((todo: Todo) => ({ ...todo, checked: false }))]);
	};

	const a = todos.filter((todo) => todo.checked).length;
	const b = todos.length;

	return (
		<div className={classes['App']}>
			<h1>FSD Exercise</h1>
			<div className={classes['main-content']}>
				<h1 className={classes['header']}>TODO LIST</h1>
				<form onSubmit={addTodo} className={classes['input-container']}>
					<input type="text" className={classes['input-field']} />
					<button type="submit" className={classes['input-button']}>
						+
					</button>
				</form>
				<div className={classes['todos-list']}>
					{todos.map((todo, i) => (
						<Todo
							key={`todo-${i}`}
							todo={todo}
							editTodo={editTodo}
							checkTodo={checkTodo}
							removeTodo={removeTodo}
						/>
					))}
				</div>
				<div className={classes['bottom-portion']}>
					<div className={classes['tracker']}>
						<div className={classes['tracker-info']}>
							<b>{a}</b> of <b>{b}</b> tasks done
						</div>
						<div
							className={classes['tracker-yellow']}
							style={{ width: `${(a / b) * 100 || 0}%` }}
						/>
					</div>
					<button
						className={classes['remove-button']}
						onClick={removeAllChecks}
					>
						Remove Checked <Close />
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
