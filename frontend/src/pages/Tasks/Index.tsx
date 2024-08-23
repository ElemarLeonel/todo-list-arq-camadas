import TaskForm from "../../components/TaskForm";
import { Layout } from "../../layout";

const Tasks = () => {
  return (
    <Layout>
      <h1 className="text-5xl font-extrabold text-gray-900 text-center">
        Cadastrar Tarefa
      </h1>
      <TaskForm />
    </Layout>
  );
};

export default Tasks;
