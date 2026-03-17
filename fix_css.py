with open('src/index.css', 'r') as f:
    content = f.read()

old = '''.modal-overlay {
  position: fixed; inset: 0; z-index: 500;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(10px);
  display: flex; align-items: flex-start; justify-content: center;
  padding: 2rem 1.5rem;
  animation: fadeIn .2s var(--ease);
  overscroll-behavior: contain;
  overflow-y: auto;
}'''

new = '''.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 9000;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
  animation: fadeIn .2s var(--ease);
  overscroll-behavior: contain;
}'''

if old in content:
    content = content.replace(old, new)
    print("Step 1 SUCCESS")
else:
    print("Step 1 NOT FOUND")

old2 = '''.modal {
  background: var(--bg-2);
  border: 1px solid var(--m-accent, var(--border));
  border-radius: 16px;
  width: min(780px, 100%);
  max-height: none;
  overflow-y: visible;
  box-shadow: 0 0 80px rgba(0,0,0,0.6);
  animation: slideUp .3s var(--ease);
  margin: auto;
}'''

new2 = '''.modal {
  position: relative;
  background: var(--bg-2);
  border: 1px solid var(--m-accent, var(--border));
  border-radius: 16px;
  width: min(780px, 100%);
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 0 80px rgba(0,0,0,0.6);
  animation: slideUp .3s var(--ease);
  scrollbar-width: thin;
  scrollbar-color: var(--surface) transparent;
  margin: auto;
  flex-shrink: 0;
}'''

if old2 in content:
    content = content.replace(old2, new2)
    print("Step 2 SUCCESS")
else:
    print("Step 2 NOT FOUND")

with open('src/index.css', 'w') as f:
    f.write(content)
