import * as C from './styles';

type Props = {
    id: number;
    name: string;
    status: boolean;
    handleStatus: (id: number) => void;
    handleRemoveFunction: (id: number) => void;
}

export const Task = ( {id, name, status, handleStatus, handleRemoveFunction}: Props ) => {

    const handlehandleStatus = () => {
        handleStatus(id);
    }

    const handleRemove = () => {
        handleRemoveFunction(id);
    }


    return (
        <C.Container checked={status}>
            <div className="task">
                <input 
                type="checkbox" 
                checked={status} 
                onChange={handlehandleStatus}
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