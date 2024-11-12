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
