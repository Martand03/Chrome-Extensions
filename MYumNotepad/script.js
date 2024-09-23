document.addEventListener('DOMContentLoaded', function () {
    const note = document.getElementById('note');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Load saved note from Chrome storage
    chrome.storage.sync.get(['savedNote'], function (result) {
        if (result.savedNote) {
            note.value = result.savedNote;
        }
    });

    // Save the note to Chrome storage when the save button is clicked
    saveBtn.addEventListener('click', function () {
        const noteContent = note.value;
        chrome.storage.sync.set({ 'savedNote': noteContent }, function () {
            alert('Note saved!');
        });
    });

    // Clear the note and remove it from Chrome storage
    clearBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to clear the note?')) {
            note.value = '';
            chrome.storage.sync.remove('savedNote');
        }
    });
});
