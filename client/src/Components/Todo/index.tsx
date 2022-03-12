import React, { useState } from 'react';
import { ReactComponent as Edit } from '../../Assets/Edit.svg';
import { ReactComponent as Close } from '../../Assets/Close.svg';
import CheckBox from 'react-custom-checkbox';
import * as Icon from 'react-icons/fi';
import classes from './Todo.module.scss';

export type Todo = {
	id: number;
	content: string;
	checked: boolean;
};

type Props = {
	todo: Todo;
	editTodo: (todo: Todo, newContent: string) => void;
	checkTodo: (todo: Todo, checked: boolean) => void;
	removeTodo: (todo: Todo) => void;
};

export const Todo = ({ todo, editTodo, checkTodo, removeTodo }: Props) => {
	const [editing, setEditing] = useState<boolean>(false);

	const handleCheck = (e: boolean) => {
		checkTodo(todo, e);
	};

	const toggleEditing = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		if (editing && e.target?.[0]?.value) {
			editTodo(todo, e.target[0].value);
		}
		setEditing((prev) => !prev);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		editTodo(todo, e.target[0].value);
		setEditing((prev) => !prev);
	};

	return (
		<div className={classes['todo-item']}>
			<div className={classes['todo-left']}>
				<CheckBox
					name="complete"
					className={classes['todo-checkbox']}
					icon={<Icon.FiCheck color="#697aad" size={18} />}
					borderColor={'#ccc'}
					checked={todo.checked}
					onChange={(e: boolean) => handleCheck(e)}
				/>
				{editing ? (
					<form onSubmit={handleSubmit}>
						<input type="text" defaultValue={todo.content} autoFocus />
					</form>
				) : (
					<span
						className={classes['todo-content']}
						style={
							todo.checked
								? { textDecoration: 'line-through' }
								: { textDecoration: 'none' }
						}
					>
						{todo.content}
					</span>
				)}
			</div>
			<div className={classes['todo-right']}>
				<Edit onClick={toggleEditing} className={classes['svg']} />
				<Close onClick={(e) => removeTodo(todo)} className={classes['svg']} />
			</div>
		</div>
	);
};
