const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  CONTRIBUTORS: 'contributors',
  DEPENDENCIES: 'dependencies',
  DEPENDENT_REPOSITORIES: 'dependent_repositories',
  DEPENDENTS: 'dependents',
  GITHUB: 'github',
  GitHub: {
    Repository: {
      dependencies(owner: string, name: string): string {
        return `/${Endpoint.GITHUB}/${encode(owner)}/${encode(name)}/${Endpoint.DEPENDENCIES}/`;
      },

      projects(owner: string, name: string): string {
        return `/${Endpoint.GITHUB}/${encode(owner)}/${encode(name)}/${Endpoint.PROJECTS}/`;
      },

      repository(owner: string, name: string): string {
        return `/${Endpoint.GITHUB}/${encode(owner)}/${encode(name)}/`;
      },
    },

    User: {
      contributedProjects(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/${Endpoint.PROJECT_CONTRIBUTIONS}/`;
      },

      contributedRepositories(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/${Endpoint.REPOSITORY_CONTRIBUTIONS}/`;
      },

      dependencies(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/${Endpoint.DEPENDENCIES}/`;
      },

      packages(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/${Endpoint.PROJECTS}/`;
      },

      projects(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/${Endpoint.PROJECTS}/`;
      },

      repositories(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/${Endpoint.REPOSITORIES}/`;
      },

      user(login: string): string {
        return `/${Endpoint.GITHUB}/${encode(login)}/`;
      },
    },
  },
  PLATFORMS: 'platforms',
  platforms(): string {
    return `/${Endpoint.PLATFORMS}/`;
  },
  Project: {
    contributors(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${Endpoint.CONTRIBUTORS}/`;
    },

    dependencies(platform: string, name: string, version: string): string {
      return `/${encode(platform)}/${encode(name)}/${encode(version)}/${Endpoint.DEPENDENCIES}/`;
    },

    dependentRepositories(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${Endpoint.DEPENDENT_REPOSITORIES}/`;
    },

    dependents(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${Endpoint.DEPENDENTS}/`;
    },

    project(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/`;
    },

    search(): string {
      return `/${Endpoint.SEARCH}/`;
    },

    sourceRank(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${Endpoint.SOURCERANK}/`;
    },

    subscriptions(platform: string, name: string): string {
      return `/${Endpoint.SUBSCRIPTIONS}/${encode(platform)}/${encode(name)}/`;
    },

    usage(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${Endpoint.USAGE}/`;
    },
  },
  PROJECT_CONTRIBUTIONS: 'project-contributions',
  PROJECTS: 'projects',
  REPOSITORIES: 'repositories',
  REPOSITORY_CONTRIBUTIONS: 'repository-contributions',
  SEARCH: 'search',

  SOURCERANK: 'sourcerank',

  SUBSCRIPTIONS: 'subscriptions',

  subscriptions(platform?: string, name?: string): string {
    let endpoint = `/${Endpoint.SUBSCRIPTIONS}/`;
    if (platform && name) {
      endpoint += `${encode(platform)}/${encode(name)}/`;
    }
    return endpoint;
  },

  USAGE: 'usage',
};
