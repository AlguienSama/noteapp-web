import React from "react";
import { UseFormRegister } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { NoteProps, ViewFormat } from "./layout";

type NoteDropdownProps = {
    note: NoteProps,
    register: UseFormRegister<NoteProps>
}
export function NoteDropdown({note, register}: NoteDropdownProps) {

    const {t} = useTranslation();
    let viewFormatArray = [];
    for (let i in  ViewFormat) {
        viewFormatArray.push(i)
    }

    const selectRemindDate = () => {
        // Open popup with select date & time for remind
    }
    const selectNoteColor = () => {
        // Open popup with select color for note background
    }

    return (
        <div className='dropdown'>
            <span className="dropbtn">&#9660;</span>
            <ul className="dropdown-content">
                <li>
                    <div onClick={selectRemindDate}>
                        {t('form.note.remindDate')} <br />
                        <span className="small">{note.remind || t('form.note.noRemindDate')}</span>
                    </div>
                </li>
                <li><input type="checkbox" {...register('is_pinned')} />{t('form.note.pin')}</li>
                <li>
                    <span onClick={selectNoteColor}>
                        {t('form.note.color')}
                    </span>
                </li>
                <li>
                    <span>{t('form.note.view_format')}:</span>
                    <select {...register('view_format')} defaultValue={note.view_format}>
                        {viewFormatArray.map(v => (
                            <option key={v} defaultValue={v}>{v.toUpperCase()}</option>
                        ))}
                    </select>
                </li>
            </ul>
        </div>
    )
}