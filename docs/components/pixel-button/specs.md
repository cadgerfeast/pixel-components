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
`disabled` | *Makes the button unusable* | `false` | <pixel-button raised secondary disabled>Disabled Button</pixel-button>
`autofocus` | *Sets focus on page load* | `false` | <pixel-button flat secondary autofocus>Autofocus Button</pixel-button>

### Events

Name | Description | Type | Detail
--- | --- | --- | ---
`click` | *When user clicks on button* | `ClickEvent` |
`focus` | *When button receives focus* | `FocusEvent` |
`blur` | *When button looses focus* | `FocusEvent` |

### Theming

Name | Description | Default | Example
--- | --- | --- | ---
`flat` | *Renders a flat button* | `false` | <pixel-button flat secondary>Flat Button</pixel-button>
`outlined` | *Renders a outlined button* | `false` | <pixel-button outlined secondary>Outlined Button</pixel-button>
`raised` | *Renders a raised button* | `true` | <pixel-button raised secondary>Raised Button</pixel-button>
`rounded` | *Makes the button rounded* | `false` | <pixel-button raised secondary rounded>Rounded Button</pixel-button>
`stripped` | *Makes the button stripped, only works with raised button* | `false` | <pixel-button raised secondary stripped>Stripped Button</pixel-button>
`uppercase` | *Sets the button text as uppercase* | `false` | <pixel-button raised secondary uppercase>Uppercase Button</pixel-button>
`primary` | *Sets the button theme as primary* | `false` | <pixel-button raised primary>Primary Button</pixel-button>
`secondary` | *Sets the button theme as secondary* | `true` | <pixel-button raised secondary>Secondary Button</pixel-button>
`accent` | *Sets the button theme as accent* | `false` | <pixel-button raised accent>Accent Button</pixel-button>
`color` | *Sets the button color* |  | <pixel-button flat color="#dda9ff">Custom Color</pixel-button>
`background-color` | *Sets the button background color* | | <pixel-button raised background-color="#dda9ff">Custom Background Color</pixel-button>
`border-color` | *Sets the button border color* | | <pixel-button raised border-color="#dda9ff">Custom Border Color</pixel-button>

## Advanced Usage

### With Icons

``` html
<div>
  <pixel-button raised secondary>Simple Button</pixel-button>
  <pixel-button raised accent><pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button flat primary><pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button raised secondary>Simple Button with <pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button flat primary>Simple Flat button</pixel-button>
</div>
<!-- Height adjustment: Use a flex display for your row -->
<div style="display: flex">
  <pixel-button raised secondary>Simple Button</pixel-button>
  <pixel-button raised accent><pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button flat primary><pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button raised secondary>Simple Button with <pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button flat primary>Simple Flat button</pixel-button>
</div>
```

<div style="display: flex">
  <pixel-button raised secondary>Simple Button</pixel-button>
  <pixel-button raised accent><pixel-icon svg>home</pixel-icon></pixel-button>
  <pixel-button flat primary><pixel-icon svg>pipe-top</pixel-icon></pixel-button>
  <pixel-button raised secondary>Simple Button with <pixel-icon>eye</pixel-icon></pixel-button>
  <pixel-button flat primary>Simple Flat button</pixel-button>
</div>
