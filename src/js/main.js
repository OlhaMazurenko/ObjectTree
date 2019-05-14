var data = {
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

function createTree(container, obj) {
  container.appendChild(createTreeDom(obj));//Добавляет элемент в конец списка дочерних элементов родителя
}

function createTreeDom(obj) {
  // если нет детей, то рекурсивный вызов ничего не возвращает
  // так что вложенный UL не будет создан
  if (isObjectEmpty(obj)) return;

  var ul = document.createElement('ul');

  for (var key in obj) {
    var li = document.createElement('li');
    li.innerHTML = key;

    var childrenUl = createTreeDom(obj[key]);
    if (childrenUl) li.appendChild(childrenUl);

    ul.appendChild(li);
  }

  return ul;
}


function isObjectEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var container = document.getElementById('container');
createTree(container, data);

var container = document.getElementById('container');
createTree(container, data);
