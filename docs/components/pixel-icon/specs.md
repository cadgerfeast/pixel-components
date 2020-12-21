## Usage

``` html
<!-- Usage example -->
<pixel-icon>home</pixel-icon>
```
<pixel-icon>home</pixel-icon>

The full icon list can be found <a href="https://github.com/cadgerfeast/pixel-icons/blob/master/ICONS.md" target="_blank">here.</a>

## API

### Theming

Name | Description | Default | Example
--- | --- | --- | ---
`svg` | *Renders the icon as inline svg* | `false` | <pixel-icon svg>internet-explorer</pixel-icon>
`grayscale` | *Renders the icon as grayscale, only works with svg icon* | `false` | <pixel-icon svg grayscale>internet-explorer</pixel-icon>
`color-{n}` | *Customizes the icon color, only works with svg icon* | | <pixel-icon svg color-1="#584366" color-2="#dda9ff">internet-explorer</pixel-icon>

## Advanced Usage

### With Buttons

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
