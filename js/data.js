'use strict';
function writeData() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}
const data = readData();
console.log(data);
function readData() {
  const getJSON = localStorage.getItem('data');
  if (getJSON) {
    return JSON.parse(getJSON);
  } else {
    return {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
    };
  }
}
