## Usage

``` html
<!-- Usage example -->
<pixel-button raised accent>Hover me!</pixel-button>
<pixel-tooltip placement="right">Well done!</pixel-tooltip>
```
<pixel-button raised accent>Hover me!</pixel-button>
<pixel-tooltip placement="right">Well done!</pixel-tooltip>

## API

### Props

Name | Description | Default | Example
--- | --- | --- | ---
`for` | *Tooltip target, by reference or id* | `previousSibling` | <pixel-button raised accent>Hover me!</pixel-button><pixel-tooltip placement="top">Well done!</pixel-tooltip>
`placement` | *Tooltip placement, can be top, right, bottom or left* | `bottom` | <pixel-button raised accent>Left Placement</pixel-button><pixel-tooltip placement="left">Well done!</pixel-tooltip>
`align-x` | *Tooltip x alignment, can be left, right or center* | | <pixel-button raised accent>Right X Alignment</pixel-button><pixel-tooltip placement="bottom" align-x="right">Well done!</pixel-tooltip>
`align-y` | *Tooltip y alignment, can be top, bottom or center* | | <pixel-button raised accent>Bottom Y Alignment</pixel-button><pixel-tooltip placement="bottom" align-y="bottom">Well done!</pixel-tooltip>
`offset-x` | *Tooltip x offset, in pixels* | | <pixel-button raised accent>5px X Offset</pixel-button><pixel-tooltip placement="left" offset-x="5">Well done!</pixel-tooltip>
`offset-y` | *Tooltip y offset, in pixels* | | <pixel-button raised accent>5px Y Offset</pixel-button><pixel-tooltip placement="bottom" offset-y="5">Well done!</pixel-tooltip>

### Theming

Name | Description | Default | Example
--- | --- | --- | ---
`color` | *Sets the tooltip color* |  | <pixel-button raised secondary>Custom Color</pixel-button><pixel-tooltip placement="top" color="#dda9ff">Well done!</pixel-tooltip>
`background-color` | *Sets the tooltip background color* | | <pixel-button raised secondary>Custom Background Color</pixel-button><pixel-tooltip placement="top" background-color="#dda9ff">Well done!</pixel-tooltip>
`border-color` | *Sets the tooltip border color* | | <pixel-button raised secondary>Custom Border Color</pixel-button><pixel-tooltip placement="top" border-color="#dda9ff">Well done!</pixel-tooltip>
