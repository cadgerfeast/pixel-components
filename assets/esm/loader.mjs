import { a as patchEsm, b as bootstrapLazy } from './index-c6358225.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["pixel-button",[[4,"pixel-button",{"autofocus":[4],"disabled":[4],"flat":[4],"raised":[516],"outlined":[4],"theme":[1],"primary":[4],"secondary":[516],"accent":[4],"color":[1],"backgroundColor":[1,"background-color"],"borderColor":[1,"border-color"],"hasTriggeredOnce":[32],"active":[32]}]]],["pixel-icon",[[0,"pixel-icon",{"svg":[4],"grayscale":[4],"icon":[32],"svgContent":[32]}]]],["pixel-toggle",[[0,"pixel-toggle",{"autofocus":[4],"disabled":[4],"checked":[516],"primary":[4],"secondary":[516],"accent":[4],"color":[1],"backgroundColor":[1,"background-color"],"borderColor1":[1,"border-color-1"],"borderColor2":[1,"border-color-2"],"hasTriggeredOnce":[32]}]]],["pixel-tooltip",[[4,"pixel-tooltip",{"for":[1],"placement":[513],"alignX":[1,"align-x"],"alignY":[1,"align-y"],"offsetX":[8,"offset-x"],"offsetY":[8,"offset-y"],"offsetZ":[1,"offset-z"],"color":[1],"backgroundColor":[1,"background-color"],"borderColor":[1,"border-color"],"parent":[32],"active":[32],"update":[32]},[[11,"scroll","handleScroll"],[11,"resize","handleResize"]]]]]], options);
});

export { defineCustomElements };
