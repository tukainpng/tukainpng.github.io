let post = document.getElementById("post")

post.addEventListener(
  "mouseover",
  (hover) => {
    hover.target.style = "color: red; font-size: 20em"

    setTimeout(() => {
      hover.target.style = ""
    }, 1000)
  },
  false
)

