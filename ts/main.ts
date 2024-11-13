const $img = document.querySelector('img');
const $url = document.querySelector('#user-url') as HTMLInputElement;
if (!$img) throw new Error('img query failed');
if (!$url) throw new Error('user-url query failed');

function input(): void {
  if (!$img) throw new Error('img query failed');
  $img.src = $url.value;
}

$url.addEventListener('input', input);

const $form = document.querySelector('#form') as HTMLFormElement;
if (!$form) throw new Error('form query failed');

interface Input extends HTMLFormControlsCollection {
  entryId: HTMLInputElement;
  note: HTMLInputElement;
  title: HTMLInputElement;
  url: HTMLInputElement;
}

function submit(event: Event): void {
  event?.preventDefault();
  const $element = $form.elements as Input;

  const entryId = data.nextEntryId;
  const title = $element.title.value;
  const url = $element.url.value;
  const note = $element.note.value;

  const formInput: any = {
    entryId,
    title,
    url,
    note,
  };

  data.nextEntryId++;
  data.entries.unshift(formInput);
  $form.reset();
  writeData();
}

$form.addEventListener('submit', submit);

// function renderEntry(entry: {
//   entryId: number;
//   note: string;
//   title: string;
//   url: string;
// }): HTMLLIElement {
//   const $li = document.createElement('li');
//   const $row = document.createElement('div');
//   $row.className = 'row';
//   const $columnHalf = document.createElement('div');
//   $columnHalf.className = 'column-half';
//   const $img = document.createElement('img');
//   $img.src = entry.url;
//   $img.alt = entry.title;

//   const $text = document.createElement('div');
//   $text.className = 'text';
//   const $title = document.createElement('h4');
//   $title.textContent = entry.title;
//   const $note = document.createElement('p');
//   $note.textContent = entry.note;

//   $li.appendChild($row);
//   $row.appendChild($columnHalf);
//   $columnHalf.appendChild($img);
//   $columnHalf.appendChild($text);
//   $text.appendChild($title);
//   $text.appendChild($note);
//   return $li;
// }

// const $ul = document.querySelector('.group-list');
// if (!$ul) throw new Error('ul query failed ');
// function contentLoaded(): void {
//   for (let i = 0; i < data.entries.length; i++) {}
// }

// $ul.addEventListener('DomContentLoaded', contentLoaded);
