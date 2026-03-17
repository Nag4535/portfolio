with open('src/index.css', 'r') as f:
    content = f.read()

old = '''.slideshow__img {
  width: 100%;
  max-height: 320px;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
}'''

new = '''.slideshow__img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  object-position: top;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--border);
}'''

if old in content:
    content = content.replace(old, new)
    print("SUCCESS - image size fixed")
else:
    print("NOT FOUND - image fix")

with open('src/index.css', 'w') as f:
    f.write(content)
