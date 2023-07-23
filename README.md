<h1 align="center"> <img src="src/assets/logo/glasses-ui-logo.png" widht="400" height="450"></h1>  
  
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

<strong>Glasses UI</strong> a collection of reusable CSS classes to enhance your web development experience. This library provides various utilities, styles, and components that you can easily integrate into your projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Button Styles](#button-styles)
- [Border Styles](#border-styles)
- [Shadow Styles](#shadow-styles)
- [Text Styles](#text-styles)
- [Background Styles](#background-styles)
- [Flexbox Utilities](#flexbox-utilities)
- [Interactions](#interactions)
- [Custom Buttons](#custom-buttons)

## Installation

You can install the library via npm:

```bash
npm i glasses-ui
```

## Usage
To use the library in your project, import the style.scss file into your main SCSS file:
```bash
@import 'glasses-ui/style';
```

After importing, you can start using the provided CSS classes in your HTML files.

## Button Styles

The library provides pre-defined button styles that you can use by adding the corresponding classes to your buttons:

- .btn-primary: Primary button style with a blue background color.
- .btn-danger: Danger button style with a red background color.
- .btn-success: Success button style with a green background color.
- .btn-warning: Warning button style with a yellow background color.
- .btn-info: Info button style with a cyan background color.

You can also adjust the button size by adding classes like .btn-sm, .btn-md, .btn-lg, or .btn-xl.

```bash
<button class="btn-primary">Primary Button</button>
<button class="btn-danger btn-md">Medium Danger Button</button>
```

# Border Styles
The library provides various border styles that you can apply to your elements:

- .border-none: No border.
- .border-solid: Solid border style.
- .border-dashed: Dashed border style.
- .border-dotted: Dotted border style.
- .border-double: Double border style.
  You can also adjust the border width and color using the following classes:

- .border-width-1px: 1-pixel border width.
- .border-width-2px: 2-pixel border width.
- .border-width-3px: 3-pixel border width.
  ... (add more as needed)

To specify the border color, use classes like .border-color-primary, .border-color-danger, etc., where the color corresponds to the button styles.

```bash
<div class="border-solid border-width-2px border-color-primary">Solid Border</div>
<div class="border-dashed border-width-1px border-color-danger">Dashed Border</div>
```

# Shadow Styles

The library provides shadow styles that you can apply to elements:

- .shadow-box: Basic box shadow effect.
- .shadow-text: Shadow effect for text elements.
  You can also adjust the shadow size by using classes like .shadow-sm, .shadow-md, .shadow-lg, etc.

```bash
<div class="shadow-box shadow-md">Box with Shadow</div>
<p class="shadow-text shadow-sm">Text with Shadow</p>
```

# Text Styles
The library offers various text styles:

- .text-center: Center-align text.
- .text-left: Left-align text.
- .text-right: Right-align text.
- .text-uppercase: Convert text to uppercase.
- .text-lowercase: Convert text to lowercase.
- .text-capitalize: Capitalize the first letter of each word.

```bash
<h1 class="text-center">Centered Heading</h1>
<p class="text-uppercase">uppercase text</p>
```

# Background Styles
The library provides background color classes:

- .bg-primary: Blue background color.
- .bg-danger: Red background color.
- .bg-success: Green background color.
- .bg-warning: Yellow background color.
- .bg-info: Cyan background color.
  You can also add custom background colors using the .bg-custom class and specifying the desired color using inline CSS.

```bash
<div class="bg-primary">Blue Background</div>
<div class="bg-custom" style="background-color: #FFA500;">Custom Background</div>
```

# Interactions
The library allows you to add interaction styles:

- .hover-transform: Apply a transformation on hover.
- .hover-rotate: Rotate an element on hover.
- .hover-scale: Scale an element on hover.

```bash
<div class="hover-transform rotate(10deg) scale(1.2)">Transform on Hover</div>
```
# Custom Buttons
You can create custom buttons with your own styles by using the following classes:

- .btn-custom-1: Custom button with a green background and white text.
- .btn-custom-2: Custom button with a red border, white text, and 2px border width.
```bash
<button class="btn-custom-1">Custom Button 1</button>
<button class="btn-custom-2">Custom Button 2</button>
```

# Flexbox Utilities
The library includes useful flexbox utilities:

- .flex-container: Set an element as a flex container.
- .flex-item: Set an element as a flex item.
- .flex-row: Set flex direction to row.
- .flex-column: Set flex direction to column.
- .flex-wrap: Enable flex items to wrap if necessary.
- .justify-content-center: Center-align flex items horizontally.
- .justify-content-start: Align flex items to the start of the container.
- .justify-content-end: Align flex items to the end of the container.
- .align-items-center: Center-align flex items vertically.
- .align-items-start: Align flex items to the top of the container.
- .align-items-end: Align flex items to the bottom of the container.

 ```bash
<div class="flex-container justify-content-center align-items-center">
  <div class="flex-item">Flex Item 1</div>
  <div class="flex-item">Flex Item 2</div>
</div>
```


## License
This project is licensed under the MIT License.
