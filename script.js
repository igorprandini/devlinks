function toggleMode() {
  // Selecionando a tag HTML;
  const html = document.documentElement

  // Alterando a classe da tag HTML;
  html.classList.toggle("light")

  // Selecionando a tag IMG;
  const img = document.querySelector("#profile img")

  // Alterando a imagem da tag IMG;
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
