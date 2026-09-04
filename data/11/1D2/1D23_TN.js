// =========================================================================
// KHỐI DỮ LIỆU: 1D23 - Trắc nghiệm (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.tracNghiem1D23 = [
  {
    "id": "1D232TN1",
    "question": "Trong các dãy số $\\left(u_n\\right)$ có số hạng tổng quát sau, dãy số nào là cấp số nhân?",
    "options": [
      "$u_n = n^2 - \\dfrac{1}{2}$",
      "$u_n = \\dfrac{1}{2^n} - 1$",
      "$u_n = n^2 + \\dfrac{1}{2}$",
      "$u_n = \\dfrac{1}{2^{n+1}}$"
    ],
    "answer": 3,
    "explain": "Xét $u_n = \\dfrac{1}{2^{n+1}}$. Với mọi $n\\in \\mathbb{N}^*$, $\\dfrac{u_{n+1}}{u_{n}}=\\dfrac{1}{2^{n+2}}: \\dfrac{1}{2^{n+1}}=\\dfrac{2^{n+1}}{2^{n+2}}=\\dfrac{1}{2}$.<br>  Nên $u_n = \\dfrac{1}{2^{n+1}}$ là cấp số nhân với công bội $q=\\dfrac{1}{2}$."
  },
  {
    "id": "1D232TN2",
    "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1=-3$, công bội $q=2$. Khẳng định nào sau đây đúng?",
    "options": [
      "$u_2=-1$",
      "$u_2=-5$",
      "$u_2=-6$",
      "$u_2=-\\dfrac{3}{2}$"
    ],
    "answer": 2,
    "explain": "Ta có $u_2=u_1 \\cdot q=-3 \\cdot 2=-6$."
  },
  {
    "id": "1D234TN3",
    "question": "Tổng $S=1-\\dfrac{1}{3}+\\dfrac{1}{3^2}-\\dfrac{1}{3^3}+\\cdots+\\left(-\\dfrac{1}{3}\\right)^n+\\cdots$ bằng",
    "options": [
      "$\\dfrac{2}{3}$",
      "$\\dfrac{3}{2}$",
      "$\\dfrac{3}{4}$",
      "$\\dfrac{4}{3}$"
    ],
    "answer": 2,
    "explain": "Ta thấy $S=1-\\dfrac{1}{3}+\\dfrac{1}{3^2}-\\dfrac{1}{3^3}+\\cdots+\\left(-\\dfrac{1}{3}\\right)^n+\\cdots$ là tổng của một cấp số nhân lùi vô hạn với $u_1=1$ và công bội $q=-\\dfrac{1}{3}$.<br>  Vậy $S=\\dfrac{u_1}{1-q}=\\dfrac{1}{1-\\left(-\\dfrac{1}{3}\\right)}=\\dfrac{1}{1+\\dfrac{1}{3}}=\\dfrac{1}{\\dfrac{4}{3}}=\\dfrac{3}{4}$."
  },
  {
    "id": "1D232TN4",
    "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 2$ và công bội $q = \\dfrac{3}{2}$. Mệnh đề nào sau đây đúng?",
    "options": [
      "$u_2 = \\dfrac{7}{2}$",
      "$u_2 = 3$",
      "$u_2 = \\dfrac{9}{2}$",
      "$u_2 = 4$"
    ],
    "answer": 1,
    "explain": "Ta có $u_2=u_1q=2\\cdot \\dfrac{3}{2}=3$."
  },
  {
    "id": "1D234TN5",
    "question": "Cho cấp số nhân $(u_n)$ có $u_1=1, q=4$. Tổng $8$ số hạng đầu của cấp số nhân $(u_n)$ là",
    "options": [
      "$S_8=21\\,485$",
      "$S_8=5\\,641$",
      "$S_8=21\\,845$",
      "$S_8=5\\,461$"
    ],
    "answer": 2,
    "explain": "Áp dụng công thức tổng $n$ số hạng đầu của cấp số nhân: $S_n=\\dfrac{u_1(q^n-1)}{q-1}$.<br>  Với $n=8$, $u_1=1$, $q=4$, ta có<br>  $S_8=\\dfrac{1 \\cdot(4^8-1)}{4-1}=\\dfrac{4^8-1}{3}$.<br>  Tính $4^8=(4^4)^2=(256)^2=65\\,536$.<br>  $S_8=\\dfrac{65\\,536-1}{3}=\\dfrac{65\\,535}{3}=21\\,845$."
  },
  {
    "id": "1D232TN6",
    "question": "Cho cấp số nhân $\\left(u_{n}\\right)$ với $u_{1}=2$ và $u_{4}=54$. Công bội của cấp số nhân đã cho bằng",
    "options": [
      "$3$",
      "$-3$",
      "$\\dfrac{1}{3}$",
      "$2$"
    ],
    "answer": 0,
    "explain": "Ta có $u_4=u_1\\cdot q^3 \\Leftrightarrow q^3=\\dfrac{u_4}{u_1}=\\dfrac{54}{2}=27\\Leftrightarrow q=3$."
  },
  {
    "id": "1D232TN7",
    "question": "Trong các dãy số $\\left(u_n\\right)$ sau đây, dãy số nào là cấp số nhân?",
    "options": [
      "$u_n=5 n$",
      "$u_n=3^n$",
      "$u_n=\\dfrac{1}{n+1}$",
      "$u_n=3^n+2$"
    ],
    "answer": 1,
    "explain": "Xét dãy số $(u_n)$ với $u_n=3^n$, ta có $\\dfrac{u_{n+1}}{u_n}=\\dfrac{3^{n+1}}{3^{n}}=3$ nên $u_n=3^n$ là cấp số nhân."
  },
  {
    "id": "1D232TN8",
    "question": "Trong các dãy số sau, dãy số nào là cấp số nhân?",
    "options": [
      "$-1;-5;-25;125$",
      "$1;3;12;60$",
      "$-1;4;16;64$",
      "$1;2;4;8$"
    ],
    "answer": 3,
    "explain": "Dãy $1;2;4;8$ là cấp số nhân với $u_1=1$, công bội $q=2$."
  },
  {
    "id": "1D232TN9",
    "question": "Trong các dãy số sau, dãy số nào <strong>không</strong> phải là một cấp số nhân?",
    "options": [
      "$a$; $a^3$; $a^5$; $a^7$; $\\cdots$ ($a \\ne 0$)",
      "$1^2$; $2^2$; $3^2$; $4^2$; $\\cdots$",
      "$2$; $4$; $8$; $16$; $\\cdots$",
      "$1$; $-1$; $1$; $-1$; $\\cdots$"
    ],
    "answer": 1,
    "explain": "Nhận thấy dãy số $1^2$; $2^2$; $3^2$; $4^2$; $\\cdots$ có $\\dfrac{2^2}{1^2} \\ne \\dfrac{3^2}{2^2}$.<br>  Suy ra dãy số $1^2$; $2^2$; $3^2$; $4^2$; $\\cdots$ không là cấp số nhân."
  },
  {
    "id": "1D232TN10",
    "question": "Cho cấp số nhân $(u_n)$ có công bội $q \\neq 1$. Khẳng định nào sau đây <strong>sai</strong>?",
    "options": [
      "$u_{n+1}=u_1\\cdot q^n$",
      "$S_n=\\dfrac{u_1\\left(1-q^n\\right)}{1-q}$",
      "$u_{n+1}=u_n \\cdot q$",
      "$u_{n+1}=\\sqrt{u_n \\cdot u_{n+2}}$"
    ],
    "answer": 3,
    "explain": "Cho cấp số nhân $(u_n)$ có công bội $q \\neq 1$. Khi đó $\\left|u_{n+1}\\right|=\\sqrt{u_n \\cdot u_{n+2}}$."
  },
  {
    "id": "1D231TN11",
    "question": "Cho cấp số nhân $(u_n)$ có $u_4=81$ và $u_5=-9$. Mệnh đề nào sau đây đúng?",
    "options": [
      "$q=\\dfrac{1}{9}$",
      "$q=9$",
      "$q=-\\dfrac{1}{9}$",
      "$q=-9$"
    ],
    "answer": 2,
    "explain": "Ta có $u_4=81 \\text{ và } u_5=-9$ nên $q=\\dfrac{u_5}{u_4}=\\dfrac{-9}{81}=-\\dfrac{1}{9}$."
  }
];
