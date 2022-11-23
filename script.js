// select dom element
const counterContainerEl = document.getElementById('counter-container');
const addCounterEl = document.getElementById('add-counter');
const resetBtnEl = document.getElementById('reset');

// counter template with id
const getCounterHTMLStringWithId = (id) =>
  `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mb-5" id="counter-${id}"><div id="counter-value-${id}" class="text-2xl font-semibold"></div><div class="flex space-x-3"><button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment-${id}">Increment</button><button id="decrement-${id}" class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">Decrement</button></div></div>`

// action creators
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_COUNTER = 'addCounter'
const RESET_COUNTER = 'resetCounter'
