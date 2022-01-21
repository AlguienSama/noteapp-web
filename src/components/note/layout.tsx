import React from 'react';
import { useLocalStorage } from '../../services/LocalStorage';
//import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { NoteDropdown } from './dropdown';
import './main.css';

export enum ViewFormat {
    PLAIN = "plain",
    HTML = "html",
    MD = "md"
}
export type NoteProps = {
    id: string | null,
    title: string,
    content: string,
    remind: Date | null,
    is_pinned: boolean,
    priority: number,
    color: string,
    view_format: ViewFormat
    created_at: Date | null,
    last_at: Date | null
}

export function Note() {
    const [savedNote, setNote] = useLocalStorage("note", "");
    //const {t} = useTranslation();
    
    let note: NoteProps = {
        id: "",
        title: "",
        content: "",
        remind: null,
        is_pinned: false,
        priority: 0,
        color: "",
        view_format: ViewFormat.PLAIN,
        created_at: new Date(),
        last_at: new Date()
    }

    if (savedNote !== "") {
        let newNote = {...(JSON.parse(savedNote))};
        delete newNote.last_at;
        note = newNote;
    }
    
    const { register, handleSubmit, formState } = useForm<NoteProps>({
        mode: 'onChange',
        defaultValues: note
    });

    const onSubmit = handleSubmit(async (data) => {
        setNote(JSON.stringify(data));
        
    });
    const onChange = handleSubmit(async (data) => {
        console.log(data);
        setNote(JSON.stringify(data));
    });

    return(
        <form onSubmit={onSubmit} onChange={onChange} className='note-form'
        style={{backgroundColor: note.color || '#000000'}}>
            <NoteDropdown note={note} register={register}></NoteDropdown>
            <div>
                <span className=''>{note.created_at}</span>
                <input type="text" {...register('title', {
                    maxLength: 255
                })} />
            </div>
            <div>
                <textarea {...register('content')} />
            </div>
            <input type="submit" disabled={!formState.isDirty} />
        </form>
    )
}