with open('src/index.css', 'r') as f:
    content = f.read()

old = '''.slideshow {
  position: relative;
  width: 100%;
  background: var(--bg-3);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding-bottom: 1rem;
}'''

new = '''.slideshow {
  position: relative;
  width: 100%;
  background: var(--bg-3);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding-bottom: 1rem;
  overflow: hidden;
  max-height: 280px;
}'''

if old in content:
    content = content.replace(old, new)
    print("Step 2 SUCCESS")
else:
    print("Step 2 NOT FOUND")

with open('src/index.css', 'w') as f:
    f.write(content)
