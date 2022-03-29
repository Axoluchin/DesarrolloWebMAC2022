let id = 0;

const addTask = () => {
  const Titulo = document.getElementById("Activity").value;
  const Descripcion = document.getElementById("Desc").value;
  document.getElementById("Activity").value = "";
  document.getElementById("Desc").value = "";

  const TituloTask = document.createElement("h2");
  TituloTask.textContent = Titulo;

  const DescTask = document.createElement("p");
  DescTask.textContent = Descripcion;

  const trash = document.createElement("i");
  trash.setAttribute("class", "bx bx-trash");
  trash.setAttribute("onclick", "deleteTask(" + id + ")");

  const check = document.createElement("i");
  check.setAttribute("class", "bx bx-check");
  check.setAttribute("onclick", "checkTask(" + id + ")");

  const division = document.createElement("div");
  division.appendChild(trash);
  division.appendChild(check);

  const NewTask = document.createElement("article");
  NewTask.appendChild(TituloTask);
  NewTask.appendChild(DescTask);
  NewTask.appendChild(division);
  NewTask.setAttribute("id", id.toString());

  id++;

  const TaskArea = document.getElementById("TaskArea");
  TaskArea.appendChild(NewTask);
};

const deleteTask = (n) => {
  document.getElementById(n.toString()).remove();
};

const checkTask = (n) => {
  let clase = document.getElementById(n.toString());
  if (clase.className) {
    clase.className = "";
  } else clase.className = "check";
};
