import * as C from './styles';

type Props = {
    id: number;
    name: string;
    status: boolean;
    statusChange: (id: number) => void;
    handleRemoveTask: (id: number) => void;
}

export const Task = ( {id, name, status, statusChange, handleRemoveTask}: Props ) => {

    const handleStatusChange = () => {
        statusChange(id);
    }

    const handleRemove = () => {
        handleRemoveTask(id);
    }


    return (
        <C.Container checked={status}>
            <div className="task">
                <input 
                type="checkbox" 
                checked={status} 
                onChange={handleStatusChange}
                />

                <div>
                    {name}
                </div>
            </div>

            <div 
            className="clear"
            onClick={handleRemove}
            >
                X
            </div>
        </C.Container>
    )
}