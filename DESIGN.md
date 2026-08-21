Menurutku selera desainmu paling tepat dibawa ke arah **editorial + modern product design**: clean, premium, sedikit warm, bukan "developer portfolio" yang techy.

# Personal Website — Design System

## 1. Design Direction

**Style:** Editorial Minimalism × Modern Product Design

Website harus terasa seperti gabungan antara:

* Personal editorial / magazine
* Modern SaaS landing page
* Engineer's personal space
* Independent maker portfolio

Bukan:

* Cyberpunk developer portfolio
* Dark hacker aesthetic
* Corporate resume
* Excessive glassmorphism
* Gradient-heavy startup website

### Design principles

1. **Typography-first**
2. **Lots of whitespace**
3. **Strong hierarchy**
4. **Warm, human, slightly sophisticated**
5. **Minimal decoration**
6. **Content is the visual**
7. **Subtle interaction, not excessive animation**

---

# 2. Typography

Gunakan **dua font utama**.

## Serif — Cormorant Garamond

Digunakan untuk:

* Hero statement
* Large editorial headings
* Quotes
* Selected emphasis
* Personal statements

Character:

> Elegant · Intellectual · Personal · Editorial

Contoh:

> I build software **from idea to production.**

Serif tidak digunakan untuk body text.

---

## Sans Serif — Manrope

Digunakan untuk:

* Navigation
* Body text
* Project descriptions
* Metadata
* Buttons
* Labels
* Tags
* UI elements

Character:

> Clean · Modern · Technical · Friendly

### Typography pairing

```text
Cormorant Garamond
        +
Manrope
```

Kontras ini menjadi salah satu identitas utama website.

---

# 3. Typography Scale

### Display

Cormorant Garamond

```text
Desktop: 72–96px
Mobile: 48–60px
Weight: 500
Line height: 0.95–1.05
```

### H1

Cormorant Garamond

```text
56–72px
Weight: 500
```

### H2

Cormorant Garamond

```text
42–52px
Weight: 500
```

### H3

Manrope

```text
20–24px
Weight: 600
```

### Body

Manrope

```text
16–18px
Line height: 1.6
Weight: 400
```

### Small / Metadata

Manrope

```text
12–14px
Letter spacing: 0.04em
```

---

# 4. Color

Dominant color harus tetap **warm white**, bukan pure white.

```text
Background
#F8F7F3

Surface
#FFFFFF

Primary Text
#171717

Secondary Text
#6F6F6A

Border
#E4E2DC
```

### Accent

Gunakan **Tangerine / warm orange** sebagai identity color.

```text
Accent
#F26A3D
```

Penggunaan accent harus hemat:

* Links
* Small indicators
* Hover states
* Important labels
* Selected states
* Tiny decorative elements

Jangan membuat seluruh UI orange.

---

# 5. Layout

Gunakan layout editorial dengan **wide whitespace**.

```text
Desktop

┌──────────────────────────────────────────────┐
│                                              │
│  Logo                    Work About Contact │
│                                              │
│                                              │
│                                              │
│          Large editorial headline            │
│                                              │
│          supporting description              │
│                                              │
│          CTA                                │
│                                              │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  SELECTED WORK                              │
│                                              │
│  Large project                              │
│                                              │
│  Large project                              │
│                                              │
└──────────────────────────────────────────────┘
```

### Container

```text
Max width: 1200–1280px
Horizontal padding: 32–48px
```

Mobile:

```text
Padding: 20–24px
```

---

# 6. Spacing

Gunakan spacing yang lega.

```text
4
8
12
16
24
32
48
64
96
128
160
```

Section spacing:

```text
Desktop: 120–160px
Mobile: 80–100px
```

Jangan takut dengan empty space.

**Whitespace adalah bagian dari desain.**

---

# 7. Borders & Radius

Gunakan border tipis dan subtle.

```text
Border: 1px solid #E4E2DC
```

Radius:

```text
Small UI: 6px
Cards: 12px
Large media: 16px
```

Hindari:

```text
border-radius: 9999px
```

kecuali untuk pill/tag.

---

# 8. Navigation

Minimal.

```text
FAHRENDRA                         WORK
                                  ABOUT
                                  WRITING
                                  GITHUB ↗
```

