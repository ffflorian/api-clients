export namespace Endpoint {
  const CAPTION_IMAGE = 'caption_image';
  const GET_MEMES = 'get_memes';

  export function captionImage(): string {
    return `/${CAPTION_IMAGE}`;
  }

  export function getMemes(): string {
    return `/${GET_MEMES}`;
  }
}
