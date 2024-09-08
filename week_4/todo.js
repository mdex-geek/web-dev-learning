const fs = require('fs');
const   {Command}  = require('commander');
import chalk  from 'chalk';

const program = new Command();

const todo_file = './todo.json';




function loaddata() {
  if (!fs.existsSync(todo_file)) {
      return [];
  }
  try {
      const data = fs.readFileSync(todo_file, 'utf-8');
      if (data.trim() === '') {
          return [];
      }
      return JSON.parse(data);
  } catch (error) {
      console.error(chalk.red('Error reading or parsing todo file:'), error.message);
      return [];
  }
}

function savetodo(todo){
    fs.writeFileSync(todo_file,JSON.stringify(todo,null,2),'utf-8');
}

function addtodo(task){
    const todo =  loaddata();
    todo.push({task,done:false});
    savetodo(todo);
    console.log(chalk.green('save the todo'));
}

function deleteTodo(index) {
    const todos = loaddata();
    if (index > 0 && index <= todos.length) {
      const removed = todos.splice(index - 1, 1);
      savetodo(todos);
      console.log(chalk.yellow(`Deleted: ${removed[0].task}`));
    } else {
      console.log(chalk.red('Invalid todo number!'));
    }
}

function markToDoDone(index){
    const todos = loaddata();
    if(index>0 && index<= todos.length){
        todos[index-1].done=true;
        savetodo(todos); 
        console.log(chalk.green(`mark to do done\n: ${todos[index-1].task}`));
    }else {
        console.log(chalk.red('Invalid todo number!'));
    }
}

function displayTodos() {
    const todos = loaddata();
    if (todos.length === 0) {
      console.log(chalk.blue('No todos yet!'));
    } else {
      todos.forEach((todo, index) => {
        const status = todo.done ? chalk.green('✔') : chalk.red('✘');
        console.log(`${index + 1}. [${status}] ${todo.task}`);
      });
    }
  }

  program.command('list')
  .description('list all to do ')
  .action(()=>displayTodos());

  program.command('add <task>')
  .description('add todo ')
  .action((task)=>addtodo(task));

  program.command('delete <index>')
  .description('add todo ')
  .action((index)=> deleteTodo(index));

  program
  .command('done <index>')
  .description('Mark a todo as done')
  .action((index) => {
    markToDoDone(Number(index));
  });

  program.parse(process.argv);
