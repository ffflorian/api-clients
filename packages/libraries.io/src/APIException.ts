import {AxiosError} from 'axios';
import {HttpStatus} from './interfaces/';

export class APIException extends Error {
  constructor(message = '', serverMessage?: string) {
    super(message);
    this.message += serverMessage ? `. ("${serverMessage}")` : '. The server did not provide any further information.';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class AuthenticationError extends Error {
  constructor(message = '', serverMessage?: string) {
    super(message);
    this.message += '. Wrong API key?' + (serverMessage ? ` ("${serverMessage}")` : '');
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class RateLimitError extends Error {
  constructor(message = '', serverMessage?: string) {
    super(message);
    this.message += ': Rate limit hit.' + (serverMessage ? ` ("${serverMessage}")` : '');
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends Error {
  constructor(message = '', serverMessage?: string) {
    super(message);
    this.message += serverMessage ? `: "${serverMessage}".` : '. The server did not provide any further information.';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidResponseError extends Error {
  constructor(message = '') {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function ExceptionMapper(error: AxiosError): Error {
  if (error.response && error.response.status) {
    const serverMessage = error.response.data ? error.response.data.message : undefined;

    switch (error.response.status) {
      case HttpStatus.FORBIDDEN:
        return new AuthenticationError(error.message, serverMessage);
      case HttpStatus.NOT_FOUND:
        return new NotFoundError(error.message, serverMessage);
      case HttpStatus.TOO_MANY_REQUESTS:
        return new RateLimitError(error.message, serverMessage);
      default:
        return new APIException(error.message, serverMessage);
    }
  }

  if (error instanceof InvalidResponseError) {
    return error;
  }

  return new Error(error.message);
}
