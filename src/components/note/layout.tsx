import React from 'react';
import { useLocalStorage } from '../../services/LocalStorage';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { NoteDropdown } from './dropdown';
import './main.scss';
import { NoteProps } from '../../services/Note';

type DefaultNoteProps = {
    note: NoteProps
}
export function Note({note}: DefaultNoteProps) {
    const [savedNote, setNote] = useLocalStorage(note.id || "", JSON.stringify(note));
    const {t} = useTranslation();

    if (savedNote !== "") {
        note = {...(JSON.parse(savedNote))};
        
        if (typeof note.created_at === 'string') { note.created_at = new Date(Date.parse(note.created_at)); }
        if (!note.last_at) { note.last_at = new Date(); }
        if (typeof note.last_at === 'string') { note.last_at = new Date(Date.parse(note.last_at)); }
    }
    
    const { register, handleSubmit, formState } = useForm<NoteProps>({
        mode: 'onChange',
        defaultValues: note
    });

    const onSubmit = handleSubmit(async (data) => {
        setNote(JSON.stringify(data));
        
    });
    const onChange = handleSubmit(async (data) => {
        setNote(JSON.stringify(data));
    });

    return(
        <form onSubmit={onSubmit} onChange={onChange} className='note-form'
        style={{backgroundColor: note.color || '#a0aeb6'}}>
            <div className="note-head">
                <div className="align-left">
                    <span className='small'>{note.created_at.toLocaleString()}</span><br />
                    <span className='small'>{note.last_at.toLocaleString()}</span>
                </div>
                <div className="align-right">
                    <span>
                        <input type="submit" disabled={!formState.isDirty} value={t('form.note.save').toUpperCase()} className='btn btn-small small'/>
                        <NoteDropdown note={note} register={register}></NoteDropdown>
                    </span>
                </div>
            </div>
            <div className='note-content'>
                <input type="text" placeholder={t('form.note.title')} {...register('title', {
                    maxLength: 255
                })} />
                <textarea placeholder={t('form.note.content')} {...register('content')} />
            </div>
        </form>
    )
}