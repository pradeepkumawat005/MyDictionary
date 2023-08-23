const historyContainer = document.getElementById('historyContainer');
let outputt = document.getElementById("output");
let input = document.getElementById("input1");
let btnn = document.getElementById("btn");

let search = document.getElementById("time");
search.addEventListener('click', async () => {
    let word = input.value.trim();

    if (word === '') {
        return;

    }

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    const wordCard = document.createElement('div');
    wordCard.classList.add('word-card');
    wordCard.innerHTML = `
            <h3>Word : ${word}</h3>
            <p><b>Defination : <b>${data[0]?.meanings[0]?.definitions[0]?.definition || 'No definition found.'}
            </p>
            <button id="delete-button" ><i class="fa-regular fa-trash-can"></i></button>
        `;
    outputt.appendChild(wordCard);

    const words = JSON.parse(localStorage.getItem('words')) || [];
    words.push({ word, definition: data[0]?.meanings[0]?.definitions[0]?.definition });
    localStorage.setItem('words', JSON.stringify(words));

    const deleteButton = wordCard.querySelector('#delete-button');
    deleteButton.addEventListener('click', () => {
        wordCard.remove();
    });
    input.value = '';
});




let historyb = document.getElementById("historybok");
let bttn = document.getElementById("btn");
bttn.addEventListener('click', () => {
    let leftside = document.createElement("div");
    leftside.classList.add('container');
    historyb.appendChild(leftside);

    let imgess = document.createElement("img");
    imgess.src = "clipart479922.png";
    imgess.classList.add("img2");
    leftside.appendChild(imgess);

    let htag = document.createElement("h1");
    htag.innerHTML = "My DICTIONARY App";
    htag.classList.add("htag1");
    leftside.append(htag);

    let rightside = document.createElement("div");
    historyb.append(rightside);

    let bttn = document.createElement("button");
    bttn.innerHTML = "Search";
    bttn.classList.add("bttn2");
    rightside.appendChild(bttn);
});

function showHistory() {
    // const historyContainer = document.getElementById('historyContainer');
    
    const historyContainer = document.getElementById('historyContainer');
    const history = JSON.parse(localStorage.getItem('words')) || [];
    
    if (history.length === 0) {
        historyContainer.innerHTML = '<p>No search history available.</p>';
        return;
    }
    
    const historyList = document.createElement('ul');
    history.forEach(item => {
        const historyItem = document.createElement('li');
        historyItem.innerHTML = `<strong> <b>Word:<b> ${item.word}</strong> <br> <strong> <b>Defination:<b>${item.definition}</strong> <button id="deletebtn"><i class="fa-regular fa-trash-can"></i></button>`;
        historyList.appendChild(historyItem);
        historyContainer.appendChild(historyList);
        
        
        const deletebttn = historyItem.querySelector("#deletebtn");
        deletebttn.addEventListener('click', () => {
            historyItem.remove();
        });
    });
    
    
}
const historyButton = document.getElementById('btn');
historyButton.addEventListener('click', showHistory);

historyContainer.innerHTML = ''; // Clear previous content 




