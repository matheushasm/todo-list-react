import { KeyboardEvent, useState } from 'react';
import * as C from './styles';

type Props = {
    saveTask: (text: string) => void;
}


export const InputTask = ( { saveTask }: Props ) => {

    const [task, setTask] = useState<string>('')

    const handleEnterPress = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && task !== '') {
            saveTask(task);
            setTask('')
        }
    }

    return (
        <C.Container>
            <div></div>
            <input 
            type="text" 
            value={task} 
            onChange={e => setTask(e.target.value)} 
            onKeyUp={handleEnterPress}
            placeholder='Fill your tasks here!'
            autoFocus={true}
            />
        </C.Container>
    )
}