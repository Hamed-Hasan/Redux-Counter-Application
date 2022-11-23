// select dom element
const counterContainerEl = document.getElementById('counter-container');
const addCounterEl = document.getElementById('add-counter');
const resetBtnEl = document.getElementById('reset');

// counter template with id
const getCounterHTMLStringWithId = (id) =>
  `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mb-5" id="counter-${id}"><div id="counter-value-${id}" class="text-2xl font-semibold"></div><div class="flex space-x-3"><button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment-${id}">Increment</button><button id="decrement-${id}" class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">Decrement</button></div></div>`

// action identifiers
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_COUNTER = 'addCounter'
const RESET_COUNTER = 'resetCounter'

// action creators 
const increment = (counter) => {
    return {
        type: INCREMENT,
        payload: counter,
    }
}
const decrement = (counter) => {
    return {
        type: INCREMENT,
        payload: counter,
    }
}

// add counter
const addCounter = (counter) => {
    return {
        type: ADD_COUNTER,
        payload: counter,
    }
}

// reset all counter
const resetCounter = () => {
    return {
        type: RESET_COUNTER,
    }
}

// initial state 
const initialState = {
    counters: [
        {
            id: 0,
            value: 0,
            increaseBy: 1,
            defaultValue: 0,
        },
    ],
}

// create reducer function
function counterReducer(state = initialState, action) {
if(action.type === INCREMENT){
    return{
        ...state,
        counters: state.counters.map((counter) => 
        counter.id === action.payload.id ? {...counter, value: counter.value + counter.increaseBy } : {...counter}
        )
    }
} else if(action.type === DECREMENT){
    return{
        ...state,
        counters: state.counters.map((counter) => 
        counter.id === action.payload.id ? {...counter, value: counter.value - counter.increaseBy } : {...counter}
        )
    }
}else if(action.type === ADD_COUNTER){
    return{
        ...state,
        counters: [
            ...state.counters,
            {
                id: state.counters.length + 1,
                value: action.payload.defaultValue,
                ...action.payload,
            },
        ],
    }
}else if(action.type === RESET_COUNTER){
    return {
        ...state,
        counters: state.counters.map((counter) => ({
            ...counter, 
            value: counter.defaultValue,
        })),
    }
}else {
    return state
}
}