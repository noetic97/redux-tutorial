export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    text,
    id
  }
}
