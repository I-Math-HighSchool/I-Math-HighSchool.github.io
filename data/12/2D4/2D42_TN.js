// =========================================================================
// KHỐI DỮ LIỆU: 2D42 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem2D42 = [
  {
    "id": "2D421TN1",
    "question": "Cho $F(x)$ là nguyên hàm của hàm số $f(x)$ trên $\\left[ a;b\\right]$. Phát biểu nào sau đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle\\int\\limits_{a}^{b}f(x)\\mathrm{d}x=F(b)-F(a)$",
      "$\\displaystyle\\int\\limits_{a}^{b}f(x)\\mathrm{d}x\\neq \\displaystyle\\int\\limits_{a}^{b}f(t)\\mathrm{d}t$",
      "$\\displaystyle\\int\\limits_{a}^{b}f(x)\\mathrm{d}x=0$",
      "$\\displaystyle\\int\\limits_{a}^{b}f(x)\\mathrm{d}x=-\\displaystyle\\int\\limits_{b}^{a}f(x)\\mathrm{d}x$"
    ],
    "answer": 1,
    "explain": "Ba mệnh đề $\\displaystyle\\int_a^bf(x)\\mathrm{d}x=F(b)-F(a)$, $\\displaystyle\\int_a^bf(x)\\mathrm{d}x=-\\int_b^af(x)\\mathrm{d}x$ và tính chất tích phân với cận bằng nhau đều đúng.<br>Riêng mệnh đề \"$\\displaystyle\\int_a^bf(x)\\mathrm{d}x\\ne\\int_a^bf(t)\\mathrm{d}t$\" là SAI, vì giá trị tích phân xác định không phụ thuộc vào tên biến lấy tích phân (biến $x$ hay $t$ chỉ là biến chạy hình thức), nên hai tích phân này luôn BẰNG nhau."
  },
  {
    "id": "2D421TN2",
    "question": "Nếu $\\displaystyle\\int\\limits_{-1}^5f(x)\\mathrm{\\,d}x=-3$ thì $\\displaystyle\\int\\limits_5^{-1}f(x) \\mathrm{\\,d}x$ bằng",
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$5$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits_5^{-1}f(x)\\mathrm{\\,d}x=-\\displaystyle\\int\\limits_{-1}^5f(x)\\mathrm{\\,d}x=3 .$"
  },
  {
    "id": "2D421TN3",
    "question": "Cho hàm số $f(x)$ liên tục trên $\\left[1;4\\right]$ thỏa $f(1) = 1$ và $\\displaystyle\\int\\limits_1^4f'(x)\\mathrm{d}x = 2$. Tính $f(4)$.",
    "options": [
      "$2$",
      "$3$",
      "$1$",
      "$4$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int\\limits_1^4f'(x)\\mathrm{d}x =2\\Rightarrow f(4)-f(1)=2\\Rightarrow f(4)-1=2\\Rightarrow f(4)=3$."
  },
  {
    "id": "2D421TN4",
    "question": "Biết $f\\left(x\\right)$ là hàm số liên tục trên $\\mathbb{R}$ và $\\displaystyle\\int\\limits_0^6f\\left(x\\right)\\mathrm{d}x = 4$, $\\displaystyle\\int\\limits_2^6f\\left(t\\right)\\mathrm{d}t = - 3$. Tính $\\displaystyle\\int\\limits_0^2\\left[f\\left(v\\right) - 3\\right]\\mathrm{d}v$.",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$3$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int_0^2f=\\int_0^6f-\\int_2^6f=4-(-3)=7$.<br>Vậy $\\displaystyle\\int_0^2[f(v)-3]\\mathrm{d}v=\\int_0^2f(v)\\mathrm{d}v-3\\int_0^2\\mathrm{d}v=7-3\\cdot 2=1$."
  },
  {
    "id": "2D421TN5",
    "question": "Biết $\\displaystyle\\int\\limits_{0}^1f(x) \\mathrm{\\,d}x=8$ và $\\displaystyle\\int\\limits_{1}^5f(x) \\mathrm{\\,d}x=-3$, khi đó $\\displaystyle\\int\\limits_{0}^5f(x) \\mathrm{\\,d}x$ bằng",
    "options": [
      "$-11$",
      "$11$",
      "$5$",
      "$-\\dfrac{8}{3}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits_{0}^5f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^1f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_1^5f(x) \\mathrm{\\,d}x = 8 -3 =5$."
  },
  {
    "id": "2D421TN6",
    "question": "Nếu $\\displaystyle\\int\\limits_2^5f(x) \\mathrm{\\,d}x=3$ và $\\displaystyle\\int\\limits_2^5g(x) \\mathrm{\\,d}x=-2 \\displaystyle\\int\\limits_2^5[f(x)-g(x)] \\mathrm{\\,d}x$ thì $\\displaystyle\\int\\limits_2^5[f(x)-g(x)] \\mathrm{\\,d} x$ bằng",
    "options": [
      "$5$",
      "$-5$",
      "$1$",
      "$3$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits_2^5[f(x)-g(x)] \\mathrm{\\,d} x=\\displaystyle\\int\\limits_2^5f(x) \\mathrm{\\,d}x-\\displaystyle\\int\\limits_2^5g(x) \\mathrm{\\,d}x=3-(-2)=5$."
  },
  {
    "id": "2D421TN7",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[0;9]$ thỏa mãn $\\displaystyle\\int\\limits_0^{9}{f(x)}\\mathrm{\\,d}x=8$, $\\displaystyle\\int\\limits_4^{7}{f(x)}\\mathrm{\\,d}x=3$. Khi đó giá trị của biếu thức $P=\\displaystyle\\int\\limits_0^{4}{f(x)}\\mathrm{\\,d}x+ \\displaystyle\\int\\limits_7^{9}{f(x)}\\mathrm{\\,d}x$ là",
    "options": [
      "$P=20$",
      "$P=9$",
      "$P=5$",
      "$P=11$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^4 f(x)\\mathrm{\\,d}x + \\displaystyle\\int\\limits_4^7 f(x)\\mathrm{\\,d}x + \\displaystyle\\int\\limits_7^9 f(x)\\mathrm{\\,d}x$ nên  \\[P = \\displaystyle\\int\\limits_0^4 f(x)\\mathrm{\\,d}x + \\displaystyle\\int\\limits_7^9 f(x)\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x - \\displaystyle\\int\\limits_4^7 f(x)\\mathrm{\\,d}x = 8 - 3 =5.\\]"
  },
  {
    "id": "2D421TN8",
    "question": "Cho $f(x)$ là hàm số liên tục trên $\\mathbb{R}$ và các số thực $a&lt;b&lt;c$.   Tìm mệnh đề &lt;strong&gt;sai&lt;/strong&gt;.%Trong các mệnh đề sau, mệnh đề nào &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle\\int\\limits_a^cf(x)\\mathrm{d}x=\\int\\limits_a^bf(x)\\mathrm{d}x-\\int\\limits_c^bf(x)\\mathrm{d}x$",
      "$\\displaystyle\\int\\limits_b^cf(x)\\mathrm{d}x=\\int\\limits_a^cf(x)\\mathrm{d}x+\\int\\limits_a^bf(x)\\mathrm{d}x$",
      "$\\displaystyle\\int\\limits_c^bf(x)\\mathrm{d}x=\\int\\limits_a^bf(x)\\mathrm{d}x+\\int\\limits_c^af(x)\\mathrm{d}x$",
      "$\\displaystyle\\int\\limits_b^ca f(x)\\mathrm{d}x=-a \\int\\limits_c^bf(x)\\mathrm{d}x$"
    ],
    "answer": 1,
    "explain": "Kiểm tra từng mệnh đề dựa trên tính chất $\\int_a^c=\\int_a^b+\\int_b^c$: đáp án A, C, D đều tương đương tính chất này (viết lại dưới các dạng khác nhau, đều đúng).<br>Riêng đáp án B viết $\\int_b^c=\\int_a^c+\\int_a^b$ trong khi công thức đúng phải là $\\int_b^c=\\int_a^c-\\int_a^b$ (dấu trừ chứ không phải dấu cộng), nên B là mệnh đề sai."
  },
  {
    "id": "2D421TN9",
    "question": "Cho $\\displaystyle\\int\\limits_{-1}^1f(t)\\textrm{d}t=-3, \\displaystyle\\int\\limits_1^2f(u)\\textrm{d}u=4.$ Tính $\\displaystyle\\int\\limits_{-1}^2f(x)\\textrm{d}x.$",
    "options": [
      "$-7$",
      "$-1$",
      "$1$",
      "$7$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int_{-1}^2f(x)\\mathrm{d}x=\\int_{-1}^1f(t)\\mathrm{d}t+\\int_1^2f(u)\\mathrm{d}u=-3+4=1$."
  },
  {
    "id": "2D424TN10",
    "question": "Cho $\\displaystyle\\int\\limits_0^1 {\\left( {\\frac{1}{{x + 1}} - \\frac{1}{{x + 2}}} \\right)\\mathrm{\\, d}x = a\\ln 2 + b\\ln 3}$ với $a,b$ là các số nguyên. Mệnh đề nào dưới đây đúng?",
    "options": [
      "$a + b = 2$",
      "$a - 2b = 0$",
      "$a + b = - 2$",
      "$a + 2b = 0$"
    ],
    "answer": 3,
    "explain": "$\\displaystyle\\int\\limits_0^1 {\\left( {\\frac{1}{{x + 1}} - \\frac{1}{{x + 2}}} \\right)\\mathrm{\\, d}x} = {\\left( {\\ln \\left| {x + 1} \\right| - \\ln \\left| {x + 2} \\right|} \\right)} \\bigg|_0^1 = 2\\ln 2 - \\ln 3 \\Rightarrow a = 2 \\text{ và } b = - 1. \\Rightarrow a + 2b = 0$."
  },
  {
    "id": "2D421TN11",
    "question": "Có bao nhiêu giá trị của $a$ thỏa ${\\displaystyle \\int_0^a(2x+5)\\,dx=a-4}$?",
    "options": [
      "$0$",
      "$1$",
      "$-2$",
      "vô số"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int_0^a(2x+5)\\mathrm{d}x=\\Big[x^2+5x\\Big]_0^a=a^2+5a$.<br>Phương trình: $a^2+5a=a-4\\Leftrightarrow a^2+4a+4=0\\Leftrightarrow (a+2)^2=0\\Leftrightarrow a=-2$.<br>Vậy chỉ có $1$ giá trị của $a$ thỏa mãn (là $a=-2$)."
  },
  {
    "id": "2D421TN12",
    "question": "Tính tích phân $I=\\displaystyle \\int\\limits_{0}^{1} \\text{e}^{ \\tfrac{x}{2020}} \\text{d}x$.",
    "options": [
      "$I=\\dfrac{1}{2020}\\left(\\text{e}^{-2020}-1\\right)$ ",
      "$I=2020\\left(\\text{e}^{-2020}-1\\right)$ ",
      "$I=\\dfrac{1}{2020}\\left(\\text{e}^{2020}-1\\right)$",
      "$I=2020\\left(\\text{e}^{\\textstyle \\frac{1}{2020}}-1\\right)$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle I=\\int_0^1 e^{x/2020}\\mathrm{d}x=\\Big[2020\\,e^{x/2020}\\Big]_0^1=2020\\left(e^{1/2020}-1\\right)$."
  },
  {
    "id": "2D423TN13",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=\\cos x+1$, $\\forall x\\in\\mathbb{R}$. Biết $\\displaystyle\\int\\limits_{0}^{\\tfrac{\\pi}{2}}f(x)\\mathrm{\\,d}x=\\dfrac{\\pi^2}{8}+1$. Khi đó $f\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
    "options": [
      "$\\dfrac{\\pi}{2}$",
      "$\\dfrac{\\pi}{2}+1$",
      "$\\dfrac{\\pi}{2}-1$",
      "$1$`"
    ],
    "answer": 1,
    "explain": "Ta có $f(x)=\\displaystyle\\int (\\cos x+1)\\mathrm{\\,d}x=\\sin x+x+C$. <br>  Ta có   $\\displaystyle\\int\\limits_{0}^{\\tfrac{\\pi}{2}} f(x)\\mathrm{\\,d}x=\\dfrac{\\pi^2}{8} +1$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_{0}^{\\tfrac{\\pi}{2}} (\\sin x+x+C)\\mathrm{\\,d}x=\\dfrac{\\pi^2}{8} +1$<br>$\\Leftrightarrow \\left(-\\cos x+\\dfrac{x^2}{2}+Cx\\right)\\bigg\\vert_0^{\\tfrac{\\pi}{2}}=\\dfrac{\\pi^2}{8} +1$<br>$\\Leftrightarrow \\dfrac{\\pi^2}{8}+\\dfrac{\\pi}{2}C+1=\\dfrac{\\pi^2}{8}+1\\Leftrightarrow C=0.$  Vậy $f(x)=\\sin x+x$, suy ra $f\\left(\\dfrac{\\pi}{2}\\right)=\\dfrac{\\pi}{2}+1$."
  },
  {
    "id": "2D421TN14",
    "question": "Biết $F(x)=x^3$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $(-\\infty ;+\\infty)$. Giá trị của $\\displaystyle \\int \\limits_1^2[2+f(x)]\\, \\mathrm{d} x$ bằng",
    "options": [
      "$7$",
      "$9$",
      "$\\dfrac{15}{4}$",
      "$\\dfrac{23}{4}$"
    ],
    "answer": 1,
    "explain": "Ta có   \\[ \\int \\limits_1^2[2+f(x)]\\, \\mathrm{d} x = \\left( 2x + x^3\\right)\\bigg|_1^2 = 12-3=9.\\]"
  },
  {
    "id": "2D421TN15",
    "question": "Cho hàm số $f(x)$ có đạo hàm trên đoạn $[-2;1].$ Biết $f(-2)=1$, $f(1)=-2.$ Tính $\\displaystyle\\int\\limits_{-2}^1f'(x)\\textrm{d}x.$",
    "options": [
      "$3$",
      "$-1$",
      "$1$",
      "$-3$"
    ],
    "answer": 3,
    "explain": "Theo công thức Newton-Leibniz: $\\displaystyle\\int_{-2}^1f'(x)\\mathrm{d}x=f(1)-f(-2)=-2-1=-3$."
  },
  {
    "id": "2D423TN16",
    "question": "Cho $\\displaystyle \\int\\limits_{0}^{\\frac{\\pi}{2}}{f(x) \\mathrm{\\,d}x=5}$. Tính $I = \\displaystyle \\int\\limits_{0}^{\\frac{\\pi}{2}}{[f(x)+2\\sin x] \\mathrm{\\,d}x}$.",
    "options": [
      "$7$",
      "$5+\\dfrac{\\pi}{2}$",
      "$3$",
      "$5+\\pi$"
    ],
    "answer": 0,
    "explain": "$I = \\displaystyle \\int\\limits_{0}^{\\frac{\\pi}{2}}{[f(x)+2\\sin x] \\mathrm{\\,d}x} = \\displaystyle \\int\\limits_{0}^{\\frac{\\pi}{2}}{f(x) \\mathrm{\\,d}x} + \\displaystyle \\int\\limits_{0}^{\\frac{\\pi}{2}}{2\\sin x \\mathrm{\\,d}x} = 5-2 \\cos x \\bigg |_0^{\\frac{\\pi}{2}}=7$."
  },
  {
    "id": "2D421TN17",
    "question": "Biết $\\displaystyle\\int\\limits_2^5f\\left(x\\right)\\textrm{d}x=7$, $\\displaystyle\\int\\limits_2^5g\\left(t\\right)\\textrm{d}t=-2$.  Tính tích phân $\\displaystyle\\int\\limits_2^5\\left[f\\left(x\\right)+g\\left(x\\right)\\right]\\textrm{d}x$?",
    "options": [
      "Không tồn tại",
      "$5$",
      "$-9$",
      "$9$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int_2^5[f(x)+g(x)]\\mathrm{d}x=\\int_2^5f(x)\\mathrm{d}x+\\int_2^5g(x)\\mathrm{d}x=7+(-2)=5$."
  },
  {
    "id": "2D421TN18",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[0;9]$ thỏa mãn $\\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x=10$ và $\\displaystyle\\int\\limits_3^5 f(x)\\mathrm{\\,d}x=7$. Tính giá trị của biểu thức $\\displaystyle\\int\\limits_0^3 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_5^9 f(x)\\mathrm{\\,d}x$.",
    "options": [
      "$17$",
      "$3$",
      "$7$",
      "$-3$"
    ],
    "answer": 1,
    "explain": "Ta có   $\\displaystyle\\int\\limits_0^3 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_5^9f(x)\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_9^5 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_5^3 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_5^9 f(x)\\mathrm{\\,d}x$<br>$= \\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_3^5 f(x)\\mathrm{\\,d}x=10-7=3.$"
  },
  {
    "id": "2D421TN19",
    "question": "Tính $\\displaystyle \\int \\limits_1^2(2ax+b)\\mathrm{d}x$ theo $a$ và $b$, với $a$, $b$ là các số thực.",
    "options": [
      "$a+b$",
      "$3a+2b$",
      "$a+2b$",
      "$3a+b$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int_1^2(2ax+b)\\mathrm{d}x=\\Big[ax^2+bx\\Big]_1^2=(4a+2b)-(a+b)=3a+b$."
  },
  {
    "id": "2D424TN20",
    "question": "Biết $\\displaystyle\\int\\limits_1^3\\dfrac{1}{2x+3}\\textrm{d}x=m\\ln 5+n\\ln 3, (m,n\\in\\mathbb{R})$. Tính $P=m-n$.",
    "options": [
      "$P=0$",
      "$P=-1$",
      "$P=\\dfrac{3}{2}$",
      "$P=-\\dfrac{3}{2}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int_1^3\\dfrac{1}{2x+3}\\mathrm{d}x=\\left[\\dfrac12\\ln|2x+3|\\right]_1^3=\\dfrac12(\\ln9-\\ln5)=\\dfrac12(2\\ln3-\\ln5)=\\ln3-\\dfrac12\\ln5$.<br>Vậy $m=-\\dfrac12,\\ n=1$, nên $P=m-n=-\\dfrac12-1=-\\dfrac32$."
  },
  {
    "id": "2D423TN21",
    "question": "Tính tích phân $\\displaystyle \\int\\limits_0^{2021\\pi} \\left(\\sin x+\\cos x\\right){\\rm{d}}x$.",
    "options": [
      "$I=3$",
      "$I=1$",
      "$I=0$",
      "$I=2$"
    ],
    "answer": 3,
    "explain": "Vì $\\sin x,\\cos x$ tuần hoàn chu kì $2\\pi$ và $2021\\pi=1010\\cdot 2\\pi+\\pi$, nên $\\displaystyle\\int_0^{2021\\pi}(\\sin x+\\cos x)\\mathrm{d}x=\\int_0^{\\pi}(\\sin x+\\cos x)\\mathrm{d}x$.<br>$=\\Big[-\\cos x+\\sin x\\Big]_0^{\\pi}=(1+0)-(-1+0)=2$."
  },
  {
    "id": "2D423TN22",
    "question": "Cho $a\\in \\left(0;\\dfrac{\\pi}{2}\\right)$. Tính $J=\\displaystyle\\int\\limits_0^a \\dfrac{29}{\\cos ^2 x} \\textrm{d}x$ theo $a$.",
    "options": [
      "$J=\\dfrac{1}{29}\\tan a$",
      "$J=-29\\tan a$",
      "$J=29\\tan a$",
      "$J=29\\cot a$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle J=\\int_0^a\\dfrac{29}{\\cos^2x}\\mathrm{d}x=29\\Big[\\tan x\\Big]_0^a=29\\tan a$."
  },
  {
    "id": "2D423TN23",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_{ \\tfrac{ \\pi}{2}}^{2020 \\pi} \\cos 2x \\cos 5x \\mathrm{\\, d } x$.",
    "options": [
      "$I = - \\dfrac{5}{21}$",
      "$I = \\dfrac{5}{21}$",
      "$I = - \\dfrac{\\sqrt{2}}{21}$",
      "$I = \\dfrac{\\sqrt{2}}{21}$"
    ],
    "answer": 1,
    "explain": "Dùng công thức tích thành tổng: $\\cos2x\\cos5x=\\dfrac12(\\cos3x+\\cos7x)$.<br>$\\displaystyle I=\\dfrac12\\left[\\dfrac{\\sin3x}{3}+\\dfrac{\\sin7x}{7}\\right]_{\\pi/2}^{2020\\pi}$.<br>Tại $x=2020\\pi$: $\\sin(6060\\pi)=\\sin(14140\\pi)=0$ (đều là bội của $2\\pi$), giá trị $=0$.<br>Tại $x=\\pi/2$: $\\sin(3\\pi/2)=-1$, $\\sin(7\\pi/2)=\\sin(3\\pi/2)=-1$ (do tuần hoàn $2\\pi$), giá trị $=\\dfrac12\\left(-\\dfrac13-\\dfrac17\\right)=-\\dfrac{5}{21}$.<br>Vậy $I=0-\\left(-\\dfrac{5}{21}\\right)=\\dfrac{5}{21}$."
  },
  {
    "id": "2D423TN24",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_{ \\tfrac{ \\pi}{2}}^{2020 \\pi} \\sin x \\sin 4x \\mathrm{\\, d } x$.",
    "options": [
      "$I = - \\dfrac{5}{14}$",
      "$I = \\dfrac{5}{14}$",
      "$I = - \\dfrac{4}{15}$",
      "$I = \\dfrac{4}{15}$"
    ],
    "answer": 3,
    "explain": "Dùng công thức tích thành tổng: $\\sin x\\sin4x=\\dfrac12(\\cos3x-\\cos5x)$.<br>$\\displaystyle I=\\dfrac12\\left[\\dfrac{\\sin3x}{3}-\\dfrac{\\sin5x}{5}\\right]_{\\pi/2}^{2020\\pi}$.<br>Tại $x=2020\\pi$: $\\sin(6060\\pi)=\\sin(10100\\pi)=0$, giá trị $=0$.<br>Tại $x=\\pi/2$: $\\sin(3\\pi/2)=-1$, $\\sin(5\\pi/2)=\\sin(\\pi/2)=1$, giá trị $=\\dfrac12\\left(-\\dfrac13-\\dfrac15\\right)=-\\dfrac{4}{15}$.<br>Vậy $I=0-\\left(-\\dfrac{4}{15}\\right)=\\dfrac{4}{15}$."
  },
  {
    "id": "2D423TN25",
    "question": "Tính $ \\displaystyle \\int\\limits_0^{\\tfrac{\\pi}{4}} f(x) \\mathrm{\\,d}x $, biết $f(0) = 4$ và $f'(x) = 2 \\cos^2 x+ 3$, $\\forall x \\in \\mathbb{R}$.",
    "options": [
      "$ \\dfrac{\\pi^2 + 2}{8} $",
      "$ \\dfrac{\\pi^2 + 8\\pi + 8}{8} $",
      "$ \\dfrac{\\pi^2 + 8\\pi + 2}{8} $",
      "$ \\dfrac{\\pi^2 + 6\\pi + 8}{8} $"
    ],
    "answer": 2,
    "explain": "Vì $f'(x)=2\\cos^2x+3=(1+\\cos2x)+3=4+\\cos2x$, ta có $\\displaystyle f(x)=f(0)+\\int_0^x(4+\\cos2t)\\mathrm{d}t=4+4x+\\dfrac12\\sin2x$.<br>$\\displaystyle\\int_0^{\\pi/4}f(x)\\mathrm{d}x=\\left[4x+2x^2-\\dfrac14\\cos2x\\right]_0^{\\pi/4}=\\left(\\pi+\\dfrac{\\pi^2}{8}-0\\right)-\\left(-\\dfrac14\\right)=\\pi+\\dfrac{\\pi^2}{8}+\\dfrac14=\\dfrac{\\pi^2+8\\pi+2}{8}$."
  },
  {
    "id": "2D423TN26",
    "question": "Tính tích phân $\\displaystyle\\int\\limits_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}\\dfrac{1-\\sin^3x}{\\sin^2x}\\mathrm{\\,d}x$, ta được kết quả là $a\\sqrt{3}+b\\sqrt{2}+c$, với $a, b, c \\in \\mathbb{Q}$. Khi đó, tổng $a+b+c$ bằng",
    "options": [
      "$1$",
      "$-1$",
      "$2$",
      "$0$"
    ],
    "answer": 3,
    "explain": "$\\displaystyle \\int \\limits_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}\\dfrac{1-\\sin^3x}{\\sin^2x}\\mathrm{\\,d}x=\\displaystyle \\int \\limits_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}\\left(\\dfrac{1}{\\sin^2x}-\\sin x\\right)\\mathrm{\\,d}x=\\left(-\\cot x +\\cos x\\right)\\bigg|_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}=\\dfrac{1}{2}\\cdot \\sqrt{3}+\\dfrac{1}{2}\\cdot \\sqrt{2}-1$.<br>  Vậy $a=b=\\dfrac{1}{2},c=-1\\Rightarrow a+b+c=0$."
  },
  {
    "id": "2D423TN27",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_{0}^{\\tfrac{\\pi}{6}} {\\dfrac{\\mathrm{\\, d } x}{1+\\cos x}} =a \\sqrt{b} + c$, với $a,b,c$ là các số nguyên và $b \\leqslant 5$. Tính $S = a + b + c$.",
    "options": [
      "$S=1$",
      "$S=2$",
      "$S=3$",
      "$S=4$"
    ],
    "answer": 3,
    "explain": "Dùng $1+\\cos x=2\\cos^2\\dfrac{x}{2}$, ta có $\\dfrac{1}{1+\\cos x}=\\dfrac12\\sec^2\\dfrac{x}{2}$.<br>$\\displaystyle I=\\int_0^{\\pi/6}\\dfrac12\\sec^2\\dfrac{x}{2}\\mathrm{d}x=\\Big[\\tan\\dfrac{x}{2}\\Big]_0^{\\pi/6}=\\tan\\dfrac{\\pi}{12}=2-\\sqrt3$.<br>Vậy $a=-1,\\ b=3,\\ c=2$, nên $S=a+b+c=4$."
  },
  {
    "id": "2D423TN28",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_{0}^{\\tfrac{\\pi}{4}} {\\dfrac{\\mathrm{\\, d } x}{1+\\sin x}} =a \\sqrt{b} + c$, với $a,b,c$ là các số nguyên và $b \\leqslant 5$. Tính $S = a + b + c$.",
    "options": [
      "$S=1$",
      "$S=2$",
      "$S=3$",
      "$S=4$"
    ],
    "answer": 2,
    "explain": "Nhân với $\\dfrac{1-\\sin x}{1-\\sin x}$: $\\dfrac{1}{1+\\sin x}=\\dfrac{1-\\sin x}{\\cos^2x}=\\sec^2x-\\sec x\\tan x$.<br>$\\displaystyle I=\\Big[\\tan x-\\sec x\\Big]_0^{\\pi/4}=(1-\\sqrt2)-(0-1)=2-\\sqrt2$.<br>Vậy $a=-1,\\ b=2,\\ c=2$, nên $S=a+b+c=3$."
  },
  {
    "id": "2D423TN29",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_{0}^{ \\tfrac{\\pi}{6}}\\sqrt{1-\\cos 2x}\\mathrm{\\, d } x = \\dfrac{a \\sqrt{2} + b\\sqrt{6}}{c}$, với $a, b \\in \\mathbb{Z}, c \\in \\mathbb{N}, c &lt; 4$. Tính $S = a + b + c$.",
    "options": [
      "$S = 3$",
      "$S = 4$",
      "$S = 2$",
      "$S = 5$"
    ],
    "answer": 0,
    "explain": "Dùng $1-\\cos2x=2\\sin^2x$, và trên $[0;\\pi/6]$ thì $\\sin x\\ge0$ nên $\\sqrt{1-\\cos2x}=\\sqrt2\\sin x$.<br>$\\displaystyle I=\\sqrt2\\int_0^{\\pi/6}\\sin x\\,\\mathrm{d}x=\\sqrt2\\Big[-\\cos x\\Big]_0^{\\pi/6}=\\sqrt2\\left(1-\\dfrac{\\sqrt3}{2}\\right)=\\sqrt2-\\dfrac{\\sqrt6}{2}=\\dfrac{2\\sqrt2-\\sqrt6}{2}$.<br>Vậy $a=2,\\ b=-1,\\ c=2$, nên $S=a+b+c=3$."
  },
  {
    "id": "2D423TN30",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_{ \\tfrac{ \\pi}{3}}^{\\tfrac{ \\pi}{2}}   \\dfrac{1}{\\sin x}  \\mathrm{\\, d } x = \\dfrac{\\ln a}{b}$, với $a, b \\in \\mathbb{N}, b&lt;4$. Tính $a + b$",
    "options": [
      "$S=5$",
      "$S=4$",
      "$S=2$",
      "$S=3$"
    ],
    "answer": 0,
    "explain": "$I = \\dfrac{\\ln 3}{2} \\Rightarrow a = 3, b = 2 $"
  },
  {
    "id": "2D423TN31",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_{ \\tfrac{ \\pi}{4}}^{\\tfrac{ \\pi}{3}}   \\dfrac{1}{\\cos ^4 x}  \\mathrm{\\, d } x = a \\sqrt{b} + c$, với $a, b \\in \\mathbb{Z}, c \\in \\mathbb{Q}, b &lt;5$. Tính $S= a + b + c$.",
    "options": [
      "$S=\\dfrac{11}{3}$",
      "$S=-\\dfrac{11}{3}$",
      "$S=\\dfrac{19}{3}$",
      "$S=-\\dfrac{19}{3}$"
    ],
    "answer": 0,
    "explain": "$I = 2\\sqrt{3} - \\dfrac{4}{3} \\Rightarrow a = 2, b = 3, c = - \\dfrac{4}{3}$"
  },
  {
    "id": "2D424TN32",
    "question": "Xét $I=\\displaystyle\\int\\limits_{0}^{1}{\\left(x-1\\right)\\mathrm{e}^{x^2-2x+3}}\\mathrm{\\,d}x$, nếu đặt $u=x^2-2x+3$ thì ta được tích phân nào sau đây?",
    "options": [
      "$I=-\\displaystyle\\int\\limits_{2}^{3}{\\mathrm{e}^{u}}\\mathrm{\\,d}u$",
      "$I=-\\dfrac{1}{2}\\displaystyle\\int\\limits_{2}^{3}{\\mathrm{e}^{u}}\\mathrm{\\,d}u$",
      "$I=\\displaystyle\\int\\limits_{2}^{3}{\\mathrm{e}^{u}}\\mathrm{\\,d}u$",
      "$I=\\dfrac{1}{2}\\displaystyle\\int\\limits_{2}^{3}{\\mathrm{e}^{u}}\\mathrm{\\,d}u$"
    ],
    "answer": 1,
    "explain": "Đặt $u=x^2-2x+3$ suy ra $\\mathrm{\\,d}u=\\left(2x-2\\right)\\mathrm{\\,d}x\\Rightarrow \\dfrac{1}{2}\\mathrm{\\,d}u=\\left(x-1\\right)\\mathrm{\\,d}x$.<br>  Đổi cận $x=0\\Rightarrow u=3 \\text{ và } x=1\\Rightarrow u=2$. Khi đó ta có  $I = \\displaystyle\\int\\limits_{0}^{1}{\\left(x-1\\right)\\mathrm{e}^{x^2-2x+3}}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{3}^{2}{\\dfrac{1}{2}\\mathrm{e}^{u}}\\mathrm{\\,d}u=-\\dfrac{1}{2}\\displaystyle\\int\\limits_{2}^{3}{\\mathrm{e}^{u}}\\mathrm{\\,d}u.$  Vậy $I=-\\dfrac{1}{2}\\displaystyle\\int\\limits_{2}^{3}{\\mathrm{e}^{u}}\\mathrm{\\,d}u$."
  },
  {
    "id": "2D424TN33",
    "question": "Cho hàm số $y=f(x)$ biết $f(0)=\\dfrac{3}{2}$ và $f'(x)=x\\mathrm{e}^{x^2}$, $\\forall x \\in \\mathbb{R}$. Tính tích phân $I=\\displaystyle\\int\\limits_{0}^{1}xf(x)\\mathrm{\\,d}x$.",
    "options": [
      "$I=\\dfrac{\\mathrm{e}-3}{4}$",
      "$I=\\dfrac{\\mathrm{e}+1}{4}$",
      "$I=\\dfrac{\\mathrm{e}-1}{2}$",
      "$I=\\dfrac{\\mathrm{e}+2}{4}$"
    ],
    "answer": 1,
    "explain": "Ta có  \\[f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x = \\displaystyle\\int x\\mathrm{e}^{x^2}\\mathrm{\\,d}x = \\dfrac{1}{2}\\displaystyle\\int \\mathrm{e}^{x^2}\\mathrm{\\,d}\\left(x^2\\right)=\\dfrac{1}{2}\\mathrm{e}^{x^2} + C.\\]  Mà $f(0)=\\dfrac{3}{2}\\Rightarrow C=1$.<br>  Vậy $f(x)=\\dfrac{1}{2}\\mathrm{e}^{x^2} + 1$.<br>  Khi đó  \\[I=\\displaystyle\\int\\limits_{0}^{1}xf(x)\\mathrm{\\,d}x = \\displaystyle\\int\\limits_{0}^{1}x\\left(\\dfrac{1}{2}\\mathrm{e}^{x^2} + 1\\right)\\mathrm{\\,d}x =\\dfrac{1}{2}\\displaystyle\\int\\limits_{0}^{1}x\\mathrm{e}^{x^2}\\mathrm{\\,d}x + \\displaystyle\\int\\limits_{0}^{1}x\\mathrm{\\,d}x.\\]  Ta có  <br>- $I_1=\\dfrac{1}{2}\\displaystyle\\int\\limits_{0}^{1}x\\mathrm{e}^{x^2}\\mathrm{\\,d}x = \\dfrac{1}{4}\\displaystyle\\int\\limits_{0}^{1}\\mathrm{e}^{x^2}\\mathrm{\\,d}\\left(x^2\\right)=\\dfrac{1}{4}\\mathrm{e}^{x^2}\\bigg|^1_0 = \\dfrac{\\mathrm{e}-1}{4}$.<br>- $I_2=\\displaystyle\\int\\limits_{0}^{1}x\\mathrm{\\,d}x = \\dfrac{x^2}{2}\\bigg|^1_0 = \\dfrac{1}{2}$.  Vậy $I=I_1 + I_2 =\\dfrac{\\mathrm{e}-1}{4} + \\dfrac{1}{2}=\\dfrac{\\mathrm{e}+1}{4}$."
  },
  {
    "id": "2D421TN34",
    "question": "Tính tích phân $ I=\\displaystyle\\int\\limits_1^22x\\sqrt{x^2-1}\\mathrm{\\,d}x$ bằng cách đặt $ u=\\sqrt{x^2-1}$, mệnh đề nào dưới đây đúng?",
    "options": [
      "$ I=\\displaystyle\\int\\limits_0^{\\sqrt 3}{2u^2}\\mathrm{\\,d}u$",
      "$ I=\\displaystyle\\int\\limits_0^{\\sqrt 3}{2u}\\mathrm{\\,d}u$",
      "$ I=2\\displaystyle\\int\\limits_0^3 u\\mathrm{\\,d}u$",
      "$ I=\\displaystyle\\int\\limits_0^{\\sqrt 3}{u\\sqrt u}\\mathrm{\\,d}u$"
    ],
    "answer": 0,
    "explain": "Đặt $ u=\\sqrt{x^2-1}\\Rightarrow{u^2}=x^2-1\\Rightarrow u\\mathrm{\\,d}u=x\\mathrm{\\,d}x$.<br>  Đổi cận $ x=1\\Rightarrow u=0$; $ x=2\\Rightarrow u=\\sqrt 3 $.<br>  Nên $ I=\\displaystyle\\int\\limits_0^{\\sqrt 3} 2u^2\\mathrm{\\,d}u$."
  },
  {
    "id": "2D424TN35",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_1^5 \\dfrac{1}{x \\sqrt{3x + 1}}\\mathrm{\\,d}x$ ta được kết quả có dạng $a \\ln 3 + b \\ln 5$, với $a, b \\in \\mathbb{Z}$. Khi đó $2a + b^2$ bằng",
    "options": [
      "$ 4 $",
      "$ -3 $",
      "$ 0 $",
      "$ 5 $"
    ],
    "answer": 3,
    "explain": "Đặt $t=\\sqrt{3x+1}\\Rightarrow x=\\dfrac{t^2-1}{3}, \\mathrm{d}x=\\dfrac{2t}{3}\\mathrm{d}t$; đổi cận $x=1\\to t=2$, $x=5\\to t=4$.<br>$\\displaystyle I=\\int_2^4\\dfrac{1}{\\frac{t^2-1}{3}\\cdot t}\\cdot\\dfrac{2t}{3}\\mathrm{d}t=\\int_2^4\\dfrac{2}{t^2-1}\\mathrm{d}t=\\int_2^4\\left(\\dfrac{1}{t-1}-\\dfrac{1}{t+1}\\right)\\mathrm{d}t=\\Big[\\ln|t-1|-\\ln|t+1|\\Big]_2^4$<br>$=(\\ln3-\\ln5)-(\\ln1-\\ln3)=2\\ln3-\\ln5$.<br>Vậy $a=2,\\ b=-1$, nên $2a+b^2=4+1=5$."
  },
  {
    "id": "2D424TN36",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_0^{\\ln 2} 5 \\mathrm{e} ^{2x}\\cdot \\sqrt{4 \\mathrm{e}^x - 3} \\mathrm{\\,d}x$ ta được kết quả có dạng $\\dfrac{a \\sqrt{5} + b }{4}$, với $a, b \\in \\mathbb{Z}$. Khi đó $a + b^3$ bằng",
    "options": [
      "$ 1 $",
      "$ -2 $",
      "$ 0 $",
      "$ 4 $"
    ],
    "answer": 1,
    "explain": "Đặt $u=4e^x-3\\Rightarrow \\mathrm{d}u=4e^x\\mathrm{d}x$, và $e^x=\\dfrac{u+3}{4}$; đổi cận $x=0\\to u=1$, $x=\\ln2\\to u=5$.<br>$5e^{2x}\\sqrt u\\,\\mathrm{d}x=5e^x\\sqrt u\\cdot(e^x\\mathrm{d}x)=5\\cdot\\dfrac{u+3}{4}\\sqrt u\\cdot\\dfrac{\\mathrm{d}u}{4}=\\dfrac{5(u+3)\\sqrt u}{16}\\mathrm{d}u$.<br>$\\displaystyle I=\\dfrac{5}{16}\\int_1^5\\left(u^{3/2}+3u^{1/2}\\right)\\mathrm{d}u=\\dfrac{5}{16}\\Big[\\dfrac25u^{5/2}+2u^{3/2}\\Big]_1^5=\\dfrac{5}{16}\\left[(10\\sqrt5+10\\sqrt5)-\\left(\\dfrac25+2\\right)\\right]=\\dfrac{5}{16}\\left(20\\sqrt5-\\dfrac{12}{5}\\right)=\\dfrac{25\\sqrt5-3}{4}$.<br>Vậy $a=25,\\ b=-3$, nên $a+b^3=25-27=-2$."
  },
  {
    "id": "2D423TN37",
    "question": "Có bao nhiêu giá trị của $a$ trong đoạn $\\left[\\dfrac{\\pi}{4};2\\pi \\right] $ thỏa mãn $\\displaystyle\\int\\limits_0^a {\\dfrac{\\sin x}{\\sqrt{1+3 \\cos x}}\\mathrm{\\,d}x}=\\dfrac{2}{3}$?",
    "options": [
      "$4$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "answer": 2,
    "explain": "Đặt $t=1+3 \\cos x$, thì $\\mathrm{\\,d}t=-3\\sin x \\mathrm{\\,d}x\\Rightarrow \\sin x \\mathrm{\\,d}x = -\\dfrac{\\mathrm{\\,d}t}{3}$.<br>  Đổi cận: $x=0 \\Rightarrow t=4; x=a \\Rightarrow t=1+3 \\cos a$.<br>  Ta có  $\\displaystyle\\int\\limits_0^a {\\dfrac{\\sin x}{\\sqrt{1+3 \\cos x}}\\mathrm{d}x}=\\dfrac{2}{3}$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_4^{1+3\\cos a} {-\\dfrac{\\mathrm{d}t}{3\\sqrt{t}}}= \\dfrac{2}{3}$<br>$\\Leftrightarrow -\\dfrac{2}{3}\\sqrt{t}\\Bigg|_{4}^{1+3 \\cos a}=\\dfrac{2}{3}$<br>$\\Leftrightarrow -\\dfrac{2}{3}\\left( \\sqrt{1+3\\cos a}-2\\right) = \\dfrac{2}{3} \\Leftrightarrow \\sqrt{1+3\\cos a} =1$<br>$\\Leftrightarrow \\cos a = 0\\Leftrightarrow a=\\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z}).$  Kết hợp điều kiện ta có $a\\in\\left\\{\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}\\right\\}$."
  },
  {
    "id": "2D424TN38",
    "question": "Biết tích phân $ \\displaystyle \\int \\limits_0^{\\ln 6}\\dfrac{\\mathrm{e}^x}{1+\\sqrt{\\mathrm{e}^x+3}}\\mathrm{\\,d}x=a+b\\ln 2+c\\ln 3 $ với $ a $, $ b $, $ c $ là các số nguyên. Giá trị của biểu thức $ T=a+b+c $ là",
    "options": [
      "$T=-1$",
      "$T=1$",
      "$T=2$",
      "$T=0$"
    ],
    "answer": 3,
    "explain": "Đặt $ t=\\sqrt{\\mathrm{e}^x+3} \\Rightarrow t^2=\\mathrm{e}^x+3 \\Rightarrow 2t \\mathrm{\\,d}t=\\mathrm{e}^x\\mathrm{\\,d}x$.<br>  Đổi cận $ x=0\\Rightarrow t=2 \\text{ và } x=\\ln 6\\Rightarrow t=3. $<br>  Ta có   $\\displaystyle \\int \\limits_0^{\\ln 6} \\dfrac{\\mathrm{e}^x}{1+\\sqrt{\\mathrm{e}^x+3}}\\mathrm{\\,d}x  = \\displaystyle \\int \\limits_2^3 \\dfrac{2t \\mathrm{\\,d}t}{1+t} =\\displaystyle \\int \\limits_2^3 \\left(2-\\dfrac{2}{1+t}\\right)\\mathrm{\\,d}t$<br>$= \\left(2t-2\\ln|1+t| \\right)\\bigg|_2^3=\\left(6-2\\ln 4 \\right)-\\left(4-2\\ln 3 \\right)=2-4\\ln 2+2\\ln 3.$  Vậy $ a=2 $, $ b=-4 $, $ c=2\\Rightarrow T=a+b+c=0 $."
  },
  {
    "id": "2D424TN39",
    "question": "Cho $\\displaystyle\\int\\limits_0^3\\dfrac{1}{4+2\\sqrt{x+1}}\\mathrm{\\,d}x=a+2\\ln b$ với $a$, $b$ là các số hữu tỉ. Tính $P=a+b$.",
    "options": [
      "$P=\\dfrac{1}{2}$",
      "$P=\\dfrac{1}{4}$",
      "$P=\\dfrac{7}{4}$",
      "$P=\\dfrac{7}{3}$"
    ],
    "answer": 2,
    "explain": "Đặt $t=\\sqrt{x+1}\\Rightarrow t^2=x+1\\Rightarrow2t\\mathrm{\\,d}t=\\mathrm{d}x$.<br>  Đổi cận: $x=0\\Rightarrow t=1$, $x=3\\Rightarrow t=2$.<br>  Suy ra   $\\displaystyle\\int\\limits_0^3\\dfrac{1}{4+2\\sqrt{x+1}}\\mathrm{\\,d}x = \\displaystyle\\int \\limits_1^2\\dfrac{1}{4+2t}\\cdot 2t\\mathrm{\\,d}t=\\displaystyle\\int\\limits_1^2\\dfrac{t}{t+2}\\mathrm{\\,d}t =\\displaystyle\\int\\limits_1^2\\left(1-\\dfrac{2}{t+2}\\right)\\mathrm{\\,d}t$<br>$= \\left(t-2\\ln|t+2|\\right)\\Big|_1^2=2-2\\ln4-1+2\\ln3=1+2\\ln\\dfrac{3}{4}.$   Suy ra $a=1$, $b=\\dfrac{3}{4}$.<br>  Vậy $P=a+b=1+\\dfrac{3}{4}=\\dfrac{7}{4}$."
  },
  {
    "id": "2D421TN40",
    "question": "Cho $\\displaystyle I=\\int\\limits_{0}^{2} \\dfrac{x^{2}}{\\sqrt{x^{3}+1}} \\mathrm{\\, d} x$. Đặt $u=\\sqrt{x^{3}+1}$, mệnh đề nào sau đây là đúng?",
    "options": [
      "$\\displaystyle I=\\int\\limits_{1}^{3} \\dfrac{\\mathrm{d} u}{u}$",
      "$\\displaystyle I=\\dfrac{3}{2} \\int\\limits_{1}^{3} \\mathrm{d} u$",
      "$\\displaystyle I=\\dfrac{3}{2} \\int\\limits_{0}^{2} \\mathrm{d} u$",
      "$\\displaystyle I=\\dfrac{2}{3} \\int\\limits_{1}^{3} \\mathrm{d} u$"
    ],
    "answer": 3,
    "explain": "Đặt $u=\\sqrt{x^3+1}$. Ta có $u^2=x^3+1 \\Rightarrow 2u\\mathrm{\\, d} u=3x^2\\mathrm{\\, d} x \\Rightarrow x^2\\mathrm{\\, d} x=\\dfrac{2}{3}u\\mathrm{\\, d} u$.<br>  Đổi cận   <br><img src=\"data/12/2D4/im2D4/2D42_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>  Khi đó, ta có $\\displaystyle I=\\int\\limits_{1}^{3}\\dfrac{1}{u}\\cdot \\dfrac{2}{3}u\\mathrm{\\, d} u=\\dfrac{2}{3}\\int\\limits_{1}^{3}\\mathrm{\\, d} u$  ."
  },
  {
    "id": "2D424TN41",
    "question": "Biết rằng tồn tại duy nhất bộ số $a$, $b$, $c\\in \\mathbb{N}^*$ và $\\dfrac{b}{c}$ là phân số tối giản sao cho $\\displaystyle\\int\\limits_{\\ln 3}^{\\ln 8}\\dfrac{\\mathrm{e}^x+2}{\\sqrt{1+\\mathrm{e}^x}}\\mathrm{\\,d}x=a+2\\ln\\dfrac{b}{c}$. Giá trị của biểu thức $a+b+c$ thuộc khoảng",
    "options": [
      "$(11;15)$",
      "$(1;5)$",
      "$16;20)$",
      "$(6;10)$"
    ],
    "answer": 3,
    "explain": "Đặt $t=\\sqrt{1+\\mathrm{e}^x}\\Rightarrow t^2-1=\\mathrm{e}^x\\Rightarrow 2t\\mathrm{\\,d}t=\\mathrm{e}^x\\mathrm{\\,d}x$.<br>  Đổi cận: $x=\\ln 3\\Rightarrow t=2$; $x=\\ln 8\\Rightarrow t=3$.<br>  Khi đó   $\\displaystyle\\int\\limits_{\\ln 3}^{\\ln 8}\\dfrac{\\mathrm{e}^x+2}{\\sqrt{1+\\mathrm{e}^x}}\\mathrm{\\,d}x = \\displaystyle\\int\\limits_{\\ln3}^{\\ln 8}\\dfrac{(\\mathrm{e}^x+2)}{\\mathrm{e}^x\\sqrt{1+\\mathrm{e}^x}}\\mathrm{e}^x\\mathrm{\\,d}x=\\displaystyle\\int\\limits_2^3\\dfrac{t^2-1+2}{(t^2-1)t}\\cdot 2t\\mathrm{\\,d}t=2\\displaystyle\\int\\limits_2^3\\left(1+\\dfrac{2}{t^2-1}\\right)\\mathrm{\\,d}t$<br>$= 2\\left(t+\\dfrac{2}{2}\\ln\\left|\\dfrac{t-1}{t+1}\\right|\\right)\\Bigg|_2^3=2+2\\ln\\dfrac{3}{2}.$  Suy ra $a=2$, $b=3$, $c=2$.<br>  Vậy $a+b+c=7\\in (6;10)$."
  },
  {
    "id": "2D424TN42",
    "question": "Cho hàm số $ f(x)$ có $f(0)=\\dfrac{1}{2}$ và $ f'(x)=\\dfrac{2}{(\\mathrm{e}^x+\\mathrm{e}^{-x})^2},\\forall x\\in \\mathbb{R}$. Khi đó $\\displaystyle\\int\\limits_0^1f(x)\\mathrm{\\,d}x$ bằng",
    "options": [
      "$\\dfrac{1}{2}\\ln \\dfrac{\\mathrm{e}^2+1}{2}$",
      "$\\dfrac{1}{2}\\ln \\dfrac{\\mathrm{e}^2-1}{2}$",
      "$\\dfrac{1}{2}\\ln \\dfrac{\\mathrm{e}^2+1}{4}$",
      "$\\dfrac{1}{2}\\ln (\\mathrm{e}^2+1)$"
    ],
    "answer": 0,
    "explain": "Ta có $f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\dfrac{2}{(\\mathrm{e}^x+\\mathrm{e}^{-x})^2}\\mathrm{\\,d}x=\\displaystyle\\int \\dfrac{2\\mathrm{e}^{2x}}{(\\mathrm{e}^{2x}+1)^2}\\mathrm{\\,d}x$.<br>  Đặt $t=\\mathrm{e}^{2x}. \\Rightarrow \\mathrm{\\,d}t=2\\mathrm{e}^{2x}\\mathrm{\\,d}x$. Ta được  $f(x)= \\displaystyle\\int \\dfrac{1}{(t+1)^2} \\mathrm{\\,d}t=\\dfrac{-1}{t+1}+C=\\dfrac{-1}{\\mathrm{e}^{2x}+1}+C.$  Mà $f(0)=\\dfrac{1}{2} \\Rightarrow C=-1$. Do đó  $I=\\displaystyle\\int\\limits_0^1f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^1 \\left(\\dfrac{-1}{\\mathrm{e}^{2x}+1}-1\\right) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^1 \\dfrac{-1}{\\mathrm{e}^{2x}+1} \\mathrm{\\,d}x-1.$  Đặt $u=\\mathrm{e}^{2x}\\Rightarrow \\mathrm{\\,d}t=2\\mathrm{e}^{2x}\\mathrm{\\,d}x$.<br>  Đổi cận: $x=0 \\Rightarrow u=1; x=1\\Rightarrow u=\\mathrm{e}^2$. Từ đó  $I=\\displaystyle\\int\\limits_1^{\\mathrm{e}^2} \\dfrac{-1}{2u(u+1)}\\mathrm{\\,d}x-1=\\displaystyle\\int\\limits_1^{\\mathrm{e}^2} \\left[\\dfrac{-1}{2u}+\\dfrac{1}{2(u+1)}\\right]\\mathrm{\\,d}x-1=\\left[\\dfrac{-1}{2}\\ln u+\\dfrac{1}{2}\\ln(u+1)\\right]\\Big|_1^{\\mathrm{e}^2}-1=\\dfrac{1}{2}\\ln\\dfrac{\\mathrm{e}^2+1}{2}.$"
  },
  {
    "id": "2D424TN43",
    "question": "Cho $\\displaystyle \\int\\limits_{0}^{1} \\dfrac{x}{(x+2)^{2}} \\mathrm{\\, d} x=a+b \\ln 2+c \\ln 3$, với $a$, $b$, $c$ là các số hữu tỷ. Giá trị biểu thức $3 a+b+c$ bằng",
    "options": [
      "$-2$",
      "$-1$",
      "$2$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Đặt $t=x+2$, ta có $\\mathrm{d}t=\\mathrm{d}x$.<br>  Đổi cận \\quad   <br><img src=\"data/12/2D4/im2D4/2D42_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>  Khi đó, ta có  $I= \\int\\limits_{0}^{1} \\dfrac{x}{(x+2)^{2}} \\mathrm{\\, d} x = \\int\\limits_{2}^{3}\\dfrac{t-2}{t^2}\\mathrm{\\, d} t=\\int\\limits_{2}^{3}\\left(\\dfrac{1}{t}-\\dfrac{2}{t^2}\\right)$<br>$= \\left(\\ln|t|+\\dfrac{2}{t}\\right)\\bigg|_{2}^{3}=\\left(\\ln 3+\\dfrac{2}{3}\\right)-\\left(\\ln 2+1\\right)=-\\dfrac{1}{3}-\\ln 2+\\ln3.$  Do đó, ta có $a=-\\dfrac{1}{3} \\text{ và } b=-1 \\text{ và } c=1$. Suy ra $3a+b+c=-1$."
  },
  {
    "id": "2D425TN44",
    "question": "Biết $I=\\displaystyle\\int\\limits_2^4\\dfrac{2x+1}{x^2+x}\\mathrm{\\, d}x=a\\ln2+b\\ln3+c\\ln5$, với $a$, $b$, $c$ là các số nguyên. Giá trị của biểu thức $P=2a+3b+4c$ thuộc khoảng nào sau đây?",
    "options": [
      "$(-\\infty;-2)$",
      "$(2;6)$",
      "$(6;+\\infty)$",
      "$(-2;2)$"
    ],
    "answer": 1,
    "explain": "Ta có  $I=\\displaystyle\\int\\limits_2^4\\dfrac{2x+1}{x^2+x}\\mathrm{\\, d}x = \\displaystyle\\int\\limits_2^4\\dfrac{1}{x^2+x}\\mathrm{\\, d}(x^2+x)$<br>$= \\ln|x^2+x|\\Big|_2^4=\\ln20-\\ln6=2\\ln2+\\ln5-\\ln2-\\ln3=\\ln2-\\ln3+\\ln5.$   Vậy $a=1$, $b=-1$, $c=1$ $\\Rightarrow P=2a+3b+4c=3\\in (2;6)$."
  },
  {
    "id": "2D424TN45",
    "question": "Biết $\\displaystyle\\int\\limits_0^{4} \\dfrac{\\mathrm{\\,d}x}{\\sqrt{2x+1}+3} = a+b\\ln 2+c\\ln 3$, với $a$, $b$, $c$ là các số hữu tỉ. Tính $S=a+b+c$.",
    "options": [
      "$S=4$",
      "$S=10$",
      "$S=-2$",
      "$S=2$"
    ],
    "answer": 3,
    "explain": "Đặt $t=\\sqrt{2x+1}+3$. Ta có $2x+1=(t-3)^2 \\Rightarrow \\mathrm{\\, d} x=(t-3) \\mathrm{\\, d} t$. <br>  Đổi cận   <br><img src=\"data/12/2D4/im2D4/2D42_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>  Khi đó, ta có  $\\displaystyle\\int\\limits_0^{4} \\dfrac{\\mathrm{\\,d}x}{\\sqrt{2x+1}+3} =\\int\\limits_{4}^{6}\\dfrac{t-3}{t} \\mathrm{\\, d} t=\\int\\limits_{4}^{6}\\left(1-\\dfrac{3}{t}\\right) \\mathrm{\\, d} t$<br>$=\\left(t-3\\ln |t|\\right)\\Big|_{4}^{6}=(6-3\\ln 6)-(4-3\\ln 4)$<br>$=6-3\\ln 3 -3\\ln 2-4+6\\ln 2=2+3\\ln 2-3\\ln 3.$  Do đó $a=2$, $b=3$ và $c=-3$. Vậy $a+b+c=2$."
  },
  {
    "id": "2D424TN46",
    "question": "Gọi $a$, $b$ là các số hữu tỉ sao cho $\\displaystyle\\int\\limits_0^1 \\dfrac{x + 1}{x^2 + 1} \\mathrm{\\,d}x = a\\ln 2 + b\\pi$. Giá trị của tích $ab$ bằng",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{1}{8}$",
      "$\\dfrac{1}{6}$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits_0^1 \\dfrac{x + 1}{x^2 + 1} \\mathrm{\\,d}x = \\int\\limits_0^1 \\dfrac{x}{x^2 + 1} \\mathrm{\\,d}x + \\int\\limits_0^1 \\dfrac{1}{x^2 + 1} \\mathrm{\\,d}x = \\left[ \\dfrac{1}{2}\\ln \\left|x^2 + 1 \\right| + \\arctan (x) \\right]\\Bigg|_{0}^1 = \\dfrac{1}{2}\\ln 2 + \\dfrac{1}{4}\\pi$.<br>  Do đó $a = \\dfrac{1}{2}$, $b = \\dfrac{1}{4}$ nên $ab = \\dfrac{1}{2}\\cdot \\dfrac{1}{4} = \\dfrac{1}{8}$."
  },
  {
    "id": "2D423TN47",
    "question": "Biết tích phân $\\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} \\dfrac{5\\sin x+\\cos x}{\\sin x+\\cos x} \\mathrm{\\,d}x =a\\pi +\\ln b$ với $a$, $b$ là các số hữu tỉ. Tính $S=a+b$.",
    "options": [
      "$S=\\dfrac{5}{4}$",
      "$S=\\dfrac{11}{4}$",
      "$S=\\dfrac{3}{4}$",
      "$S=2$"
    ],
    "answer": 0,
    "explain": "$I=\\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} \\dfrac{5\\sin x+\\cos x}{\\sin x+\\cos x} \\mathrm{\\,d}x  = \\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} \\dfrac{3(\\sin x+\\cos x)+2(\\sin x-\\cos x)}{\\sin x+\\cos x} \\mathrm{\\,d}x$<br>$= \\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} \\left( 3+\\dfrac{2(\\sin x-\\cos x)}{\\sin x+\\cos x} \\right) \\mathrm{\\,d}x$<br>$= \\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} 3 \\mathrm{\\,d}x +\\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} \\dfrac{-2(\\cos x-\\sin x)}{\\sin x+\\cos x} \\mathrm{\\,d}x$<br>$= \\dfrac{3\\pi}{4}+J.$  Đặt $t=\\sin x+\\cos x \\Rightarrow \\mathrm{d}t =(\\cos x-\\sin x) \\mathrm{d}x$.<br>  Đổi cận: $x=0 \\Rightarrow t=1$, $x=\\dfrac{\\pi}{4} \\Rightarrow t=\\sqrt{2}$.<br>  Khi đó $J=\\displaystyle \\int \\limits_0^{\\frac{\\pi}{4}} \\dfrac{-2(\\cos x-\\sin x)}{\\sin x+\\cos x} \\mathrm{\\,d}x  =\\displaystyle \\int \\limits_1^{\\sqrt{2}} \\dfrac{-2\\mathrm{\\,d}t}{t}  =-2\\ln|t| \\Big|_1^{\\sqrt{2}}  =-\\ln 2 =\\ln \\dfrac{1}{2}$.<br>  Suy ra $I=\\dfrac{3\\pi}{4}-\\ln 2$.  Mà $I=a\\pi+\\ln b$ nên $a=\\dfrac{3}{4}$, $b=\\dfrac{1}{2}$.<br>  Vậy $S=a+b=\\dfrac{5}{4}$."
  },
  {
    "id": "2D423TN48",
    "question": "Biết rằng $I=\\displaystyle\\int\\limits_0^\\frac{\\pi}{2} \\dfrac{-4\\sin x+7\\cos x}{2\\sin x+3\\cos x}\\mathrm{\\,d}x=a+2\\ln \\dfrac{b}{c}$, với $a&gt;0; b,c \\in \\mathbb{N}^*; \\dfrac{b}{c}$ tối giản. Hãy tính giá trị biểu thức $P=a-b+c$.",
    "options": [
      "$\\pi-1$",
      "$\\dfrac{\\pi}{2}+1$",
      "$\\dfrac{\\pi}{2}-1$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Ta có  $I = \\displaystyle\\int\\limits_0^\\frac{\\pi}{2} \\dfrac{4\\cos x-6\\sin x}{2\\sin x+3\\cos x}\\mathrm{\\,d}x+\\displaystyle\\int\\limits_0^\\frac{\\pi}{2} 1\\mathrm{\\,d}x$<br>$= \\displaystyle\\int\\limits_0^\\frac{\\pi}{2} \\dfrac{2}{2\\sin x+3\\cos x}\\mathrm{\\,d}(2\\sin x+3\\cos x)+\\dfrac{\\pi}{2}$<br>$= 2\\ln |2\\sin x +3\\cos x| \\big|_0^{\\tfrac{\\pi}{2}}+\\dfrac{\\pi}{2}$<br>$= 2\\ln 2-2\\ln 3+\\dfrac{\\pi}{2}$<br>$= 2\\ln \\dfrac{2}{3}+\\dfrac{\\pi}{2}.$  Vậy $P=\\dfrac{\\pi}{2}-2+3=\\dfrac{\\pi}{2}+1$."
  },
  {
    "id": "2D425TN49",
    "question": "cau28  Biết tích phân $\\displaystyle \\int \\limits_{0}^{\\frac{1}{2}}\\sqrt{1-x^2} \\mathrm{\\,d}x= \\frac{\\pi}{a}+\\frac{\\sqrt{3}}{b};\\ a,b \\in \\mathbb{R}$. Tổng $a+b$ bằng",
    "options": [
      "$20$",
      "$15$",
      "$12$",
      "$10$"
    ],
    "answer": 0,
    "explain": "Đặt $x = \\sin t; \\mathrm{\\,d}x = \\cos t \\mathrm{\\,d}t$.<br>  Đổi cận $x=0, t=0; x= \\dfrac{1}{2}, t = \\dfrac{\\pi}{6}$.<br>  Ta có $ \\sqrt{1-x^2} = \\sqrt{1-\\sin^{2}t} = \\cos t$ vì $t \\in \\left(0;\\dfrac{\\pi}{6} \\right) $.<br>  Do đó  $\\displaystyle\\int\\limits_{0}^{\\frac{1}{2}}\\sqrt{1-x^2}\\mathrm{\\,d}x = \\displaystyle\\int\\limits_{0}^{\\frac{\\pi}{6}}\\cos^{2} t \\mathrm{\\,d}t$<br>$= \\displaystyle\\int\\limits_{0}^{\\frac{\\pi}{6}}\\left( \\dfrac{1+\\cos 2t}{2}\\right)\\mathrm{\\,d}t$<br>$= \\dfrac{1}{2}\\left[ t+\\dfrac{\\sin 2t}{2}\\right]\\Bigg|_{0}^{\\frac{\\pi}{6}}$<br>$= \\dfrac{1}{2}\\left( \\dfrac{\\pi}{6}+\\dfrac{\\sqrt{3}}{4}\\right)$<br>$= \\dfrac{\\pi}{12}+\\dfrac{\\sqrt{3}}{8}.$  Nên $a=12; b=8 \\Rightarrow a+b = 20$."
  },
  {
    "id": "2D421TN50",
    "question": "Cho tích phân $I=\\displaystyle\\int\\limits_{\\sqrt{3}}^3 \\dfrac{1}{x^2+3}$ $\\textrm{d}x$. Khẳng định nào sau đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$I=\\dfrac{\\sqrt{3}}{3}\\displaystyle\\int\\limits_{\\frac{\\pi}{4}}^{\\frac{\\pi}{3}} \\textrm{d}t$",
      "$I=\\dfrac{\\sqrt{3}}{3}\\displaystyle\\int\\limits_{\\frac{\\pi}{4}}^{\\frac{\\pi}{3}} t \\textrm{d}t$",
      "$I=\\sqrt{3}\\displaystyle\\int\\limits_{\\frac{\\pi}{4}}^{\\frac{\\pi}{3}} \\textrm{d}t$",
      "$I=\\dfrac{\\sqrt{3}}{3}\\displaystyle\\int\\limits_{\\frac{\\pi}{4}}^{\\frac{\\pi}{3}} \\dfrac{1}{t} \\textrm{d}t$"
    ],
    "answer": 0,
    "explain": "Đặt $x=\\sqrt3\\tan t\\Rightarrow \\mathrm{d}x=\\sqrt3\\sec^2t\\,\\mathrm{d}t$, $x^2+3=3\\sec^2t$; đổi cận $x=\\sqrt3\\to t=\\pi/4$, $x=3\\to t=\\pi/3$.<br>$\\displaystyle I=\\int_{\\pi/4}^{\\pi/3}\\dfrac{\\sqrt3\\sec^2t}{3\\sec^2t}\\mathrm{d}t=\\dfrac{\\sqrt3}{3}\\int_{\\pi/4}^{\\pi/3}\\mathrm{d}t$."
  },
  {
    "id": "2D423TN51",
    "question": "Cho $\\displaystyle\\int\\limits_0^a\\dfrac{\\mathrm{\\,d}x}{a^2+x^2}, (a&gt;0)$ và đặt $x=a\\tan t.$ Trong các mệnh đề sau đây, mệnh đề nào là mệnh đề {\\bf sai}?",
    "options": [
      "$I=\\displaystyle\\int\\limits_0^a\\dfrac{1}{a}\\mathrm{\\,d}t$",
      "$\\mathrm{d}x=a(1+\\tan^2t)\\mathrm{d}t$",
      "$a^2+x^2=a^2(1+\\tan^2t)$",
      "$I=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}}\\dfrac{1}{a}\\mathrm{\\,d}t$"
    ],
    "answer": 0,
    "explain": "Với $x=a\\tan t$: $\\mathrm{d}x=a(1+\\tan^2t)\\mathrm{d}t$ (đúng, vì $\\sec^2t=1+\\tan^2t$) và $a^2+x^2=a^2(1+\\tan^2t)$ (đúng).<br>Đổi cận đúng phải là $x=0\\to t=0$, $x=a\\to t=\\pi/4$, nên $\\displaystyle I=\\int_0^{\\pi/4}\\dfrac1a\\mathrm{d}t$ (đây chính là đáp án D, đúng).<br>Đáp án A viết cận là $0$ đến $a$ (biến $t$) thay vì $0$ đến $\\pi/4$ là sai — đây là mệnh đề sai cần chọn."
  },
  {
    "id": "2D425TN52",
    "question": "Biết $\\displaystyle \\int\\limits_{0}^{a} \\sqrt{4-x^2}\\mathrm{\\,d}x = 1+\\frac{\\pi}{2}$, trong đó $a$ là số thực dương. Hãy tìm $a$.",
    "options": [
      "$a=\\sqrt{2}$",
      "$a=2$",
      "$a=1$",
      "$a=3$"
    ],
    "answer": 0,
    "explain": "Đặt $x=2\\sin\\theta\\Rightarrow \\mathrm{d}x=2\\cos\\theta\\,\\mathrm{d}\\theta$, $\\sqrt{4-x^2}=2\\cos\\theta$.<br>$\\displaystyle\\int\\sqrt{4-x^2}\\,\\mathrm{d}x=\\int 4\\cos^2\\theta\\,\\mathrm{d}\\theta=2\\theta+\\sin2\\theta+C$, với $\\theta=\\arcsin\\dfrac{x}{2}$.<br>Với $a=\\sqrt2$: $\\theta=\\arcsin\\dfrac{\\sqrt2}{2}=\\dfrac{\\pi}{4}$, giá trị tích phân $=2\\cdot\\dfrac{\\pi}{4}+\\sin\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}+1$, đúng bằng vế phải.<br>Vậy $a=\\sqrt2$."
  },
  {
    "id": "2D425TN53",
    "question": "Cho biết $\\displaystyle\\int\\limits_0^1\\dfrac{1}{1+x^2}\\,dx =\\dfrac{\\pi}{4}$ và $\\displaystyle\\int\\limits_0^1 \\dfrac{1+x^4}{1+x^6}\\,dx=\\dfrac{a}{b}$. Khi đó tích số $a\\cdot b$ là",
    "options": [
      "$ab=3\\pi$",
      "$ab=\\pi$",
      "$ab=4\\pi$",
      "$ab=2\\pi$"
    ],
    "answer": 0,
    "explain": "Dựa vào két quả của tích phân đầu ta có thể đoán $a=\\pi$ còn $b$ là giá trị còn lại của tích.<br>  Dùng máy tính casio tính $\\displaystyle\\int\\limits_0^1\\dfrac{1+x^4}{1+x^6}\\,dx$ lưu vào biến $X$.<br>  Nhập vào máy tính biểu thức $X-\\dfrac{A}{B}$ bấm &lt;strong&gt;CALC&lt;/strong&gt; nhập giá trị của $A$ và $B$ bấm bằng. Nếu kết quả nào bằng $0$ thì đó là đáp án đúng."
  },
  {
    "id": "2D425TN54",
    "question": "Cho $\\displaystyle\\int\\limits_{\\frac{1}{\\sqrt{3}}}^1 \\dfrac{\\sqrt{x^2+1}}{x^4}\\mathrm{\\, d}x= -\\dfrac{1}{a}\\bigl(b\\sqrt{b}-c\\bigr)$ ($a$, $b$, $c$ là các số nguyên dương nhỏ hơn 10). Tính tổng $a+b+c$.",
    "options": [
      "12",
      "21",
      "13",
      "6"
    ],
    "answer": 2,
    "explain": "Đặt $x=\\tan\\theta\\Rightarrow \\sqrt{x^2+1}=\\sec\\theta$, $\\mathrm{d}x=\\sec^2\\theta\\,\\mathrm{d}\\theta$; đổi cận $x=\\tfrac1{\\sqrt3}\\to\\theta=\\pi/6$, $x=1\\to\\theta=\\pi/4$.<br>Biểu thức dưới dấu tích phân trở thành $\\dfrac{\\sec\\theta\\cdot\\sec^2\\theta}{\\tan^4\\theta}\\mathrm{d}\\theta=\\dfrac{\\cos\\theta}{\\sin^4\\theta}\\mathrm{d}\\theta$.<br>Đặt $u=\\sin\\theta$: $\\displaystyle\\int\\dfrac{\\mathrm{d}u}{u^4}=-\\dfrac{1}{3u^3}+C=-\\dfrac{1}{3\\sin^3\\theta}+C$.<br>Tại $\\theta=\\pi/4$: $\\sin^3\\theta=\\dfrac{\\sqrt2}{4}$, giá trị $=-\\dfrac{2\\sqrt2}{3}$. Tại $\\theta=\\pi/6$: $\\sin^3\\theta=\\dfrac18$, giá trị $=-\\dfrac83$.<br>Tích phân $=-\\dfrac{2\\sqrt2}{3}-\\left(-\\dfrac83\\right)=\\dfrac{8-2\\sqrt2}{3}=-\\dfrac13(2\\sqrt2-8)$.<br>Vậy $a=3,\\ b=2,\\ c=8$, nên $a+b+c=13$."
  },
  {
    "id": "2D423TN55",
    "question": "Đổi biến $x=2\\sin t$ thì tích phân $\\displaystyle\\int\\limits_0^1 \\dfrac{\\mathrm{d}x}{\\sqrt{4-x^2}}$ trở thành",
    "options": [
      "$\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}} t\\mathrm{d}t$",
      "$\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{3}} t\\mathrm{d}t$",
      "$\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}} \\mathrm{d}t$",
      "$\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}} \\dfrac{\\mathrm{d}t}{t}$"
    ],
    "answer": 2,
    "explain": "Xét $I=\\displaystyle\\int\\limits_0^1 \\dfrac{\\mathrm{d}x}{\\sqrt{4-x^2}}$. <br>  Đặt $x=2\\sin t$ với $t\\in \\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)\\Rightarrow \\mathrm{d}x=2\\cos t\\mathrm{d}t$. <br>  Đổi cận:   $x=0 \\Rightarrow t=0.$<br>$x=1 \\Rightarrow t=\\dfrac{\\pi}{6}.$  Ta có: $I=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}} \\dfrac{2\\cos t}{\\sqrt{4-4\\sin^2t}}\\mathrm{d}t=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}} \\dfrac{2\\cos t}{\\sqrt{4\\cos^2t}}\\mathrm{d}t=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}} \\mathrm{d}t.$"
  },
  {
    "id": "2D424TN56",
    "question": "Cho $\\displaystyle\\int\\limits_0^1(x+3) \\mathrm{e}^{x}\\mathrm{\\,d}x=a \\mathrm{e}+b$, $(a, b \\in \\mathbb{Q})$. Giá trị của $T=2 a-3 b$ bằng",
    "options": [
      "$T=22$",
      "$T=12$",
      "$T=18$",
      "$T=0$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int\\limits_0^1(x+3) \\mathrm{e}^{x}\\mathrm{\\,d}x  =\\displaystyle\\int\\limits_0^1(x+3) \\mathrm{\\,d}\\left(\\mathrm{e}^{x}\\right)  =(x+3)\\mathrm{e}^x\\bigg|_0^1-\\displaystyle\\int\\limits_{0}^{1}\\mathrm{e}^x\\mathrm{\\,d}x  =4\\mathrm{e}-3-\\mathrm{e}^x\\bigg|_0^1  =4\\mathrm{e}-3-(\\mathrm{e}-1)=3\\mathrm{e}-2$.<br>  Suy ra $a=3$, $b=-2$. Vậy $T=2a-3b=12$."
  },
  {
    "id": "2D424TN57",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_0^1 (x-2)\\mathrm{e}^{2x} \\mathrm{\\,d}x$ bằng",
    "options": [
      "$\\dfrac{5-3\\mathrm{e}^2}{2}$",
      "$\\dfrac{-5-3\\mathrm{e}^2}{4}$",
      "$\\dfrac{5-3\\mathrm{e}^2}{4}$",
      "$\\dfrac{5+3\\mathrm{e}^2}{4}$"
    ],
    "answer": 2,
    "explain": "Đặt $u=x-2\\Rightarrow \\mathrm{\\,d}u=\\mathrm{\\,d}x, \\mathrm{\\,d}v=\\mathrm{e}^{2x}\\mathrm{\\,d}x\\Rightarrow v=\\dfrac{1}{2}\\mathrm{e}^{2x}$.<br>  Do đó $I=(x-2)\\cdot\\dfrac{1}{2}\\mathrm{e}^{2x}\\bigg|_{0}^{1}-\\displaystyle\\int\\limits_0^1 \\dfrac{1}{2}\\mathrm{e}^{2x} \\mathrm{\\,d}x=-\\dfrac{1}{2}\\mathrm{e}^2+1-\\dfrac{1}{4}\\mathrm{e}^{2x}\\bigg|_{0}^{1}=\\dfrac{5-3\\mathrm{e}^2}{4}$."
  },
  {
    "id": "2D423TN58",
    "question": "Biết tích phân $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}}(1+x)\\cos 2x\\mathrm{\\,d}x=\\dfrac{1}{a}+\\dfrac{\\pi}{b}$. Giá trị của $a+b$ bằng",
    "options": [
      "$24$",
      "$32$",
      "$12$",
      "$4$"
    ],
    "answer": 2,
    "explain": "Đặt $u=1+x$, $\\mathrm{d}v=\\cos2x\\mathrm{\\,d}x$, ta có $\\mathrm{d}u=\\mathrm{d}x$, $v=\\dfrac{1}{2}\\sin 2x$.<br>  Do đó,   $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{4}}(1+x)\\cos 2x\\mathrm{\\,d}x=\\left[(1+x)\\cdot \\dfrac{1}{2}\\sin 2x \\right]\\Bigg|_0^{\\frac{\\pi}{4}}-\\displaystyle\\int\\limits_0^{\\frac{\\pi}{4}} \\dfrac{1}{2}\\sin 2x\\mathrm{\\,d}x=\\dfrac{1}{2}\\cdot \\left(1 +\\dfrac{\\pi}{4}\\right) +\\left( \\dfrac{1}{4}\\cos2x\\right) \\Bigg|_0^{\\frac{\\pi}{4}}=\\dfrac{1}{4} +\\dfrac{\\pi}{8}.$  Suy ra $a=4$, $b=8$, $a+b=12$."
  },
  {
    "id": "2D424TN59",
    "question": "Tích phân $\\displaystyle\\int\\limits_1^{\\mathrm{e}}\\dfrac{\\ln x}{x^2}\\mathrm{\\,d}x$ bằng",
    "options": [
      "$\\dfrac{13}{50}$",
      "$1-\\ln 2$",
      "$1+\\dfrac{2}{\\mathrm{e}}$",
      "$1-\\dfrac{2}{\\mathrm{e}}$"
    ],
    "answer": 3,
    "explain": "Đặt $ u = \\ln x \\text{ và } \\mathrm{\\, d}v=\\dfrac{1}{x^2}\\mathrm{\\, d}x \\Rightarrow \\mathrm{\\, d}u = \\dfrac{1}{x}\\mathrm{\\, d}x \\text{ và } v = -\\dfrac{1}{x}. $<br>  Khi đó $\\displaystyle\\int\\limits_1^{\\mathrm{e}} \\dfrac{\\ln x}{x^2}\\mathrm{\\, d}x = -\\dfrac{\\ln x}{x} \\bigg|_1^{\\mathrm{e}} + \\displaystyle\\int\\limits_1^{\\mathrm{e}} \\dfrac{1}{x^2}\\mathrm{\\, d}x = -\\dfrac{1}{\\mathrm{e}} -\\dfrac{1}{x} \\bigg|_1^{\\mathrm{e}} = -\\dfrac{1}{\\mathrm{e}}-\\left(\\dfrac{1}{\\mathrm{e}}-1\\right)=1-\\dfrac{2}{\\mathrm{e}}$."
  },
  {
    "id": "2D424TN60",
    "question": "Biết tích phân $ \\displaystyle\\int\\limits_1^2(4x-1)\\ln x\\mathrm{\\,d}x=a\\ln 2+b $ với $ a, b\\in\\mathbb{Z} $. Tổng $ 2a+b $ bằng",
    "options": [
      "$ 5 $",
      "$ 8 $",
      "$ 10 $",
      "$ 13 $"
    ],
    "answer": 2,
    "explain": "Đặt $u=\\ln x \\text{ và } \\mathrm{\\,d}v=(4x-1)\\mathrm{\\,d}x\\Rightarrow \\mathrm{\\,d}u=\\dfrac{1}{x}\\mathrm{\\,d}x \\text{ và } v=2x^2-x.$<br>  Suy ra $ \\displaystyle\\int\\limits_1^2(4x-1)\\ln x\\mathrm{\\,d}x=(2x^2-x)\\ln x\\bigg|_1^2-\\displaystyle\\int\\limits_1^2(2x-1)\\mathrm{\\,d}x=6\\ln 2-(x^2-x)\\bigg|_1^2=6\\ln 2-2 $.<br>  Suy ra $ a=6 $, $ b=-2 $.<br>  Vậy tổng $ 2a+b=2\\cdot 6-2=10 $."
  },
  {
    "id": "2D424TN61",
    "question": "Biết $\\displaystyle\\int\\limits_{0}^2x\\ln\\left(x^2+4\\right) \\mathrm{\\,d}x=a \\ln 2+b$ ($a$, $b \\in \\mathbb{Z})$. Giá trị của biểu thức $T=ab$ là",
    "options": [
      "$T=8$",
      "$T=-16$",
      "$T=-8$",
      "$T=16$"
    ],
    "answer": 1,
    "explain": "Đặt $I=\\displaystyle\\int\\limits_{0}^2x\\ln\\left(x^2+4\\right) \\mathrm{\\,d}x$.   Đặt $t=x^2+4\\Rightarrow \\mathrm{\\,d}t=2x\\mathrm{\\,d}x$, ta có $x=0\\Rightarrow t=4$, $x=2\\Rightarrow t=8$.  <br>  Vậy $I=\\displaystyle\\int\\limits_{4}^8 \\dfrac{1}{2}\\ln t \\mathrm{\\,d}t=\\dfrac{1}{2}\\left(t\\ln t -t\\right)\\Big|_{4}^{8}=\\dfrac{1}{2}\\left(8\\ln 8 -8 -(4\\ln 4 -4)\\right)=8\\ln 2-2$.  <br>  Suy ra $a=8 \\text{ và } b=-2\\Rightarrow T=ab=-16$."
  },
  {
    "id": "2D422TN62",
    "question": "Biết $\\displaystyle \\int\\limits_{0}^{4} (\\mathrm{e}^x + \\sqrt{3x^2+1}) x \\mathrm{\\,d}x=a\\mathrm{e}^b + c$ trong đó $a,b,c$ là các số nguyên. Tính giá trị của biểu thức $T=a+b+c$.",
    "options": [
      "$ 46 $",
      "$ 45 $",
      "$ 44 $",
      "47"
    ],
    "answer": 0,
    "explain": "Đáp số: $3\\mathrm{e}^4 + 39$"
  },
  {
    "id": "2D424TN63",
    "question": "Cho $ I=\\displaystyle\\int\\limits_1^2\\dfrac{x+\\ln x}{(x+1)^2}\\mathrm{\\,d}x=\\dfrac{a}{b}\\ln 2-\\dfrac{1}{c} $, với $ a,b,c $ là các số nguyên dương và $ \\dfrac{a}{b} $ là phân số tối giản. Tính giá trị của biểu thức $ S=\\dfrac{a+b}{c}. $",
    "options": [
      "$ S=\\dfrac{2}{3} $",
      "$ S=\\dfrac{5}{6} $",
      "$ S=\\dfrac{1}{2} $",
      "$ S=\\dfrac{1}{3} $"
    ],
    "answer": 1,
    "explain": "Ta có $ I=\\displaystyle\\int\\limits_1^2\\dfrac{x+\\ln x}{(x+1)^2}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^2\\dfrac{x}{(x+1)^2}\\mathrm{\\,d}x+\\displaystyle\\int\\limits_1^2\\dfrac{\\ln x}{(x+1)^2}\\mathrm{\\,d}x = I_1+I_2.$ <br>Trong đó $ I_1=\\displaystyle\\int\\limits_1^2\\dfrac{x}{(x+1)^2}\\mathrm{\\,d}x $, $ I_2=\\displaystyle\\int\\limits_1^2\\dfrac{\\ln x}{(x+1)^2}\\mathrm{\\,d}x. $  <br>- Tính $I_1=\\displaystyle\\int\\limits_1^2\\dfrac{x}{(x+1)^2}\\mathrm{\\,d}x = \\displaystyle\\int\\limits_1^2\\left[\\dfrac{1}{x+1}-\\dfrac{1}{(x+1)^2}\\right]\\mathrm{\\,d}x=\\left[ \\ln(x+1)+\\dfrac{1}{x+1}\\right]\\bigg|_1^2$<br>$= \\ln 3-\\ln 2-\\dfrac{1}{6} .$<br>- Tính $ I_2=\\displaystyle\\int\\limits_1^2\\dfrac{\\ln x}{(x+1)^2}\\mathrm{\\,d}x $.<br>  Đặt $ u=\\ln x \\text{ và } v'=\\dfrac{1}{(x+1)^2}\\Rightarrow u'=\\dfrac{1}{x} \\text{ và } v=-\\dfrac{1}{x+1}. $<br>  Suy ra $I_2 = -\\dfrac{\\ln x}{x+1}\\bigg|_1^2+\\displaystyle\\int\\limits_1^2\\dfrac{1}{x(x+1)}\\mathrm{\\,d}x=-\\dfrac{\\ln2}{3}+\\ln\\dfrac{x}{x+1}\\bigg|_1^2$<br>$= -\\dfrac{\\ln2}{3}+\\ln\\dfrac{2}{3}+\\ln 2=\\dfrac{2\\ln2}{3}-\\ln3+\\ln2.$   Do đó $ I=\\dfrac{2}{3}\\ln2-\\dfrac{1}{6} $.  Suy ra $ a=2 $, $ b=3 $ và $ c=6 $. Vậy $ S=\\dfrac{5}{6} $."
  },
  {
    "id": "2D424TN64",
    "question": "Cho hai số hữu tỉ $a, b$ sao cho tồn tại $F(x)$ là một nguyên hàm của hàm số $f(x)=\\dfrac{\\ln x}{(x+1)^2}$, biết rằng $F(1)=-\\dfrac{2}{3} \\ln 2$ và $F(2)=a\\ln 2 +b\\ln 3$. Tính giá trị của biểu thức $T=ab$.",
    "options": [
      "$ T=-\\dfrac{5}{3} $",
      "$ T=-2 $",
      "$ T=-\\dfrac{4}{3} $",
      "$ T=-1 $"
    ],
    "answer": 3,
    "explain": "Xét $ I = \\displaystyle\\int\\limits_{1}^{2}f(x)\\mathrm{d}x $. Đặt  $ u=\\ln x \\text{ và } dv=\\dfrac{1}{(x+1)^2}\\mathrm{d}x  \\xrightarrow[]{\\text{Ta chọn}}  \\mathrm{d}u=\\dfrac{1}{x}\\mathrm{d}x \\text{ và } v=-\\dfrac{1}{x+1}  $  Vậy $ I=-\\dfrac{1}{x+1}\\ln x \\Big|_1^2+\\displaystyle\\int\\limits_{1}^{2}\\dfrac{x+1-x}{x(x+1)}\\mathrm{d}x  =-\\dfrac{1}{3}\\ln2+\\left( \\ln|x|-\\ln|x+1| \\right)\\Big|_1^2=\\dfrac{5}{3}\\ln2-\\ln3  $.<br>  Mặt khác $ I=F(2)-F(1) \\Rightarrow \\left(a+\\dfrac{2}{3}\\right)\\ln2+b\\ln3=\\dfrac{5}{3}\\ln2-\\ln3 \\Rightarrow a=1 \\text{ và } b=-1\\Rightarrow T=-1 $."
  },
  {
    "id": "2D424TN65",
    "question": "Cho tích phân $H = \\displaystyle\\int\\limits_1^{\\mathrm{e}} x^2\\cdot \\ln x\\mathrm{\\,d}x = \\dfrac{a\\mathrm{e}^3 + c}{b}$. Tính $N = \\dfrac{2a - \\sqrt{c} - 4}{3\\sqrt{b}}$.",
    "options": [
      "$N = - \\dfrac{1}{9}$",
      "$N = 1$",
      "$N = 3$",
      "$N = \\dfrac{7}{9}$"
    ],
    "answer": 0,
    "explain": "Xét $H = \\displaystyle\\int\\limits_1^{\\mathrm{e}} x^2\\cdot \\ln x\\mathrm{\\,d}x = \\dfrac{1}{3}\\displaystyle\\int\\limits_1^{\\mathrm{e}} \\ln x\\mathrm{\\,d}\\left(x^3\\right) = \\dfrac{1}{3} x^3\\cdot \\ln x\\bigg \\vert_{1}^{\\mathrm{e}} - \\dfrac{1}{3}\\displaystyle\\int\\limits_1^{\\mathrm{e}} x^3\\mathrm{\\,d}\\left(\\ln x\\right) = \\dfrac{\\mathrm{e}^3}{3} - \\dfrac{1}{3}\\displaystyle\\int\\limits_1^{\\mathrm{e}} x^2\\mathrm{\\,d}x$<br>  Khi đó $H = \\dfrac{2\\mathrm{e}^3 + 1}{9} \\Rightarrow a = 2, b = 9, c = 1 \\Rightarrow N = \\dfrac{2\\cdot 2 - 1 - 4}{3\\sqrt{9}} = - \\dfrac{1}{9}$."
  },
  {
    "id": "2D422TN66",
    "question": "Biết rằng $ \\displaystyle\\int\\limits_{0}^{4} \\mathrm{e}^{\\sqrt{x}} \\mathrm{\\, d}x= a \\mathrm{e}^b - c$ với $a, b, c \\in \\mathbb{Q}$. Tính tích $abc$.",
    "options": [
      "$ -4 $",
      "$ 4$",
      "$ -16$",
      "$ 16 $"
    ],
    "answer": 0,
    "explain": "Đáp số: $2 \\mathrm{e}^2 + 2 \\Rightarrow a = 1, b=2, c = -2$"
  },
  {
    "id": "2D423TN67",
    "question": "Biết rằng $ \\displaystyle\\int\\limits_{0}^{\\dfrac{\\pi}{2}} \\mathrm{e}^{-2x} \\cos 2x \\mathrm{\\, d}x= \\dfrac{a \\mathrm{e}^\\pi - b}{\\mathrm{e}^\\pi}$ với $a, b \\in \\mathbb{Q}$. Tính tổng $a^3 + b^3$.",
    "options": [
      "$ 0 $",
      "$ 2$",
      "$ -1 $",
      "$ 9 $"
    ],
    "answer": 0,
    "explain": "Đáp số: $\\dfrac{\\mathrm{e}^\\pi + 1}{4\\mathrm{e}^\\pi} \\Rightarrow a = \\dfrac{1}{4}, b = -\\dfrac{1}{4}$"
  },
  {
    "id": "2D423TN68",
    "question": "Biết rằng $ \\displaystyle\\int\\limits_{\\tfrac{\\pi}{2}}^{\\pi} \\mathrm{e}^{\\cos x} \\sin 2x \\mathrm{\\, d}x= \\dfrac{a}{\\mathrm{e}} - b $ với $a, b \\in \\mathbb{Q}$. Tính tổng $a^3 + b^3$.",
    "options": [
      "$ -63 $",
      "$ 63 $",
      "$ 56 $",
      "$ 72 $"
    ],
    "answer": 2,
    "explain": "Đáp số: $\\dfrac{4}{\\mathrm{e}} - 2 \\Rightarrow a = 4, b = -2$"
  },
  {
    "id": "2D424TN69",
    "question": "Nếu $\\displaystyle \\int \\limits_0^1 (x^2-mx)\\mathrm{e}^x \\mathrm{\\,d}x =\\mathrm{e}-7$ thì giá trị của $m$ là nghiệm của phương trình nào dưới đây?",
    "options": [
      "$x^2+4\\mathrm{e}x+36\\mathrm{e}-81=0$",
      "$x^2-5x+6=0$",
      "$x^2-8x-\\mathrm{e}^2+4\\mathrm{e}+12=0$",
      "$x^2-12x+35=0$"
    ],
    "answer": 3,
    "explain": "Đặt $u=x^2-mx \\text{ và } \\mathrm{d}v=\\mathrm{e}^x\\mathrm{d}x \\Rightarrow \\mathrm{d}u=(2x-m)\\mathrm{d}x \\text{ và } v=\\mathrm{e}^x.$<br>  Khi đó $I= (x^2-mx)\\mathrm{e}^x\\Big|_0^1-\\displaystyle\\int\\limits_0^1 (2x-m)\\mathrm{e}^x \\mathrm{d}x$.<br>  Đặt $u=2x-m \\text{ và } \\mathrm{d}v=\\mathrm{e}^x\\mathrm{d}x \\Rightarrow \\mathrm{d}u=2\\mathrm{d}x \\text{ và } v=\\mathrm{e}^x.$<br>  $I=(1-m)\\mathrm{e}- \\mathrm{e}^x(2x-m)\\Big|_0^1+\\displaystyle\\int\\limits_0^1 2\\mathrm{e}^x\\mathrm{d}x =(1-m-2+m)\\mathrm{e}-m+2\\mathrm{e}-2=\\mathrm{e}-m-2  \\Rightarrow m=5$.  Phương trình $x^2-12x+35=0\\Leftrightarrow x=5 \\text{ hoặc } x=7.$<br>  Vậy giá trị $m=5$ là nghiệm của phương trình $x^2-12x+35=0$."
  },
  {
    "id": "2D424TN70",
    "question": "Biết $\\displaystyle\\int_1^5\\dfrac1{2x-1}\\mathrm{\\, d}x=\\ln a,$ tìm $a.$",
    "options": [
      "$-3$",
      "$6$",
      "$\\dfrac32$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int_1^5\\dfrac{1}{2x-1}\\mathrm{d}x=\\left[\\dfrac12\\ln|2x-1|\\right]_1^5=\\dfrac12(\\ln9-\\ln1)=\\dfrac12\\ln9=\\ln3$.<br>Vậy $\\ln a=\\ln3\\Rightarrow a=3$."
  },
  {
    "id": "2D424TN71",
    "question": "Biết $\\displaystyle \\int_1^2\\dfrac{x-1}{x+3}\\mathrm{\\, d}x=1+4\\ln\\dfrac{a}{b}$, $(a,b\\in \\mathbb{Z}$; thì giá trị $2a+b$ là bao nhiêu?",
    "options": [
      "$0$",
      "$13$",
      "$14$",
      "$-20$"
    ],
    "answer": 1,
    "explain": "Ta có $\\dfrac{x-1}{x+3}=1-\\dfrac{4}{x+3}$.<br>$\\displaystyle\\int_1^2\\left(1-\\dfrac{4}{x+3}\\right)\\mathrm{d}x=\\Big[x-4\\ln|x+3|\\Big]_1^2=(2-4\\ln5)-(1-4\\ln4)=1+4\\ln\\dfrac45$.<br>Vậy $a=4,\\ b=5$, nên $2a+b=8+5=13$."
  },
  {
    "id": "2D422TN72",
    "question": "[Đề minh họa Bộ GD 2019]%[2D3K2-1]  Cho $\\displaystyle\\int\\limits_0^1\\dfrac{x\\mathrm{\\,d}x}{(x+2)^2}=a+b\\ln2+c\\ln3$ với $a$, $b$, $c$ là các số hữu tỷ. Giá trị của $3a+b+c$ bằng",
    "options": [
      "$-2$",
      "$-1$",
      "$2$",
      "$1$"
    ],
    "answer": 1,
    "explain": "$\\displaystyle\\int\\limits_0^1\\dfrac{x\\mathrm{\\,d}x}{(x+2)^2}=\\displaystyle\\int\\limits_0^1\\dfrac{x+2-2}{(x+2)^2}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^1\\dfrac{x+2}{(x+2)^2}\\mathrm{\\,d}x-\\displaystyle\\int\\limits_0^1\\dfrac2{(x+2)^2}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^1\\dfrac1{x+2}\\mathrm{\\,d}x-\\displaystyle\\int\\limits_0^1\\dfrac2{(x+2)^2}\\mathrm{\\,d}x=$ <br>$=\\ln\\left|x+2\\right|\\Bigg|_0^1+\\dfrac2{x+2}\\Bigg|_0^1=\\ln3-\\ln2-\\dfrac13$ . Nên $a=-\\dfrac13$, $b=-1$, $c=1$. Suy ra $3a+b+c=-1$"
  },
  {
    "id": "2D424TN73",
    "question": "Biết $\\displaystyle\\int\\limits_0^1\\dfrac{\\textrm{d}x}{x^2-5x+6}=a\\ln 2+b\\ln 3$, với $a$, $b$ là các số nguyên. Tính $a+b$.",
    "options": [
      "$-3$",
      "$-2$",
      "$1$",
      "$0$"
    ],
    "answer": 2,
    "explain": "Ta có $x^2-5x+6=(x-2)(x-3)$, và $\\dfrac{1}{(x-2)(x-3)}=\\dfrac{-1}{x-2}+\\dfrac{1}{x-3}$.<br>$\\displaystyle\\int_0^1\\left(\\dfrac{-1}{x-2}+\\dfrac{1}{x-3}\\right)\\mathrm{d}x=\\Big[-\\ln|x-2|+\\ln|x-3|\\Big]_0^1=(0+\\ln2)-(-\\ln2+\\ln3)=2\\ln2-\\ln3$.<br>Vậy $a=2,\\ b=-1$, nên $a+b=1$."
  },
  {
    "id": "2D424TN74",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_0^2 {\\dfrac{{5x + 7}}{{{x^2} + 3x + 2}}\\textrm{d}x = a\\ln 2 + b\\ln 3} $. Tính tổng $a+b$.",
    "options": [
      "5",
      "4",
      "3",
      "6"
    ],
    "answer": 0,
    "explain": "$I=\\displaystyle \\int \\limits_0^2\\dfrac{5x+7}{x^2+3x+2}\\mathrm{\\,d}x=\\displaystyle \\int \\limits_0^2\\dfrac{5x+7}{(x+1)(x+2)}\\mathrm{\\,d}x=\\displaystyle \\int \\limits_0^2 \\left( \\dfrac{5}{x+2}+\\dfrac{2}{(x+1)(x+2)} \\right) \\mathrm{\\,d}x$<br>  $=\\left. \\left( 5\\ln |x+2| +2\\ln \\dfrac{x+1}{x+2} \\right)\\right|_0^2=2\\ln 3+3\\ln 2$.<br>Đáp số: $I=2\\ln 3+3\\ln 2$"
  },
  {
    "id": "2D424TN75",
    "question": "Biết $\\displaystyle \\int\\limits_{1}^{2} \\frac{x^2}{x+1} \\text{d}x=a+b \\ln 2+c\\ln 3 $ ($a, b, c$ là số hữu tỉ). Tính $S=2a-b+c$.",
    "options": [
      "$S=2$",
      "$S=1$",
      "$S=3$",
      "$S=4$"
    ],
    "answer": 2,
    "explain": "Ta có $\\dfrac{x^2}{x+1}=x-1+\\dfrac{1}{x+1}$ (vì $x^2=(x+1)(x-1)+1$).<br>$\\displaystyle\\int_1^2\\left(x-1+\\dfrac{1}{x+1}\\right)\\mathrm{d}x=\\left[\\dfrac{x^2}{2}-x+\\ln|x+1|\\right]_1^2=\\ln3-\\left(-\\dfrac12+\\ln2\\right)=\\dfrac12-\\ln2+\\ln3$.<br>Vậy $a=\\dfrac12,\\ b=-1,\\ c=1$, nên $S=2a-b+c=1+1+1=3$."
  },
  {
    "id": "2D424TN76",
    "question": "Biết $\\displaystyle\\int\\limits_0^1 {\\left( \\dfrac{x-1}{x+2} \\right)^2 \\mathrm{\\, d}x}=a+b \\ln 2 + c \\ln 3 \\ (a,b,c \\in \\mathbb{Q})$. Đẳng thức nào sau đây đúng?",
    "options": [
      "$2(a+b+c)=7$",
      "$2(a+b-c)=7$",
      "$2(a+b-c)=5$",
      "$2(a+b+c)=5$"
    ],
    "answer": 3,
    "explain": "Ta có $\\dfrac{x-1}{x+2}=1-\\dfrac{3}{x+2}$, nên $\\left(\\dfrac{x-1}{x+2}\\right)^2=1-\\dfrac{6}{x+2}+\\dfrac{9}{(x+2)^2}$.<br>$\\displaystyle\\int_0^1\\left[1-\\dfrac{6}{x+2}+\\dfrac{9}{(x+2)^2}\\right]\\mathrm{d}x=\\left[x-6\\ln|x+2|-\\dfrac{9}{x+2}\\right]_0^1=(-2-6\\ln3)-(-6\\ln2-4{,}5)=\\dfrac52+6\\ln2-6\\ln3$.<br>Vậy $a=\\dfrac52,\\ b=6,\\ c=-6$, kiểm tra: $2(a+b+c)=2\\cdot\\dfrac52=5$ — đây chính là đẳng thức đúng."
  },
  {
    "id": "2D424TN77",
    "question": "Biết $\\displaystyle \\int \\limits _1^{\\ln 2} \\dfrac{\\mathrm{e}^x }{(\\mathrm{e}^x + 1)^2} \\,dx = \\dfrac{a \\mathrm{e} + b}{3 \\mathrm{e} + c}$, trong đó $a,b,c\\in \\mathbb{Z}$. Tính $a^3+b^2+c^2$.",
    "options": [
      "$14$",
      "$12$",
      "$10$",
      "$15$"
    ],
    "answer": 1,
    "explain": "Đáp số: $\\dfrac{- \\mathrm{e} + 2}{3 \\mathrm{e} + 3}$"
  },
  {
    "id": "2D424TN78",
    "question": "Biết $\\displaystyle\\int\\limits_{\\ln 2}^{\\ln 3}\\dfrac{1}{\\mathrm{e}^x - 1}\\mathrm{\\, d}x = a\\ln b + c\\ln 3$, trong đó $a,b,c\\in \\mathbb{Z}$ và $0&lt;b&lt;4$. Tính $a^2+b^2+c^3$.",
    "options": [
      "$7$",
      "$6$",
      "$8$",
      "$9$"
    ],
    "answer": 0,
    "explain": "Đáp số: $2\\ln 2 - \\ln 3$"
  },
  {
    "id": "2D424TN79",
    "question": "Biết rằng $\\displaystyle\\int\\limits_3^5\\dfrac{x^2+x+1}{x+1}\\mathrm{\\,d}x=a+\\ln\\dfrac{b}{2}$ với $a, b$ là các số nguyên. Tính $S=a-2b.$",
    "options": [
      "$S=-2$",
      "$S=10$",
      "$S=5$",
      "$S=2$"
    ],
    "answer": 3,
    "explain": "Ta có $\\dfrac{x^2+x+1}{x+1}=x+\\dfrac{1}{x+1}$ (vì $x^2+x+1=x(x+1)+1$).<br>$\\displaystyle\\int_3^5\\left(x+\\dfrac{1}{x+1}\\right)\\mathrm{d}x=\\left[\\dfrac{x^2}{2}+\\ln|x+1|\\right]_3^5=\\left(\\dfrac{25}{2}+\\ln6\\right)-\\left(\\dfrac92+\\ln4\\right)=8+\\ln\\dfrac64=8+\\ln\\dfrac32$.<br>Vậy $a=8,\\ b=3$, nên $S=a-2b=8-6=2$."
  },
  {
    "id": "2D424TN80",
    "question": "Biết $\\displaystyle\\int\\limits_1^2 {\\dfrac{2x+1}{x+1} \\textrm{d}x}=a+b. \\ln 3+c. \\ln 2$ với $a, b, c$ là các số nguyên. Khi đó tích $abc$ bằng",
    "options": [
      "$2$",
      "$-2$",
      "$0$",
      "$-1$"
    ],
    "answer": 1,
    "explain": "Ta có $\\dfrac{2x+1}{x+1}=2-\\dfrac{1}{x+1}$.<br>$\\displaystyle\\int_1^2\\left(2-\\dfrac{1}{x+1}\\right)\\mathrm{d}x=\\Big[2x-\\ln|x+1|\\Big]_1^2=(4-\\ln3)-(2-\\ln2)=2-\\ln3+\\ln2$.<br>Vậy $a=2,\\ b=-1,\\ c=1$, nên $abc=2\\cdot(-1)\\cdot1=-2$."
  },
  {
    "id": "2D424TN81",
    "question": "Biết $\\displaystyle\\int\\limits_{1}^{2}\\dfrac{2x^{2}-3x+1}{2x+1}\\textrm{d}x=a\\ln\\dfrac{5}{3}-b$, trong đó $a$ và $b$ là các số hữu tỷ. Giá trị $a+b$ bằng",
    "options": [
      "2",
      "6",
      "8",
      "10"
    ],
    "answer": 0,
    "explain": "Chia đa thức: $2x^2-3x+1=(2x+1)(x-2)+3$, nên $\\dfrac{2x^2-3x+1}{2x+1}=x-2+\\dfrac{3}{2x+1}$.<br>$\\displaystyle\\int_1^2\\left(x-2+\\dfrac{3}{2x+1}\\right)\\mathrm{d}x=\\left[\\dfrac{x^2}{2}-2x+\\dfrac32\\ln|2x+1|\\right]_1^2=\\left(-2+\\dfrac32\\ln5\\right)-\\left(-\\dfrac32+\\dfrac32\\ln3\\right)=-\\dfrac12+\\dfrac32\\ln\\dfrac53$.<br>Vậy $a=\\dfrac32,\\ b=\\dfrac12$, nên $a+b=2$."
  },
  {
    "id": "2D424TN82",
    "question": "Biết rằng  $I=\\displaystyle\\int_{2}^{3}{\\dfrac{x}{(x-1)(x+2)}}\\, \\mathrm{d}x=a \\cdot\\ln 5 + b\\cdot \\ln 2$ với $a$, $b$ là các số hữu tỷ. Giá trị của tổng $a+b$ là ",
    "options": [
      "$\\dfrac{1}{3}$",
      "$-\\dfrac{1}{3}$",
      "$\\dfrac{2}{3}$",
      "$-1$"
    ],
    "answer": 1,
    "explain": "Phân tích $\\dfrac{x}{(x-1)(x+2)}=\\dfrac{1/3}{x-1}+\\dfrac{2/3}{x+2}$ (đồng nhất hệ số).<br>$\\displaystyle I=\\int_2^3\\left(\\dfrac{1/3}{x-1}+\\dfrac{2/3}{x+2}\\right)\\mathrm{d}x=\\left[\\dfrac13\\ln|x-1|+\\dfrac23\\ln|x+2|\\right]_2^3=\\left(\\dfrac13\\ln2+\\dfrac23\\ln5\\right)-\\dfrac43\\ln2=\\dfrac23\\ln5-\\ln2$.<br>Vậy $a=\\dfrac23,\\ b=-1$, nên $a+b=-\\dfrac13$."
  },
  {
    "id": "2D424TN83",
    "question": "Cho biết $\\displaystyle\\int\\limits_0^1\\dfrac{4x+11}{x^2+5x+6}\\mathrm{\\,d}x=\\ln\\dfrac{a}{b}$ (với $\\dfrac{a}{b}$ là phân số tối giản và $a, b$ là các số nguyên dương). Giá trị của $a+b$ là",
    "options": [
      "$11$",
      "$13$",
      "$10$",
      "$12$"
    ],
    "answer": 0,
    "explain": "Dùng máy tính tính tích phân được kết quả là $I$, tính được $e^I=\\dfrac{9}{2}$. Từ đó suy ra $a=9, b=2$ nên $a+b=11$."
  },
  {
    "id": "2D424TN84",
    "question": "Cho $\\displaystyle\\int\\limits_{1}^{3}\\dfrac{\\textrm{d}x}{(x+1)(x+4)}=a\\ln 2+b\\ln 5+c\\ln 7$ (với $a,b,c\\in \\mathbb Q$). Tính $S=a+4b-c$.",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "answer": 0,
    "explain": "$\\displaystyle\\int\\limits_{1}^{3}\\dfrac{\\textrm{d}x}{(x+1)(x+4)}=\\dfrac{1}{3}\\displaystyle\\int\\limits_{1}^{3}\\left(\\dfrac{1}{x+1}-\\dfrac{1}{x+4}\\right)\\textrm{d}x=\\dfrac{1}{3}\\ln 2+\\dfrac{1}{3}\\ln 5-\\dfrac{1}{3}\\ln 7\\Rightarrow S=2$"
  },
  {
    "id": "2D424TN85",
    "question": "Cho $\\displaystyle \\int \\limits_4^5 \\dfrac{\\mathrm{\\,d}x}{x^2+3x+2}=a\\ln 2+b\\ln 3+c\\ln 5+d\\ln 7$ với $a$, $b$, $c$, $d$ là các số nguyên. Tính $P=ab+cd$.",
    "options": [
      "$P=5$",
      "$P=3$",
      "$P=-4$",
      "$P=2$"
    ],
    "answer": 0,
    "explain": "$\\displaystyle \\int \\limits_4^5 \\dfrac{\\mathrm{\\,d}x}{x^2+3x+2}=\\displaystyle \\int \\limits_4^5 \\dfrac{1}{(x+1)(x+2)}\\mathrm{\\,d}x=\\ln \\dfrac{x+1}{x+2} \\bigg|_4^5=2\\ln 2 +2\\ln 3 -\\ln 5 -\\ln 7$.<br>  Vậy $a=2,b=2,c=-1,d=-1$. Suy ra $P=ab+cd=5$."
  },
  {
    "id": "2D424TN86",
    "question": "Biết $\\displaystyle\\int\\limits_{0}^{1}\\dfrac{\\mathrm{e}^x}{\\mathrm{e}^x + \\mathrm{e}^{-x}}\\mathrm{\\, d}x = \\dfrac{1}{2} \\ln \\left(\\dfrac{a e^2+b}{2}\\right)$, trong đó $a,b\\in \\mathbb{Z}$. Tính $a^2+b^2$.",
    "options": [
      "$3$",
      "$25$",
      "$2$",
      "$41$"
    ],
    "answer": 2,
    "explain": "Đáp số: $\\dfrac{1}{2} \\ln \\left(\\dfrac{e^2+1}{2}\\right)$"
  },
  {
    "id": "2D424TN87",
    "question": "Biết $\\displaystyle\\int\\limits_{0}^{1}\\dfrac{2\\mathrm{e}^x -1}{\\mathrm{e}^x + 1}\\mathrm{\\, d}x = 3 \\ln \\left(\\dfrac{a e+b}{2}\\right)+c$, trong đó $a,b\\in \\mathbb{Z}$. Tính $a^2+b^2+c^3$.",
    "options": [
      "$12$",
      "$1$",
      "$2$",
      "$16$"
    ],
    "answer": 1,
    "explain": "Đáp số: $3 \\ln \\left(\\dfrac{e+1}{2}\\right)-1$"
  },
  {
    "id": "2D424TN88",
    "question": "Cho tích phân $\\displaystyle\\int\\limits _2^3 \\dfrac{1}{x^3-x^2}\\mathrm{\\,d}x=a\\ln 3+ b\\ln 2+c$, với $a$, $b$, $c\\in\\mathbb{Q}$. Tính $a+b+c$.",
    "options": [
      "$\\dfrac{7}{6}$",
      "$\\dfrac{-5}{6}$",
      "$\\dfrac{-7}{6}$",
      "$\\dfrac{5}{6}$"
    ],
    "answer": 3,
    "explain": "Ta có $x^3-x^2=x^2(x-1)$. Phân tích $\\dfrac{1}{x^2(x-1)}=\\dfrac{-1}{x}-\\dfrac{1}{x^2}+\\dfrac{1}{x-1}$ (đồng nhất hệ số).<br>$\\displaystyle I=\\int_2^3\\left(-\\dfrac1x-\\dfrac1{x^2}+\\dfrac1{x-1}\\right)\\mathrm{d}x=\\left[-\\ln|x|+\\dfrac1x+\\ln|x-1|\\right]_2^3=\\left(-\\ln3+\\dfrac13+\\ln2\\right)-\\left(-\\ln2+\\dfrac12\\right)=2\\ln2-\\ln3-\\dfrac16$.<br>Vậy $a=-1,\\ b=2,\\ c=-\\dfrac16$, nên $a+b+c=\\dfrac56$."
  },
  {
    "id": "2D422TN89",
    "question": "Tính $ I = \\displaystyle\\int\\limits_0^2 {\\left|2 - x \\right|}\\mathrm{\\,d}x.$",
    "options": [
      "$ 1 $",
      "$ 0 $",
      "$ - 2 $",
      "$ 2 $"
    ],
    "answer": 3,
    "explain": "$ I = \\displaystyle\\int\\limits_0^2 {\\left|2 - x \\right|}\\mathrm{\\,d}x  = \\left|\\displaystyle\\int\\limits_0^2 {\\left(2-x\\right) }\\mathrm{\\,d}x \\right|   = \\left| \\left.\\left( 2x - \\dfrac{x^2}{2}\\right)\\right|_0^2 \\right| = 2.  $"
  },
  {
    "id": "2D422TN90",
    "question": "Tính $ I = \\displaystyle\\int\\limits_0^3 {\\left|x^2 -2x -3 \\right|} \\mathrm{\\,d}x. $",
    "options": [
      "$ 9 $",
      "$ 27 $",
      "$-9$",
      "$ -27 $"
    ],
    "answer": 0,
    "explain": "$ I = \\left|\\displaystyle\\int\\limits_0^3 {\\left(x^2 -2x -3 \\right)} \\mathrm{\\,d}x \\right| = \\left|\\left.\\left(\\dfrac{x^3}{3} - x^2 - 3x\\right)\\right|_0^3 \\right| = 9. $"
  },
  {
    "id": "2D422TN91",
    "question": "Tích phân $\\displaystyle\\int\\limits_{-1}^1\\dfrac{x}{x^2-5\\vert x\\vert+6}\\mathrm{d}x$ bằng",
    "options": [
      "$2$",
      "$1$",
      "$0$",
      "$-1$"
    ],
    "answer": 2,
    "explain": "Xét $f(x)=\\dfrac{x}{x^2-5|x|+6}$: thay $x$ bởi $-x$ ta được $f(-x)=\\dfrac{-x}{x^2-5|x|+6}=-f(x)$, nên $f$ là hàm số lẻ.<br>Trên $[-1;1]$, mẫu số $x^2-5|x|+6>0$ (không có điểm gián đoạn) nên tích phân xác định.<br>Do $f$ lẻ và cận đối xứng qua $0$, ta có $\\displaystyle\\int_{-1}^1f(x)\\mathrm{d}x=0$."
  },
  {
    "id": "2D422TN92",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_0^1\\left(|3x-1|-2|x|\\right)\\textrm{\\,d}x.$",
    "options": [
      "$ -\\dfrac{1}{6}$",
      "$ -\\dfrac{11}{6}$",
      "$ -\\dfrac{7}{6}$",
      "$ 0$"
    ],
    "answer": 0,
    "explain": "Trên $[0;1]$, $|3x-1|=1-3x$ với $x\\in[0;1/3)$ và $=3x-1$ với $x\\in[1/3;1]$; $|x|=x$.<br>$\\displaystyle I=\\int_0^{1/3}(1-5x)\\mathrm{d}x+\\int_{1/3}^1(x-1)\\mathrm{d}x=\\Big[x-\\dfrac{5x^2}{2}\\Big]_0^{1/3}+\\Big[\\dfrac{x^2}{2}-x\\Big]_{1/3}^1=\\dfrac1{18}+\\left(-\\dfrac12\\right)-\\left(\\dfrac1{18}-\\dfrac13\\right)$.<br>Tính cụ thể: số hạng thứ nhất $=\\dfrac1{18}$; số hạng thứ hai $=-\\dfrac12-\\left(-\\dfrac{5}{18}\\right)=-\\dfrac29$. Vậy $I=\\dfrac1{18}-\\dfrac29=-\\dfrac16$."
  },
  {
    "id": "2D422TN93",
    "question": "Tính tích phân $I = \\displaystyle\\int\\limits_{- 3}^{3} \\big\\vert 4x^2 - 4\\big\\vert\\textrm{\\,d}x$.",
    "options": [
      "$\\dfrac{180}{3}$",
      "$\\dfrac{168}{3}$",
      "$\\dfrac{172}{3}$",
      "$\\dfrac{176}{3}$"
    ],
    "answer": 3,
    "explain": "Hàm dưới dấu trị tuyệt đối là hàm chẵn nên $\\displaystyle I=2\\int_0^3|4x^2-4|\\mathrm{d}x=2\\left[\\int_0^1(4-4x^2)\\mathrm{d}x+\\int_1^3(4x^2-4)\\mathrm{d}x\\right]$.<br>$\\displaystyle\\int_0^1(4-4x^2)\\mathrm{d}x=\\Big[4x-\\dfrac{4x^3}{3}\\Big]_0^1=\\dfrac83$.<br>$\\displaystyle\\int_1^3(4x^2-4)\\mathrm{d}x=\\Big[\\dfrac{4x^3}{3}-4x\\Big]_1^3=24-\\left(-\\dfrac83\\right)=\\dfrac{80}{3}$.<br>Vậy $I=2\\left(\\dfrac83+\\dfrac{80}{3}\\right)=2\\cdot\\dfrac{88}{3}=\\dfrac{176}{3}$."
  },
  {
    "id": "2D424TN94",
    "question": "Cho tích phân $\\displaystyle \\int\\limits_1^5\\left|\\dfrac{x-2}{x+1}\\right|\\mathrm{\\,d}x=a+b\\ln 2+c\\ln 3,\\, a,b,c\\in\\mathbb{Z}$. Tính tích $P=abc.$",
    "options": [
      "$ P=-36$",
      "$ P=0$",
      "$ P=18$",
      "$ P=-18$"
    ],
    "answer": 0,
    "explain": "Lập bảng xét dấu biểu thức $\\displaystyle \\frac{x-2}{x+1}$ trên đoạn $[1;5]$.<br>  Ta có   $\\int\\limits_1^5\\left|\\frac{x-2}{x+1}\\right|\\mathrm{\\,d}x = \\int\\limits_1^5\\left|1-\\frac{3}{x+1}\\right|\\mathrm{\\,d}x= \\displaystyle -\\int\\limits_1^21-\\frac{3}{x+1}\\mathrm{\\,d}x+ \\int\\limits_2^5 1-\\frac{3}{x+1} \\mathrm{\\,d}x$<br>$= -\\left(x-3\\ln|x+1|\\right)\\Bigg|_1^2+\\left(x-3\\ln|x+1|\\right)\\Bigg|_2^5$<br>$= 2+3\\ln3-6\\ln2$  Từ đó, $a=2,b=3,c=-6\\Rightarrow P=abc=-36.$"
  },
  {
    "id": "2D423TN95",
    "question": "Tính $ I = \\displaystyle\\int\\limits_0^{2\\pi} {\\sqrt{1 - \\cos 2x }}\\mathrm{\\,d}x. $",
    "options": [
      "$ 0 $",
      "$ 4\\sqrt{2} $",
      "$2\\sqrt{2} $",
      "$ 4 $"
    ],
    "answer": 1,
    "explain": "Ta có: $ I = \\displaystyle\\int\\limits_0^{2\\pi} {\\sqrt{1-\\cos 2x }}\\mathrm{\\,d}x = \\sqrt{2} \\displaystyle\\int\\limits_0^{2\\pi} {\\left| \\sin x \\right|}\\mathrm{\\,d}x$ <br> Vì $ \\left|\\sin x \\right| = \\sin x, \\text{ nếu } x \\in \\left[0; \\pi \\right] \\text{ và } -\\sin x, \\text{ nếu } x \\in \\left[\\pi; 2\\pi \\right]$<br> Nên $ I = \\sqrt{2} \\displaystyle\\int\\limits_0^{\\pi } {\\left| \\sin x \\right|}\\mathrm{\\,d}x + \\sqrt{2} \\displaystyle\\int\\limits_{\\pi} ^{2\\pi} {\\left| \\sin x \\right|}\\mathrm{\\,d}x $<br> = $ \\sqrt{2} \\left( \\displaystyle\\int\\limits_0^{\\pi } {\\sin x} \\mathrm{\\,d}x - \\displaystyle\\int\\limits_{\\pi }^{2\\pi} {\\sin x} \\mathrm{\\,d}x \\right) = \\sqrt{2} \\left[ \\left.\\left(-\\cos x\\right)\\right|_0^{\\pi } + \\left.\\left(\\cos x\\right)\\right|_{\\pi}^{2\\pi }\\right] = 4\\sqrt{2}. $"
  },
  {
    "id": "2D422TN96",
    "question": "Cho $\\alpha $ là số thực dương lớn hơn $2$, tính $I=\\displaystyle \\int\\limits_{2}^{\\alpha } x\\left|x-1\\right|\\textrm{\\,d}x$.",
    "options": [
      "$I=-\\dfrac{\\alpha^3}{3}+\\dfrac{\\alpha^2}{2}$",
      "$I=\\dfrac{1}{3}+\\dfrac{\\alpha^3}{3}-\\dfrac{\\alpha^2}{2}$",
      "$I=-\\dfrac{2}{3}+\\dfrac{\\alpha^3}{3}-\\dfrac{\\alpha^2}{2}$",
      "$I=\\dfrac{1}{3}-\\dfrac{\\alpha^3}{3}+\\dfrac{\\alpha^2}{2}$"
    ],
    "answer": 2,
    "explain": "Vì $\\alpha>2>1$ nên trên $[2;\\alpha]$ ta có $x-1>0$, do đó $|x-1|=x-1$ và $x|x-1|=x^2-x$.<br>$\\displaystyle I=\\int_2^{\\alpha}(x^2-x)\\mathrm{d}x=\\left[\\dfrac{x^3}{3}-\\dfrac{x^2}{2}\\right]_2^{\\alpha}=\\left(\\dfrac{\\alpha^3}{3}-\\dfrac{\\alpha^2}{2}\\right)-\\left(\\dfrac83-2\\right)=\\dfrac{\\alpha^3}{3}-\\dfrac{\\alpha^2}{2}-\\dfrac23$."
  },
  {
    "id": "2D422TN97",
    "question": "Biết $ I = \\displaystyle\\int\\limits_0^{3} {\\sqrt{x^3 - 2x^2 + x}}\\mathrm{\\,d}x = \\dfrac{a \\sqrt{b} + c}{15}$, với $a, b, c \\in \\mathbb{Z}$ và $b &lt; 10$. Tính tổng $a + b + c$.",
    "options": [
      "$ 35 $",
      "$ 32 $",
      "$ 12 $",
      "$ 10 $"
    ],
    "answer": 0,
    "explain": "Ta có $x^3-2x^2+x=x(x-1)^2$, nên $\\sqrt{x^3-2x^2+x}=|x-1|\\sqrt x$ ($=(1-x)\\sqrt x$ trên $[0;1]$, $=(x-1)\\sqrt x$ trên $[1;3]$).<br>$\\displaystyle\\int_0^1(1-x)\\sqrt x\\,\\mathrm{d}x=\\Big[\\dfrac23x^{3/2}-\\dfrac25x^{5/2}\\Big]_0^1=\\dfrac23-\\dfrac25=\\dfrac{4}{15}$.<br>$\\displaystyle\\int_1^3(x-1)\\sqrt x\\,\\mathrm{d}x=\\Big[\\dfrac25x^{5/2}-\\dfrac23x^{3/2}\\Big]_1^3=\\dfrac{8\\sqrt3}{5}-\\left(-\\dfrac{4}{15}\\right)=\\dfrac{8\\sqrt3}{5}+\\dfrac{4}{15}$.<br>Vậy $I=\\dfrac4{15}+\\dfrac{8\\sqrt3}{5}+\\dfrac4{15}=\\dfrac{8}{15}+\\dfrac{24\\sqrt3}{15}=\\dfrac{24\\sqrt3+8}{15}$.<br>Vậy $a=24,\\ b=3,\\ c=8$, nên $a+b+c=35$."
  },
  {
    "id": "2D422TN98",
    "question": "[Đề thi tốt nghiệp - 2021]%[2D3K1-1] Cho hàm số $f(x)=2x-1 \\text{khi } x\\geq 1 \\text{ và } 3x^2-2 \\text{khi } x&lt;1$. Giả sử $F$ là nguyên hàm của $f$ trên $\\mathbb{R}$ thỏa mãn $F(0)=2$. Giá trị của $F(-1)+2F(2)$ bằng",
    "options": [
      "$9$",
      "$15$",
      "$11$",
      "$6$"
    ],
    "answer": 0,
    "explain": "Ta có $F(x)=x^2-x+C_1 \\text{khi } x\\geq 1 \\text{ và } x^3-2x+C_2 \\text{khi } x&lt;1.$<br> Mà $F(0)=2$ nên $C_2=2$.<br> Mặt khác $F(x)$ có đạo hàm trên $\\mathbb{R}$ nên $F(x)$ liên tục trên $\\mathbb{R}$, do đó $F(x)$ liên tục tại $x=1$.<br> Suy ra $\\lim\\limits_{x\\to 1^+}F(x)=\\lim\\limits_{x\\to 1^-}F(x)\\Leftrightarrow C_1=-1+2=1$.<br> Vậy $F(x)=x^2-x+1 \\text{khi } x\\geq 1 \\text{ và } x^3-2x+2 \\text{khi } x&lt;1.$<br> Do đó $F(-1)+2F(2)=3+2\\cdot 3=9$."
  },
  {
    "id": "2D424TN99",
    "question": "Cho hàm số $f(x)=\\mathrm{e}^{x}+m\\quad \\text { khi } x \\geq 0 \\text{ và } 2 x \\sqrt{3+x^{2}} \\text { khi } x&lt;0$ liên tục trên $\\mathbb{R}$. Tích phân $I= \\displaystyle\\int\\limits_{-1}^{1} f(x) \\mathrm{d} x$ bằng",
    "options": [
      "$I=\\mathrm{e}+2 \\sqrt{3}-22$",
      "$I=\\mathrm{e}+2 \\sqrt{3}+\\dfrac{22}{3}$",
      "$I=e-2 \\sqrt{3}-\\dfrac{22}{3}$",
      "$I=\\mathrm{e}+2 \\sqrt{3}-\\dfrac{22}{3}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\lim _{x \\rightarrow 0^{+}} f(x)=\\displaystyle\\lim _{x \\rightarrow 0^{+}}\\left(\\mathrm{e}^{x}+m\\right)=m+1, \\lim _{x \\rightarrow 0^{-}} f(x)=\\lim _{x \\rightarrow 0^{-}}\\left(2 x \\sqrt{3+x^{2}}\\right)=0$ và $f(0)=m+1$. <br>  Vì hàm số đã cho liên tục trên $\\mathbb{R}$ nên liên tục tại $x=0$.<br>  Suy ra $\\displaystyle\\lim _{x \\rightarrow 0^{+}} f(x)=\\displaystyle\\lim _{x \\rightarrow 0^{-}} f(x)=f(0)$ hay $m+1=0 \\Leftrightarrow m=-1$.<br>   Khi đó   $\\displaystyle\\int\\limits_{-1}^{1} f(x) \\mathrm{d} x = \\displaystyle\\int\\limits_{-1}^{0} 2 x \\sqrt{3+x^{2}} \\mathrm{~d} x+\\displaystyle\\int\\limits_{0}^{1}\\left(\\mathrm{e}^{x}-1\\right) \\mathrm{d} x$<br>$= \\displaystyle\\int\\limits_{-1}^{0} \\sqrt{3+x^{2}} \\mathrm{~d}\\left(3+x^{2}\\right)+\\displaystyle\\int\\limits_{0}^{1}\\left(\\mathrm{e}^{x}-1\\right) \\mathrm{d} x$<br>$= \\left.\\dfrac{2}{3}\\left(3+x^{2}\\right) \\sqrt{3+x^{2}}\\right|_{-1} ^{0}+\\left.\\left(\\mathrm{e}^{x}-x\\right)\\right|_{0} ^{1}$<br>$= \\mathrm{e}+2 \\sqrt{3}-\\dfrac{22}{3}.$"
  },
  {
    "id": "2D422TN100",
    "question": "[Đề thi tốt nghiệp - đợt 2 - 2021]%[Lê Tuyến]%[2D3K2-1]  Cho hàm số $ y=f(x) $ liên tục trên đoạn $ \\left[-1;6\\right] $ và có đồ thị là đường gấp khúc $ ABC $ như hình bên dưới.   Biết hàm số $ F(x) $ là nguyên hàm của hàm số $ f(x) $ thỏa mãn $ F(-1) =-2$. Giá trị của $ F(4)+F(6) $ bằng<br><img src=\"data/12/2D4/im2D4/2D42_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$ 3 $",
      "$ 4 $",
      "$ 8 $",
      "$ 5 $"
    ],
    "answer": 0,
    "explain": "<br><img src=\"data/12/2D4/im2D4/2D42_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào hình vẽ ta có  $F(6)-F(-1) = \\displaystyle\\int\\limits_{-1}^6f(x)\\mathrm{\\,d}x  =S_1+S_2-S_3$<br>$= 3\\cdot 1+\\dfrac{1}{2}\\cdot 2\\cdot 1-\\dfrac{1}{2}\\cdot 2\\cdot1= 3$<br>$\\Rightarrow F(6)=3+F(-1)=1.\\quad (1)$  $F(4)-F(-1) = \\displaystyle\\int\\limits_{-1}^4f(x)\\mathrm{\\,d}x = S_1+S_2$<br>$= 3.1+\\dfrac {1}{2}\\cdot 2\\cdot1=4$<br>$\\Rightarrow F(4)=4+F(-1)=2.\\quad (2)$  Lấy (1) cộng (2) ta có $F(4)+F(6)=2+1=3$."
  },
  {
    "id": "2D422TN101",
    "question": "Tính tích phân $\\displaystyle \\int\\limits_0^2 \\max \\left\\{x;\\,x^3\\right\\}\\mathrm{\\, d}x$",
    "options": [
      "$\\dfrac{17}{4}$",
      "$2$",
      "$\\dfrac{15}{4}$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Xét phương trình hoành độ giao điểm: $x^3=x \\Leftrightarrow x=0 \\text{ hoặc } x =\\pm 1$.<br>  Ta có: $y=x^3-x$ mang giá trị âm trên khoảng $(0;1)$, dương tên khoảng $(1;2)$.<br>  Suy ra $\\max \\limits_{[0;1]} \\left\\{ x^3,x\\right\\} =x \\text{ và } \\max \\limits_{[1;2]} \\left\\{ x^3,x\\right\\} =x^3 $.<br>  Vậy $I=\\displaystyle \\int\\limits_0^2 \\max \\left\\{x,x^3\\right\\}\\mathrm{\\, d}x = \\int \\limits_0^1x\\mathrm{\\, d}x +\\int \\limits_1^2 x^3\\mathrm{\\, d}x =\\dfrac{17}{4}$."
  },
  {
    "id": "2D422TN102",
    "question": "Cho hàm số $f(x)=x^2+x+a \\,\\, \\text{khi}\\,\\, x\\geq 0 \\text{ và } 2+bx \\,\\,\\text{khi}\\,\\, x&lt;0$ có đạo hàm liên tục trên $\\mathbb{R}$ (với $a$, $b$ là các tham số thực). Nếu $\\displaystyle\\int\\limits_{-1}^{1}f(x)\\mathrm{\\,d}x=\\dfrac{m}{n}$ với $m$, $n \\in \\mathbb{Z}^{+}$ thì $m+2n$ bằng",
    "options": [
      "$19$",
      "$20$",
      "$\\dfrac{59}{2}$",
      "$\\dfrac{13}{3}$"
    ],
    "answer": 0,
    "explain": "Do hàm số $f(x)$ có đạo hàm trên $\\mathbb{R}$ nên $f(x)$ liên tục tại $x=0$.<br>  Suy ra $\\lim\\limits_{x\\to 0^{+}}f(x)=\\lim\\limits_{x\\to 0^{-}}f(x)\\Leftrightarrow a=2$.<br>  Hơn nữa $f'(x)=2x+1\\,\\, \\text{khi}\\,\\, x\\geq 0 \\text{ và } b \\,\\,\\text{khi}\\,\\, x&lt;0 \\Rightarrow b=1$.<br>  Ta có $I=\\displaystyle\\int\\limits_{-1}^1f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_0^1f(x)\\mathrm{\\,d}x$.<br>  Xét $I_1=\\displaystyle\\int\\limits_{0}^1\\left(x^2+x+2\\right)\\mathrm{\\,d}x=\\left(\\dfrac{x^3}{3}+\\dfrac{x^2}{2}+2x\\right)\\bigg|_{0}^1=\\dfrac{1}{3}+\\dfrac{1}{2}+2=\\dfrac{17}{6}$.<br>  Xét $I_2=\\displaystyle\\int\\limits_{-1}^0\\left(2+x\\right)\\mathrm{\\,d}x=\\left(\\dfrac{x^2}{2}+2x\\right)\\bigg|_{-1}^0=-\\dfrac{1}{2}+2=\\dfrac{3}{2}$.<br>  Vậy $I=I_1+I_2=\\dfrac{17}{6}+\\dfrac{3}{2}=\\dfrac{13}{3}\\Rightarrow m+2n=19$."
  },
  {
    "id": "2D422TN103",
    "question": "Đồ thị của hàm số $y=f(x)$ trên đoạn $\\left[-3;5\\right]$ được cho như trong hình vẽ bên (phần cong của đồ thị là một phần của parabol $y=ax^2+bx+c$). Tính $I=\\displaystyle\\int\\limits_{-2}^{3}f(x)\\mathrm{\\,d}x.$  <br><img src=\"data/12/2D4/im2D4/2D42_tikz_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$I=\\dfrac{97}{6}$",
      "$I=\\dfrac{53}{3}$",
      "$I=\\dfrac{43}{2}$",
      "$I=\\dfrac{95}{6}$"
    ],
    "answer": 0,
    "explain": "Tìm được $y=-x^2+4x$ là phần đường cong của đồ thị hàm số."
  },
  {
    "id": "2D424TN104",
    "question": "Cho hàm số $y=f\\left( x \\right)$. Đồ thị $y=f'\\left( x \\right)$ trên $\\left[ -3;0 \\right]$ như hình vẽ (phần cong của đồ thị là một phần của parabol $y=ax^2+bx+c$). Biết $\\displaystyle\\int\\limits_{\\mathrm{e}^{-3}}^1 \\dfrac{f\\left( \\ln x \\right)}{x} \\mathrm{\\,d}x=\\dfrac{2}{3}$. Tính giá trị $f\\left( 0 \\right)$.<br><img src=\"data/12/2D4/im2D4/2D42_tikz_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$1$",
      "$2$",
      "$\\dfrac{14}{9}$",
      "$-\\dfrac{7}{9}$"
    ],
    "answer": 2,
    "explain": "Từ đồ thị $y=f'\\left( x \\right)$ ta có $f'\\left( x \\right)= -x^2-4x-3 \\text{ khi } -3\\le x\\le -1 \\text{ và } 2x+2 \\text{ khi }-1&lt;x\\le 0.$<br> Suy ra $f\\left( x \\right)=-\\dfrac{1}{3}x^3-2x^2-3x+C_1 \\text{ khi }3\\le x\\le -1 \\text{ và } x^2+2x+C_2 \\text{ khi }-1&lt;x\\le 0.$<br> Hàm số liên tục tại $x=-1$ nên ta có \\[\\lim\\limits_{x \\to (-1)^-} f(x) =\\lim\\limits_{x \\to (-1)^+} f(x)\\Leftrightarrow \\dfrac{4}{3}+C_1=-1+C_2\\Leftrightarrow C_1-C_2=-\\dfrac{7}{3}.\\,\\, \\hfill(1)\\] Đặt $t=\\ln x\\Rightarrow \\mathrm{\\,d}t=\\dfrac{\\mathrm{\\,d}x}{x}$. Khi $x=\\mathrm{e}^{-3}\\Rightarrow t=-3$, $x=1\\Rightarrow t=0$.<br> Theo giả thiết ta có { $\\displaystyle\\int\\limits_{\\mathrm{e}^{-3}}^1 \\dfrac{f\\left( \\ln x \\right)}{x} \\mathrm{\\,d}x=\\dfrac{2}{3}$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_{-3}^0 f\\left( t \\right) \\mathrm{\\,d}t=\\dfrac{2}{3}$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_{-3}^{-1} f\\left( x \\right)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{-1}^0 f\\left( x \\right)\\mathrm{\\,d}x=\\dfrac{2}{3}$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_{-3}^{-1} \\left( -\\dfrac{1}{3}x^3-2x^2-3x+C_1 \\right)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{-1}^0 \\left( x^2+2x+C_2 \\right)\\mathrm{\\,d}x=\\dfrac{2}{3}$<br>$\\Leftrightarrow 2C_1+C_2=0.\\,\\,\\, \\hfill(2)$} Từ $(1)$ và $(2)$ ta có $C_1-C_2=-\\dfrac{7}{3} \\text{ và } 2C_1+C_2=0\\Leftrightarrow C_1=\\dfrac{-7}{9} \\text{ và } C_2=\\dfrac{14}{9}.$<br> Do đó $f\\left(0\\right)=C_2=\\dfrac{14}{9}$."
  },
  {
    "id": "2D422TN105",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_2^5\\dfrac{\\mathrm{\\,d}x}{x}$ có giá trị bằng",
    "options": [
      "$\\ln\\dfrac{2}{5}$",
      "$3\\ln3$",
      "$\\dfrac{1}{3}\\ln3$",
      "$\\ln\\dfrac{5}{2}$"
    ],
    "answer": 3,
    "explain": "Ta có $I=\\displaystyle\\int\\limits_2^5\\dfrac{\\mathrm{\\,d}x}{x}=\\ln|x|\\Big|_2^5=\\ln5-\\ln2=\\ln\\dfrac{5}{2}$."
  },
  {
    "id": "2D421TN106",
    "question": "Cho hàm số $f(x)=\\mathrm{e}^x+2$. Khẳng định nào dưới đây là đúng?",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\mathrm{e}^x+2x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\mathrm{e}^x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\mathrm{e}^{x-2}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\mathrm{e}^x-2x+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\mathrm{e}^x+2x+C$."
  },
  {
    "id": "2D421TN107",
    "question": "Cho hàm số $f(x)=\\sin x+2^x$. Khẳng định nào dưới đây là đúng?",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\cos x+2^x\\ln2+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\cos x+\\dfrac{2^x}{\\ln2}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\cos x+\\dfrac{2^x}{\\ln2}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\cos x+2^x\\ln2+C$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\cos x+\\dfrac{2^x}{\\ln2}+C$."
  },
  {
    "id": "2D422TN108",
    "question": "Nếu $\\displaystyle\\int\\limits_{-2}^3f(x)\\mathrm{\\,d}x=4$ thì $\\displaystyle\\int\\limits_{-2}^32f(x)\\mathrm{\\,d}x$ bằng",
    "options": [
      "$-8$",
      "$8$",
      "$-4$",
      "$4$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int\\limits_{-2}^32f(x)\\mathrm{\\,d}x=2\\displaystyle\\int\\limits_{-2}^3f(x)\\mathrm{\\,d}x=2\\cdot4=8$."
  },
  {
    "id": "2D422TN109",
    "question": "Cho hàm số $f(x)=2x$. Khẳng định nào dưới đây là đúng?",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{2^x}{\\ln2}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2^x.\\ln2+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=x^2+C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=x^2+C$."
  },
  {
    "id": "2D422TN110",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[1 ; 13]$ thỏa $\\displaystyle\\int\\limits_1^{13} f(x) \\mathrm{~d}x=16$, $\\displaystyle\\int\\limits_1^4 f(x) \\mathrm{~d}x=2$. Giá trị $\\displaystyle\\int\\limits_4^{13} f(x) \\mathrm{~d}x$ bằng",
    "options": [
      "$12$",
      "$14$",
      "$18$",
      "$10$"
    ],
    "answer": 1,
    "explain": "$\\displaystyle\\int\\limits_4^{13} f(x) \\mathrm{~d}x=\\displaystyle\\int\\limits_1^{13} f(x) \\mathrm{~d}x-\\displaystyle\\int\\limits_1^{4} f(x) \\mathrm{~d}x=16-2=14$."
  },
  {
    "id": "2D422TN111",
    "question": "Nếu $\\displaystyle\\int\\limits_5^7f(x)\\mathrm{\\,d}x=-2$ và $\\displaystyle\\int\\limits_5^7g(x)\\mathrm{\\,d}x=5$ thì $\\displaystyle\\int\\limits_5^7[2f(x)+3g(x)]\\mathrm{\\,d}x$ bằng",
    "options": [
      "$11$",
      "$3$",
      "$-19$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits_5^7[2f(x)+3g(x)]\\mathrm{\\,d}x=2\\displaystyle\\int\\limits_5^7f(x)\\mathrm{\\,d}x+3\\displaystyle\\int\\limits_5^7f(x)\\mathrm{\\,d}x=2\\cdot(-2)+3\\cdot5=11$."
  },
  {
    "id": "2D422TN112",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[a;b]$. Hãy chọn mệnh đề sai dưới đây",
    "options": [
      "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=-\\displaystyle\\int\\limits_b^a f(x) \\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^b k \\mathrm{\\,d}x=k(b-a)$, $\\forall k \\in \\mathbb{R}$",
      "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_a^c f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_c^b f(x) \\mathrm{\\,d}x$ với $c \\in [a;b]$",
      "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_b^a f(x) \\mathrm{\\,d}x$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=-\\displaystyle\\int\\limits_b^a f(x) \\mathrm{\\,d}x$."
  },
  {
    "id": "2D422TN113",
    "question": "Cho $\\displaystyle\\int\\limits_0^1 f(x) \\mathrm{\\,d}x=2$ và $\\displaystyle\\int\\limits_1^4 f(x) \\mathrm{\\,d}x=5$, khi đó $\\displaystyle\\int\\limits_0^4 f(x) \\mathrm{\\,d}x$ bằng",
    "options": [
      "$7$",
      "$10$",
      "$-3$",
      "$6$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits_0^4 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^1 f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_1^4 f(x) \\mathrm{\\,d}x=2+5=7$."
  },
  {
    "id": "2D422TN114",
    "question": "Cho $\\displaystyle\\int\\limits_0^1 f(x) \\mathrm{\\,d}x=3$, $\\displaystyle\\int\\limits_0^1 g(x) \\mathrm{\\,d}x=-2$. Tính giá trị của biểu thức $I=\\displaystyle\\int\\limits_0^1 \\left[2f(x)-3g(x)\\right]\\mathrm{\\,d}x$.",
    "options": [
      "$I=-6$",
      "$I=12$",
      "$I=6$",
      "$I=9$"
    ],
    "answer": 1,
    "explain": "Ta có $I=\\displaystyle\\int\\limits_0^1 \\left[2f(x)-3g(x) \\right]\\mathrm{d}x=2\\displaystyle\\int\\limits_0^1 f(x) \\mathrm{\\,d}x-3\\displaystyle\\int\\limits_0^1 g(x) \\mathrm{\\,d}x=2\\cdot 3-3 \\cdot (-2)=12$."
  },
  {
    "id": "2D423TN115",
    "question": "Cho $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x=5$. Tính $I=\\displaystyle\\int\\limits_{0}^{\\frac{\\pi}{2}} \\left[f(x)+2\\sin x\\right] \\mathrm{\\,d}x$.",
    "options": [
      "$I=7$",
      "$I=5+\\dfrac{\\pi}{2}$",
      "$I=3$",
      "$I=5+\\pi$"
    ],
    "answer": 0,
    "explain": "Ta có  $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} \\left[f(x)+2\\sin x\\right]\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x+2\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}}\\sin x \\mathrm{\\,d}x$<br>$= \\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x-2\\cos x\\Big|_0^{\\frac{\\pi}{2}}$<br>$= 5-2(0-1)=7.$"
  },
  {
    "id": "2D424TN116",
    "question": "Biết $\\displaystyle\\int\\limits_1^3 \\dfrac{x+2}{x} \\mathrm{\\,d}x=a+b\\ln c$, với $a$, $b$, $c \\in \\mathbb{Z}$, $c&lt;9$. Tính tổng $S=a+b+c$.",
    "options": [
      "$S=7$",
      "$S=5$",
      "$S=8$",
      "$S=6$"
    ],
    "answer": 0,
    "explain": "$\\displaystyle\\int\\limits_1^3 \\dfrac{x+2}{x} \\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^3 \\left(1+\\dfrac{2}{x}\\right) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^3 1 \\mathrm{\\,d}x+\\displaystyle\\int\\limits_1^3 \\dfrac{2}{x} \\mathrm{\\,d}x=\\left( x+2\\ln |x|\\right) \\Big|_1^3=2+2\\ln 3$.<br>  Do đó $a=2$, $b=2$, $c=3$ nên $S=7$."
  },
  {
    "id": "2D423TN117",
    "question": "Giá trị của $\\displaystyle\\int_0^{\\frac{\\pi}{2}}\\sin x \\mathrm{d}x $ bằng",
    "options": [
      "$0$",
      "$\\dfrac{\\pi}{2}$",
      "$1$",
      "$-1$"
    ],
    "answer": 2,
    "explain": "Ta thấy  $  \\displaystyle\\int_0^{\\dfrac{\\pi}{2}}\\sin x \\mathrm{d}x   = -\\cos x \\big|_0^{\\tfrac{\\pi}{2}}  = -\\cos\\dfrac{\\pi}{2} + \\cos 0  = 1.  $"
  },
  {
    "id": "2D421TN118",
    "question": "Cho $f(x)$ là hàm số liên tục trên đoạn $[a ; b]$ và $F(x)$ là một nguyên hàm của hàm $f(x)$ trên $[a ; b]$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =f(b)-f(a)$",
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =F(a)-F(b)$",
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =F(b)-F(a)$",
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =F(b)+F(a)$"
    ],
    "answer": 2,
    "explain": "$f(x)$ là hàm số liên tục trên đoạn $[a ; b]$ và $F(x)$ là một nguyên hàm của hàm $f(x)$ trên $[a ; b]$ thì   $\\displaystyle\\int_a^b f(x) \\mathrm{d}x =F(b)-F(a).$"
  },
  {
    "id": "2D422TN119",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $[a ; b]$. Mệnh đề nào sau đây <strong>sai</strong>?",
    "options": [
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =\\displaystyle\\int_b^a f(x) \\mathrm{d}x $",
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =-\\displaystyle\\int_b^a f(x) \\mathrm{d}x $",
      "$\\displaystyle\\int_a^b f(x) \\mathrm{d}x =\\displaystyle\\int_a^b f(t) d (t)$",
      "$\\displaystyle\\int_a^a 2025 f(x) \\mathrm{d}x =0$"
    ],
    "answer": 0,
    "explain": "Hàm số $y=f(x)$ liên tục trên $[a ; b]$ thì  $  \\displaystyle\\int_a^b f(x) \\mathrm{d}x = -\\displaystyle\\int_b^a f(x) \\mathrm{d}x .  $"
  },
  {
    "id": "2D422TN120",
    "question": "Biết $\\displaystyle\\int\\limits_{1}^{5} f(x)\\mathrm{\\,d}x = 4$. Giá trị của $\\displaystyle\\int\\limits_{1}^{5} 3f(x)\\mathrm{\\,d}x$ bằng",
    "options": [
      "$\\dfrac{4}{3}$",
      "$6$",
      "$12$",
      "$4$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits_{1}^{5} 3f(x)\\mathrm{\\,d}x=3\\cdot4=12$."
  },
  {
    "id": "2D422TN121",
    "question": "Biết $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x = -2$ và $\\displaystyle\\int\\limits_{0}^{2} g(x)\\mathrm{\\,d}x = 4$. Giá trị của $\\displaystyle\\int\\limits_{0}^{2} [f(x)+g(x)]\\mathrm{\\,d}x$ bằng",
    "options": [
      "$-2$",
      "$-6$",
      "$6$",
      "$2$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits_{0}^{2} [f(x)+g(x)]\\mathrm{\\,d}x=-2+4=2$."
  },
  {
    "id": "2D422TN122",
    "question": "Biết $\\displaystyle\\int\\limits_{1}^{2} f(x)\\mathrm{\\,d}x= -2$ và $\\displaystyle\\int\\limits_{2}^{3} f(x)\\mathrm{\\,d}x= 1$. Giá trị của $\\displaystyle\\int\\limits_{1}^{3} 5f(x)\\mathrm{\\,d}x$ bằng",
    "options": [
      "$3$",
      "$-1$",
      "$-3$",
      "$-5$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits_{1}^{3} 5f(x)\\mathrm{\\,d}x=5\\left(\\displaystyle\\int\\limits_{1}^{2} f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{2}^{3} f(x)\\mathrm{\\,d}x\\right)=5\\cdot(-2+1)=-5$."
  },
  {
    "id": "2D422TN123",
    "question": "Biết hàm số $F(x)=x^2$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$. Tích phân $\\displaystyle\\int_1^2f(x) \\mathrm{\\,d}x$ bằng",
    "options": [
      "$1$",
      "$-3$",
      "$3$",
      "$5$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int_1^2f(x) \\mathrm{\\,d}x=x^2 \\Big |_1^2=3$."
  },
  {
    "id": "2D427TN124",
    "question": "Một vật chuyển động chậm dần đều với vận tốc $v(t)=160-10t$ (m/s). Tính quãng đường $s$ mà vật di chuyển trong khoảng thời gian từ thời điểm $t=0$(s) đến thời điểm vật dừng lại.",
    "options": [
      "$s=3840$ m",
      "$s=2560$ m",
      "$s=2840$ m",
      "$s=1280$ m"
    ],
    "answer": 3,
    "explain": "Vật dừng khi $v(t)=160-10t\\Rightarrow t=16$.<br>   Vậy quãng đường $s$ mà vật di chuyển trong khoảng thời gian từ thời điểm $t=0$(s) đến thời điểm vật dừng lại là $\\displaystyle\\int\\limits_0^{16} (160-10t) \\mathrm{\\,d}t=1280$ m."
  },
  {
    "id": "2D422TN125",
    "question": "Cho hàm số $y=f(x)$, $y=g(x)$ liên tục trên $[a;b]$ và số thực $k$ tùy ý. Trong các khẳng định sau, khẳng định nào <strong>sai</strong>?",
    "options": [
      "$\\displaystyle\\int\\limits_a^bk f(x)\\mathrm{\\,d}x=k\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^b[f(x)+g(x)]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_a^bg(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x=-\\displaystyle\\int\\limits_{b}^{a}f(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^bx f(x)\\mathrm{\\,d}x=x\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x$"
    ],
    "answer": 3,
    "explain": "Khẳng định sai là ``$\\displaystyle\\int\\limits_a^bx f(x)\\mathrm{\\,d}x=x\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x$''."
  },
  {
    "id": "2D422TN126",
    "question": "Giả sử $\\displaystyle\\int\\limits_0^9f(x)\\mathrm{\\,d}x=37$ và $\\displaystyle\\int\\limits_{9}^{0}g(x)\\mathrm{\\,d}x=16$. Khi đó, $I=\\displaystyle\\int\\limits_0^9\\left[2f(x)+3 g(x)\\right]\\mathrm{\\,d}x$ bằng",
    "options": [
      "$I=143$",
      "$I=58$",
      "$I=122$",
      "$I=26$"
    ],
    "answer": 3,
    "explain": "Do $\\displaystyle\\int\\limits_{9}^{0}g(x)\\mathrm{\\,d}x=16$ nên $\\displaystyle\\int\\limits_0^9g(x)\\mathrm{\\,d}x=-16$.<br>  Ta có $I=\\displaystyle\\int\\limits_0^9\\left[2f(x)+3 g(x)\\right]\\mathrm{\\,d}x=2\\displaystyle\\int\\limits_0^9f(x)\\mathrm{\\,d}x+3\\displaystyle\\int\\limits_0^9g(x)\\mathrm{\\,d}x=2\\cdot37+3\\cdot(-16)=26$."
  },
  {
    "id": "2D423TN127",
    "question": "Cho biết $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} (4-\\sin x)\\, \\mathrm{d}x=a \\pi+b$, với $a, b$ là các số nguyên. Giá trị của biểu thức $a+b$ bằng",
    "options": [
      "$1$",
      "$-4$",
      "$6$",
      "$3$"
    ],
    "answer": 0,
    "explain": "Ta có  $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} (4-\\sin x)\\, \\mathrm{d}x=\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} 4\\, \\mathrm{d}x-\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}} \\sin x\\, \\mathrm{d}x=2 \\pi-1$.<br>  So sánh với $a\\pi+b$, ta có $a=2$, $b=-1$.<br>  Do đó $a+b=2+(-1)=1$."
  },
  {
    "id": "2D422TN128",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-6;11]$ và thỏa mãn $\\displaystyle\\int\\limits_{-6}^{11} f(x)\\, \\mathrm{d}x=8$, $\\displaystyle\\int\\limits_{2}^{6} f(x)\\, \\mathrm{d}x=3$. Giá trị của biểu thức $P=\\displaystyle\\int\\limits_{-6}^{2} f(x)\\, \\mathrm{d}x+\\displaystyle\\int\\limits_{6}^{11} f(x)\\, \\mathrm{d}x$ bằng",
    "options": [
      "$P=4$",
      "$P=11$",
      "$P=5$",
      "$P=2$"
    ],
    "answer": 2,
    "explain": "Ta có  $\\displaystyle\\int\\limits_{-6}^{11} f(x)\\, \\mathrm{d}x=\\displaystyle\\int\\limits_{-6}^{2} f(x)\\, \\mathrm{d}x+\\displaystyle\\int\\limits_{2}^{6} f(x)\\, \\mathrm{d}x+\\displaystyle\\int\\limits_{6}^{11} f(x)\\, \\mathrm{d}x$.<br>  $\\Rightarrow 8=\\displaystyle\\int\\limits_{-6}^{2} f(x)\\, \\mathrm{d}x+3+\\displaystyle\\int\\limits_{6}^{11} f(x)\\, \\mathrm{d}x$.<br>  $P=\\displaystyle\\int\\limits_{-6}^{2} f(x)\\, \\mathrm{d}x+\\displaystyle\\int\\limits_{6}^{11} f(x)\\, \\mathrm{d}x=8-3=5$."
  },
  {
    "id": "2D422TN129",
    "question": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x = 9$, $\\displaystyle\\int\\limits_{0}^{4} f(x)\\mathrm{\\,d}x = 4$. Tính $\\displaystyle\\int\\limits_{0}^{4} f(x)\\mathrm{\\,d}x$.",
    "options": [
      "$I = 36$",
      "$I = 5$",
      "$I = \\dfrac{9}{4}$",
      "$I = 13$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits_{0}^{4} f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{0}^{4} f(x)\\mathrm{\\,d}x=9+4=13$."
  },
  {
    "id": "2D421TN130",
    "question": "Cho $f(x)$ là hàm số liên tục trên $[a;b]$ và $F(x)$ là nguyên hàm của $f(x)$. Khẳng định nào sau đây là <strong>sai</strong>?",
    "options": [
      "$\\displaystyle\\int\\limits_{b}^{a} f(x)\\mathrm{\\,d}x = -\\displaystyle\\int\\limits_{a}^{b} f(t)\\mathrm{\\,d}t$",
      "$\\displaystyle\\int\\limits_{a}^{a} f(x)\\mathrm{\\,d}x = 0$",
      "$\\displaystyle\\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x = F(x)\\bigg|_a^b=F(b)-F(a)$",
      "$\\displaystyle\\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x = f'(x)\\bigg|_a^b= f'(b) - f'(a)$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x = F(x)\\bigg|_a^b=F(b)-F(a)$."
  },
  {
    "id": "2D421TN131",
    "question": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$, có đồ thị như hình vẽ.  Gọi $S$ là diện tích hình phẳng được giới hạn bởi đồ thị hàm số $f(x)$, trục hoành và trục tung. Khẳng định nào sau đây đúng?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS28_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$S = \\displaystyle\\int\\limits_{c}^{d} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{d}^{0} f(x)\\mathrm{\\,d}x$",
      "$S = -\\displaystyle\\int\\limits_{c}^{d} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{d}^{0} f(x)\\mathrm{\\,d}x$",
      "$S = \\displaystyle\\int\\limits_{c}^{d} f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{d}^{0} f(x)\\mathrm{\\,d}x$",
      "$S = -\\displaystyle\\int\\limits_{c}^{d} f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{d}^{0} f(x)\\mathrm{\\,d}x$"
    ],
    "answer": 0,
    "explain": "Diện tích hình phẳng được tính bởi $S = \\displaystyle\\int\\limits_{c}^{d} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{d}^{0} f(x)\\mathrm{\\,d}x$."
  },
  {
    "id": "2D422TN132",
    "question": "Cho hàm số $f(x)$ và $y = g(x)$ liên tục trên $\\mathbb{R}$. Mệnh đề nào sau đây <strong>sai</strong>?",
    "options": [
      "$\\displaystyle\\int\\left[f(x) + g(x)\\right]\\mathrm{\\,d}x = \\displaystyle\\int f(x)\\mathrm{\\,d}x + \\displaystyle\\int g(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int \\left[f(x) - g(x)\\right]\\mathrm{\\,d}x = \\displaystyle\\int f(x)\\mathrm{\\,d}x - \\displaystyle\\int g(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int kf(x)\\mathrm{\\,d}x = k\\displaystyle\\int f(x)\\mathrm{\\,d}x$, với mọi hằng số $k$",
      "$\\displaystyle\\int \\mathrm{d}x = x + C$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int kf(x)\\mathrm{\\,d}x = k\\displaystyle\\int f(x)\\mathrm{\\,d}x$, với mọi hằng số $k\\neq0$."
  },
  {
    "id": "2D422TN133",
    "question": "Cho $\\displaystyle\\int\\limits_{0}^{2}f(x)\\mathrm{\\,d}x=3$. Khi đó, $\\displaystyle\\int\\limits_{0}^{2} \\left[f(x)+1\\right]\\mathrm{\\,d}x$ bằng",
    "options": [
      "$4$",
      "$1$",
      "$5$",
      "$7$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits_{0}^{2} \\left[f(x)+1\\right]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{2}f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{0}^{2}\\mathrm{d}x=3+2=5$."
  },
  {
    "id": "2D422TN134",
    "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[a;b]$. Gọi $D$ là diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, đường thẳng $x = a$ và đường thẳng $x = b$. Khi đó diện tích $S$ của hình phẳng $D$ được tính theo công thức",
    "options": [
      "$S = \\displaystyle\\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x$",
      "$S = \\displaystyle\\int\\limits_{a}^{b} |f(x)|\\mathrm{\\,d}x$",
      "$S = \\pi\\displaystyle\\int\\limits_{a}^{b} f^2(x)\\mathrm{\\,d}x$",
      "$S = \\left|\\displaystyle\\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x\\right|$"
    ],
    "answer": 1,
    "explain": "Công thức tính diện tích hình phẳng là $S = \\displaystyle\\int\\limits_{a}^{b} |f(x)|\\mathrm{\\,d}x$."
  },
  {
    "id": "2D422TN135",
    "question": "Tích phân $\\displaystyle\\int\\limits_{1}^{2} 2x\\mathrm{\\,d}x$ có giá trị là",
    "options": [
      "$4$",
      "$3$",
      "$2$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Tích phân $\\displaystyle\\int\\limits_{1}^{2} 2x\\mathrm{\\,d}x=x^2\\Big|_1^2=4-1=3$."
  },
  {
    "id": "2D422TN136",
    "question": "Cho $\\displaystyle\\int\\limits_{0}^{1} f(x)\\mathrm{\\,d}x = 2$, $\\displaystyle\\int\\limits_{1}^{2} f(x)\\mathrm{\\,d}x = 4$, khí đó $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x$ có giá trị bằng",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{1} f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{1}^{2} f(x)\\mathrm{\\,d}x=2+4=6$."
  },
  {
    "id": "2D422TN137",
    "question": "Nếu $\\displaystyle\\int\\limits_{0}^{1} f(x)\\mathrm{\\,d}x = 4$ thì $\\displaystyle\\int\\limits_{1}^{2} 2f(x) \\mathrm{\\,d}x$ bằng",
    "options": [
      "$16$",
      "$4$",
      "$8$",
      "$2$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits_{1}^{2} 2f(x) \\mathrm{\\,d}x=2\\displaystyle\\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x=2\\cdot4=8$."
  },
  {
    "id": "2D422TN138",
    "question": "Cho $\\displaystyle\\int\\limits_1^2 f(x) \\mathrm{\\,d}x=3$, $\\displaystyle\\int\\limits_2^3 f(x) \\mathrm{\\,d}x=-1$. Tính $\\displaystyle\\int\\limits_1^3 f(x) \\mathrm{\\,d}x$.",
    "options": [
      "$-2$",
      "$-4$",
      "$2$",
      "$4$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits_1^3 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^2 f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_2^3 f(x) \\mathrm{\\,d}x=3+(-1)=2$."
  },
  {
    "id": "2D422TN139",
    "question": "Tính $I=\\displaystyle\\int\\limits_0^1 3^x \\mathrm{\\,d}x$",
    "options": [
      "$I=2$",
      "$I=\\dfrac{2}{\\ln3}$",
      "$I=\\dfrac{1}{4}$",
      "$I=\\dfrac{3}{\\ln 3}$"
    ],
    "answer": 1,
    "explain": "$I=\\displaystyle\\int\\limits_0^1 3^x \\mathrm{\\,d}x=\\dfrac{3^x}{\\ln 3}\\bigg|_0^1=\\dfrac{3}{\\ln3}-\\dfrac{1}{\\ln3}=\\dfrac{2}{\\ln3}$"
  },
  {
    "id": "2D422TN140",
    "question": "Nếu $\\displaystyle\\int\\limits_1^2 f(x)\\mathrm{\\,d}x = 4$ thì $\\displaystyle\\int\\limits_2^1 f(x)\\mathrm{\\,d}x$ bằng",
    "options": [
      "$2$",
      "$4$",
      "$-4$",
      "$1$"
    ],
    "answer": 2,
    "explain": "Nếu $\\displaystyle\\int\\limits_1^2 f(x) \\mathrm{\\,d}x = 4$ thì $\\displaystyle\\int\\limits_2^1 f(x) \\mathrm{\\,d}x = -4$."
  },
  {
    "id": "2D422TN141",
    "question": "Tích phân $I = \\displaystyle\\int\\limits_0^1 \\left(3x^2 + 2x\\right)\\mathrm{d}x$ bằng",
    "options": [
      "$0$",
      "$4$",
      "$2$",
      "$-6$"
    ],
    "answer": 2,
    "explain": "$I = \\displaystyle\\int\\limits_0^1 (3x^2 + 2x) \\mathrm{d}x = \\left(x^3 + x^2\\right)\\big|_0^1 = (1 + 1)-(0+0) = 2$."
  },
  {
    "id": "2D422TN142",
    "question": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$, thỏa mãn $\\displaystyle\\displaystyle\\int\\limits_0^2 f(x)\\,\\mathrm{d}x = 4$ và $\\displaystyle\\displaystyle\\int\\limits_1^2 f(x)\\,\\mathrm{d}x = 3$. Khi đó $\\displaystyle\\displaystyle\\int\\limits_0^1 f(x)\\,\\mathrm{d}x$ bằng",
    "options": [
      "$0{,}75$",
      "$12$",
      "$1$",
      "$7$"
    ],
    "answer": 2,
    "explain": "Áp dụng tính chất tích phân xác định  \\[  \\displaystyle\\int\\limits_0^2 f(x)\\,\\mathrm{d}x = \\displaystyle\\int\\limits_0^1 f(x)\\,\\mathrm{d}x + \\displaystyle\\int\\limits_1^2 f(x)\\,\\mathrm{d}x.  \\]  \\[  \\Rightarrow 4 = \\displaystyle\\int\\limits_0^1 f(x)\\,\\mathrm{d}x + 3 \\Rightarrow \\displaystyle\\int\\limits_0^1 f(x)\\,\\mathrm{d}x = 1.  \\]"
  },
  {
    "id": "2D422TN143",
    "question": "Cho $f$ là hàm số liên tục trên đoạn $[2;4]$. Biết $F$ là nguyên hàm của $f$ trên đoạn $[2; 4]$ thỏa mãn $F(2)=6$ và $F(4)=3$. Tích phân $\\displaystyle\\int_2^4f(x){\\,d}x$ bằng.",
    "options": [
      "$2$",
      "$3$",
      "$9$",
      "$-3$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int_2^4f(x){\\,d}x=F(4)-F(2)=-3.$"
  },
  {
    "id": "2D422TN144",
    "question": "Nếu $\\displaystyle\\int_0^4f(x){\\,d}x=37$ thì $\\displaystyle\\int_0^4\\left[2f(x)-3x^2\\right]{\\,d}x$ bằng",
    "options": [
      "$-27$",
      "$18$",
      "$12$",
      "$10$"
    ],
    "answer": 3,
    "explain": "$\\displaystyle\\int_0^4\\left[2f(x)-3x^2\\right]{\\,d}x=2\\displaystyle\\int_0^4 f(x){\\,d}x-\\displaystyle\\int_0^4 3x^2 {\\,d}x =2 \\cdot 37 - 64=10.$"
  },
  {
    "id": "2D422TN145",
    "question": "Nếu $\\displaystyle\\int\\limits_1^3 f(x)\\,\\mathrm{d}x = 2$ thì $\\displaystyle\\int\\limits_1^3\\left[f(x) + 2x\\right]\\,\\mathrm{d}x$ bằng",
    "options": [
      "$20$",
      "$10$",
      "$12$",
      "$18$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int\\limits_1^3\\left[f(x) + 2x\\right]\\,\\mathrm{d}x = \\displaystyle\\int\\limits_1^3f(x) \\,\\mathrm{d}x+ \\displaystyle\\int\\limits_1^3 2x \\,\\mathrm{d}x = 2+8=10$."
  },
  {
    "id": "2D424TN146",
    "question": "Cho biết tích phân $\\displaystyle\\int\\limits_1^2 \\left(\\dfrac{2x^2 - 1}{x}\\right)\\,\\mathrm{d}x = a + b\\ln 2$. Tính $a - b$.",
    "options": [
      "$a - b = 4$",
      "$a - b = -4$",
      "$a - b = 5$",
      "$a - b = 2$"
    ],
    "answer": 0,
    "explain": "$\\displaystyle\\int\\limits_1^2 \\left(\\dfrac{2x^2 - 1}{x}\\right)\\mathrm{d}x = \\displaystyle\\int\\limits_1^2 \\left(2x - \\dfrac{1}{x}\\right)\\,\\mathrm{d}x = \\left[x^2 - \\ln|x|\\right]_1^2 = 4 - \\ln 2 - (1 - 0) = 3 - \\ln 2$.<br>  Vậy $a = 3$, $b = -1$ $\\Rightarrow a - b = 4$."
  },
  {
    "id": "2D427TN147",
    "question": "Một ô tô đang chạy với vận tốc $18\\ \\mathrm{m/s}$ thì người lái ô tô đạp phanh, từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = -6t + 18\\ (\\mathrm{m/s})$, trong đó $t$ là thời gian tính bằng giây. Hỏi từ lúc đạp phanh đến khi dừng hẳn, ô tô di chuyển được quãng đường bằng bao nhiêu mét?",
    "options": [
      "$27$ m",
      "$29$ m",
      "$25$ m",
      "$23$ m"
    ],
    "answer": 0,
    "explain": "Cho $v(t) = 0 \\Rightarrow -6t + 18 = 0 \\Rightarrow t = 3$.<br>  Quãng đường ô tô di chuyển được kể từ lúc đạp phanh đến khi dừng hẳn là $s = \\displaystyle \\int\\limits_0^3 v(t)\\,\\mathrm{d}t = \\displaystyle \\int\\limits_0^3 (-6t + 18)\\,\\mathrm{d}t = 27.$"
  },
  {
    "id": "2D421TN148",
    "question": "Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\displaystyle\\int x^3\\,\\mathrm{d}x = x^3 + C$",
      "$\\displaystyle\\int x^3\\,\\mathrm{d}x = \\dfrac{1}{4}x^4 + C$",
      "$\\displaystyle\\int x^3\\,\\mathrm{d}x = \\dfrac{3}{4}x^4 + C$",
      "$\\displaystyle\\int x^3\\,\\mathrm{d}x = \\dfrac{2}{3}x^3 + C$"
    ],
    "answer": 1,
    "explain": "Áp dụng công thức $\\displaystyle\\int x^n\\,\\mathrm{d}x=\\dfrac{x^{n+1}}{n+1}+C$ với $n=3$: $\\displaystyle\\int x^3\\,\\mathrm{d}x=\\dfrac{x^4}{4}+C$."
  },
  {
    "id": "2D422TN149",
    "question": "Tích phân $I=\\displaystyle\\int\\limits_{-1}^1\\left(x^3+3 x+2\\right)\\mathrm{\\,d}x$ có giá trị là",
    "options": [
      "$I=4$",
      "$I=2$",
      "$I=3$",
      "$I=1$"
    ],
    "answer": 0,
    "explain": "$I=\\displaystyle\\int\\limits_{-1}^1\\left(x^3+3 x+2\\right)\\mathrm{\\,d}x=4$."
  },
  {
    "id": "2D422TN150",
    "question": "Nếu $\\displaystyle\\int\\limits_{1}^{3} f(x) \\mathrm{\\,d}x =2$ thì $\\displaystyle\\int\\limits_{1}^{3}[f(x)+2x] \\mathrm{\\,d}x $ bằng",
    "options": [
      "$18$",
      "$10$",
      "$12$",
      "$20$"
    ],
    "answer": 1,
    "explain": "$\\displaystyle\\int\\limits_1^3[f(x)+2 x] \\mathrm{\\,d}x =\\displaystyle\\int\\limits_{1}^{3}f(x)\\mathrm{\\,d}x +2\\displaystyle\\int\\limits_{1}^{3}x \\mathrm{\\,d}x =2+2\\cdot 4=10$."
  },
  {
    "id": "2D422TN151",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_0^2 (2x+1){\\,d}x$.",
    "options": [
      "$I=4$",
      "$I=5$",
      "$I=6$",
      "$I=2$"
    ],
    "answer": 2,
    "explain": "Ta có $I=\\displaystyle\\int\\limits_0^2 (2x+1){\\,d}x=6$."
  },
  {
    "id": "2D422TN152",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[a;b]$, $\\left(a,b\\in \\mathbb{R},a&lt;b\\right)$. Gọi $S$ là diện tích hình phẳng được giới hạn bởi các đường $y=f(x)$; trục hoành; $x=a$; $x=b$. Phát biểu nào sau đây là đúng?",
    "options": [
      "$S=\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x$",
      "$S=\\left|\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x\\right|$",
      "$S=\\displaystyle\\int\\limits_b^a\\left|f(x)\\right|\\mathrm{\\,d}x$",
      "$S=\\displaystyle\\int\\limits_a^b\\left|f(x)\\right|\\mathrm{\\,d}x$"
    ],
    "answer": 3,
    "explain": "Ta có $S=\\displaystyle\\int\\limits_a^b\\left|f(x)\\right|\\mathrm{\\,d}x$."
  },
  {
    "id": "2D422TN153",
    "question": "Cho $\\displaystyle\\int\\limits_{1}^{2} f(x)\\mathrm{\\,d}x=-3$ và $\\displaystyle\\int\\limits_{1}^{2} g(x)\\mathrm{\\,d}x=4$. Giá trị tích phân $\\displaystyle\\int\\limits_{1}^{2} \\left[g(x)+2f(x)\\right]\\mathrm{\\,d}x$ bằng",
    "options": [
      "$-2$",
      "$2$",
      "$1$",
      "$5$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits_{1}^{2} \\left[f(x)+2g(x)\\right]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{1}^{2} g(x)\\mathrm{\\,d}x+2\\displaystyle\\int\\limits_{1}^{2} f(x)\\mathrm{\\,d}x=-3\\cdot 2+4=-2$."
  },
  {
    "id": "2D423TN7",
    "question": "Tính $I = \\displaystyle \\int\\limits_0^{\\dfrac{\\pi}{2}}(\\cos x - 3\\sin x)\\,\\mathrm{d}x$.",
    "options": [
      "$I=4$",
      "$I=-2$",
      "$I=2$",
      "$I=-4$"
    ],
    "answer": 1,
    "explain": "Ta có  $I = \\displaystyle \\int\\limits_0^{\\dfrac{\\pi}{2}}(\\cos x - 3\\sin x)\\,\\mathrm{d}x = \\left(\\sin x+ 3\\cos x\\right)\\Bigg|^{\\dfrac{\\pi}{2}}_{0}$<br>$= \\left(\\sin \\dfrac{\\pi}{2}+3\\cos \\dfrac{\\pi}{2}\\right)-(\\sin 0 +3\\cos 0)= 1-3=-2.$"
  },
  {
    "id": "2D422TN8",
    "question": "Cho $f$ là hàm số liên tục trên $[1 ; 2]$. Biết $F$ là nguyên hàm của $f$ trên $[1 ; 2]$ thoả $F(1) = -2$ và $F(2) = 4$. Tính $\\displaystyle \\int\\limits_1^2 f(x)\\,\\mathrm{d}x$.",
    "options": [
      "$-2$",
      "$-6$",
      "$2$",
      "$6$"
    ],
    "answer": 3,
    "explain": "Ta có  \\[\\displaystyle \\int\\limits_1^2 f(x)\\,\\mathrm{d}x=F(x) \\Bigg|^2_1=F(2)-F(1)=4-(-2)=6.\\]"
  },
  {
    "id": "2D424TN9",
    "question": "Biết $\\displaystyle \\int\\limits_1^3 \\dfrac{x + 2}{x}\\,\\mathrm{d}x = a + b \\ln c$, với $a, b, c \\in \\mathbb{Z},\\ c &lt; 9$. Tính tổng $S = a + b + c$.",
    "options": [
      "$S = 7$",
      "$S = 5$",
      "$S = 3$",
      "$S = 4$"
    ],
    "answer": 0,
    "explain": "Ta có  \\[\\displaystyle \\int\\limits_1^3 \\dfrac{x + 2}{x}\\,\\mathrm{d}x =\\displaystyle \\int\\limits_1^3 \\left(1+\\dfrac{ 2}{x}\\right)\\,\\mathrm{d}x=\\left(x+2\\ln |x|\\right)\\Bigg|^3_1=(3+2\\ln 3)-(1+2\\ln 1)=2+2\\ln3.\\]  Suy ra $a=2$, $b=2$ và $c=3$.<br>  Khi đó, $S=a+b+c=2+2+3=7$."
  },
  {
    "id": "2D422TN10",
    "question": "Cho tích phân $\\displaystyle \\int \\limits_0^1 \\left[f(x) + 2x\\right]\\,\\mathrm{d}x = 2$. Tính $\\displaystyle \\int \\limits_0^1 f(x)\\,\\mathrm{d}x$.",
    "options": [
      "$0$",
      "$2$",
      "$4$",
      "$1$"
    ],
    "answer": 3,
    "explain": "Ta có  \\[ \\displaystyle \\int \\limits_0^1 [f(x) + 2x]\\,\\mathrm{d}x = \\int \\limits_0^1 f(x) \\,\\mathrm{d}x + \\int \\limits_0^1 2x\\,\\mathrm{d}x <br>  =\\int \\limits_0^1 f(x) \\,\\mathrm{d}x+1=2 \\Rightarrow \\int \\limits_0^1 f(x) \\,\\mathrm{d}x=1.\\]"
  },
  {
    "id": "2D424TN11",
    "question": "Tính $I = \\displaystyle \\int \\limits_1^\\mathrm{e}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^2}\\right)\\,\\mathrm{d}x$.",
    "options": [
      "$1$",
      "$\\dfrac{1}{\\mathrm{e}}$",
      "$\\dfrac{1}{\\mathrm{e}} + 1$",
      "$\\mathrm{e}$"
    ],
    "answer": 1,
    "explain": "Ta có   \\[\\displaystyle \\int \\limits_1^\\mathrm{e}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^2}\\right)\\,\\mathrm{d}x=\\left(\\ln |x| +\\dfrac{1}{x}\\right)\\Bigg|^\\mathrm{e}_1=\\left(\\ln e+\\dfrac{1}{e}\\right)-\\left(\\ln 1 + \\dfrac{1}{1}\\right)=\\dfrac{1}{\\mathrm{e}}.\\]"
  },
  {
    "id": "2D422TN12",
    "question": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\displaystyle \\int \\limits_0^2 f(x)\\,\\mathrm{d}x = 4$, $\\displaystyle \\int \\limits_1^2 f(x)\\,\\mathrm{d}x = 3$. Tính $\\displaystyle \\int \\limits_0^1 f(x)\\,\\mathrm{d}x$.",
    "options": [
      "$1$",
      "$12$",
      "$0{,}75$",
      "$7$"
    ],
    "answer": 0,
    "explain": "Ta có  \\[\\displaystyle \\int \\limits_0^2 f(x)\\,\\mathrm{d}x =\\int \\limits_0^1 f(x)\\,\\mathrm{d}x +\\int \\limits_1^2 f(x)\\,\\mathrm{d}x = \\int \\limits_0^1 f(x)\\,\\mathrm{d}x +3=4 \\Rightarrow \\int \\limits_0^1 f(x)\\,\\mathrm{d}x =1.\\]"
  },
  {
    "id": "2D422TN13",
    "question": "Tính $\\displaystyle \\int \\limits_0^2 \\left(6x^2 - 2x\\right) \\mathrm{d}x$.",
    "options": [
      "$8$",
      "$12$",
      "$6$",
      "$11$"
    ],
    "answer": 1,
    "explain": "Ta có  \\[\\displaystyle \\int \\limits_0^2 \\left(6x^2 - 2x\\right) \\mathrm{d}x=\\left(2x^3-x^2\\right) \\Bigg|^2_0=(2\\cdot2^3-2^2)-(2\\cdot0^3-0^2)=12.\\]"
  },
  {
    "id": "2D422TN14",
    "question": "Biết $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d} x=3; \\displaystyle\\int\\limits_0^2f(x)\\mathrm{\\,d}x=1$. Khi đó $\\displaystyle\\int\\limits_0^{-1} f(x) \\mathrm{\\,d}x$ bằng",
    "options": [
      "$6$",
      "$4$",
      "$2$",
      "$-2$"
    ],
    "answer": 2,
    "explain": "Ta có  \\[  \\displaystyle\\int\\limits_0^{-1} f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^{2} f(x) \\mathrm{\\,d}x-\\displaystyle\\int\\limits_{-1}^{2} f(x) \\mathrm{\\,d}x=3-1=2.  \\]"
  },
  {
    "id": "2D422TN15",
    "question": "Nếu $\\displaystyle\\int\\limits_0^1f(x)\\mathrm{\\,d}x=37$ và $\\displaystyle\\int\\limits_0^1g(x)\\mathrm{\\,d}x=16$ thì $\\displaystyle\\int\\limits_0^1[2f(x)+3g(x)]\\mathrm{\\,d}x$ bằng",
    "options": [
      "$122$",
      "$53$",
      "$48$",
      "$74$"
    ],
    "answer": 0,
    "explain": "Ta có  \\[  \\displaystyle\\int\\limits_0^1[2f(x)+3g(x)]\\mathrm{\\,d}x=2\\displaystyle\\int\\limits_0^1f(x)\\mathrm{\\,d}x+3\\displaystyle\\int\\limits_0^1g(x)\\mathrm{\\,d}x=2\\cdot 37 + 3 \\cdot 16=122.  \\]"
  },
  {
    "id": "2D422TN16",
    "question": "Cho hai hàm số $f$, $g$ liên tục trên đoạn $[a; b]$ và $k \\in \\mathbb{R}$. Khẳng định nào <strong>sai</strong>?",
    "options": [
      "$\\displaystyle\\int\\limits_a^b x f(x)\\mathrm{\\,d}x=x \\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=-\\displaystyle\\int\\limits_b^a f(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^b[f(x)+g(x)]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_a^b g(x)\\mathrm{\\,d}x$",
      "$\\displaystyle\\int\\limits_a^b k f(x)\\mathrm{\\,d}x=k \\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x$, $\\forall k \\neq 0$"
    ],
    "answer": 0,
    "explain": "Khẳng định <strong>sai</strong> là $\\displaystyle\\int\\limits_a^b x f(x)\\mathrm{\\,d}x=x \\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x$."
  }
];
