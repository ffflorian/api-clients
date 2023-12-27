export const Endpoint = {
  CAPTION_IMAGE: 'caption_image',
  GET_MEMES: 'get_memes',

  captionImage(): string {
    return `/${Endpoint.CAPTION_IMAGE}`;
  },

  getMemes(): string {
    return `/${Endpoint.GET_MEMES}`;
  },
}
