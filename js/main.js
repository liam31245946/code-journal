'use strict';
const $img = document.querySelector('img');
const $url = document.querySelector('#user-url');
if (!$img) throw new Error('img query failed');
if (!$url) throw new Error('user-url query failed');
function input() {
  if (!$img) throw new Error('img query failed');
  $img.src = $url.value;
}
$url.addEventListener('input', input);
const $form = document.querySelector('#form');
if (!$form) throw new Error('form query failed');
function submit(event) {
  event?.preventDefault();
  const $element = $form.elements;
  const entryId = data.nextEntryId;
  const title = $element.title.value;
  const url = $element.url.value;
  const note = $element.note.value;
  const formInput = {
    entryId,
    title,
    url,
    note,
  };
  data.nextEntryId++;
  data.entries.unshift(formInput);
  const newEntry = renderEntry(formInput);
  $ul?.prepend(newEntry);
  viewSwap('entries');
  toggleNoEntries();
  $form.reset();
  writeData();
}
$form.addEventListener('submit', submit);
function renderEntry(entry) {
  const $li = document.createElement('li');
  const $row = document.createElement('div');
  $row.className = 'row';
  const $columnHalfImg = document.createElement('div');
  $columnHalfImg.className = 'column-half';
  const $columnHalfText = document.createElement('div');
  $columnHalfText.className = 'column-half';
  const $img = document.createElement('img');
  $img.src = entry.url;
  $img.alt = entry.title;
  const $text = document.createElement('div');
  $text.className = 'text';
  const $title = document.createElement('h4');
  $title.textContent = entry.title;
  const $note = document.createElement('p');
  $note.textContent = entry.note;
  $li.appendChild($row);
  $row.appendChild($columnHalfImg);
  $row.appendChild($columnHalfText);
  $columnHalfImg.appendChild($img);
  $row.appendChild($columnHalfText);
  $columnHalfText.appendChild($text);
  $text.appendChild($title);
  $text.appendChild($note);
  return $li;
}
const $ul = document.querySelector('.group-list');
if (!$ul) throw new Error('ul query failed ');
function contentLoaded() {
  if (!$ul) throw new Error('ul query in function failed ');
  for (let i = 0; i < data.entries.length; i++) {
    const dataEntries = data.entries[i];
    const x = renderEntry(dataEntries);
    $ul.appendChild(x);
  }
  viewSwap(data.view);
  toggleNoEntries();
}
document.addEventListener('DOMContentLoaded', contentLoaded);
function toggleNoEntries() {
  const $noEntries = document.querySelector('#no-entries-data');
  if (!$noEntries) throw new Error('no-entries-data query failed');
  if (data.entries.length === 0) {
    $noEntries?.classList.remove('hidden');
  } else {
    $noEntries?.classList.add('hidden');
  }
}
toggleNoEntries();
const $entryForm = document.querySelector('#data-view-entry-form');
const $entries = document.querySelector('#data-view-entries');
function viewSwap(view) {
  if (!$entryForm || !$entries) throw new Error('View elements not found');
  if (view === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  } else if (view === 'entries') {
    $entries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  }
  data.view = view;
  writeData();
}
const $clickNew = document.querySelector('#new-button');
function click(event) {
  event.preventDefault();
  viewSwap('entry-form');
}
$clickNew?.addEventListener('click', click);
