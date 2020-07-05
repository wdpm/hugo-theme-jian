# Note

## The Theme Development Cycle

1. Purge the public/ directory.
2. Run the built in web server in watch mode.
3. Open your site in a browser.
4. Update the theme.
5. Glance at your browser window to see changes.
6. Return to step 4.

## Development Commands
```bash
## purge old files. hugo will recreate the public directory.
$ rm -rf public

## run hugo in watch mode
$ hugo server --watch --verbose
```

## Naming convention
- css naming
```css
nav-container
```
- ID naming
```
navContainer
```

## code highlight
```bash
hugo gen chromastyles --style=github > highlight.css
```
move it to `themes/your_name/static/css/`

## BEM example
> [correct-approach-for-a-navbar-structure-with-bem](https://stackoverflow.com/questions/43395150/correct-approach-for-a-navbar-structure-with-bem/43399188)
```html
<nav class="main-nav">
  <div class="main-nav__logo">
    <a class="main-nav__logo-link">Company Name</a>
  </div>
  <ul class="main-nav__menu">
    <li class="main-nav__menu-item">
      <a class="main-nav__menu-item-link">Products</a>
      <ul class="main-nav__sub-menu">
        <li class="main-nav__sub-menu-item">
          <a class="main-nav__sub-menu-item-link">Foo</a>
        </li>
        <li class="main-nav__sub-menu-item">
          <a class="main-nav__sub-menu-item-link">Bar</a>
        </li>
        <li class="main-nav__sub-menu-item">
          <a class="main-nav__sub-menu-item-link">Baz</a>
        </li>
      </ul>
    </li>
    <li class="main-nav__menu-item">
      <a class="main-nav__menu-item-link">Services</a>
    </li>
    <li class="main-nav__menu-item">
      <a class="main-nav__menu-item-link">About Us</a>
    </li>
  </ul>
</nav>
```

## TODO
- back to top
- toc support
