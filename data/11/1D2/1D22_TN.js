// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D22 = [
  {
    "id": "1D222TN1",
    "question": "Cấp số cộng $(u_n)$ có số hạng đầu $u_1 =3$, công sai $d=-2$ thì số hạng thứ $5$ là",
    "options": [
      "$u_5 =-5$",
      "$u_5 =-7$",
      "$u_5 =8$",
      "$u_5 =1$"
    ],
    "answer": 0,
    "explain": "Do $(u_n)$ là cấp số cộng nên $u_n=u_1+(n-1)\\cdot d$.<br>  Khi đó $u_5 =u_1+(5-1)\\cdot (-2) =3+4\\cdot(-2)=-5$."
  },
  {
    "id": "1D222TN2",
    "question": "Dãy nào sau đây là cấp số cộng?",
    "options": [
      "$3$, $3$, $3$, $7$, $10$",
      "$2$, $-1$, $-4$, $-7$, $-10$",
      "$1$, $4$, $7$, $9$, $1$",
      "$1$, $3$, $5$, $7$, $11$"
    ],
    "answer": 1,
    "explain": "Ta có $2$, $-1$, $-4$, $-7$, $-10$ là dãy cấp số cộng với số hạng đầu $u_1=2$, công sai $d=-3$."
  },
  {
    "id": "1D222TN3",
    "question": "Cho cấp số cộng $(u_n)$ có công sai $d=11$. Khẳng định nào sau đây đúng?",
    "options": [
      "$u_n=u_{n+1}+11$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_{n+1}=u_n-11$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_{n+1}=u_n \\cdot 11$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_{n+1}=u_n+11$, $ \\forall n \\in \\mathbb{N}^{*}$"
    ],
    "answer": 3,
    "explain": "<br>- Xét $(u_n)$ với $u_n=u_{n+1}+11 \\Leftrightarrow u_{n+1}-u_n=-11 $.<br>  Do đó $(u_n)$ là cấp số cộng với công sai $d=-11$.<br>- Xét $(u_n)$ với $u_{n+1}=u_n-11 \\Leftrightarrow u_{n+1}-u_n=-11 $.<br>  Do đó $(u_n)$ là cấp số cộng với công sai $d=-11$.<br>- Xét $(u_n)$ với $u_{n+1}=u_n \\cdot 11$.<br>  Do đó $(u_n)$ là cấp số nhân với công bội $q=11$.<br>- Xét $(u_n)$ với $u_{n+1}=u_n+11 \\Leftrightarrow u_{n+1}-u_n=11 $.<br>  Do đó $(u_n)$ là cấp số cộng với công sai $d=11$."
  },
  {
    "id": "1D224TN4",
    "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1$, số hạng tổng quát $u_n$, tổng của $n$ số hạng đầu $S_n$. Khẳng định nào sau đây đúng?",
    "options": [
      "$S_n=\\dfrac{1}{2}\\left(u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$S_n=n\\left(u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$S_n=\\dfrac{n}{2}\\left(2u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$S_n=\\dfrac{n}{2}\\left(u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$"
    ],
    "answer": 3,
    "explain": "Ta có công thức tính tổng của $n$ số hạng đầu $S_n$ là  $S_n=\\dfrac{n}{2}\\left(u_1+u_n\\right) \\forall n \\in \\mathbb{N}^{*}$"
  },
  {
    "id": "1D222TN5",
    "question": "Cho $(u_n)$ là một cấp số cộng thỏa mãn $u_1 + u_3 = 8$ và $u_4 = 10$. Công sai của cấp số cộng đã cho bằng",
    "options": [
      "$2$",
      "$6$",
      "$4$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Ta có $u_1 + u_3 = 8 \\text{ và } u_4 = 10\\Leftrightarrow u_1 + u_1+2d = 8 \\text{ và } u_1+3d = 10\\Leftrightarrow2u_1+2d = 8 \\text{ và } u_1+3d = 10\\Leftrightarrow u_1=1 \\text{ và } d=3.$"
  },
  {
    "id": "1D222TN6",
    "question": "Cho một cấp số cộng có $u_1=1$ và $d=-3$. Hãy chọn kết quả <strong>đúng</strong>.",
    "options": [
      "Dạng khai triển: $1;-2;-5;-8;-11; \\ldots$",
      "Dạng khai triển: $-1;-2;-5;-8;-11; \\ldots$",
      "Dạng khai triển: $1;-2; 5;-8;-11; \\ldots$",
      "Dạng khai triển: $1;-2;-5;-8; 11; \\ldots$"
    ],
    "answer": 0,
    "explain": "Ta có $u_1=1$ và công sai $d=-3$.<br>  $u_2=u_1+d=1+(-3)=-2$.<br>  $u_3=u_2+d=-2+(-3)=-5$.<br>  $u_4=u_3+d=-5+(-3)=-8$.<br>  $u_5=u_4+d=-8+(-3)=-11$.<br>  Vậy dạng khai triển của cấp số cộng là $1;-2;-5;-8;-11; \\ldots$."
  },
  {
    "id": "1D222TN7",
    "question": "Cho dãy số $(u_n)$, biết $u_n=\\dfrac{2n+1}{n+2}$. Tìm số hạng $u_5$.",
    "options": [
      "$u_5=5$",
      "$u_5=\\dfrac{11}{7}$",
      "$u_5=\\dfrac{11}{3}$",
      "$u_5=\\dfrac{11}{10}$"
    ],
    "answer": 1,
    "explain": "Thay $n=5$ vào công thức của $u_n$, ta có<br>  $u_5=\\dfrac{2 \\cdot 5+1}{5+2}=\\dfrac{10+1}{7}=\\dfrac{11}{7}$."
  },
  {
    "id": "1D222TN8",
    "question": "Dãy số nào sau đây là một cấp số cộng?",
    "options": [
      "$-3 ;-1 ; 3 ; 5 ; 7 ; \\ldots$",
      "$\\dfrac{1}{3} ; \\dfrac{2}{3} ; 1 ; \\dfrac{4}{3} ; \\dfrac{5}{3} ; \\ldots$",
      "$1 ; 2 ; 4 ; 7 ; 11 ; \\ldots$",
      "$1 ; 3 ; 6 ; 10 ; 15 ; \\ldots$"
    ],
    "answer": 0,
    "explain": "Vì các số cách đều 2 đơn vị nên $-3 ;-1 ; 3 ; 5 ; 7 ; \\ldots$ là dãy cấp số cộng."
  },
  {
    "id": "1D222TN9",
    "question": "Cho cấp số cộng $(u_n)$ với $u_n=5-2n$. Tìm công sai của cấp số cộng đã cho.",
    "options": [
      "$d=3$",
      "$d=2$",
      "$d=1$",
      "$d=-2$"
    ],
    "answer": 3,
    "explain": "Ta có $u_{n+1}=5-2(n+1)=3 -2n$.<br>  Do $(u_n)$ là cấp số cộng nên công sai $d=u_{n+1}-u_n=(3-2n)-(5-2n)=-2$.<br>  Vậy công sai của cấp số cộng $(u_n)$ là $d=-2$."
  },
  {
    "id": "1D222TN10",
    "question": "[Dự án đề kiểm tra Toán 12 HKI NH24-25- Hector Tran]%[1-TN-DS-TL-SGD-BacNinh-GHKI-NH24-25]  Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 13$. Công sai của $(u_n)$ là",
    "options": [
      "$d = \\dfrac{13}{2}$",
      "$d = 11$",
      "$d = 15$",
      "$d = -11$"
    ],
    "answer": 1,
    "explain": "Công sai của cấp số cộng $d = u_2 - u_1 = 13 - 2 = 11$."
  },
  {
    "id": "1D222TN11",
    "question": "Cho cấp số cộng $(u_n)$ với số hạng đầu $u_1=9$, công sai $d=2$. Số hạng thứ hai của cấp số cộng đó là",
    "options": [
      "$\\dfrac{9}{2}$",
      "$11$",
      "$7$",
      "$18$"
    ],
    "answer": 1,
    "explain": "Ta có $u_2=u_1+d=9+2=11$."
  },
  {
    "id": "1D224TN12",
    "question": "Một rạp chiếu phim có 16 hàng ghế dành cho người xem. Hàng thứ nhất có 14 ghế, hàng thứ hai có 15 ghế, hàng thứ ba có 16 ghế, $\\ldots$ cứ như thế, số ghế ở hàng sau nhiều hơn số ghế ở hàng liền trước là 1 ghế. Trong một buổi chiếu phim nhà rạp đã bán được hết vé, với giá 110000 đồng mỗi vé, biết rằng số vé bán ra bằng số ghế dành cho người xem. Tổng số tiền bán vé bằng",
    "options": [
      "$344\\,000$ đồng",
      "$25\\,520\\,000$ đồng",
      "$37\\,840\\,000$ đồng",
      "$75\\,680\\,000$ đồng"
    ],
    "answer": 2,
    "explain": "Gọi $u_n$ là số ghế ở hàng thứ $n$.<br>   Khi đó, dãy số $(u_n)$ tạo thành cấp số cộng với $u_1 = 14$ và $d = 1$.<br>   Tổng số ghế có trong rạp hát là \\[S_{16}=\\dfrac{16\\cdot [2\\cdot 14+(16-1)\\cdot 1]}{2} = 344 \\text{ (ghế).}\\]  Tổng số tiền bán vé thu được là $344 \\cdot 110\\, 000 = 37\\,840\\,000 $ (đồng)."
  },
  {
    "id": "1D221TN13",
    "question": "Cho cấp số cộng $(u_n)$ có $u_1=-3$ và $d=\\dfrac{1}{2}$. Khẳng định nào sau đây đúng?",
    "options": [
      "$u_n=\\dfrac{1}{2} n-\\dfrac{5}{2}$",
      "$u_n=\\dfrac{1}{2} n-4$",
      "$u_n=-\\dfrac{1}{2}-\\dfrac{5}{2}$",
      "$u_n=\\dfrac{1}{2} n-\\dfrac{7}{2}$"
    ],
    "answer": 3,
    "explain": "Ta có $u_n=u_1+(n-1)d=-3+(n-1)\\cdot \\dfrac{1}{2}=\\dfrac{1}{2} n-\\dfrac{7}{2}$."
  },
  {
    "id": "1D222TN14",
    "question": "Cho cấp số cộng $\\left(u_n\\right)$ có $u_1=11$ và công sai $d=4$. Hãy tính $u_{99}$",
    "options": [
      "$401$",
      "$403$",
      "$402$",
      "$404$"
    ],
    "answer": 1,
    "explain": "Ta có: $u_{99}=u_1+98d=11+98.4=403$"
  },
  {
    "id": "1D222TN15",
    "question": "Cho cấp số cộng $(u_n)$ có $u_2=5$, $u_4=11$. Công sai của cấp số cộng đã cho bằng",
    "options": [
      "$6$",
      "$3$",
      "$9$",
      "$2$"
    ],
    "answer": 1,
    "explain": "Ta có $u_2=u_1+d=5 \\text{ và } u_4=u_1+3d=11\\Rightarrow 2d=11-5=6\\Leftrightarrow d=3$. <br>  Vậy công sai của cấp số cộng đã cho bằng $3$."
  },
  {
    "id": "1D222TN16",
    "question": "Cho cấp số cộng $(u_{n})$ có số hạng đầu $u_{1}$ và công sai $d$. Số hạng tổng quát của cấp số cộng là",
    "options": [
      "$u_n=u_1+(n+1)d$",
      "$u_n=u_1+nd$",
      "$u_n=u_{1}+(n-1)d$",
      "$u_n=u_1\\cdot (n-1)d$"
    ],
    "answer": 2,
    "explain": "Công thức số hạng tổng quát của cấp số cộng là $u_n=u_1+(n-1)d$."
  },
  {
    "id": "1D222TN17",
    "question": "Cho cập số cộng $\\left(u_n\\right)$ có $u_1 = 11$ và công sai $d=4$. Số hạng $u_{99}$ của cấp số cộng này là",
    "options": [
      "$403$",
      "$402$",
      "$303$",
      "$404$"
    ],
    "answer": 0,
    "explain": "Ta có $u_{99}=u_1+98\\cdot d=11+98\\cdot4=403$."
  },
  {
    "id": "1D224TN13",
    "question": "Cho cấp số cộng $(u_n)$ có $u_4 = -12$, $u_{14} = 18$. Tính tổng 16 số hạng đầu tiên của cấp số cộng này.",
    "options": [
      "$S_{16} = 26$",
      "$S_{16} = -25$",
      "$S_{16} = -24$",
      "$S_{16} = 24$"
    ],
    "answer": 3,
    "explain": "Gọi $u_1$ là số hạng đầu và $d$ là công sai của cấp số cộng. <br>  Theo giả thiết ta có hệ phương trình  $\\begin{cases} u_4 = -12 \\\\ u_{14} = 18 \\end{cases} \\Leftrightarrow \\begin{cases} u_1 + 3d = -12 \\\\ u_1 + 13d = 18 \\end{cases} \\Leftrightarrow \\begin{cases} d = 3 \\\\ u_1 = -21 \\end{cases}.$  Tổng của 16 số hạng đầu tiên là  $S_{16} = \\frac{16}{2} \\left[ 2u_1 + (16-1)d \\right] = 8 \\cdot \\left[ 2(-21) + 15 \\cdot 3 \\right] = 24.$"
  },
  {
    "id": "1D222TN18",
    "question": "Cho cấp số cộng $(u_n)$ với $u_1=2$ và $u_2=11$. Tìm công sai $d$ của cấp số cộng.",
    "options": [
      "$d=13$",
      "$d=\\dfrac{11}{2}$",
      "$d=-9$",
      "$d=9$"
    ],
    "answer": 3,
    "explain": "Ta có công sai của cấp số cộng là $d=u_2-u_1=11-2=9$."
  },
  {
    "id": "1D222TN19",
    "question": "Tìm giá trị của $x$ để ba số: $-x$; $12$; $2x-1$ lần lượt là ba số hạng liên tiếp của một cấp số cộng.",
    "options": [
      "$x=23$",
      "$x=25$",
      "$x=12$",
      "$x=24$"
    ],
    "answer": 1,
    "explain": "Ba số $-x$; $12$; $2x-1$ lần lượt là ba số hạng liên tiếp của một cấp số cộng khi và chỉ khi:  $(-x)+(2x-1) = 2\\cdot 12$<br>$\\Leftrightarrow x-1 = 24$<br>$\\Leftrightarrow x = 25.$"
  }
];
