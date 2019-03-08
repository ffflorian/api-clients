workflow "Build, lint and test" {
  on = "push"
  resolves = ["Build", "Lint", "Test"]
}

action "Install" {
  uses = "docker://node:10"
  runs = "yarn"
}

action "Boot" {
  uses = "docker://node:10"
  needs = ["Install"]
  runs = "yarn"
  args = "boot"
}

action "Lint" {
  uses = "docker://node:10"
  needs = ["Boot"]
  runs = "yarn"
  args = "lint"
}

action "Dist" {
  uses = "docker://node:10"
  needs = ["Boot"]
  runs = "yarn"
  args = "dist"
}

action "Test" {
  uses = "docker://node:10"
  needs = ["Boot"]
  runs = "yarn"
  args = "test"
}
