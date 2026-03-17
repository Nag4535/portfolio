with open('src/index.css', 'r') as f:
    content = f.read()

old = '''.slideshow__img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  object-position: top;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--border);
}'''

new = '''.slideshow__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--border);
  display: block;
}'''

if old in content:
    content = content.replace(old, new)
    print("Step 1 SUCCESS")
else:
    print("Step 1 NOT FOUND")

with open('src/index.css', 'w') as f:
    f.write(content)
