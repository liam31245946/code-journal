'use strict';
function writeData() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}
const data = readData();
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
