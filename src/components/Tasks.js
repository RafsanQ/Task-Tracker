import Task from './Task.js'

const Tasks = ({ taskList, onDelete }) => {
    return (
        <>
            {taskList.map((i) => (
                <Task key={i.id} task = {i} onDelete = {onDelete} />
            ))}
        </>
    );
};

export default Tasks;
