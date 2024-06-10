import { Dashboard } from "@pages/Dashboard";
import { useAppSelector } from "@store/hooks";

function App() {
  const projects = useAppSelector((state) => state.projects);

  console.log({ projects });
  return <Dashboard />;
}

export default App;
