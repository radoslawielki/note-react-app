import * as React from "react";
import './NoteStyle.scss';

export default class NoteComponent extends React.Component {
    render(): React.ReactNode {
        return <div className="simple-note">
            <div className={"simple-note-actions"}></div>
            <div className={"simple-note-header"}> Header </div>
            <div className={"simple-note-body"}> long long body lorem ipsum los momentos </div>
        </div>;
    }
}
