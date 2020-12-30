// const initial = {
//     visibilityFilter : false
// }
// const todos = (state = initial, action) => {
//     return {visibilityFilter: action.val || 3};

//     switch (action.type) {
//         case 'TOGGLE_TODO':
//             return {visibilityFilter: action.val};

//         case 'TOGGLE_TODO':
//             return state.map(todo =>
//                 todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//             )
//         default:
//             return state
//     }
// }

// export default todos