import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {useState} from 'react';
import { addNote } from '../actions/actions';
import { deleteNote } from '../actions/actions';
const noteListSelector = state => state.list.notes;

function NoteList (props) {
    const notes = useSelector(noteListSelector , shallowEqual)
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h3>List of notes</h3>
                {notes.map((note, index) => (
                <div key={index}>
                    {note}
                    <button onClick={() => dispatch(deleteNote(index))}>
                        Delete
                    </button>
                </div>
            ))}
            </div>
            <div>
                <h3>Add a new note</h3>
                <input type="text" placeholder='content' onChange={(evt) => setContent(evt.target.value)}></input>
                <input type='button' value ='add' onClick={() => dispatch(addNote(content))} />
            </div>
        </div>
    );
}

export default NoteList;