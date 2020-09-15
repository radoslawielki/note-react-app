import * as React from "react";
import NoteComponent from "./note/NoteComponent";
import AddCircleIcon from 'mdi-react/AddCircleIcon';
import './NoteListStyle.scss';

export default class NoteListComponent extends React.Component {
    render(): React.ReactNode {
        return <div className={"note-wrapper"}>
            <div className={"note-list"}>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
                <NoteComponent/>
            </div>
            <AddCircleIcon className="add-icon" size={'2em'} />
        </div>
    }
}
