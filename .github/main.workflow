workflow "Build, lint and test" {
  on = "push"
  resolves = [
    "Build all projects",
    "Lint all projects",
    "Test all projects",
    "Publish updated projects"
  ]
}

action "Don't skip CI" {
  uses = "ffflorian/actions/skip-ci-check@master"
}

action "Install dependencies" {
  uses = "docker://node:10-slim"
  needs = "Don't skip CI"
  runs = "yarn"
}

action "Bootstrap projects" {
  uses = "docker://node:10-slim"
  needs = "Install dependencies"
  runs = "yarn"
  args = "boot"
}

action "Lint all projects" {
  uses = "docker://node:10-slim"
  needs = "Bootstrap projects"
  runs = "yarn"
  args = "lint"
}

action "Build all projects" {
  uses = "docker://node:10-slim"
  needs = "Bootstrap projects"
  runs = "yarn"
  args = "dist"
}

action "Test all projects" {
  uses = "docker://node:10-slim"
  needs = "Bootstrap projects"
  runs = "yarn"
  args = "test"
}

action "Check for master branch" {
  uses = "actions/bin/filter@master"
  needs = [
    "Build all projects",
    "Lint all projects",
    "Test all projects"
  ]
  args = "branch master"
}

action "Don't publish dependency updates" {
  uses = "ffflorian/actions/last_commit@master"
  needs = "Check for master branch"
  args = "^(?!chore\\(deps)"
}

action "Rebuild docs" {
  uses = "./.github/actions/rebuild-docs"
  needs = "Don't publish dependency updates"
  env = {
    GH_USER = "ffflobot"
  }
  secrets = ["GH_TOKEN"]
}

action "Publish updated projects" {
  uses = "ffflorian/actions/lerna@master"
  needs = "Rebuild docs"
  env = {
    GH_USER = "ffflobot"
  }
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN", "GH_TOKEN"]
}
