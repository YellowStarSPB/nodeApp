import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'
import { BiTrash } from 'react-icons/bi'
import useCreateDate from "../components/useCreateDate"



function EditeNote({ setNotes, notes }) {
    const { id } = useParams()
    const note = notes.find((item) => item.id === id);
    const [title, setTitle] = React.useState(note.title)
    const [details, setDetails] = React.useState(note.details)
    const date = useCreateDate()
    const navigate = useNavigate()

    const handleEditeNote = (e) => {
        e.preventDefault()

        if (title && details) {
            const newNote = { ...note, title, details, date }
            const newNotes = notes.map(item => {
                if (item.id === id) {
                    item = newNote;
                }
                return item
            })
            if (window.confirm('Вы действительно хотите изменить заметку?')) {
                setNotes(newNotes)
            }


        }
        navigate('/')
    }

    const handleDelete = () => {
        const newNotes = notes.filter(item => item.id !== id)

        if (window.confirm('Вы действительно хотите удалить заметку?')) {
            setNotes(newNotes)
        }
        navigate('/')
    }

    return (
        <section>
            <header className="create-note__header">
                <Link to='/' className="btn"><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleEditeNote}>Сохранить</button>
                <button className="btn danger" onClick={handleDelete}><BiTrash /></button>
            </header>
            <form className="create-note__form" onSubmit={handleEditeNote}>
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    rows="28"
                    placeholder="Детали заметки..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>
            </form>
        </section>
    )
}

export default EditeNote