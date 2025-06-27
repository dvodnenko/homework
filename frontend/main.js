const API_URL = 'http://127.0.0.1:8000/api/notes'


const fetchNotes = async () => {

    await fetch(API_URL)
        .then((response) => {console.log(response.json())})
        .catch((err) => {
            alert(`Error while fetching API: ${err}`)
            console.log(`Error while fetching API: ${err}`)
        })
}


fetchNotes()
