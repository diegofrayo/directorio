import React from "react";

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

const twcssObject: Record<string, any> = {};

function twcss(Tag: string): any {
  return function (styles: string | Record<string, string>): any {
    return function TWCSS_Component({
      children,
      className = "",
      is,
      ["tw-variant"]: twVariant,
      ["tw-classnames-overrides"]: twClassNamesOverrides,
      ...rest
    }: Record<string, unknown>): any {
      const Element: any = is || Tag;
      const finalClassName = applyOverridesToClassNames(
        generateClassName(styles, className, twVariant),
        twClassNamesOverrides,
      );

      return (
        <Element className={finalClassName} {...rest}>
          {children}
        </Element>
      );
    };
  };
}

function generateClassName(styles, className, twVariant) {
  if (Array.isArray(styles)) {
    return `${styles} ${className}`.trim();
  }

  if (typeof styles === "object") {
    if (typeof twVariant === "object") {
      const twVariantStyles = Object.keys(twVariant)
        .reduce((acum, curr) => {
          if (twVariant[curr] === true && styles[curr]) {
            return acum + styles[curr] + " ";
          }

          return acum;
        }, "")
        .trim();

      return `${styles.__base || ""} ${
        twVariantStyles || styles.initial
      } ${className}`.trim();
    }

    if (typeof twVariant === "string") {
      return `${styles.__base || ""} ${styles[twVariant] || ""} ${className}`.trim();
    }
  }

  return className.trim();
}

function applyOverridesToClassNames(className, twClassNamesOverrides) {
  if (!twClassNamesOverrides) return className;

  return twClassNamesOverrides
    .split(">")[1]
    .split("|")
    .reduce((acum, duple) => {
      const [currentClass, overrideClass] = duple.split("=");
      acum = acum.replace(currentClass, overrideClass);
      return acum;
    }, className)
    .trim();
}

HTML_TAGS.forEach((tagName: string) => {
  twcssObject[tagName] = twcss(tagName);
});

export default twcssObject;
