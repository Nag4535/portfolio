with open('src/App.jsx', 'r') as f:
    content = f.read()

# Remove images array from project 1
old = '''    images: [
      { src: "/images/hr_page1.png", caption: "Page 1 — HR Overview" },
      { src: "/images/hr_page2.png", caption: "Page 2 — Attrition Analysis" },
      { src: "/images/hr_page3.png", caption: "Page 3 — Employee Insights" },
    ],
    modal: {'''

new = '    modal: {'

if old in content:
    content = content.replace(old, new)
    print("Step 1 SUCCESS - images array removed")
else:
    print("Step 1 NOT FOUND")

# Remove ImageSlideshow call from modal
old2 = '        {/* Dashboard Images Slideshow */}\n        {project.images && <ImageSlideshow images={project.images} />}\n\n        {/* Header */}'
new2 = '        {/* Header */}'

if old2 in content:
    content = content.replace(old2, new2)
    print("Step 2 SUCCESS - slideshow call removed")
else:
    print("Step 2 NOT FOUND")

with open('src/App.jsx', 'w') as f:
    f.write(content)
