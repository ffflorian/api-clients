export namespace Endpoint {
  const CONTRIBUTORS = 'contributors';
  const DEPENDENCIES = 'dependencies';
  const DEPENDENT_REPOSITORIES = 'dependent_repositories';
  const DEPENDENTS = 'dependents';
  const GITHUB = 'github';
  const PLATFORMS = 'platforms';
  const PROJECT_CONTRIBUTIONS = 'project-contributions';
  const PROJECTS = 'projects';
  const REPOSITORIES = 'repositories';
  const REPOSITORY_CONTRIBUTIONS = 'repository-contributions';
  const SEARCH = 'search';
  const SOURCERANK = 'sourcerank';
  const SUBSCRIPTIONS = 'subscriptions';
  const USAGE = 'usage';

  const encode: typeof encodeURIComponent = encodeURIComponent;

  export namespace Project {
    export function contributors(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${CONTRIBUTORS}/`;
    }

    export function dependencies(platform: string, name: string, version: string): string {
      return `/${encode(platform)}/${encode(name)}/${encode(version)}/${DEPENDENCIES}/`;
    }

    export function dependentRepositories(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${DEPENDENT_REPOSITORIES}/`;
    }

    export function dependents(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${DEPENDENTS}/`;
    }

    export function search(): string {
      return `/${SEARCH}/`;
    }

    export function sourceRank(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${SOURCERANK}/`;
    }

    export function subscriptions(platform: string, name: string): string {
      return `/${SUBSCRIPTIONS}/${encode(platform)}/${encode(name)}/`;
    }

    export function usage(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${USAGE}/`;
    }

    export function project(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/`;
    }
  }

  export namespace GitHub {
    export namespace Repository {
      export function dependencies(owner: string, name: string): string {
        return `/${GITHUB}/${encode(owner)}/${encode(name)}/${DEPENDENCIES}/`;
      }

      export function projects(owner: string, name: string): string {
        return `/${GITHUB}/${encode(owner)}/${encode(name)}/${PROJECTS}/`;
      }

      export function repository(owner: string, name: string): string {
        return `/${GITHUB}/${encode(owner)}/${encode(name)}/`;
      }
    }

    export namespace User {
      export function dependencies(login: string): string {
        return `/${GITHUB}/${encode(login)}/${DEPENDENCIES}/`;
      }

      export function packages(login: string): string {
        return `/${GITHUB}/${encode(login)}/${PROJECTS}/`;
      }

      export function projects(login: string): string {
        return `/${GITHUB}/${encode(login)}/${PROJECTS}/`;
      }

      export function contributedProjects(login: string): string {
        return `/${GITHUB}/${encode(login)}/${PROJECT_CONTRIBUTIONS}/`;
      }

      export function repositories(login: string): string {
        return `/${GITHUB}/${encode(login)}/${REPOSITORIES}/`;
      }

      export function contributedRepositories(login: string): string {
        return `/${GITHUB}/${encode(login)}/${REPOSITORY_CONTRIBUTIONS}/`;
      }

      export function user(login: string): string {
        return `/${GITHUB}/${encode(login)}/`;
      }
    }
  }

  export function platforms(): string {
    return `/${PLATFORMS}/`;
  }

  export function subscriptions(): string;
  export function subscriptions(platform: string, name: string): string;
  export function subscriptions(platform?: string, name?: string): string {
    let endpoint = `/${SUBSCRIPTIONS}/`;
    if (platform && name) {
      endpoint += `${encode(platform)}/${encode(name)}/`;
    }
    return endpoint;
  }
}
