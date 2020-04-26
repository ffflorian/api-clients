export interface API {
  captionImage(options: ImageCaptionOptions): Promise<Response<Image>>;
  getMemes(): Promise<Response<Memes>>;
}

export type Response<T> =
  | {
      data: T;
      success: true;
    }
  | {
      error_message: string;
      success: false;
    };

export interface Image {
  page_url: string;
  url: string;
}

export interface Memes {
  memes: Meme[];
}

export interface Meme {
  box_count: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
}

/**
 * `x`, `y`, `width`, and `height` are for the bounding box of the text box. `x` and
 * `y` are the coordinates of the top left corner. If you specify bounding
 * coordinates, be sure to specify all four (`x`, `y`, `width`, `height`), otherwise
 * your text may not show up correctly. If you do not specify bounding box
 * coordinates, the same automatic default coordinates from
 * https://imgflip.com/memegenerator will be used, which is very useful for memes
 * with special text box positioning other than the simple top/bottom.
 */
export interface Box {
  color?: string;
  height?: number;
  outline_color?: string;
  text: string;
  width?: number;
  x?: number;
  y?: number;
}

interface ImageCaptionBase {
  /** The font family to use for the text. Defaults to `impact`. */
  font?: 'impact' | 'arial';
  /** Maximum font size in pixels. Defaults to `50px`. */
  max_font_size?: string;
  /** password for the imgflip account */
  password: string;
  /**
   * A template ID as returned by the `get_memes` response. Any ID that was
   * ever returned from the `get_memes` response should work for this parameter.
   * For custom template uploads, the template ID can be found in the
   * memegenerator URL, e.g.
   * https://imgflip.com/memegenerator/14859329/Charlie-Sheen-DERP.
   */
  template_id: string;
  /** username of a valid imgflip account. This is used to track where API requests are coming from. */
  username: string;
}

export interface ImageCaptionWithBoxes extends ImageCaptionBase {
  /**
   * For creating memes with more than two text boxes, or for further
   * customization. If boxes is specified, text will not be automatically
   * converted to uppercase, so you'll have to handle capitalization yourself
   * if you want the standard uppercase meme text. You may specify up to 5
   * text boxes. You may leave the first box completely empty, so that the
   * second box will automatically be used for the bottom text.
   */
  boxes: Box[];
}

export interface ImageCaptionWithTexts extends ImageCaptionBase {
  /** Top text for the meme */
  text0: string;
  /** Bottom text for the meme */
  text1: string;
}

export type ImageCaptionOptions = ImageCaptionWithBoxes | ImageCaptionWithTexts;
