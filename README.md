# Elena · Atomy Landing Page

Static landing page for Elena, Independent Atomy Distributor in Portugal.
No build step, no framework, no dependencies — plain HTML, CSS and JavaScript
you can open directly or host on any static host (GitHub Pages, Netlify, …).

## Run it

Open `index.html` directly (classic scripts, no ES modules or `fetch`), or serve
the folder:

```bash
python -m http.server 8765   # http://localhost:8765
```

Internet is only needed for Google Fonts and the externally hosted images.

## Project structure

```
index.html        The page. Static sections are literal HTML.
css/styles.css    All styles: tokens, reset, layout, components, sections.
js/data.js        Content + contact info — edit this for text/number changes.
js/render.js      Builds the lists, contact links and product filter.
```

## Editing content

Everything you'll normally change lives in `js/data.js` as plain arrays:
`products`, `categories`, `philosophy`, `steps`, `faqs`, and `contact`.

### Contact

```js
contact: { phone: "+351 918 823 650" },  // drives the WhatsApp links and number
```

`phone` is written once; every WhatsApp button, product card and category uses it.

### Products

```js
{
  category: "oral",              // all | skincare | oral | wellness | hair
  tag: "Higiene oral",
  title: "Atomy Pasta Dentífrica com Própolis",
  desc: "Com extrato de própolis verde …",
  alt: "Atomy Pasta Dentífrica com Própolis",
  image: "https://…",
  message: "Olá Elena, tenho interesse na Atomy Pasta Dentífrica com Própolis.",
}
```

`message` is the prefilled WhatsApp text; `category` must match a filter chip in
`index.html`. `categories` items also use `message` (they are WhatsApp links);
`philosophy` and `steps` are plain cards.

### FAQs

```js
faqs: [{ q: "Preciso de ser membro para comprar?", a: "Não precisa…" }],
```

## How the JS works

`js/render.js` runs on load and: fills every `[data-list="<key>"]` element from
`DATA[<key>]`, resolves contact links, and wires the product filter.

| Attribute | Result |
|---|---|
| `data-list="products"` | markup generated from `DATA.products` |
| `data-wa` | `https://wa.me/<digits>` |
| `data-wa="msg"` | `https://wa.me/<digits>?text=<encoded msg>` |
| `data-phone` | element text set to `DATA.contact.phone` |

So a plain WhatsApp button is just:

```html
<a class="btn btn--primary btn--sm" data-wa rel="noopener" target="_blank">Falar no WhatsApp</a>
```

To add a list: add the array in `data.js`, add a template in `render.js`, and put
`<div data-list="yourKey"></div>` in the page.

## Styling

`css/styles.css` is one file (tokens → base → shared card → layout → components)
using **native CSS nesting**, so a component's children and its `hover`/media
overrides sit together:

```css
.product-card {
  &:hover { … }
  .product-card__title { … }
  @media (min-width: 768px) { padding: 1.25rem; }
}
```

- Colors, fonts, spacing, radii and shadows are CSS variables at the top —
  change the color variables to restyle the brand.
- Spacing and headings are **fluid** (`clamp()`) and grids use `auto-fit`, so the
  page adapts without many breakpoints. Only ~10 `@media` rules remain.
- Every card-like component extends the shared `.card` surface; borders use
  `--border-soft` / `--border` / `--border-strong`.
- Buttons: tone (`--primary/--secondary/--soft`) + size (`--sm`/`--lg`) + width
  (`--block`/`--block-sm`).

## Deploy (GitHub Pages)

Push the repo, then **Settings → Pages** → branch `main`, folder `/ (root)`.
Served at `https://<user>.github.io/<repo>/`; paths are relative, so it also
works from a subpath.
