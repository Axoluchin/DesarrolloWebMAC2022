let id = 0;

const addTask = () => {
  const Titulo = document.getElementById("Activity").value;
  const Descripcion = document.getElementById("Desc").value;

  const TaskArea = document.getElementById("TaskArea");

  const TituloTask = document.createElement("h2");
  TituloTask.appendChild(document.createTextNode(Titulo));

  const DescTask = document.createElement("p");
  DescTask.appendChild(document.createTextNode(Descripcion));

  const NewTask = document.createElement("article", {});
  NewTask.appendChild(TituloTask);
  NewTask.appendChild(DescTask);
  NewTask.setAttribute("id", id.toString());
  id++;
  TaskArea.appendChild(NewTask);
};
