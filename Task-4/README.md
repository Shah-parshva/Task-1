# Task 4 — Mobile-Friendly Website Using CSS Media Queries

> Web Development Internship | ElevateLabs

---

## 🎯 Objective

Convert a desktop-only page to a fully responsive, mobile-friendly layout using CSS media queries.

---

## 🚀 Live Demo

Open `index.html` in your browser. Resize the window or use Chrome DevTools device toolbar to see the responsive layout in action.

---

## 📐 What Was Built

A fully responsive **TechBlog** website featuring:

- Fixed navigation bar with mobile hamburger menu
- Hero section with a floating card
- Features strip (4-column → 2-column → 1-column)
- Article card grid (3 → 2 → 1 column)
- Newsletter sign-up form (row → stacked column on mobile)
- Footer with 4 columns → 2 → 1 column
- Live responsive indicator badge (shows Desktop / Tablet / Mobile)

---

## 📱 Breakpoints Used

| Breakpoint | Target |
|---|---|
| `max-width: 1024px` | Tablet layout |
| `max-width: 768px` | Mobile layout |
| `max-width: 480px` | Small phones |

---

## 🧠 Key Concepts Demonstrated

### 1. Media Queries
```css
@media (max-width: 768px) {
  .card-grid { grid-template-columns: 1fr; }
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
}
```

### 2. Viewport Meta Tag (in `<head>`)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
This tells mobile browsers to use the device's actual width instead of a simulated desktop width.

### 3. Responsive CSS Units
- `%` — for fluid widths (`width: 100%`)
- `rem` — for scalable font sizes
- `vw/vh` — for viewport-relative sizing
- `clamp()` — for fluid typography (`font-size: clamp(2.5rem, 5vw, 4.5rem)`)

### 4. Flexbox for Responsive Layouts
```css
.hero-btns { display: flex; flex-wrap: wrap; gap: 1rem; }


@media (max-width: 480px) {
  .hero-btns { flex-direction: column; }
}
```

### 5. CSS Grid for Article Cards
```css
.card-grid { grid-template-columns: repeat(3, 1fr); } 

@media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); } 
@media (max-width: 768px)  { grid-template-columns: 1fr; }             
```

### 6. Responsive Images
```css
img { max-width: 100%; height: auto; }
```

### 7. Hamburger Menu (mobile nav)
- Hidden hamburger button revealed at `≤768px`
- JavaScript toggles `.open` class to show/hide mobile menu overlay

---

## 📁 Files

```
├── index.html     ← All HTML, CSS, and JS in one file
└── README.md      ← This file
```

---

## 🛠 Tools Used

- VS Code
- Chrome DevTools (device toolbar for testing)
- Google Fonts (Playfair Display + DM Sans)

---

## 📝 Interview Q&A (Quick Reference)

**1. What are media queries?**
CSS rules that apply styles only when certain conditions are met (e.g., screen width ≤ 768px).

**2. Mobile-first vs Desktop-first?**
Mobile-first writes base styles for small screens and uses `min-width` queries to add desktop styles. Desktop-first is the reverse, using `max-width`. Mobile-first is generally preferred today.

**3. How do you test responsiveness?**
Chrome DevTools → device toolbar, or manually resize the browser window.

**4. Best units for responsive layouts?**
`%`, `rem`, `em`, `vw`, `vh`, and `clamp()` for fluid values.

**5. What is the viewport meta tag?**
It controls how mobile browsers scale the page. Without it, mobiles render the page at desktop width and zoom out.

**6. How does flexbox help?**
`flex-wrap` and `flex-direction` let you switch between row and column layouts at different breakpoints with minimal code.

**7. Absolute vs relative units?**
Absolute: `px`, `pt` — fixed size regardless of screen. Relative: `%`, `rem`, `em`, `vw` — scale based on parent or viewport.

**8. Responsive images?**
`max-width: 100%; height: auto;` ensures images never overflow their container and maintain aspect ratio.

**9. Adaptive vs Responsive?**
Responsive: fluid layout that continuously adjusts. Adaptive: distinct fixed layouts loaded at specific breakpoints.

**10. CSS Grid responsiveness?**
`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` creates a self-adjusting grid without any media queries.
