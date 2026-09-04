// =========================================================================
// KHỐI DỮ LIỆU: 1D71 - Trắc nghiệm (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.tracNghiem1D71 = [
  {
    "id": "1D713TN1",
    "question": "Một chất điểm có phương trình chuyển động $s(t)=\\dfrac{1}{3}t^3-2t^2$ với $t &gt; 0$, $t$ tính bằng giây, $s(t)$ tính bằng mét. Tính gia tốc tức thời tại thời điểm mà vận tốc tức thời bằng $5$ m/s.",
    "options": [
      "$-6$ m/s$^2$",
      "$6$ m/s$^2$",
      "$-14$ m/s$^2$",
      "$14$ m/s$^2$"
    ],
    "answer": 1,
    "explain": "Vận tốc tức thời của vật tại thời điểm $t$ là  \\[v(t)=s'(t)=t^2-4t.\\]  Ta có  \\[v(t)=5 \\Leftrightarrow t^2-4t=5 \\Leftrightarrow t^2-4t-5=0 \\Leftrightarrow t=-1 \\text{ (loại)} \\text{ hoặc } t=5 \\text{ (nhận)}.\\]  Gia tốc tức thời của vật tại thời điểm $t$ là  \\[a(t)=v'(t)=2t-4.\\]  Gia tốc tức thời của vật tại thời điểm $t=5$ là  \\[a(5)= 2 \\cdot 5 -4 =6 \\ (\\text{m/s}^2).\\]"
  },
  {
    "id": "1D711TN2",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm tại $x_0$ là $f'(x_0)$. Khẳng định nào sau đây sai?",
    "options": [
      "$f'(x_0)=\\lim \\limits_{\\Delta x \\to 0} \\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$",
      "$f'(x_0)=\\lim \\limits_{h \\to 0} \\dfrac{f(x_0+h)-f(x_0)}{h}$",
      "$f'(x_0)=\\lim \\limits_{x \\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0}$",
      "$f'(x_0)=\\lim \\limits_{x \\to x_0} \\dfrac{f(x)+f(x_0)}{x-x_0}$"
    ],
    "answer": 3,
    "explain": "Đạo hàm của hàm số $y=f(x)$ tại $x_0$ là   \\[f'(x_0)=\\lim \\limits_{x \\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0}. \\]"
  },
  {
    "id": "1D713TN3",
    "question": "Một chất điểm chuyển động được xác định bởi phương trình $s(t)=-t^3+3t^2+9t$, trong đó $t$ tính  bằng giây và $s$ tính bằng mét. Tính vận tốc của chuyển động tại thời điểm gia tốc triệt tiêu.",
    "options": [
      "$12$ m/s",
      "$0$ m/s",
      "$11$ m/s",
      "$6$ m/s"
    ],
    "answer": 0,
    "explain": "Ta có $v(t) = -3t^2 + 6t+9$.<br>  $\\Rightarrow a(t) = -6t +6$.<br>  Để gia tốc triệt tiêu thì $a(t)=0\\Leftrightarrow -6t + 6 = 0\\Leftrightarrow t = 1$.<br>  Với $t = 1 \\Rightarrow v(1) = 12$ (m/s)."
  },
  {
    "id": "1D714TN4",
    "question": "Cho hàm số $y=x^3-6x^2+9x+1$ có đồ thị $(C)$. Phương trình tiếp tuyến với đồ thị $(C)$ tại điểm có hoành độ $x_0=-1$ là",
    "options": [
      "$y=24x-39$",
      "$y=24x+9$",
      "$y=-15$",
      "$y=24x+39$"
    ],
    "answer": 1,
    "explain": "Xét $y=x^3-6x^2+9x+1$ có $y'=3x^2-12x+9$.<br>  Hệ số góc tiếp tuyến là $k=f'(-1)=24$.<br>  Với $x_0=-1\\Rightarrow y_0=-15$.<br>  Phương trình tiếp tuyến là $y=24(x+1)-15=24x+9$."
  },
  {
    "id": "1D713TN5",
    "question": "Một vật chuyển động theo quy luật $s(t)=-\\dfrac{1}{2}t^3+12t^2$, trong đó $t$ tính bằng giây là khoảng thời gian được tính từ lúc vật bắt đầu chuyển động, $s$ là quãng đường (đơn vị: mét) vật chuyển động trong thời gian $t$ giây. Vận tốc tức thời của vật tại thời điểm $t=10$ là",
    "options": [
      "$80$ (m/s)",
      "$70$ (m/s)",
      "$100$ (m/s)",
      "$90$ (m/s)"
    ],
    "answer": 3,
    "explain": "Ta có $s(t)=-\\dfrac{1}{2}t^3+12t^2\\Rightarrow v(t)=s'(t)=-\\dfrac{3}{2}t^2+24t$ .<br>  Vận tốc tức thời tại thời điểm $t=10$ giây là $v(10)=-\\dfrac{3}{2}\\cdot 10^2+24\\cdot 10=90$(m/s)."
  }
];
