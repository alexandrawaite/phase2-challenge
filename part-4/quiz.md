* When you run a command in the terminal, where does BASH look for that command?

  * BASH looks for commands in the /bin directory.


* On a UNIX computer, how do you stop a running process?

   * `control-c`


* What packages do you have installed via homebrew?


  * git, hub, icu4c, node, tree (found using `brew list`)


* On a UNIX computer, how do you find the process id of a running process?

  * `ps` command provides information about running processes, including their PIDs.  


* In a terminal, what does `control-c` do?

  * `control-c` cancels the currently running process.


* What would be the result of typing the following commands?

  ```
  $ cd /Users/steve
  $ mkdir foo
  $ touch bar
  $ cd foo
  $ touch bar
  $ pwd
  ```
  * The result of the above commands would be `/Users/steve/foo`


* How do you set an environment variable in your shell?

  * Environment variables can be set in the shell by omitting the $ and assigning them to a value with the format `VARNAME=value of variable`


* What keyboard shortcut do you use to split the screen in your editor?

  * `cmd` + `shift` + `p` and type 'split'.


* How do you create an alias in your shell?

  * Open your `.bashrc` file from your user directory in your editor and add an alias with the format `alias aliasname='commands'`


* When a terminal command completes, how can you tell if it was successful or not?

  * Running `echo $?` will let you know the exit status of the last command. If the output is `0`, the command was successful. If the output is non-zero, the command wasn't successful.


* What does your `~/.gitconfig` have in it? (paste the whole file here)
  ```
  credential.helper=osxkeychain
  user.name=alexandrawaite
  user.email=alexandrawaite@gmail.com
  ```
  (found using ls -a in user directory)

* What is the difference between a relative and absolute path?

  * A relative path is relative to where you currently are in the system. An absolute path is the path beginning from the root of the file system.


* Lets say you have the following file structure

  ```~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```
  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?

  * `cp README.md ../`


* What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

  *  `cmd` + `o`


* What files or folders do you want all git repositories to ignore?

  * Operating system files (.DS_Store), node_modules, application files, language and framework files, credentials.


* What is the main difference between `Array.map` and `Array.forEach` in JavaScript?

  * `Array.forEach` iterates over an array and applies an operation with side effects to each array element. `Array.map` iterates over an array, transforms each element of that array and returns a new array of the same size with the transformed elements.