## Usage

``` html
<!-- Usage example -->
<pixel-toggle checked></pixel-toggle>
```
<pixel-toggle checked></pixel-toggle>

## API

### Props

Name | Description | Default | Example
--- | --- | --- | ---
`disabled` | *Makes the toggle unusable* | `false` | <pixel-toggle checked disabled></pixel-toggle>
`autofocus` | *Sets focus on page load* | `false` | <pixel-toggle checked autofocus accent></pixel-toggle>

### Events

Name | Description | Type | Detail
--- | --- | --- | ---
`change` | *When the toggle value changes* | `ChangeEvent` | `boolean` **checked**
`focus` | *When toggle receives focus* | `FocusEvent` |
`blur` | *When toggle looses focus* | `FocusEvent` |

### Theming

Name | Description | Default | Example
--- | --- | --- | ---
`rounded` | *Makes the toggle rounded* | `false` | <pixel-toggle checked rounded></pixel-toggle>
`primary` | *Sets the toggle theme as primary* | `false` | <pixel-toggle checked primary></pixel-toggle>
`secondary` | *Sets the toggle theme as secondary* | `true` | <pixel-toggle checked secondary></pixel-toggle>
`accent` | *Sets the toggle theme as accent* | `false` | <pixel-toggle checked accent></pixel-toggle>
`color` | *Sets the toggle color* | | <pixel-toggle checked color="#dda9ff"></pixel-toggle>
`background-color` | *Sets the toggle background color* | | <pixel-toggle checked background-color="#dda9ff"></pixel-toggle>
`border-color-1` | *Sets the toggle first border color* | | <pixel-toggle checked border-color-1="#dda9ff"></pixel-toggle>
`border-color-2` | *Sets the toggle second border color* | | <pixel-toggle checked border-color-2="#dda9ff"></pixel-toggle>
