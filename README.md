# Furniture Builder (Morph, Same Look)

This is based on your provided `index.html` (same bevel + dashed EdgesGeometry look), but adds smooth morphing.

## Key idea
Instead of swapping between Box/Cylinder/Oval geometries (different topology),
we use one continuously morphable profile: a **superellipse**, then ExtrudeGeometry + bevel.
- Rectangle/Square: superellipse exponent ~ 10 (boxy)
- Oval/Round: exponent 2 (ellipse/circle)
We tween exponent + radii, rebuilding the (small) geometry each frame so bevel + dashed edges remain *exactly* the same style.

## Run
```bash
npm start
```
Open: http://localhost:8080
