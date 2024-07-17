let text="Lorem ipsum TEXT dolor sit TEXT amet consectetur TEXT adipisicing elit. TEXT Et, provident."
let result=text.replace("TEXT","CHANGED")
let result1=text.replaceAll("TEXT","CHANGED")
console.log(result);
// Result =>Lorem ipsum CHANGED dolor sit TEXT amet consectetur TEXT adipisicing elit. TEXT Et, provident.

console.log(result1);
// Result =>Lorem ipsum CHANGED dolor sit CHANGED amet consectetur CHANGED adipisicing elit. CHANGED Et, provident.
