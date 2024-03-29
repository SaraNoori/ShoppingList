"use strict";

const list = document.querySelector("ul");
const inputField = document.querySelector("input");
const button = document.querySelector("button");

function addItem()
{
    var newItem = inputField.value;
    console.log(newItem);
    inputField.value = '';
    
    const newListItem = document.createElement("li");

    const newSpan = document.createElement("span");
    newSpan.textContent = newItem;

    const newButton = document.createElement("button");
    newButton.textContent = "Delete";
    newButton.addEventListener("click", function (e) {
        list.removeChild(newListItem);
    });

    newListItem.appendChild(newSpan);
    newListItem.appendChild(newButton);

    list.append(newListItem);

}


button.addEventListener("click", addItem);
