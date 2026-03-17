with open('src/App.jsx', 'r') as f:
    content = f.read()

old = '    modal: {\n      overview: "End-to-end HR People Analytics project on IBM'

new = '    images: [\n      { src: "/images/hr_page1.png", caption: "Page 1 — HR Overview" },\n      { src: "/images/hr_page2.png", caption: "Page 2 — Attrition Analysis" },\n      { src: "/images/hr_page3.png", caption: "Page 3 — Employee Insights" },\n    ],\n    modal: {\n      overview: "End-to-end HR People Analytics project on IBM'

if old in content:
    content = content.replace(old, new)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print("SUCCESS")
else:
    print("NOT FOUND")
