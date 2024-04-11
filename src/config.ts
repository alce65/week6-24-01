import { program } from 'commander';
import inquirer from 'inquirer';

const main = () => {
  let admin = 'admin';

  program.option('-v, --version').option('--admin <type>');
  program.parse();

  const options = program.opts();
  if (options.version) {
    console.log('1.0.0');
    return;
  }

  if (options.admin) {
    admin = options.admin;
  }

  console.log('Admin:', admin);

  const frameworks = ['Angular', 'React', 'Vue', 'Svelte', 'Solid'];
  const tools = ['Git', 'Docker', 'Jenkins', 'Github', 'Gitlab'];

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Dime tu nombre',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Dime tu apellido',
      },
      {
        type: 'list',
        name: 'framework',
        message: '¿Qué framework prefieres?',
        choices: frameworks,
      },
      {
        type: 'checkbox',
        name: 'tools',
        message: '¿Qué herramientas usas?',
        choices: tools,
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

main();
