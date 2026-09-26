# Elena · Atomy Landing Page

Static landing page for Elena, Independent Atomy Distributor in Portugal.
No build step, no framework, no dependencies — plain HTML, CSS and JavaScript
you can open directly or host on any static host (GitHub Pages, Netlify, …).

## Run it

Just open `index.html`. Classic scripts are used (no ES modules, no `fetch`),
so double-clicking the file works. Internet access is only needed for Google
Fonts and the externally hosted product images.

For a local server while developing:

```bash
python -m http.server 8765   # then open http://localhost:8765
```

There is no install step, no `npm install`, no compilation.

## Project structure

```
index.html        The page. Static sections are literal HTML.
css/styles.css    All styles: tokens, reset, layout, components, sections.
js/data.js        Content + contact info. Edit this for text/number changes.
js/render.js      Builds the lists, contact links and product filter.
```

## Editing content

Almost everything you will want to change lives in **`js/data.js`**.

### Contact

```js
window.DATA = {
  contact: {
    phone: "+351 918 823 650",  // drives both WhatsApp and tel: links
  },
  ...
};
```

`phone` is the only place the number is written. Change it once and every
button, product card and category update.

### Products

```js
products: [
  {
    category: "oral",              // all | skincare | oral | wellness | hair
    tag: "Higiene oral",
    title: "Atomy Pasta Dentífrica com Própolis",
    desc: "Com extrato de própolis verde …",
    alt: "Atomy Pasta Dentífrica com Própolis",
    image: "https://…",
    message: "Olá Elena, tenho interesse na Atomy Pasta Dentífrica com Própolis.",
  },
],
```

`message` is the prefilled WhatsApp text. `category` must match one of the
filter buttons in `index.html`.

### Categories, philosophy and steps

These are also plain arrays (`categories`, `philosophy`, `steps`) rendered by
the matching templates in `js/render.js`. Categories are WhatsApp links, so
each has a `message`; philosophy and steps are static cards.

### FAQs

```js
faqs: [
  { q: "Preciso de ser membro para comprar?", a: "Não precisa de nenhuma subscrição obrigatória…" },
],
```

## How the JS works

`js/render.js` runs on page load and:

1. Fills every element with a `data-list="<key>"` attribute from
   `DATA[<key>]`.
2. Resolves contact links from `DATA.contact`.
3. Wires the product filter.

### Link/data attributes

| Attribute | Result |
|---|---|
| `data-list="products"` | generated list markup from `DATA.products` |
| `data-wa` | `https://wa.me/<digits>` (no message) |
| `data-wa="msg"` | `https://wa.me/<digits>?text=<encoded msg>` |
| `data-phone` | element text set to `DATA.contact.phone` |

Example — a plain WhatsApp button in `index.html`:

```html
<a class="btn btn--primary btn--sm" data-wa rel="noopener" target="_blank">Falar no WhatsApp</a>
```

### Add a new data-driven list

1. Add the array to `js/data.js`, e.g. `reviews: [ … ]`.
2. Add a template in `js/render.js` that returns an HTML string:

   ```js
   reviews: function (items) {
     return items
       .map(function (r) {
         return '<div class="review">' + r.text + "</div>";
       })
       .join("");
   }
   ```

3. Add the container in `index.html`:

   ```html
   <div data-list="reviews"></div>
   ```

### Product filter

The filter chips (`<button class="chip" data-filter="…">`) toggle product cards
by their `data-category`. The logic is in `js/render.js`.

## Styling

`css/styles.css` is one file in sections: tokens → base/reset → shared card →
layout → components. It uses **native CSS nesting**, so a component's child
rules and its responsive/`hover` overrides live together under the block:

```css
.product-card {
  &:hover { … }

  .product-card__title { … }

  @media (min-width: 768px) { padding: 1.25rem; }
}
```

- Design values (colors, fonts, type scale, spacing, radii, shadows) are CSS
  variables at the top. Change the color variables to restyle the brand.
- Every card-like component extends the shared `.card` surface (border,
  background, shadow, radius) and only adds its own layout/padding.
- Borders use three tokens: `--border-soft`, `--border`, `--border-strong`.
- Buttons: tone (`--primary/--secondary/--soft/--quiet`) + size (`--sm`/`--lg`)
  + width (`--block`/`--block-sm`).
- Icons use Material Symbols with size helpers `.icon--sm/md/lg/xl/2xl`.

## Deploy (GitHub Pages)

1. Commit and push the repository.
2. Repo **Settings → Pages**, source `main` / `/ (root)`, save.
3. Served at `https://<user>.github.io/<repo>/`.

All paths are relative, so it works from a subpath without changes.

