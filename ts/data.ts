interface Data {
  view: string;
  entries: Input[];
  editing: Input | null;
  nextEntryId: number;
}

const data: Data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

const dataJSON = JSON.stringify(data);

function storeData(key: string, data: any): any {
  localStorage.setItemItem(key, dataJSON);
  return data;
}
console.log(storeData);

function readData(key: string): any {
  const getJSON = localStorage.getItem(key);
  if (getJSON) {
    return JSON.parse(dataJSON);
  } else {
    return 'Error';
  }
}
