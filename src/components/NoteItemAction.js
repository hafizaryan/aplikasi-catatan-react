import React, { useState } from "react";

function NoteItemAction({ onDeleteNote, onArsipNote, id, archived }) {
    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

    const handleDeleteNote = () => {
        if (isDeleteConfirmed) {
            onDeleteNote(id);
        } else {
            // Menampilkan konfirmasi sebelum menghapus
            const userConfirmed = window.confirm("Apakah Anda yakin ingin menghapus catatan ini?");
            if (userConfirmed) {
                setIsDeleteConfirmed(true);
                onDeleteNote(id);
            }
        }
    };

    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={handleDeleteNote}>
                {isDeleteConfirmed ? "Hapus Sekarang" : "Delete"}
            </button>
            <button className="note-item__archive-button" onClick={() => onArsipNote(id)}>
                {archived ? "Kembalikan" : "Arsipkan"}
            </button>
        </div>
    );
}

export default NoteItemAction;
