import { Image } from '@tiptap/extension-image';

export const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: element => element.getAttribute('width'),
        renderHTML: () => ({}), // Do not render width attribute
      },
      height: {
        default: null,
        parseHTML: element => element.getAttribute('height'),
        renderHTML: () => ({}), // Do not render height attribute
      },
      style: {
        default: null,
        parseHTML: element => element.getAttribute('style'),
        renderHTML: attributes => {
          if (!attributes.style) return {};
          return { style: attributes.style };
        },
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    // Compose style string from width/height if present
    let style = HTMLAttributes.style || '';
    if (HTMLAttributes.width) style += `width: ${HTMLAttributes.width}px;`;
    if (HTMLAttributes.height) style += `height: ${HTMLAttributes.height}px;`;
    // Remove width/height attributes so only style is used
    const { width, height, ...rest } = HTMLAttributes;
    return ['img', { ...rest, style }];
  },
}); 