with open('src/App.jsx', 'r') as f:
    content = f.read()

# Fix modal to use ref and scroll to top inside modal
old = '''  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Scroll modal to top when opened
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);'''

new = '''  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);'''

if old in content:
    content = content.replace(old, new)
    print("Step 1 SUCCESS")
else:
    print("Step 1 NOT FOUND")

with open('src/App.jsx', 'w') as f:
    f.write(content)
