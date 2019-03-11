workflow "Build, lint and test" {
  on = "push"
  resolves = ["Build", "Lint", "Test", "Publish"]
}

action "Install" {
  uses = "docker://node:10-slim"
  runs = "yarn"
}

action "Boot" {
  uses = "docker://node:10-slim"
  needs = "Install"
  runs = "yarn"
  args = "boot"
}

action "Lint" {
  uses = "docker://node:10-slim"
  needs = "Boot"
  runs = "yarn"
  args = "lint"
}

action "Build" {
  uses = "docker://node:10-slim"
  needs = "Boot"
  runs = "yarn"
  args = "dist"
}

action "Test" {
  uses = "docker://node:10-slim"
  needs = "Boot"
  runs = "yarn"
  args = "test"
}

action "Master" {
  uses = "actions/bin/filter@master"
  needs = ["Build", "Lint", "Test"]
  args = "branch master"
}

action "Last Commit" {
  uses = "ffflorian/actions/last_commit@master"
  needs = "Master"
  args = "^(?:(?!\\[(ci skip|skip ci)\\]).)*$"
}

action "Publish" {
  uses = "ffflorian/actions/lerna@master"
  needs = "Last Commit"
  env = {
    GH_USER = "ffflobot"
  }
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN", "GH_TOKEN"]
}
