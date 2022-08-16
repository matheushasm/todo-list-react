import { KeyboardEvent, MouseEventHandler, useState } from 'react';
import * as C from './styles';

type Props = {
    saveTaskFunction: (text: string) => void;
}

export const InputTask = ( { saveTaskFunction }: Props ) => {
    const [task, setTask] = useState<string>('')

    const handlePressEnter = (e: KeyboardEvent ) => {
        if(e.code === 'Enter' && task !== '') {
            saveTaskFunction(task);
            setTask('')
        }
    }

    const handleMouseSave = () => {
        if(task) {
            saveTaskFunction(task);
            setTask('');
        }
    }

    return (
        <C.Container>
            <input 
            type="text" 
            value={task} 
            onChange={e => setTask(e.target.value)} 
            onKeyUp={handlePressEnter}
            placeholder='Fill your tasks here!'
            autoFocus={true}
            />
            <div 
            onClick={handleMouseSave}
            className="sendButton"> 
                Send
            </div>
        </C.Container>
    )
}