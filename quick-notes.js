const fs = require('fs-extra')
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = getNotes()
    const note = notes.find((note) => note.title === title)

    if (!note) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title already taken!'))
    }
}

const removeNote = (title) => {
    const notes = getNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed!'))
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const listNotes = () => {
    const notes = getNotes()

    console.log(chalk.blue.inverse('Your notes'))

    notes.forEach(note => {
        console.log('# ' + note.title)
    });
}

const readNote = (title) => {
    const notes = getNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
        console.log(chalk.yellow.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const saveNotes = (notes) => {
    fs.writeJsonSync('quick-notes.json', notes)
}

const getNotes = () => {
    try {
        return fs.readJsonSync('quick-notes.json')
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}