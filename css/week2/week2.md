day 1

Box Model

1-> layers of box
Content → Padding → Border → Margin

2--> How Total Size Is Calculated
| margin | border | padding | content | padding | border | margin |

3--> box-sizing: Two Modes
1- content-box (default)
2- border-box

4--> Margin Collapsing
5--> auto with Margin
How it works:

Browser computes remaining horizontal space:
remaining = parentWidth − elementWidth.

Auto left + auto right split remaining equally.

Element ends up centered.

overflow

Value | Behavior | Analogy
visible (default) | Content spills out of the box; box doesn’t clip it. | Water overflows the cup, spilling onto the table.
hidden | Extra content is clipped; you can’t see or reach it. | Water overflows but gets trapped in a grate; you can’t recover it.
scroll | Always show scrollbars (horizontal/vertical) so user can move to see hidden content. | Cup with built-in pump & pipes you can turn to retrieve water.
auto | Only show scrollbars if content is too big. | Grate that only opens a drain when water level gets too high.
overlay* | Like auto but scrollbars float over content (Chrome/macOS behavior). | A transparent pipe overlay you can slide up when needed.



position

1- static

2- relative

3- absolute

4- fixed

5- sticky

Backgrounds
 background-color, background-image, background-size, background-position, background-repeat

 background-repeat
Value | Behavior | Analogy
repeat | Tile image both horizontally & vertically (default). | Floor tiles covering entire room.
repeat-x | Tile only left ↔ right. | A wallpaper stripe that only repeats sideways.
repeat-y | Tile only top ↕ down. | A vertical border that stacks downward.
no-repeat | Show one copy, no tiling. | A single framed picture on the wall.
space | Tiles image as many times as fits, then even-spaces gap. | Tiles in a grid with equal gaps at edges.
round | Tiles scaled so they fit an integer number of times. | Stretching tiles slightly so none get cut off.

background-position
Value | Behavior
auto (default) | Use image’s intrinsic dimensions.
cover | Scale so the image covers the box, cropping if needed.
contain | Scale so the image is fully visible, leaving empty space.
<width> <height> | Explicit sizes, e.g. 100px 50px or 50% 100%.

Multiple Backgrounds 
.header {
  background-image: 
    url("top-overlay.png"),
    linear-gradient(to bottom, rgba(0,0,0,0.5), transparent),
    url("main-bg.jpg");
  background-position: top left, center center, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: auto, auto, cover;
}


 background-attachment: scroll, fixed;