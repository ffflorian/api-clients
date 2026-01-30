export const Endpoint = {
  CAPTION_IMAGE: 'caption_image',
  captionImage(): string {
    return `/${Endpoint.CAPTION_IMAGE}`;
  },

  GET_MEMES: 'get_memes',

  getMemes(): string {
    return `/${Endpoint.GET_MEMES}`;
  },
};
