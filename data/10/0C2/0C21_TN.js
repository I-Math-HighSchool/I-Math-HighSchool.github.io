// =========================================================================
// KHỐI DỮ LIỆU: 0C21 - Trắc nghiệm
// Nguồn: Lý thuyết chuẩn "Phương pháp quy nạp toán học" (hai bước: kiểm
// tra mệnh đề đúng tại giá trị bắt đầu; giả thiết quy nạp và chứng minh
// mệnh đề đúng ở bước kế tiếp) minh họa qua các đẳng thức tổng quen thuộc
// ($1+2+\cdots+n$, $1+3+\cdots+(2n-1)$, $1^2+2^2+\cdots+n^2$) và tính
// chia hết ($n^3-n$ chia hết cho $3$) - chuyên đề Toán 10, GV tự soạn câu
// TN/ĐS/TL dựa trên lý thuyết chuẩn, đã tự kiểm tra lại toàn bộ phép tính
// trước khi đưa vào.
// =========================================================================
window.tracNghiem0C21 = [
  {
    "id": "0C211TN1",
    "question": "Để chứng minh mệnh đề $P(n)$ đúng với mọi số nguyên dương $n$ bằng phương pháp quy nạp toán học, ta thực hiện các bước nào?",
    "options": [
      "Chứng minh $P(1)$ đúng; sau đó giả sử $P(k)$ đúng với $k\\ge 1$ và chứng minh $P(k+1)$ đúng",
      "Chỉ cần chứng minh $P(1)$ đúng",
      "Chỉ cần chứng minh $P(k+1)$ đúng với một giá trị $k$ nào đó",
      "Chứng minh $P(n)$ đúng với $n=1,2,3$ là đủ"
    ],
    "answer": 0,
    "explain": "Phương pháp quy nạp toán học gồm hai bước: (1) bước cơ sở - kiểm tra mệnh đề đúng tại giá trị bắt đầu (thường là $n=1$); (2) bước quy nạp - giả sử mệnh đề đúng với $n=k$ (giả thiết quy nạp) và chứng minh nó cũng đúng với $n=k+1$."
  },
  {
    "id": "0C211TN2",
    "question": "Xét mệnh đề $P(n)$: \"$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$\". Kiểm tra bước cơ sở với $n=1$ ta được",
    "options": [
      "$1=\\dfrac{1\\cdot 2}{2}=1$, đúng",
      "$1=\\dfrac{1\\cdot 2}{2}=2$, sai",
      "Không kiểm tra được",
      "$P(1)$ sai vì vế trái bằng $0$"
    ],
    "answer": 0,
    "explain": "Với $n=1$, vế trái là $1$, vế phải là $\\dfrac{1\\cdot 2}{2}=1$. Hai vế bằng nhau nên $P(1)$ đúng."
  },
  {
    "id": "0C211TN3",
    "question": "Giả sử $P(k)$ đúng: $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$. Để hoàn thành bước quy nạp, ta cần chứng minh",
    "options": [
      "$1+2+\\cdots+k+(k+1)=\\dfrac{(k+1)(k+2)}{2}$",
      "$1+2+\\cdots+k=\\dfrac{(k+1)(k+2)}{2}$",
      "$k+1=\\dfrac{(k+1)(k+2)}{2}$",
      "$1+2+\\cdots+(k+1)=\\dfrac{k(k+1)}{2}$"
    ],
    "answer": 0,
    "explain": "Bước quy nạp yêu cầu chứng minh $P(k+1)$ đúng, tức là $1+2+\\cdots+k+(k+1)=\\dfrac{(k+1)((k+1)+1)}{2}=\\dfrac{(k+1)(k+2)}{2}$."
  },
  {
    "id": "0C211TN4",
    "question": "Từ giả thiết quy nạp $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$, ta có $1+2+\\cdots+k+(k+1)=\\dfrac{k(k+1)}{2}+(k+1)$. Rút gọn biểu thức này ta được",
    "options": [
      "$\\dfrac{(k+1)(k+2)}{2}$",
      "$\\dfrac{k(k+2)}{2}$",
      "$\\dfrac{(k+1)^2}{2}$",
      "$\\dfrac{k(k+1)}{2}+1$"
    ],
    "answer": 0,
    "explain": "$\\dfrac{k(k+1)}{2}+(k+1)=(k+1)\\left(\\dfrac{k}{2}+1\\right)=(k+1)\\cdot\\dfrac{k+2}{2}=\\dfrac{(k+1)(k+2)}{2}$."
  },
  {
    "id": "0C211TN5",
    "question": "Xét mệnh đề $Q(n)$: \"$n^3-n$ chia hết cho $3$\" với $n$ nguyên dương. Tại $n=2$ ta có",
    "options": [
      "$2^3-2=6$, chia hết cho $3$",
      "$2^3-2=6$, không chia hết cho $3$",
      "$2^3-2=8$",
      "Không xác định được"
    ],
    "answer": 0,
    "explain": "$2^3-2=8-2=6=3\\cdot 2$, chia hết cho $3$."
  },
  {
    "id": "0C211TN6",
    "question": "Với mệnh đề $1+3+5+\\cdots+(2n-1)=n^2$, tổng khi $n=5$ bằng",
    "options": [
      "$25$",
      "$15$",
      "$20$",
      "$30$"
    ],
    "answer": 0,
    "explain": "$1+3+5+7+9=25=5^2$."
  },
  {
    "id": "0C211TN7",
    "question": "Giả sử $1+3+\\cdots+(2k-1)=k^2$ đúng. Để chứng minh $1+3+\\cdots+(2k-1)+(2k+1)=(k+1)^2$, ta biến đổi vế trái thành $k^2+(2k+1)$. Biểu thức này bằng",
    "options": [
      "$(k+1)^2$",
      "$k^2+2k$",
      "$(k+2)^2$",
      "$k^2+1$"
    ],
    "answer": 0,
    "explain": "$k^2+2k+1=(k+1)^2$."
  },
  {
    "id": "0C211TN8",
    "question": "Mệnh đề $2^n>n$ đúng với mọi số nguyên dương $n$. Kiểm tra bước cơ sở tại $n=1$ ta được",
    "options": [
      "$2^1=2>1$, đúng",
      "$2^1=2<1$, sai",
      "$2^1=1$",
      "Không kiểm tra được"
    ],
    "answer": 0,
    "explain": "$2^1=2$ và $2>1$ nên mệnh đề đúng tại $n=1$."
  },
  {
    "id": "0C211TN9",
    "question": "Cho $P(n)$: \"$1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$\". Tại $n=3$, giá trị của tổng và của công thức lần lượt là",
    "options": [
      "$1^2+2^2+3^2=14$ và $\\dfrac{3\\cdot 4\\cdot 7}{6}=14$, khớp nhau",
      "$1^2+2^2+3^2=9$",
      "$\\dfrac{3\\cdot 4\\cdot 7}{6}=12$",
      "Công thức cho kết quả khác với tổng trực tiếp"
    ],
    "answer": 0,
    "explain": "Tổng trực tiếp: $1+4+9=14$. Theo công thức: $\\dfrac{3\\cdot 4\\cdot 7}{6}=\\dfrac{84}{6}=14$. Hai kết quả khớp nhau."
  },
  {
    "id": "0C211TN10",
    "question": "Phương pháp quy nạp toán học thường được dùng để chứng minh",
    "options": [
      "Một mệnh đề phụ thuộc số nguyên dương $n$ đúng với mọi $n$ kể từ một giá trị bắt đầu",
      "Một phương trình vô nghiệm",
      "Hai tam giác bằng nhau",
      "Một số là số nguyên tố"
    ],
    "answer": 0,
    "explain": "Quy nạp toán học là phương pháp chứng minh một mệnh đề $P(n)$ đúng với mọi số nguyên $n$ kể từ một giá trị bắt đầu cho trước (thường là $n=1$ hoặc $n=n_0$)."
  }
];