Typography:

```text
Manrope
13–14px
Medium
```

Navbar tidak perlu besar.

Gunakan whitespace daripada background atau shadow.

---

# 9. Hero

Hero harus menjadi kombinasi **serif statement + sans-serif explanation**.

Contoh struktur:

```text
SOFTWARE ENGINEER

I build software
from idea to production.

Software engineer focused on mobile,
backend systems, AI, and products.

[ Explore work ]      GitHub ↗
```

`I build software...` menggunakan **Cormorant Garamond**.

Sisanya menggunakan **Manrope**.

---

# 10. Project Design

Project bukan card SaaS biasa.

Gunakan **editorial project layout**.

```text
01

TADAA
Daily Reset App

┌──────────────────────────────────────┐
│                                      │
│             PROJECT IMAGE            │
│                                      │
└──────────────────────────────────────┘

A different approach to personal
productivity.

Flutter · Riverpod · Drift

View project →
```

Setiap project memiliki:

```text
Number
Title
Category
Visual
Short description
Technology
Link
```

---

# 11. Image Treatment

Screenshot/project image harus terlihat seperti **editorial object**, bukan sekadar screenshot ditempel.

Gunakan:

* Large image
* Soft neutral background
* Subtle border
* Small radius
* Banyak surrounding whitespace

Hindari:

* Device mockup berlebihan
* Floating 3D phone
* Glow
* Neon shadow
* Excessive drop shadow

---

# 12. Section Titles

Section heading dapat menggunakan kombinasi:

```text
01 — SELECTED WORK
```

Metadata:

**Manrope**

Title:

**Cormorant Garamond**

Contoh:

```text
01
SELECTED WORK

Things I've built
and shipped.
```

Ini memberikan rasa editorial.

---

# 13. About Section

About harus terasa personal.

Gunakan layout dua kolom:

```text
ABOUT ME                    DESCRIPTION

                            I'm Fahrendra,
                            a software engineer
                            from Malang, Indonesia.

                            ...
```

Heading menggunakan serif besar.

Body menggunakan sans-serif.

---

# 14. Writing Section

Karena writing adalah bagian dari identity, tampilkan seperti editorial archive.

```text
WRITING

Building a What's New
System for Flutter Apps

Aug 2026
Flutter · Developer Tools

Read article →
```

Tidak perlu card besar.

Gunakan horizontal separators.

---

# 15. Experience

Gunakan timeline minimal.

```text
2024 — Present

Mobile Developer
Penawar Medical Supply

────────────────────────────────

2023 — 2024

Machine Learning / Software
...
```

Tidak perlu logo perusahaan besar-besar.

Fokus pada typography.

---

# 16. Interaction

Animation harus subtle.

### Hover

* Link underline
* Text sedikit berubah position
* Image scale: `1.02`
* Accent muncul

### Transition

```text
150–250ms
ease-out
```

Hindari:

* Scroll hijacking
* Parallax berlebihan
* Cursor effects
* Text scrambling
* Loading animation panjang
* Background particles

Website harus terasa **calm**.

---

# 17. Decorative Elements

Dekorasi sangat terbatas.

Boleh menggunakan:

```text
01
02
03
—
•
↗
```

atau garis tipis.

Contoh:

```text
──────────────────────
```

Accent orange dapat digunakan sebagai tiny detail.

---

# 18. Overall Mood

Keywords:

```text
Editorial
Minimal
Warm
Intellectual
Modern
Quiet
Technical
Personal
Premium
Human
```

Visual reference secara mental:

> **A software engineer who also reads, writes, designs, and builds products.**

Bukan:

> **A developer trying to prove how many technologies he knows.**

---

# 19. Design Rule

Jika sebuah elemen tidak membantu:

* hierarchy
* readability
* storytelling
* identity

**hapus.**

Website harus terlihat sederhana pada pandangan pertama, tetapi terasa sangat intentional ketika diperhatikan.

---

# 20. Design Personality

### 60% Editorial

Serif typography, whitespace, asymmetric composition.

### 25% Product

Clean UI, structured layout, screenshots, clear interactions.

### 15% Technical

Monospace snippets, metadata, technology labels, GitHub links.

Final feeling:

**"Thoughtful engineer who builds things."**
