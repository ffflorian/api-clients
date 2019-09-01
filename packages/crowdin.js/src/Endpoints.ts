export namespace Endpoint {
  const PROJECT = 'project';
  const ADD_FILE = 'add-file';

  const encode: typeof encodeURIComponent = encodeURIComponent;

  export namespace Project {
    export function addFile(projectInditifer: string): string {
      return `/${PROJECT}/${encode(projectInditifer)}/${ADD_FILE}/`;
    }
  }
}
