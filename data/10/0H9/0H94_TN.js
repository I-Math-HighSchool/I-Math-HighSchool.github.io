// =========================================================================
// KHỐI DỮ LIỆU: 0H94 - Trắc nghiệm
// Nguồn: Lý thuyết chuẩn "Đường tròn trong mặt phẳng tọa độ" (phương trình
// chính tắc $(x-a)^2+(y-b)^2=R^2$; phương trình tổng quát
// $x^2+y^2-2ax-2by+c=0$ với điều kiện $a^2+b^2-c>0$; đường tròn đường
// kính AB; vị trí tương đối giữa đường thẳng và đường tròn qua khoảng
// cách từ tâm đến đường thẳng; đường tròn ngoại tiếp tam giác vuông) -
// chương trình Toán 10, GV tự soạn câu TN/TL dựa trên lý thuyết chuẩn, đã
// tự kiểm tra lại toàn bộ kết quả bằng tính toán trực tiếp trước khi đưa vào.
// =========================================================================
window.tracNghiem0H94 = [
  {
    "id": "0H941TN1",
    "question": "Đường tròn $(x-2)^2+(y+3)^2=16$ có tâm và bán kính là",
    "options": [
      "$I(2;-3),\\,R=4$",
      "$I(-2;3),\\,R=4$",
      "$I(2;-3),\\,R=16$",
      "$I(-2;3),\\,R=16$"
    ],
    "answer": 0,
    "explain": "Đường tròn $(x-a)^2+(y-b)^2=R^2$ có tâm $I(a;b)$, bán kính $R$. Ở đây $a=2,\\,b=-3,\\,R^2=16$ nên $I(2;-3)$, $R=4$."
  },
  {
    "id": "0H941TN2",
    "question": "Phương trình $x^2+y^2-4x+6y-3=0$ là phương trình của đường tròn có tâm và bán kính là",
    "options": [
      "$I(2;-3),\\,R=4$",
      "$I(-2;3),\\,R=4$",
      "$I(2;-3),\\,R=16$",
      "$I(2;3),\\,R=4$"
    ],
    "answer": 0,
    "explain": "Với dạng $x^2+y^2-2ax-2by+c=0$ ($a^2+b^2-c>0$), ta có $-2a=-4\\Rightarrow a=2$; $-2b=6\\Rightarrow b=-3$; $c=-3$. Tâm $I(2;-3)$, bán kính $R=\\sqrt{a^2+b^2-c}=\\sqrt{4+9+3}=\\sqrt{16}=4$."
  },
  {
    "id": "0H941TN3",
    "question": "Cho đường tròn tâm $I(1;2)$, bán kính $R=3$. Điểm nào sau đây thuộc đường tròn?",
    "options": [
      "$M(4;2)$",
      "$N(1;2)$",
      "$P(0;0)$",
      "$Q(4;5)$"
    ],
    "answer": 0,
    "explain": "Điểm thuộc đường tròn khi $IM=R$, tức $(x-1)^2+(y-2)^2=9$. Với $M(4;2)$: $(4-1)^2+(2-2)^2=9$, thỏa mãn. Các điểm còn lại đều không thỏa mãn (thử trực tiếp: $N$ là tâm nên $IN=0$; $P$ cho $1+4=5\\ne 9$; $Q$ cho $9+9=18\\ne 9$)."
  },
  {
    "id": "0H941TN4",
    "question": "Đường tròn đường kính $AB$ với $A(1;1)$, $B(7;1)$ có tâm và bán kính là",
    "options": [
      "$I(4;1),\\,R=3$",
      "$I(4;1),\\,R=6$",
      "$I(3;1),\\,R=3$",
      "$I(4;0),\\,R=3$"
    ],
    "answer": 0,
    "explain": "Tâm $I$ là trung điểm $AB$: $I=\\left(\\dfrac{1+7}{2};\\dfrac{1+1}{2}\\right)=(4;1)$. Bán kính $R=\\dfrac{AB}{2}=\\dfrac{6}{2}=3$."
  },
  {
    "id": "0H941TN5",
    "question": "Tìm $m$ để đường thẳng $3x-4y+m=0$ tiếp xúc với đường tròn tâm $I(1;2)$, bán kính $R=2$.",
    "options": [
      "$m=15$ hoặc $m=-5$",
      "$m=5$",
      "$m=10$",
      "$m=-10$ hoặc $m=10$"
    ],
    "answer": 0,
    "explain": "Đường thẳng tiếp xúc với đường tròn khi khoảng cách từ tâm đến đường thẳng bằng $R$: $\\dfrac{|3\\cdot 1-4\\cdot 2+m|}{\\sqrt{3^2+4^2}}=2\\Leftrightarrow |m-5|=10\\Leftrightarrow m=15$ hoặc $m=-5$."
  },
  {
    "id": "0H941TN6",
    "question": "Phương trình nào sau đây là phương trình của một đường tròn?",
    "options": [
      "$x^2+y^2-2x+4y+1=0$",
      "$x^2+y^2-2x+4y+10=0$",
      "$x^2+y^2+2x-4y+10=0$",
      "$x^2+2y^2-2x+4y+1=0$"
    ],
    "answer": 0,
    "explain": "Phương trình $x^2+y^2-2ax-2by+c=0$ là đường tròn khi $a^2+b^2-c>0$. Với đáp án A: $a=1,b=-2,c=1$, ta có $a^2+b^2-c=1+4-1=4>0$: là đường tròn. Với B và C: $a^2+b^2-c=1+4-10=-5<0$: không phải đường tròn. Đáp án D không có dạng $x^2+y^2+\\ldots$ (hệ số của $y^2$ khác hệ số của $x^2$) nên không phải phương trình đường tròn."
  },
  {
    "id": "0H941TN7",
    "question": "Tâm và bán kính của đường tròn $x^2+y^2-2x+4y+1=0$ là",
    "options": [
      "$I(1;-2),\\,R=2$",
      "$I(-1;2),\\,R=2$",
      "$I(1;-2),\\,R=4$",
      "$I(1;2),\\,R=2$"
    ],
    "answer": 0,
    "explain": "Ta có $a=1,\\,b=-2,\\,c=1$ nên $I(1;-2)$ và $R=\\sqrt{a^2+b^2-c}=\\sqrt{1+4-1}=\\sqrt{4}=2$."
  },
  {
    "id": "0H941TN8",
    "question": "Đường tròn tâm $I(0;0)$, bán kính $R=5$ và đường thẳng $3x+4y-25=0$ có vị trí tương đối là",
    "options": [
      "Tiếp xúc nhau",
      "Cắt nhau tại hai điểm",
      "Không có điểm chung",
      "Đường thẳng đi qua tâm $I$"
    ],
    "answer": 0,
    "explain": "Khoảng cách từ $I(0;0)$ đến đường thẳng là $d=\\dfrac{|3\\cdot 0+4\\cdot 0-25|}{\\sqrt{3^2+4^2}}=\\dfrac{25}{5}=5=R$. Vì $d=R$ nên đường thẳng tiếp xúc với đường tròn."
  },
  {
    "id": "0H941TN9",
    "question": "Cho tam giác $ABC$ vuông tại $A$ với $A(0;0)$, $B(6;0)$, $C(0;8)$. Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng",
    "options": [
      "$5$",
      "$10$",
      "$3$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Vì tam giác vuông tại $A$ nên tâm đường tròn ngoại tiếp là trung điểm cạnh huyền $BC$ và bán kính $R=\\dfrac{BC}{2}$. Ta có $BC=\\sqrt{6^2+8^2}=\\sqrt{100}=10$, suy ra $R=\\dfrac{10}{2}=5$."
  },
  {
    "id": "0H941TN10",
    "question": "Với tam giác $ABC$ ở câu trên ($A(0;0),\\,B(6;0),\\,C(0;8)$, vuông tại $A$), tâm đường tròn ngoại tiếp tam giác là",
    "options": [
      "$(3;4)$",
      "$(0;0)$",
      "$(6;8)$",
      "$(3;0)$"
    ],
    "answer": 0,
    "explain": "Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền $BC$: $\\left(\\dfrac{6+0}{2};\\dfrac{0+8}{2}\\right)=(3;4)$."
  }
];
