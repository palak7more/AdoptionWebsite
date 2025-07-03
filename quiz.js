function getMatch() {
  const answers = [
    document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked')
  ];

  if (answers.includes(null)) {
    alert("Please answer all questions!");
    return;
  }

  const values = answers.map(ans => ans.value);
  const counts = { A: 0, B: 0, C: 0 };
  values.forEach(val => counts[val]++);

  let match = "";
  if (counts.A >= 2) match = "🎉 You matched with Max – a playful, energetic Beagle!";
  else if (counts.B >= 2) match = "🌼 You matched with Bella – a sweet, calm Golden Retriever!";
  else match = "🛡️ You matched with Rocky – a loyal German Shepherd protector!";

  document.getElementById('match-result').innerText = match;
}
