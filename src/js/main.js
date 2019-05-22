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
  if (JSON.stringify(obj) !== "{}"){
      
    const ul = document.createElement('ul');
    
      Object.keys(obj).forEach((i) => {
        let li = document.createElement('li');
        li.innerText = i;
        let childrenUl = drowTree(obj[i]);
        if (childrenUl) {
            li.appendChild(childrenUl);
        }
        ul.appendChild(li);
    });
    return ul;
  }
}

createTree(container, data);
