const Notes = require("../../models/Note/index");

const createNote = async (req, res) => {
    const {name, author} = req.body;
    if(!name || !author) {
        return res.status(401).json({
            message : "Please provide all the details...!"
        });
    }

    const note = await Notes.create({
        name,
        author,
        insertedBy: req.user.id,
        insertedAt: new Date()
    });

    if (note) {
        res.status(201).json({ message: "Note Created Successfully...!" });
    } else {
        return res.status(400).json({ message: "Something went wrong" });
    }
}

const updateNote = async(req, res) => {
    const id = req.params.id;
    const noteID = await Notes.findById({_id : id});
    if(noteID) {
        const updateNote = await Notes.updateOne(
            {_id : id},
            {
                $set : { ...req.body }
            }
        );

        if (updateNote) {
            return res.status(200).json({ message: "Note Updated Successfully...!" });
        } else {
            return res.status(400).json({ message: "Something went wrong...!" });
        }

    } else {
        return res.status(404).json({ message: "Note Not Found...!" });
    }
}

const delteNote = async (req, res) => {
    const id = req.params.id;
    const noteID = await Notes.findById({_id : id});

    if (noteID) {
        const deleteNote = await Notes.findByIdAndDelete({_id:id})
        if (deleteNote) {
            return res.status(200).json({ message: "Note Deleted Successfully...!" });
        } else {
            return res.status(400).json({ message: "Something went wrong...!" });
        }
    }
    else {
        return res.status(404).json({ message: "Note Not Found...!" });
    }
}

const getNoteById = async (req, res) => {
    const id = req.params.id;
    const noteID = await Notes.findById({_id : id});

    if(noteID) {
        return res.status(200).json({ noteID, message : "Successfull Note Founded" });
    }
    else {
        return res.status(404).json({ message: "Note Not Found...!" });
    }
}

module.exports = { createNote, updateNote, delteNote, getNoteById }