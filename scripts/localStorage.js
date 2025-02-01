function saveToLocalStorage(saved){
    let savedData = getLocalStorage();

    if(!savedData.includes(saved)){
        savedData.push(saved);
    }

    localStorage.setItem('SavedPokemonList', JSON.stringify(savedData))
}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('SavedPokemonList');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

function deleteFromStorage(saved){
    let localStorageData = getLocalStorage();
    let savedIndex = localStorageData.indexOf(saved);
    localStorageData.splice(savedIndex, 1);
    localStorage.setItem('SavedPokemonList', JSON.stringify(localStorageData))
}

export{saveToLocalStorage, getLocalStorage, deleteFromStorage}