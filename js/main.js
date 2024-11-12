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
  const formInput = {
    entryId: data.nextEntryId,
    note: $form.value,
  };
  data.nextEntryId++;
  data.entries.push(formInput);
  $form.reset();
  writeData();
}
$form.addEventListener('submit', submit);
