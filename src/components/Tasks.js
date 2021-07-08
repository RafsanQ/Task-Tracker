import Task from './Task.js'

const Tasks = ({ taskList }) => {
    return (
        <>
            {taskList.map((i) => (
                <Task key={i.id} task = {i} />
            ))}
        </>
    );
};

export default Tasks;
