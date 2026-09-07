// =========================================================================
// KHỐI DỮ LIỆU: 0H92 - Trắc nghiệm
// Nguồn: Lý thuyết chuẩn "Biểu thức tọa độ của các phép toán vectơ" (tổng,
// hiệu, tích với một số của hai vectơ theo tọa độ; tọa độ vectơ AB qua tọa
// độ hai điểm; tọa độ trung điểm đoạn thẳng, trọng tâm tam giác; điều kiện
// hai vectơ cùng phương theo tọa độ) - chương trình Toán 10, GV tự soạn
// câu TN/TL dựa trên lý thuyết chuẩn, đã tự kiểm tra lại toàn bộ kết quả
// bằng tính toán trực tiếp (đối chiếu bằng numpy/sympy) trước khi đưa vào.
// =========================================================================
window.tracNghiem0H92 = [
  {
    "id": "0H921TN1",
    "question": "Trong mặt phẳng tọa độ, cho $\\vec{u}=(3;-2)$ và $\\vec{v}=(-1;4)$. Tọa độ của $\\vec{u}+\\vec{v}$ là",
    "options": [
      "$(2;2)$",
      "$(4;-6)$",
      "$(-3;-8)$",
      "$(2;-6)$"
    ],
    "answer": 0,
    "explain": "$\\vec u+\\vec v=(3+(-1);\\,-2+4)=(2;2)$."
  },
  {
    "id": "0H921TN2",
    "question": "Cho $\\vec{u}=(2;5)$ và $\\vec{v}=(-3;1)$. Tọa độ của $\\vec{u}-2\\vec{v}$ là",
    "options": [
      "$(8;3)$",
      "$(-4;3)$",
      "$(8;7)$",
      "$(-4;7)$"
    ],
    "answer": 0,
    "explain": "$\\vec u-2\\vec v=(2-2\\cdot(-3);\\,5-2\\cdot 1)=(2+6;\\,5-2)=(8;3)$."
  },
  {
    "id": "0H921TN3",
    "question": "Trong mặt phẳng tọa độ, cho $A(1;2)$ và $B(4;6)$. Tọa độ của vectơ $\\vec{AB}$ là",
    "options": [
      "$(3;4)$",
      "$(5;8)$",
      "$(-3;-4)$",
      "$(3;-4)$"
    ],
    "answer": 0,
    "explain": "$\\vec{AB}=(x_B-x_A;\\,y_B-y_A)=(4-1;\\,6-2)=(3;4)$."
  },
  {
    "id": "0H921TN4",
    "question": "Cho $A(-2;3)$ và $B(4;-1)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là",
    "options": [
      "$(1;1)$",
      "$(2;2)$",
      "$(-1;-1)$",
      "$(3;-1)$"
    ],
    "answer": 0,
    "explain": "$I=\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)=\\left(\\dfrac{-2+4}{2};\\dfrac{3+(-1)}{2}\\right)=(1;1)$."
  },
  {
    "id": "0H921TN5",
    "question": "Cho tam giác $ABC$ với $A(0;0)$, $B(6;0)$, $C(0;6)$. Tọa độ trọng tâm $G$ của tam giác là",
    "options": [
      "$(2;2)$",
      "$(3;3)$",
      "$(6;6)$",
      "$(2;3)$"
    ],
    "answer": 0,
    "explain": "$G=\\left(\\dfrac{x_A+x_B+x_C}{3};\\dfrac{y_A+y_B+y_C}{3}\\right)=\\left(\\dfrac{0+6+0}{3};\\dfrac{0+0+6}{3}\\right)=(2;2)$."
  },
  {
    "id": "0H921TN6",
    "question": "Cho $\\vec{u}=(2;3)$ và $\\vec{v}=(4;6)$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\vec u$ và $\\vec v$ cùng phương",
      "$\\vec u$ và $\\vec v$ không cùng phương",
      "$\\vec u$ và $\\vec v$ vuông góc với nhau",
      "$\\vec u=\\vec v$"
    ],
    "answer": 0,
    "explain": "Hai vectơ $\\vec u=(x_1;y_1),\\,\\vec v=(x_2;y_2)$ cùng phương khi $x_1y_2-x_2y_1=0$. Ta có $2\\cdot 6-4\\cdot 3=12-12=0$ nên $\\vec u$ và $\\vec v$ cùng phương (thực chất $\\vec v=2\\vec u$). Ngoài ra $\\vec u\\cdot\\vec v=2\\cdot 4+3\\cdot 6=26\\ne 0$ nên không vuông góc, và $\\vec u\\ne\\vec v$ (khác tọa độ)."
  },
  {
    "id": "0H921TN7",
    "question": "Cho $\\vec{a}=(1;2)$, $\\vec{b}=(3;-1)$ và $\\vec{c}=(5;3)$. Biết $\\vec c=m\\vec a+n\\vec b$ với $m,n$ là các số thực. Khi đó $m+n$ bằng",
    "options": [
      "$3$",
      "$1$",
      "$5$",
      "$-1$"
    ],
    "answer": 0,
    "explain": "Ta có hệ $\\begin{cases}m+3n=5\\\\2m-n=3\\end{cases}$. Giải hệ được $m=2,\\,n=1$ (thử lại: $2(1;2)+(3;-1)=(2;4)+(3;-1)=(5;3)$, đúng). Vậy $m+n=3$."
  },
  {
    "id": "0H921TN8",
    "question": "Tìm $x$ để hai vectơ $\\vec{u}=(2x;3)$ và $\\vec{v}=(4;6)$ cùng phương.",
    "options": [
      "$x=1$",
      "$x=2$",
      "$x=-1$",
      "$x=0$"
    ],
    "answer": 0,
    "explain": "$\\vec u,\\vec v$ cùng phương $\\Leftrightarrow 2x\\cdot 6-4\\cdot 3=0\\Leftrightarrow 12x-12=0\\Leftrightarrow x=1$."
  },
  {
    "id": "0H921TN9",
    "question": "Cho tam giác $ABC$ với $A(1;2)$, $B(4;2)$, $C(1;8)$. Tọa độ trọng tâm $G$ của tam giác là",
    "options": [
      "$(2;4)$",
      "$(6;12)$",
      "$(2;12)$",
      "$(6;4)$"
    ],
    "answer": 0,
    "explain": "$G=\\left(\\dfrac{1+4+1}{3};\\dfrac{2+2+8}{3}\\right)=(2;4)$."
  },
  {
    "id": "0H921TN10",
    "question": "Cho hình bình hành $ABCD$ với $A(1;1)$, $B(4;1)$, $D(1;5)$. Tọa độ đỉnh $C$ là",
    "options": [
      "$(4;5)$",
      "$(4;1)$",
      "$(1;5)$",
      "$(6;6)$"
    ],
    "answer": 0,
    "explain": "Vì $ABCD$ là hình bình hành nên $\\vec{AB}=\\vec{DC}$, suy ra $C=D+\\vec{AB}$. Ta có $\\vec{AB}=(4-1;1-1)=(3;0)$, nên $C=(1+3;5+0)=(4;5)$."
  }
];
