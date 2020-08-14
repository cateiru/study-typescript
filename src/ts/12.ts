// object to json and save

import * as fs from 'fs';

interface MyObj {
    name: string,
    age: number,
    country: string
}

function mainSave(){
    const myData: MyObj = {
        name: 'Yuto Watanabe',
        age: 20,
        country: 'Japan',
    }
    saveObj(myData)
}


function saveObj(obj: MyObj) {
  const filePath = './output.json'
  fs.writeFileSync(filePath, JSON.stringify(obj), 'utf-8')
}

mainSave()
