require("colors");

const pausa = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`\nPresione ${"ENTER".blue} para continuar\n`, (opt) => {
    readline.close();
  });
};

const mostrarMenu = () => {
  console.clear();
  console.log("====================================".green);
  console.log("      Seleccione una opción".white);
  console.log("====================================\n".green);

  console.log(`${"1".green} - Agregar tarea`);
  console.log(`${"2".green} - Listar tareas`);
  console.log(`${"3".green} - Listar tareas completadas`);
  console.log(`${"4".green} - Listar tareas pendientes`);
  console.log(`${"5".green} - Completar tarea(s)`);
  console.log(`${"6".green} - Borrar tarea`);
  console.log(`${"0".green} - Salir\n`);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Seleccione una opción: ", (opt) => {
    readline.close();
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
