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

interface Input {
  entryId: number;
  note: string;
}

function submit(event: Event): void {
  event?.preventDefault();

  const formInput: Input = {
    entryId: data.nextEntryId,
    note: $form.value,
  };
  data.nextEntryId++;
  data.entries.push(formInput);
  $form.reset();
  writeData();
}

$form.addEventListener('submit', submit);
