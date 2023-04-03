import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateNote from './pages/CreateNote'
import Notes from './pages/Notes'
import EditeNote from './pages/EditNote'



function App() {
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || []);

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <main id='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Notes notes={notes} />} />
                    <Route path='/create-note' element={<CreateNote setNotes={setNotes} />} />
                    <Route path='/edit-note/:id' element={<EditeNote setNotes={setNotes} notes={notes}/>} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App