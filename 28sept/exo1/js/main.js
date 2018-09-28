document.addEventListener('DOMContentLoaded', () => {

    /*
    Configutation PouchDB / Couch DB
    */

    // Definition de la base de donnée dans le navigateur
    const innerDB = new PouchDB('todo');

    // Afficher les informations sur la base interne
    console.log(innerDB.info());

    // Definition de la base de donnée dans le navigateur
    const remoteDB = 'https://ldp.dwsapp.io/my-todo';

    function syncDBS() {
        // Création de la fonction de synchronisation PouchDB <=> CouchDB
        innerDB.replicate.to(remoteDB, { live: true }, console.log('Nothing to SYNC'));
        innerDB.replicate.from(remoteDB, { live: true }, console.log('Nothing to SYNC'));
    }

    // Capter les changement sur la base de données interne
    innerDB.changes({
        since: 'now',
        live: true
    }).on('change', getAllDocs);

    // Synchroniser les bases de données si la base de données externe est présente
    remoteDB ? syncDBS() : null;

    /*
    Interface utilisateur
    */

    // Définition du constructeur Todo
    function Todo(_id, content, isDone) {
        this._id = _id;
        this.content = content;
        this.isDone = isDone;
    }

    function getAllDocs() {
        console.log('Changes');
        innerDB.allDocs({ include_docs: true, descending: true })
            .then(data => {
                console.log(data);
            })
            .catch(data => {
                console.error(data);
            })
    }

    // Gestion du formulaire
    // const $ = tag => document.querySelector(tag);

    // Gestion du formulaire
    const todoForm = document.querySelector('form');
    todoForm.addEventListener('submit', event => {
        event.preventDefault();
        todoForm.elements[0].value.length >= 1 ? addNewItem(todoForm.elements[0].value) : null;
    })

    // Créer une todo
    const addNewItem = data => {
        innerDB.put({
            _id: new Date().toISOString(),
            content: data,
            isDone: false
        })
            .then(data => todoForm.elements[0].value = '')
            .catch(data => console.error(data))
    }

    // Fonction pour éditer un item

    const checkboxChanged = (todo, event) => {
        innerDB.get(todo._id).then(doc => {

            //Modifier l'item
            return innerDB.put({
                _id: todo._id,
                _rev: doc._rev,
                content: todo.content,
                isDOne: !todo.isDone
            })

        })
    }
})