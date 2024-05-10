import {Color, Routines, Palette, StandardColorPalette, MetroColorPalette, Primitives, info} from "@olton/color"

globalThis.Color = Color
globalThis.color = c => new Color(c)

globalThis.Color.Routines = Routines
globalThis.Color.Palette = Palette
globalThis.Color.StandardColors = StandardColorPalette
globalThis.Color.MetroColors = MetroColorPalette
globalThis.Color.Primitives = Primitives
globalThis.Color.info = info