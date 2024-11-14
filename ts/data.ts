interface Entry {
  entryId: number;
  note: string;
  title: string;
  url: string;
}

interface Data {
  view: string;
  entries: Entry[];
  editing: Entry | null;
  nextEntryId: number;
}

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

const data: Data = readData();
console.log(data);

function readData(): Data {
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
