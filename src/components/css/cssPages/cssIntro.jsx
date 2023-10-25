import React from "react";

export default function CssIntro() {
  return (
    <div className="flex flex-col justify-center py-5 px-5 gap-3 text-start">
      <h1 className="text-2xl">CSS Introduction</h1>
      <p className="">
        &nbsp; &nbsp; &nbsp; &nbsp; CSS, stand for Cascading Style Sheets, is
        used for web page styling or used in web development to control the
        visual presentation of web pages. It allows you to define the style,
        layout, and design of web content, making user-friendly websites.
      </p>
      <h2 className="text-xl underline">Some Basics of CSS</h2>
      <p>
        <strong>Syntax and Selectors:</strong> CSS uses selectors to target HTML
        elements, and declarations to define how those elements should be
        styled.
      </p>
      <ul>
        <li>
          * CSS is written in rules, with each rule consisting of a selector and
          a declaration block.
        </li>
        <li>
          * The selector defines which HTML elements the rule applies to, and
          the declaration block contains the properties and their values.
        </li>
      </ul>
      <div>
        <strong> Properties and Values:</strong>CSS properties define the aspect
        of an element you want to style, and values determine how it should be
        styled.
      </div>
      <div className="bg-black text-white p-4 rounded-md w-min">
        <pre>
          {`// CSS Syntax
selector {
 property: value;
 }`}
        </pre>
      </div>
      <ul>
        Types of Selectors
        <li>
          <pre>
            {`1. Element selectors (e.g., p, h1, a).
2. Class selectors (e.g., .my-class).
3. ID selectors (e.g., #my-id).
4. Descendant selectors (e.g., div p targets <p> elements within a <div>).
5. Pseudo-classes (e.g., :hover, :active).
6. Pseudo-elements (e.g., ::before, ::after).`}
          </pre>
        </li>
      </ul>
      <div className="bg-black text-white p-4 rounded-md w-min">
        <pre>
          {`/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#header {
  font-size: 24px;
}

/* Descendant selectors*/
div p{
  background-color: yellow;
}

/* Pseudo-classes */
a:hover{
  background-color: black;
  color: white;
}
`}
        </pre>
      </div>
      <h3>Comments in CSS</h3>
      <div>
        /* and */ is use to comment section, which we don't want to be executed.
        <pre className="bg-black text-white p-4 rounded-md w-min">{`/* This is a CSS comment */`}</pre>
      </div>
      <h2 className="text-2xl underline">
        How to use CSS in html? or add CSS in html page?
      </h2>
      <h6 className="text-xl">1. External CSS</h6>
      <p>{`The recommended way to apply CSS is by creating an external CSS file (e.g., styles.css) and linking it to your HTML document using the <link> element in the <head> section.`}</p>
      <div className="bg-black text-white p-4 rounded-md w-min">
        <pre>{`<link rel="stylesheet" type="text/css" href="styles.css">`}</pre>
      </div>
      <h6 className="text-xl">2. Internal CSS</h6>
      <p>{`You can also add CSS rules directly in HTML document using the <style></style> element in the <head> section.`}</p>
      <div className="bg-black text-white p-4 rounded-md w-min">
        <pre>{`<style>
  selector {
    property: value;
  }
</style>`}</pre>
      </div>
      <h6 className="text-xl">2. Inline CSS</h6>
      <p>
        Inline CSS is applied directly to individual HTML elements using the
        style attribute. It's generally discouraged for maintaining separation
        between content and presentation
      </p>
      <div className="bg-black text-white p-4 rounded-md w-min">
        <pre>
          {`<p style="color: green; text-align: center;">This is a green text.</p>`}
        </pre>
      </div>
    </div>
  );
}
