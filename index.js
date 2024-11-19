#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgWhite("Creator of this game is Aarish AKA ProgrammingBeast"))

let playerName

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

//-----------------------------------------------------------------------------------
async function welcome () {
    const rainbowTitle = chalkAnimation.rainbow(
        'Welcome to TerminalTrivia\n'
    )

    await sleep()
    rainbowTitle.stop()

    console.log(`${chalk.bgBlue('How To Play')}
        I am a process on your device.
        If you get any question wrong i will be ${chalk.bgRed('KILLED')}.
        So get all the questions right.

        All The Best
    `)
}

await welcome()

//-----------------------------------------------------------------------------------
async function handleAnswer(isCorrect){
    const spinner = createSpinner("Checking your answer <|><|><|>").start()
    await sleep()

    if(isCorrect){
        spinner.success({text: `Good work ${playerName}. That's the right answer`})
    }else{
        spinner.error({
          text: `X X X Game over, you lose ${playerName}. Better luck next time`,
        });
        process.exit(1)
    }
}
//-----------------------------------------------------------------------------------
async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'Player'
        },
    })
}

await askName()
//-----------------------------------------------------------------------------------

async function question_1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Which command is used to list files in a directory?\n",
    choices: ["ls", "dir", "list", "show"],
  });

  return handleAnswer(answers.question_1 === "ls");
}

async function question_2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What does the 'chmod' command do?\n",
    choices: [
      "Change file permissions",
      "Change file owner",
      "Modify file content",
      "Compress files",
    ],
  });

  return handleAnswer(answers.question_2 === "Change file permissions");
}

async function question_3() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "Which of the following is a Linux distribution?\n",
    choices: ["Ubuntu", "Windows", "macOS", "Android"],
  });

  return handleAnswer(answers.question_3 === "Ubuntu");
}

async function question_4() {
  const answers = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "What does the 'pwd' command do?\n",
    choices: [
      "Prints the current working directory",
      "Password encryption",
      "Prints all files",
      "Prints system information",
    ],
  });

  return handleAnswer(
    answers.question_4 === "Prints the current working directory"
  );
}

async function question_5() {
  const answers = await inquirer.prompt({
    name: "question_5",
    type: "list",
    message: "Which command is used to view the content of a file?\n",
    choices: ["cat", "view", "open", "show"],
  });

  return handleAnswer(answers.question_5 === "cat");
}

async function question_6() {
  const answers = await inquirer.prompt({
    name: "question_6",
    type: "list",
    message: "What is the default shell in most Linux distributions?\n",
    choices: ["Bash", "Zsh", "Fish", "Tcsh"],
  });

  return handleAnswer(answers.question_6 === "Bash");
}

async function question_7() {
  const answers = await inquirer.prompt({
    name: "question_7",
    type: "list",
    message: "Which command is used to delete a file?\n",
    choices: ["rm", "del", "erase", "delete"],
  });

  return handleAnswer(answers.question_7 === "rm");
}

async function question_8() {
  const answers = await inquirer.prompt({
    name: "question_8",
    type: "list",
    message: "What is the purpose of the 'grep' command?\n",
    choices: [
      "Search for patterns in files",
      "Compress files",
      "Edit files",
      "Display system processes",
    ],
  });

  return handleAnswer(answers.question_8 === "Search for patterns in files");
}

async function question_9() {
  const answers = await inquirer.prompt({
    name: "question_9",
    type: "list",
    message: "Which command is used to display the manual of other commands?\n",
    choices: ["man", "help", "info", "guide"],
  });

  return handleAnswer(answers.question_9 === "man");
}

async function question_10() {
  const answers = await inquirer.prompt({
    name: "question_10",
    type: "list",
    message: "What does the 'df' command display?\n",
    choices: [
      "Disk space usage",
      "File content",
      "Directory structure",
      "Network configuration",
    ],
  });

  return handleAnswer(answers.question_10 === "Disk space usage");
}




await question_1()
await question_2();
await question_3();
await question_4();
await question_5();
await question_6();
await question_7();
await question_8();
await question_9();
await question_10();
console.log(`Congratulations you have completed the Terminal Trivia succesfully`)