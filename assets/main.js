function handleClick(btn) {
  document.querySelectorAll('button')
    .forEach((button) => {
      button.classList.remove("selected")
    })

  const current = this.event.currentTarget
  current.classList.add("selected")

  goto(btn)
}

const positions = [10, 30, 50, 70, 90]
const colors = ['#FFE85B', '#EE466B', '#7959FD', '#3E9EFB', '#4CF0DE']

function goto(where) {
  const mark = document.querySelector('#mark')
  const colorBall = document.querySelector('#mark span')
  const moveTo = positions[where] + "vw"

  mark.style.left = moveTo
  colorBall.style.backgroundColor = colors[where]
}

