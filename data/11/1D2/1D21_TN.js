// =========================================================================
// KHỐI DỮ LIỆU: 1D21 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì I thật từ các trường THPT (thư mục LocID/BANK-25-26),
// giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D21 = [
  {
    "id": "1D212TN1",
    "question": "Cho dãy số $\\left(u_n\\right)$ biết $u_n = \\dfrac{2n^2 - 1}{n^2 + 2}$. Số hạng thứ 10 của dãy số là?",
    "options": [
      "$u_{10} = \\dfrac{19}{2}$",
      "$u_{10} = \\dfrac{33}{34}$",
      "$u_{10} = \\dfrac{199}{102}$",
      "$u_{10} = \\dfrac{3}{4}$"
    ],
    "answer": 2,
    "explain": "Để tìm số hạng thứ 10, ta thay $n = 10$ vào công thức của dãy số  $u_{10} = \\dfrac{2(10)^2 - 1}{10^2 + 2} = \\dfrac{2(100) - 1}{100 + 2} = \\dfrac{200 - 1}{102} = \\dfrac{199}{102}.$"
  },
  {
    "id": "1D214TN2",
    "question": "Trong các dãy số sau đây số nào là dãy số giảm?",
    "options": [
      "$-5$, $-4$, $-3$, $-2$, $-1$",
      "$0$, $-1$, $-3$, $-5$, $-7$",
      "$0$, $3$, $12$, $16$, $19$",
      "$24$, $15$, $14$, $16$, $19$"
    ],
    "answer": 1,
    "explain": "Ta có $0$, $-1$, $-3$, $-5$, $-7$ là dãy số giảm."
  },
  {
    "id": "1D214TN3",
    "question": "Dãy số $(u_n)$ có số hạng tổng quát là một trong bốn phương án A, B, C, D. Dãy số nào là dãy số giảm?",
    "options": [
      "$u_n=2n$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_n=1-3n$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_n=(-1)^n$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_n=2008$, $ \\forall n \\in \\mathbb{N}^{*}$"
    ],
    "answer": 1,
    "explain": "<br>- Xét $(u_n)$ với $u_n=2n$ có $u_{n+1}=2(n+1)$, suy ra $u_{n+1}-u_n=2&gt;0$.<br>  Do đó $u_{n+1}&gt;u_n$ nên $(u_n)$ là dãy số tăng.<br>- Xét $(u_n)$ với $u_n=1-3n$ có $u_{n+1}=1-3(n+1)=-3n-2$, suy ra $u_{n+1}-u_n=-3&lt;0$.<br>  Do đó $u_{n+1}&lt;u_n$ nên $(u_n)$ là dãy số giảm.<br>- Xét $(u_n)$ với $u_n=(-1)^n$ có<br>  Nếu $n$ là số chẵn $\\Rightarrow u_n=1&gt;0$<br>  Nếu $n$ là số lẻ $\\Rightarrow u_n=-1&lt;0$<br>  $\\Rightarrow u_n$ không tăng không giảm.<br>- Xét $(u_n)$ với $u_n=2\\,008$ là dãy không tăng không giảm."
  },
  {
    "id": "1D212TN4",
    "question": "Cho dãy số $(u_n)$, biết $u_n = \\dfrac{n}{2^n}$. Chọn đáp án đúng.",
    "options": [
      "$u_4 = \\dfrac{1}{4}$",
      "$u_5 = \\dfrac{1}{16}$",
      "$u_5 = \\dfrac{1}{32}$",
      "$u_3 = \\dfrac{1}{8}$"
    ],
    "answer": 0,
    "explain": "Ta thấy $u_4 =\\dfrac{4}{2^4}=\\dfrac{1}{4}$."
  },
  {
    "id": "1D212TN5",
    "question": "Cho dãy số $(u_n)$ với $u_1=5 \\text{ và } u_{n+1}=u_n+n$. Tìm số hạng thứ $4$ của dãy số đã cho.",
    "options": [
      "$12$",
      "$11$",
      "$16$",
      "$15$"
    ],
    "answer": 1,
    "explain": "Ta có<br>  $u_1=5$.<br>  $u_2=u_1+1=5+1=6$.<br>  $u_3=u_2+2=6+2=8$.<br>  $u_4=u_3+3=8+3=11$.<br>  Vậy số hạng thứ $4$ của dãy số là $u_4=11$."
  },
  {
    "id": "1D212TN6",
    "question": "Cho dãy số ($u_{n}$), biết $u_{n}=-\\dfrac{n}{n+1}$. Năm số hạng đầu tiên của dãy số đó lần lượt là",
    "options": [
      "$-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$; $-\\dfrac{6}{7}$",
      "$-\\dfrac{1}{2}$; $-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$",
      "$\\dfrac{1}{2}$; $\\dfrac{2}{3}$; $\\dfrac{3}{4}$; $\\dfrac{4}{5}$; $\\dfrac{5}{6}$",
      "$\\dfrac{2}{3}$; $\\dfrac{3}{4}$; $\\dfrac{4}{5}$; $\\dfrac{5}{6}$; $\\dfrac{6}{7}$"
    ],
    "answer": 1,
    "explain": "Dãy ($u_{n}$) có năm số hạng đầu là $-\\dfrac{1}{2}$; $-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$."
  },
  {
    "id": "1D212TN7",
    "question": "Cho dãy số $(u_n)$ có $u_n=-n^2+n+1$. Số $-19$ là số hạng thứ mấy của dãy $(u_n)$?",
    "options": [
      "$5$",
      "$6$",
      "$7$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Do $-19$ là một số hạng của dãy số $(u_n)$ nên tồn tại số nguyên dương $k$ sao cho $u_k=-19$, suy ra<br>  $-k^2+k+1=-19$<br>$\\Leftrightarrow -k^2+k+20=0$<br>$\\Leftrightarrow k=5 \\quad\\text{(nhận)} \\text{ hoặc } k =-4. \\quad\\text{(loại)}$  Vậy $-19$ là số hạng thứ $5$ của dãy số $(u_n)$."
  },
  {
    "id": "1D212TN8",
    "question": "Cho dãy số $(u_n)$, biết $u_n=2^n$. Tìm số hạng $u_{n+1}$.",
    "options": [
      "$u_{n+1}=2^n+2$",
      "$u_{n+1}=2^n+1$",
      "$u_{n+1}=2^n \\cdot 2$",
      "$u_{n+1}=2(n+1)$"
    ],
    "answer": 2,
    "explain": "Ta có $u_{n+1}=2^{n+1}=2^n \\cdot 2$."
  },
  {
    "id": "1D214TN9",
    "question": "Cho dãy số $(u_n)$, biết $u_n=\\dfrac{3n-1}{3n+1}$. Dãy số $(u_n)$ bị chặn trên bởi số nào dưới đây?",
    "options": [
      "$\\dfrac{1}{2}$",
      "$0$",
      "$1$",
      "$\\dfrac{1}{3}$"
    ],
    "answer": 2,
    "explain": "Ta có $\\dfrac{3n-1}{3n+1}=\\dfrac{3n+1 -2}{3n +1}=1-\\dfrac{2}{3n+1}$.<br>  Với mọi $n \\in \\mathbb{N}^*$ ta có $3n+1 &gt;0$, suy ra $\\dfrac{2}{3n+1}&gt;0 \\Leftrightarrow -\\dfrac{2}{3n+1} &lt; 0 \\Leftrightarrow 1-\\dfrac{2}{3n+1} &lt; 1$.<br>  Suy ra $u_n &lt; 1$ với mọi $n \\in \\mathbb{N}^*$.<br>  Vậy dãy số $(u_n)$ bị chặn trên bởi $1$."
  },
  {
    "id": "1D211TN10",
    "question": "[Dự án đề kiểm tra Toán 12 HKI NH24-25- Hector Tran]%[1-TN-DS-TL-SGD-BacNinh-GHKI-NH24-25]  Cho dãy số $(u_n)$ có $u_1 = 3$ và $u_{n+1} = 2 - u_n$, $\\forall n \\in \\mathbb{N}^*$. Khẳng định nào sau đây <strong>đúng</strong>?",
    "options": [
      "$u_2 = 5$",
      "$u_2 = -6$",
      "$u_2 = 1$",
      "$u_2 = -1$"
    ],
    "answer": 3,
    "explain": "Ta có $u_2 = 2 - u_1=2 - 3 = -1$."
  },
  {
    "id": "1D212TN11",
    "question": "Cho dãy số $(u_n)$ với $u_n=\\dfrac{n+2}{3n+3}$. Số hạng thứ $5$ của dãy số đó bằng",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{4}{9}$",
      "$\\dfrac{7}{18}$",
      "$5$"
    ],
    "answer": 2,
    "explain": "Ta có $u_5= \\dfrac{5+2}{3\\cdot 5 +3}= \\dfrac{7}{18}$."
  },
  {
    "id": "1D214TN12",
    "question": "Trong các dãy số sau, dãy số nào là dãy số tăng?",
    "options": [
      "$1; 1; 1; 1; 1; 1; \\ldots$",
      "$1;-\\dfrac{1}{2}; \\dfrac{1}{4};-\\dfrac{1}{8}; \\dfrac{1}{16}; \\ldots$",
      "$1; 3; 5; 7; 9; \\ldots$",
      "$1; \\dfrac{1}{2}; \\dfrac{1}{4}; \\dfrac{1}{8}; \\dfrac{1}{16}; \\ldots$"
    ],
    "answer": 2,
    "explain": "Ta có  <br>- $1; 1; 1; 1; 1; 1; \\ldots$ là dãy số không đổi.<br>- $1;-\\dfrac{1}{2}; \\dfrac{1}{4};-\\dfrac{1}{8}; \\dfrac{1}{16}; \\ldots$ là dãy số không tăng không giảm.<br>- $1; 3; 5; 7; 9; \\ldots$ là dãy số tăng.<br>- $1; \\dfrac{1}{2}; \\dfrac{1}{4}; \\dfrac{1}{8}; \\dfrac{1}{16}; \\ldots$ là dãy số giảm."
  },
  {
    "id": "1D212TN13",
    "question": "Cho dãy số có các số hạng đầu là $-2$; $0$; $2$; $4$; $6$; $\\ldots$. Số hạng tổng quát của dãy số này là công thức nào dưới đây?",
    "options": [
      "$u_n=-2n$",
      "$u_n=2n-4$",
      "$u_n=-2(n+1)$",
      "$u_n=n-2$"
    ],
    "answer": 1,
    "explain": "Cho dãy số có các số hạng đầu là $-2$; $0$; $2$; $4$; $6$; $\\ldots$.<br>  Số hạng tổng quát của dãy số này là công thức $u_n=2n-4$."
  },
  {
    "id": "1D212TN14",
    "question": "Cho cấp số nhân $\\left(u_n\\right)$ có số hạng đầu $u_1=3$ và công bội $q=2$. Số hạng thứ năm của cấp số nhân là",
    "options": [
      "$u_5=48$",
      "$u_5=11$",
      "$u_5=96$",
      "$u_5=162$"
    ],
    "answer": 0,
    "explain": "Ta có: $u_5=u_1.q^{4}=3.2^{4}=48$"
  },
  {
    "id": "1D212TN15",
    "question": "Trong các dãy số $\\left(u_n\\right), n \\in \\mathbb{N}^*$ sau đây, dãy số nào là một cấp số nhân?",
    "options": [
      "$2,4,-8,16,-32,64$",
      "$-2,4,-8,16,-32,64$",
      "$-2,4,8,16,-32,64$",
      "$2,4,8,16,-32,64$"
    ],
    "answer": 1,
    "explain": "Dễ thấy dãy số $-2,4,-8,16,-32,64$ là cấp số nhân có công bội $q=-2$"
  },
  {
    "id": "1D212TN16",
    "question": "Cho dãy số $(u_n)$, biết $u_n=\\dfrac{-n}{n+1}$. Năm số hạng đầu tiên của dãy số đó lần lượt là những số nào dưới đây?",
    "options": [
      "$\\dfrac{1}{2}$; $\\dfrac{2}{3}$; $\\dfrac{3}{4}$; $\\dfrac{4}{5}$; $\\dfrac{5}{6}$",
      "$\\dfrac{2}{3}$; $\\dfrac{3}{4}$; $\\dfrac{4}{5}$; $\\dfrac{5}{6}$; $\\dfrac{6}{7}$",
      "$-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$; $-\\dfrac{6}{7}$",
      "$-\\dfrac{1}{2}$; $-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$"
    ],
    "answer": 3,
    "explain": "Ta có $u_1=-\\dfrac{1}{2}$; $u_2=-\\dfrac{2}{3}$; $u_3=-\\dfrac{3}{4}$; $u_4=-\\dfrac{4}{5}$; $u_5=-\\dfrac{5}{6}$."
  }
];
