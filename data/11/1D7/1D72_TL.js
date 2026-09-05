// =========================================================================
// KHỐI DỮ LIỆU: 1D72 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D72 = [
  {
    "id": "1D724TL1",
    "question": "Cho hàm số $y = \\sin 2x - \\sqrt{4x+5}$. Biết $y' = a \\cdot \\cos 2x + \\dfrac{b}{\\sqrt{4x+5}}$ với $a, b$ là các số nguyên.  Tính $a^2 + b$.",
    "answer": "2",
    "explain": "Ta có $\\begin{aligned}[t]  y'&= (\\sin 2x)' -(\\sqrt{4x+5})'\\\\  y'&=(2x)' \\cdot \\cos 2x -\\dfrac{(4x+5)'}{2\\sqrt{4x+5}}\\\\  y'&=2\\cos 2x -\\dfrac{2}{\\sqrt{4x+5}}  \\end{aligned}$<br>  Theo đề bài, $y' = a \\cdot \\cos 2x + \\dfrac{b}{\\sqrt{4x+5}}$.<br>  Đồng nhất hệ số, ta có $a=2$ và $b=-2$.<br>  Vậy $a^2 + b = (2)^2 + (-2) = 4 - 2 = 2$."
  },
  {
    "id": "1D722TL2",
    "question": "Cho hàm số $f(x)=(x+1)^3$. Tính đạo hàm của hàm số $f(x)$ tại điểm $x_0=1$.",
    "answer": "12",
    "explain": "Ta có $f'(x)=3(x+1)^2$.<br>  Suy ra $f'(1)=12$.<br>  Vậy đạo hàm của hàm số $f(x)$ tại điểm $x_0=1$ là $12$."
  },
  {
    "id": "1D722TL3",
    "question": "Cho hàm số $f(x)=\\sqrt{x^3-2x^2+x+1}$. Tổng các nghiệm của phương trình $f'(x)=0$ có dạng $\\dfrac{a}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản. Tính $a+b$?",
    "answer": "7",
    "explain": "Xét hàm số $f(x)=\\sqrt{x^3-2x^2+x+1}$.<br>  Ta có $f'(x)=\\dfrac{3x^2-4x+1}{2\\sqrt{x^3-2x^2+x+1}}$; $f'(x)=0\\Leftrightarrow 3x^2-4x+1=0\\Leftrightarrow x=1 \\text{ hoặc } x=\\dfrac{1}{3}.$<br>  Khi đó tổng các nghiệm của phương trình $f'(x)=0$ là $\\dfrac{4}{3}$ có dạng $\\dfrac{a}{b}$. Suy ra $a=4$; $b=3$.<br>  Do đó, $a+b=7$."
  },
  {
    "id": "1D722TL4",
    "question": "Cho hàm số $y=\\dfrac{2x^2+5x-4}{3-x}$. Biết $y'=\\dfrac{ax^2+bx+c}{(3-x)^2}$. Tính $S=2a-b+c$.",
    "answer": "-5",
    "explain": "$\\begin{aligned}  y &= \\dfrac{2x^2+5x-4}{3-x} \\\\  y' &= \\dfrac{(2x^2+5x-4)'(3-x)-(3-x)'(2x^2+5x-4)}{(3-x)^2} \\\\  &= \\dfrac{(4x+5)(3-x)+2x^2+5x-4}{(3-x)^2} \\\\  &= \\dfrac{12x-4x^2+15-5x+2x^2+5x-4}{(3-x)^2} \\\\  &= \\dfrac{-2x^2+12x+11}{(3-x)^2}.  \\end{aligned}$ <br>  Do đó $a=-2$, $b=12$ và $c=11$. <br>  Vậy $2a-b+c=2 \\cdot (-2)-12+11=-5$."
  },
  {
    "id": "1D722TL5",
    "question": "Biết phương trình tiếp tuyến của hàm số $y=\\dfrac{x-2}{1-x}$ tại điểm có hoành độ bằng $2$ có dạng $y=ax+b$. Tính $S=a \\cdot b$.",
    "answer": "-2",
    "explain": "$y=\\dfrac{x-2}{1-x}$ <br>  $y'=\\dfrac{(x-2)'(1-x)-(1-x)'(x-2)}{(1-x)^2}=\\dfrac{1-x+x-2}{(1-x)^2}=\\dfrac{-1}{(1-x)^2}$. <br>  Gọi $M(x_0;y_0)$ là tọa độ tiếp điểm. <br>  Theo đề $x_0=2$ <br>  $y_0=\\dfrac{2-2}{1-2}=0$ <br>  $y'(2)=\\dfrac{-1}{(1-2)^2}=-1$. <br>  Phương trình tiếp tuyến: $y=-(x-2)$ hay $y=-x+2$. <br>  Do đó $a=-1$ và $b=2$. <br>  Vậy $a \\cdot b=(-1) \\cdot 2=-2$."
  },
  {
    "id": "1D722TL6",
    "question": "Phương trình tiếp tuyến của đồ thị hàm số $y=x^3-3x^2+4$ tại điểm thuộc đồ thị có hoành độ $x_0=3$ có dạng $y=ax+b$. Tính $a+2b$.",
    "answer": "-37",
    "explain": "Gọi tiếp điểm là $M(x_0;y_0)$.<br>  Ta có $x_0=3 \\Rightarrow y_0=3^3-3\\cdot 3^2+4=4$.<br>  $y'=3x^2-6x \\Rightarrow y'(x_0)=3\\cdot 3^2-6\\cdot 3=9$.<br>  Phương trình tiếp tuyến của đồ thị hàm số tại $M(x_0;y_0)$ là \\[y=y'(x_0)(x-x_0)+y_0 \\Leftrightarrow y=9(x-3)+4 \\Leftrightarrow y=9x-23.\\]  Vậy $a=9$; $b=-23$ nên $a+2b=9+2\\cdot (-23)=-37$."
  },
  {
    "id": "1D722TL7",
    "question": "Tìm đạo hàm của hàm số $y=\\dfrac{1}{x}+\\sqrt{x}$ tại $x=1$.",
    "answer": "-0,5",
    "explain": "Ta có $y'=-\\dfrac{1}{x^2}+\\dfrac{1}{2\\sqrt{x}}$. Khi đó $y'(1)=-\\dfrac{1}{1^2}+\\dfrac{1}{2\\sqrt{1}}=-0{,}5$."
  },
  {
    "id": "1D722TL8",
    "question": "Cho hàm số $f(x) = \\left(x^2 + a\\right)^2 + b$ ($a$, $b$ là tham số). Biết $f(0) = 2$ và $f'(1) = 8$. Tính giá trị $T = a + b$.",
    "answer": "2",
    "explain": "Ta có $f'(x) = 2\\left(x^2 + a\\right)\\cdot 2x = 4x\\left(x^2 + a\\right)$.<br>  Do đó  $ f(0) = 2 \\text{ và } f'(1) = 8 \\Leftrightarrow \\left(0^2 + a\\right)^2 + b = 2 \\text{ và } 4\\cdot 1\\cdot \\left(1^2 + a\\right) = 8 \\Leftrightarrow a^2 + b = 2 \\text{ và } a = 1 \\Leftrightarrow a = 1 \\text{ và } b = 1.$  Vậy $T = a + b = 1 + 1 = 2$."
  },
  {
    "id": "1D725TL9",
    "question": "Biết đạo hàm của hàm số $y = \\dfrac{1}{4}\\sqrt{x} - \\dfrac{1}{x} + 3^x$ có dạng $y' = \\dfrac{1}{a\\sqrt{x}} + \\dfrac{b}{x^2} + 3^x\\cdot \\ln c$, với $a$, $b$, $c \\in \\mathbb{Z}$. Khi đó giá trị của biểu thức $T = a + b + c$ bằng bao nhiêu?",
    "answer": "12",
    "explain": "Ta có $y' = \\dfrac{1}{4}\\cdot \\dfrac{1}{2\\sqrt{x}} - \\left(-\\dfrac{1}{x^2}\\right) + 3^x\\cdot\\ln 3 = \\dfrac{1}{8\\sqrt{x}} + \\dfrac{1}{x^2} + 3^x\\cdot\\ln 3$.<br>  Suy ra $a = 8$, $b = 1$ và $c = 3$.<br>  Do đó $T = a + b + c = 8 + 1 + 3 = 12$."
  },
  {
    "id": "1D722TL10",
    "question": "Hàm số $y = x^3 + 3x$ có đồ thị $(C)$. Phương trình tiếp tuyến của đồ thị $(C)$ tại điểm có hoành độ bằng $1$, có dạng $y = ax + b$ $(a, b \\in \\mathbb{R})$. Tính $T = a + b$.",
    "answer": "4",
    "explain": "Ta có $y' = 3x^2 + 3$.<br>  Suy ra $y(1) = 1^3 + 3\\cdot 1 = 4$, $y'(1) = 3\\cdot 1^2 + 3 = 6$.<br>  Phương trình tiếp tuyến cần tìm là  $ y = 6(x - 1) + 4 \\Leftrightarrow y = 6x - 2. $  Do đó $a = 6$ và $b = -2 \\Rightarrow T = a + b = 6 + (-2) = 4$."
  },
  {
    "id": "1D722TL11",
    "question": "Cho hàm số $f(x)=\\dfrac{3x-2}{x+1}$ có đồ thị $(C)$. Tính hệ số góc của tiếp tuyến với $(C)$ tại điểm có hoành độ $x_0=-2$.",
    "answer": "5",
    "explain": "Hệ số góc của tiếp tuyến là $k=f'(-2)$.<br>  Ta có $f'(x)=\\dfrac{5}{(x+1)^2}$, vậy $k=f'(-2)=5$."
  },
  {
    "id": "1D722TL12",
    "question": "Sau khi phát hiện một bệnh dịch, các chuyên gia y tế ước tính số người nhiễm bệnh kể từ ngày xuất hiện bệnh nhân đầu tiên đến ngày thứ $t$ là $f(t)=45 t^2-t^3$, $t=0,1,2, \\ldots, 25$. Nếu coi $f(t)$ là hàm số xác định trên đoạn $[0; 25]$ thì đạo hàm $f'(t)$ được xem là tốc độ truyền bệnh (người/ngày) tại thời điểm $t$ ngày. Hỏi đến ngày thứ mấy thì tốc độ truyền bệnh là $675$ (người/ngày)?",
    "answer": "15",
    "explain": "Ta có $f'(t)=-3t^2+90t$.<br>  Theo đề bài, ta có phương trình  \\[-3t^2+90t=675\\Leftrightarrow -3t^2+90t-675=0\\Leftrightarrow x=15\\ (\\text{thỏa mãn}).\\]  Vậy đến ngày thứ $15$ thì tốc độ truyền bệnh là $675$ (người/ngày)."
  },
  {
    "id": "1D726TL13",
    "question": "Một công ty xác định rằng tổng chi phí của họ, tính theo nghìn đô-la, để sản xuất $x$ mặt hàng là $C(x)=\\sqrt{5x^2+60}$, và công ty lên kế hoạch nâng sản lượng trong $t$ tháng kể từ nay theo hàm số $x(t)=20t+40$. Tính tốc độ tăng của chi phí sau $4$ tháng kể từ nay? (Làm tròn kết quả đến hàng phần chục, đơn vị nghìn đô-la trên tháng)",
    "answer": "44{,}7",
    "explain": "Ta có $C(t)=\\sqrt{5(20t+40)^2+60}=\\sqrt{2000t^2+8000t+8060}$<br>  $C'(t)=\\dfrac{4000t+8000}{2\\sqrt{2000t^2+8000t+8060}}$.<br>  Vậy tốc độ tăng chi phí sau $4$ tháng là $C'(4)=\\dfrac{4000\\cdot 4+8000}{2\\sqrt{2000\\cdot 4^2+8000\\cdot 4+8060}}\\approx 44{,}7$."
  },
  {
    "id": "1D722TL1",
    "question": "Hàm số $f(x)=\\dfrac{x}{\\sqrt {9x^2+5}-1}$. Tập nghiệm của bất phương trình $f'(x)\\ge 0$ là $S=[a;b]$. Tính giá trị của biểu thức $S=a^2+b^2$<em> (kết quả được làm tròn đến hàng phần mười)</em>.",
    "answer": "4,4",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có  $f'(x) = \\left(\\dfrac{x}{\\sqrt {9x^2+5}-1}\\right)'$<br>$= \\dfrac{\\sqrt{9x^2+5}-1-x\\left(\\sqrt{9x^2+5}-1 \\right)'}{\\left( \\sqrt{9x^2+5}-1\\right)^2}$<br>$= \\dfrac{\\sqrt{9x^2+5}-1-\\dfrac{x^2}{\\sqrt{9x^2+5}} }{\\left( \\sqrt{9x^2+5}-1\\right)^2}$<br>$= \\dfrac{5-\\sqrt {9{x^2}+5}}{{{\\left( \\sqrt {9{x^2}+5}-1 \\right)}^2}\\sqrt {9{x^2}+5}}$   Vì ${{\\left( \\sqrt {9{x^2}+5}-1 \\right)}^2}\\sqrt {9{x^2}+5}&gt;0$ với mọi $ x\\in \\mathbb{R}$ <br>  nên $f'( x )\\ge 0$ khi $5-\\sqrt {9{x^2}+5}\\ge 0\\Rightarrow -\\dfrac{2\\sqrt {5}}{3}\\le x\\le \\dfrac{2\\sqrt {5}}{3}$.<br>  Do đó $ a=-\\dfrac{2\\sqrt {5}}{3}$ và $b=\\dfrac{2\\sqrt {5}}{3}$.<br>  Vậy $S={a^2}+{b^2}=\\dfrac{40}{9}\\approx 4{,}4$."
  }
];
