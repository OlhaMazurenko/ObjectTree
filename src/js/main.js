let data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const container = document.getElementById('container');
function createTree(container, data) {
    container.appendChild(drowTree(data));
}

function drowTree(obj) {
  if (Object.keys(obj).length !== 0){
      
    const list = document.createElement('ul');
    
      Object.keys(obj).forEach((i) => {
        let listItems = document.createElement('li');
        listItems.innerText = i;
        let childrenUl = drowTree(obj[i]);
        if (childrenUl) {
          listItems.appendChild(childrenUl);
        }
        list.appendChild(listItems);
    });
    return list;
  }
}

createTree(container, data);
