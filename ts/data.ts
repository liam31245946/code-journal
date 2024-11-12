interface Data {
  view: string;
  entries: Input[];
  editing: Input | null;
  nextEntryId: number;
}

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

const data: Data = readData();

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
