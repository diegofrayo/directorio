const HTML_TAGS = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan",
];

const twcssObject: any = {};

function twcss(Tag: string) {
  return function (styles: string | object) {
    return function ({
      children,
      className = "",
      is,
      ["tw-states"]: twStates,
      ...rest
    }: any) {
      const Element = is || Tag;
      const finalClassName = getClassName(styles, className, twStates);

      return (
        <Element className={finalClassName} {...rest}>
          {children}
        </Element>
      );
    };
  };
}

function getClassName(styles, className, twStates) {
  if (Array.isArray(styles)) {
    return `${styles} ${className}`.trim();
  }

  if (typeof styles === "object") {
    const twStatesStyles = Object.keys(twStates)
      .reduce((acum, curr) => {
        if (twStates[curr] === true && styles[curr]) {
          return acum + styles[curr] + " ";
        }

        return acum;
      }, "")
      .trim();

    return `${styles.__base || ""} ${
      twStatesStyles || styles.initial
    } ${className}`.trim();
  }

  return className.trim();
}

HTML_TAGS.forEach((tagName: string) => {
  twcssObject[tagName] = twcss(tagName);
});

export default twcssObject;
