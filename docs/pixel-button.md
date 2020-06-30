---
title: Pixel Button
---
# Pixel Button

The PixelButton is the button component from the Vue-Pixel library.

## Usage

``` html
<!-- Usage example -->
<pixel-button raised accent>Accent</pixel-button>
```
<pixel-button raised accent>Accent</pixel-button>

## API

### Props

Name | Description | Default | Example
--- | --- | --- | ---
*flat* | *Renders a flat button* |  | <pixel-button flat secondary>Flat Button</pixel-button>
*outlined* | *Renders a outlined button* |  | <pixel-button outlined secondary>Outlined Button</pixel-button>
*raised* | *Renders a raised button* |  | <pixel-button raised secondary>Raised Button</pixel-button>
*disabled* | *Makes the button unclickable* |  | <pixel-button raised secondary disabled>Disabled Button</pixel-button>
*rounded* | *Makes the button rounded* |  | <pixel-button raised secondary rounded>Rounded Button</pixel-button>
*stripped* | *Makes the button stripped* |  | <pixel-button raised secondary stripped>Stripped Button</pixel-button>
*autofocus* | *Sets focus on page load* |  | <pixel-button flat secondary autofocus>Autofocus Button</pixel-button>
*uppercase* | *Sets the button text as uppercase* |  | <pixel-button raised secondary uppercase>Uppercase Button</pixel-button>

### Events

Name | Description | Detail
--- | --- | ---
*click* | *When user clicks on button* | ClickEvent
*focus* | *When button receives focus* | FocusEvent
*blur* | *When button looses focus* | FocusEvent
*mouseover* | *When user mouse overs the button* | MouseEvent
*mouseout* | *When user mouse outs the button* | MouseEvent

### Theming

Name | Description | Example
--- | --- | ---
*color* | *Sets the button color* | <pixel-button flat color="#dda9ff">Custom Color</pixel-button>
*background-color* | *Sets the button background color* | <pixel-button raised background-color="#dda9ff">Custom Background Color</pixel-button>
*border-color* | *Sets the button border color* | <pixel-button raised border-color="#dda9ff">Custom Border Color</pixel-button>

### Icons

<div>
  <pixel-button raised secondary>Simple Button</pixel-button>
  <pixel-button raised accent><pixel-icon>home</pixel-icon></pixel-button>
  <pixel-button flat primary><pixel-icon>home</pixel-icon></pixel-button>
  <pixel-button raised secondary>Simple Button with <pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button flat primary>Simple Flat button</pixel-button>
</div>
