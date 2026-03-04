document.getElementById('year').textContent = new Date().getFullYear();

const recs = {
  knotless: { short: 'Small knotless braids, 4-6 hrs', medium: 'Medium knotless braids, 5-7 hrs', long: 'Waist-length knotless braids, 6-8 hrs' },
  microlocs: { short: 'Microloc retie maintenance', medium: 'Microloc consultation + retie', long: 'Microloc installation planning session' },
  box: { short: 'Shoulder-length box braids', medium: 'Mid-back box braids', long: 'Waist-length box braids' },
  twists: { short: 'Passion twists (short)', medium: 'Senegalese twists (medium)', long: 'Long boho twists' }
};

document.getElementById('estimateBtn')?.addEventListener('click', () => {
  const style = document.getElementById('styleType').value;
  const len = document.getElementById('hairLen').value;
  const suggestion = recs[style][len];
  document.getElementById('estimationText').textContent = `${suggestion} looks like your best fit. Next step: book a consultation to confirm exact sizing, timing, and final quote.`;
});
