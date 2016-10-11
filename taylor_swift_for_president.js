function $(selector, context) {
  if (context === undefined)
    context = document
  return [...(context.querySelectorAll(selector))]
}
// Replace target string with content string in elements
function subText(elements, target, content) {
  elements.map((element) => {
    if (element.text != undefined)
      element.text.replace(target, content); element
  })
}

function subImgSrc(elements, src) {
  elements.map((element) => {element.src = src})
}

var elements = $('*')
var images = $('img').slice(1)

subText(elements, 'Barack', 'Taylor')
subText(elements, 'Obama', 'Swift')
subImgSrc(images, 'http://www.kiss925.com/wp-content/blogs.dir/7/files/2015/02/Taylor-Swift-1200x800.png')
