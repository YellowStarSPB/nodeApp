import React from 'react'

import { BsPlusLg } from 'react-icons/bs'

import { Link } from 'react-router-dom'



import NoteItem from '../components/NoteItem'

function Notes({ notes }) {
    const [showSearch, setShowSearch] = React.useState(false);
    const [text, setText] = React.useState('')
    const [filteredNotes, setFilteredNotes] = React.useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if (note.title.toLowerCase().match(text.toLowerCase())) {
                return note;
            }
        }))
    }
    React.useEffect(handleSearch, [text])


    return (
        <section>
            <header className='notes__header'>
                {!showSearch && <h2>My Notes</h2>}
                {showSearch && <input
                    type="text" value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                    placeholder='Начинайте вводить...'
                />}
                <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>
                    {showSearch ? <img src="/close.svg" alt="close" /> : <img src='/search.svg' alt='search'/>}
                </button>
            </header>
            <div className="notes__container">
                {filteredNotes.length === 0 && <p className='empty__notes'>Заметок не найдено</p>}
                {filteredNotes.map(note => <NoteItem key={note.id} note={note}
                />)}
            </div>
            <Link to='/create-note' className='btn add__btn' ><img src="/plus.svg" alt="add" /></Link>
        </section>
    )
}

export default Notes