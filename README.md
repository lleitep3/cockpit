# cockpit

The goal here is create a project sample with a good strategy to create extensible command line app.

## Stack

- Node version v23.0.0 (`yes, 23 :) *if you want a LTS, just need to change the way you run on npm scripts.`)
- Typescript v5.6.3
- [@inquirer/prompts](https://www.npmjs.com/package/@inquirer/prompts)

---

## About the structure

```shell

cockpit
├── package.json            # good to see
├── package-lock.json
├── pnpm-lock.yaml          # pnpm ;)
├── README.md               # you are here
├── src
│   ├── commands            # put new commands here
│   │   ├── configure-vim               # configure vim command folder
│   │   │   ├── .vimrc                  # this file will replace the current one
│   │   │   └── configure-vim.prompt.ts # the command
│   │   │
│   │   ├── git-status.prompt.ts   # example prompt
│   │   ├── ls-command.prompt.ts   # example prompt
│   │   └── ping-command.prompt.ts # example prompt
│   │
│   ├── helpers
│   │   ├── exec-command-sync.ts  # runs a shell command sync and returns the command output
│   │   ├── exec-command.ts       # runs a shell command streaming the command output
│   │   └── scan-command.ts       # find the commands inside the "commands" folder
│   │
│   ├── types.ts   # types and interfaces here
│   ├── configs.ts # env variables and configurations
│   └── main.ts  # runs the main prompt
└── tsconfig.json
```

---

## About the commands

As a first propose I'm creating some configuration commnads to setup and maintain my machine,
after that maybe some development tools like project generators, to speed up my "project start".

## TODO:

- [x] configure vim
  - [x] it should backup old file
  - [x] it should manage old files
  - [x] it should create a new file
- [-] configure my personal terminal
  - [ ] it should install oh-my-zsh
  - [ ] it should install terminator
  - [ ] it should install
- [ ] install docker
- [ ] update rotine my tools (pnpm version, apt update)

## IDEAS

- [ ] build a docker compose based on my personal templates?
- [ ] project security scans in a project
  - [ ] run snyk tests
