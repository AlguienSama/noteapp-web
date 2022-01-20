import React from 'react';
import { useLocalStorage } from '../../services/LocalStorage';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

enum ViewFormat {
    PLAIN = "plain",
    HTML = "html",
    MD = "md"
}
type NoteProps = {
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
    const {t} = useTranslation();
    
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

    let viewFormatArray = [];
    for (let i in  ViewFormat) {
        viewFormatArray.push(i)
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

    const selectRemindDate = () => {
        // Open popup with select date & time for remind
    }
    const selectNoteColor = () => {
        // Open popup with select color for note background
    }

    return(
        <form onSubmit={onSubmit} onChange={onChange}>
            <div>
                <ul>
                    <li>
                        <span onClick={selectRemindDate}>
                            {t('form.note.remindDate')} {note.remind || t('form.note.noRemindDate')}
                        </span>
                    </li>
                    <li><input type="checkbox" {...register('is_pinned')} />{t('form.note.pin')}</li>
                    <li>
                        <span onClick={selectNoteColor}>
                            {t('form.note.color')}
                        </span>
                    </li>
                    <li>
                        <span>{t('form.note.view_format')}</span>
                        <select {...register('view_format')} value={note.view_format}>
                            {viewFormatArray.map(v => (
                                <option key={v} defaultValue={v}>{v.toUpperCase()}</option>
                            ))}
                        </select>
                    </li>
                </ul>
            </div>
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