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

function renderEntry(entry: {
  entryId: number;
  note: string;
  title: string;
  url: string;
}): HTMLLIElement {
  const $li = document.createElement('li');
  const $row = document.createElement('div');
  $row.className = 'row';
  const $columnHalf = document.createElement('div');
  $columnHalf.className = 'column-half';
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
  $row.appendChild($columnHalf);
  $columnHalf.appendChild($img);
  $columnHalf.appendChild($text);
  $text.appendChild($title);
  $text.appendChild($note);
  return $li;
}

const $ul = document.querySelector('.group-list');
if (!$ul) throw new Error('ul query failed ');
function contentLoaded(): void {
  if (!$ul) throw new Error('ul query in function failed ');
  for (let i = 0; i < data.entries.length; i++) {
    const dataEntries = data.entries[i];
    const x = renderEntry(dataEntries);
    $ul.appendChild(x);
  }
}
document.addEventListener('DOMContentLoaded', contentLoaded);

function toggleNoEntries(): void {
  const $noEntries = document.querySelector('#no-entries-data');
  if ($noEntries) {
    $noEntries.classList.toggle('.hidden');
  }
}
toggleNoEntries();

const $container = document.querySelector('.container');
const $entryForm = document.querySelectorAll('#data-view-entry-form');
const $entries = document.querySelectorAll('#data-view-entries');
function viewSwap(event: Event): void {
  if (!$entryForm) throw new Error('check data-view: entry form');
  if (!$entries) throw new Error('check data-view: entries');
  if (!$container) throw new Error('container query failed');
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('$entryForm')) {
    for (let i = 0; i < $entries.length; i++) {
      const iEntryForm = $entryForm[i];
      if (iEntryForm === $eventTarget) {
        iEntryForm.classList.add('hidden');
      } else {
        iEntryForm.classList.remove('hidden');
      }
    }
  }
  const $data = $eventTarget.getAttribute('data-view');
  if (!$data) throw new Error('$data query failed');
  for (let x = 0; x < $entries.length; x++) {
    const iEntries = $entries[x] as HTMLElement;
    const viewData = iEntries.getAttribute('data-view');

    if (viewData === $data) {
      iEntries.classList.remove('hidden');
    } else {
      iEntries.classList.add('hidden');
    }
  }
}
$container?.addEventListener('click', viewSwap);
