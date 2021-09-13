function suggestAlternative(id) {
  let words = document.querySelector(`#${id}`);
  let alt_verbs = JSON.parse(words.dataset.alternatives)
  const containerEl = document.getElementById('output__container')
  containerEl.classList.add('usa-alert', 'usa-alert--info', 'usa-alert--no-icon')

  const outputEl = document.getElementById('output')
  outputEl.classList.add('usa-alert__body')

  header = `<h2 class="usa-alert__heading">"${words.dataset.term}"</h2>`
  subtitle = "<p>Below are suggested phrases to replace the highlighted language:</p>"

  ul_start = '<ul>'
  ul_end = "</ul>"

  example = `<p>Example: ${words.dataset.example}</p>`
  let toAdd = header + subtitle + ul_start;
  for (let i = 0; i < alt_verbs.length; i++) {
    verb = alt_verbs[i]
    toAdd += `<li class="margin-bottom-1">${verb}</li>`
  }
  toAdd += ul_end + example
  outputEl.innerHTML = toAdd
  if (outputEl.getBoundingClientRect().top > (window.innerHeight - 35)) {
    outputEl.scrollIntoView()
  }
}