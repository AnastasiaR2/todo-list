import { TodoForm, TodoList } from '~/components/components.js';

const App = () => {
  return (
    <main>
      <h1>Get Things Done!</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export { App };