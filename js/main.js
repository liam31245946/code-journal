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
const $note = document.querySelector('#user-note');
if (!$note) throw new Error('note query failed');
function submit(event) {
  event?.preventDefault();
  const formInput = {
    entryId: data.nextEntryId,
    note: $note.value,
  };
  data.nextEntryId++;
  data.entries.push(formInput);
}
$note.addEventListener('submit', submit);
