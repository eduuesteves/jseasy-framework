const tag = (tagname, style) => {
    return document.head.insertAdjacentHTML("beforeend", `
    <style>
        ${tagname} {${style}}
    </style>
    `);
}

const responsive = (style) => {
    return document.head.insertAdjacentHTML("beforeend", `
        <style>
            ${style}
        </style>
    `)
};

export { tag, responsive };