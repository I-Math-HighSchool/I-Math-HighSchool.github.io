// =========================================================================
// KHỐI DỮ LIỆU: 2D12 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2D12 = [
  {
    "id": "2D122TL1",
    "question": "Cho hàm số $y=f(x)=x^3-6x^2+9x+30$. Biết rằng đồ thị của hàm số $y=f(x)$ đạt cực tiểu tại điểm $A(m;n)$. Giá trị của biểu thức $Q=m-n$ bằng bao nhiêu?",
    "answer": "-27",
    "explain": "Ta có $y'=3x^2-12x+9$, $y'=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên suy ra $A(3;30)$.<br>  Vậy $Q=m-n=3-30=-27$."
  },
  {
    "id": "2D122TL2",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}\\setminus\\{1\\}$ và có xét dấu của hàm số $f'(x)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng tất cả các điểm cực trị của hàm số $y=f(x)$ bằng",
    "answer": "1",
    "explain": "Từ bảng xét dấu, ta có hàm số đạt cực trị tại $x=-1$, $x=0$ và $x=2$.<br>  Tổng tất cả các điểm cực trị của hàm số $y=f(x)$ bằng $1$."
  },
  {
    "id": "2D122TL3",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=(x-1)^2\\left(x^2-4\\right)$. Hỏi hàm số $y=f(x)$ có bao nhiêu điểm cực trị?",
    "answer": "2",
    "explain": "Ta có  $f'(x)=0$<br>$\\Leftrightarrow (x-1)^2\\left(x^2-4\\right)=0$<br>$\\Leftrightarrow x=1 \\text{ (nghiệm kép)} \\text{ hoặc } x=2 \\text{ (nghiệm đơn)} \\text{ hoặc } x=-2 \\text{ (nghiệm đơn)}$  Bảng xét dấu  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $f'(x)$ đổi dấu hai lần do đó hàm số đã cho có hai điểm cực trị."
  },
  {
    "id": "2D121TL4",
    "question": "Cho hàm số $y = \\dfrac{x^2-4x+1}{x+1}$ có hai điểm cực trị là $x_1$, $x_2$. Tính $x_1+x_2$.",
    "answer": "-2",
    "explain": "Ta có $y' = \\dfrac{(2x-4)(x+1)-\\left(x^2-4x+1\\right)\\cdot 1}{(x+1)^2} = \\dfrac{x^2+2x-5}{(x+1)^2}$.<br>  Suy ra $y' = 0 \\Leftrightarrow \\dfrac{x^2+2x-5}{(x+1)^2} = 0 \\Leftrightarrow x^2+2x-5 = 0 \\Leftrightarrow x_1 = -1+\\sqrt{6} \\text{ hoặc } x_2 = -1-\\sqrt{6}.$<br>  Do đó $x_1+x_2 = \\left(-1+\\sqrt{6}\\right) + \\left(-1-\\sqrt{6}\\right) = -2$."
  },
  {
    "id": "2D122TL5",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_021.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng giá trị cực đại và cực tiểu của hàm số bằng bao nhiêu?",
    "answer": "6",
    "explain": "Dựa vào bảng biến thiên, ta thấy tổng giá trị cực đại và cực tiểu của hàm số bằng $5+1=6$."
  },
  {
    "id": "2D122TL6",
    "question": "Cho hàm số $f(x)=x^3+bx^2+cx+d$ có đồ thị như hình vẽ dưới. Tính giá trị của biểu thức $T=f(20)-f(0)$.  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_023.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "7280",
    "explain": "$f'(x)=3x^2+2bx+c$. Dựa vào đồ thị, ta có $f'(-1)=0 \\text{ và } f'(2)=0\\Leftrightarrow3-2b+c=0 \\text{ và } 12+4b+c=0\\Leftrightarrow b =-\\dfrac{3}{2} \\text{ và } c =-6.$ Do đó $f(x)=x^3-\\dfrac{3}{2}x^2-6x+d.$ Suy ra $T=f(20)-f(0)=7280$."
  },
  {
    "id": "2D121TL7",
    "question": "Hàm số $y=\\dfrac{x^2-x+1}{x-1}$ có giá trị cực đại và giá trị cực tiểu lần lượt là $a$ và $b$. Tính $3a+2b$.",
    "answer": "3",
    "explain": "Ta có $y'=\\dfrac{x^2-2x}{(x-1)^2}$, $\\forall x\\ne 1$,  $y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên ta có giá trị cực đại của hàm số là $a=-1$ và giá trị cực tiểu của hàm số là $b=3$.<br>  Vậy $2a+3b=3$."
  },
  {
    "id": "2D121TL8",
    "question": "Giả sử hàm số $f(x) = x^3 - 6x^2 + 9x - 1$ đạt cực đại tại $x = a$ và đạt cực tiểu tại $x = b$. Giá trị của biểu thức $A = 2a + b$ là bao nhiêu?",
    "answer": "5",
    "explain": "Tập xác định của hàm số là $\\mathbb{R}$.<br>  Ta có $f'(x) = 3x^2 - 12x + 9$; $f'(x) = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$.<br>  Bảng biến thiên:  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_029.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số đạt cực đại tại $x = 1$; đạt cực tiểu tại $x = 3$.<br>  Suy ra $a = 1, b = 3$. vậy $A = 2a + b = 5$."
  },
  {
    "id": "2D122TL9",
    "question": "Cho hàm số $f(x)=\\dfrac{4x^2+3x}{x+1}$. Đường thẳng đi qua $2$ điểm cực trị của đồ thị hàm số đã cho cắt đường tiệm cận xiên của đồ thị hàm số đã cho tại điểm $M(a;b)$. Tính $a+b$.",
    "answer": "-6",
    "explain": "Tọa độ $2$ điểm cực trị đã cho thỏa phương trình $f'(x)=0$, tức là $\\dfrac{4x^2+8x+3}{(x+1)^2}=0$, giải phương trình này thu được $x_{1}=-\\dfrac{1}{2}$ hay $x_{2}=-\\dfrac{3}{2}$, suy ra $y_{1}=-1$, $y_{2}=-9$.<br>  Ta có phương trình đường thẳng đi qua $2$ điểm tương ứng là $A(-\\dfrac{1}{2};-1)$ và $B(-\\dfrac{3}{2},-9)$ là $8x-y+3=0$.<br>  Tiệm cận xiên là phần dư của phép chia phân số $4x^2+3x$ cho $x+1$, là $\\dfrac{4x^2+3x}{x+1}=4x-1+\\dfrac{1}{x+1}$, vậy $y=4x-1$.<br>  Phương trình tương giao $4x-1 =8x+3 \\Rightarrow x=-1 \\Rightarrow y=-5 \\Rightarrow a=-1$,$b=-5$.<br>  Vậy $a+b=-6$."
  },
  {
    "id": "2D123TL10",
    "question": "Cho hàm số $y =-18x^3 +9\\left(m^2 +1\\right)x^2 +6(2-3m)x +2019$ với $m$ là tham số thực. Tìm giá trị của $m$ để hàm số đạt cực tiểu tại $x =\\dfrac{1}{3}$.",
    "answer": "2",
    "explain": "Ta có $y' =-54x^2 +18\\left(m^2 +1\\right)x +6(2-3m)$.<br>  Suy ra $y'' = -108x +18\\left(m^2 +1\\right)$.<br>  Do hàm số đạt cực tiểu tại $x =\\dfrac{1}{3}$ nên  $y'\\left(\\dfrac{1}{3}\\right) = 0 \\text{ và } y''\\left(\\dfrac{1}{3}\\right)&gt;0  \\Rightarrow -6 +6(m^2+1) -18m +12= 0 \\text{ và } -36 +18(m^2 + 1)&gt;0$<br>$\\Rightarrow m =1 \\text{ hoặc } m = 2 \\text{ và } m^2&gt;1$<br>$\\Rightarrow m = 2.$"
  },
  {
    "id": "2D122TL11",
    "question": "Tính khoảng cách giữa 2 điểm cực trị của đồ thị hàm số $y=x^3-3x+2$? (kết quả làm tròn đến hàng phần trăm).",
    "answer": "4{,}47",
    "explain": "Ta có $y'=3x^2-3$.<br>  Xét $y'=0\\Leftrightarrow x=\\pm 1 $.<br>  Ta có $y(1)=1^3-3\\cdot 1+2=0$ và $y(-1)=(-1)^3-3\\cdot (-1)+2=4$.<br>  Tọa độ hai điểm cực trị là $(1;0) $ và $(-1;4)$.<br>  Vậy khoảng cách giữa hai điểm cực trị là $\\sqrt{(-1-1)^2+(4-0)^2}=2\\sqrt{5}\\approx 4{,}47$."
  },
  {
    "id": "2D127TL12",
    "question": "Một vật chuyển động với vận tốc $v$ (km/h) phụ thuộc vào thời gian $t$ (h) có đồ thị của hàm số dạng hàm bậc ba như hình bên dưới. Biết rằng tại thời điểm $t_1=1$ h vật có vận tốc $v_1=4$km/h và tại thời điểm $t_2=2 $ h vật có vận tốc $v_2=1$ km/h. Tính vận tốc của vật tại thời điểm $t=4$ h.<br><img src=\"data/12/2D1/im2D1/2D12_tikz_036.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "85",
    "explain": "Giả sử hàm số vận tốc có dạng $v(t)=a t^3+b t^2+c t+d, t&gt;0$.<br>  Ta có: $v'(t)=3 a t^2+2 b t+c$.<br>  Dựa vào đồ thị hàm số, tại các thời điểm $t_1$, $t_2$ đồ thị hàm vận tốc đi qua các điểm cực trị $ (1 ; 4)$, $ (2 ; 1)$.<br>  Khi đó $v(1)=4 \\text{ và } v'(1)=0 \\text{ và } v(2)=1 \\text{ và } v'(2)=0\\Leftrightarrow a+b+c+d=4 \\text{ và } 3 a+2 b+c=0 \\text{ và } 8 a+4 b+2 c+d=1 \\text{ và } 12 a+4 b+c=0\\Leftrightarrow a=6 \\text{ và } b=-27 \\text{ và } c=36 \\text{ và } d=-11.$<br>  Suy ra $v(t)=6 t^3-27 t^2+36 t-11 $ (km/h).<br>  Vậy vận tốc của vật tại thời điểm $t=4 $ h là $v(4)=85$ km/h."
  },
  {
    "id": "2D122TL13",
    "question": "Biết điểm $M(a; b)$ là điểm cực đại của đồ thị hàm số $y = x^3 - 6x^2 + 9x$. Giá trị của $a+b$ bằng bao nhiêu?",
    "answer": "5",
    "explain": "Xét hàm số $y = x^3 - 6x^2 + 9x$.<br>  Ta có $y' = 3x^2 - 12x + 9$; $ y' = 0 \\Leftrightarrow 3x^2 - 12x + 9 = 0 \\Leftrightarrow x = 1 \\text{ hoặc } x = 3.$<br>  Đạo hàm cấp hai $y'' = 6x - 12$.<br>  $\\bullet$ $y''(1) = 6(1) - 12 = -6 &lt; 0$ $\\Rightarrow$ hàm số đạt cực đại tại $x = 1$.<br>  $\\bullet$ $y''(3) = 6(3) - 12 = 6 &gt; 0$ $\\Rightarrow$ hàm số đạt cực tiểu tại $x = 3$.<br>  Điểm cực đại $M(1; 4)$.<br>  Giá trị của $a+b = 1 + 4 = 5$."
  },
  {
    "id": "2D121TL14",
    "question": "Hàm số $y=\\dfrac{x^{2}-x+1}{x-1}$  có giá trị cực đại và giá trị cực tiểu lần lượt là $a$ và $b$. Giá trị của biểu thức $3a+2b$ là bao nhiêu?",
    "answer": "3",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br>  Đạo hàm $y'=\\dfrac{x^2-2x}{(x-1)^2}$.<br>  Cho $y'=0\\Rightarrow x^2-2x=0 \\Rightarrow x=0 \\text{ hoặc } x=2.$<br>  Với $x=0$ thì $y=-1$ và $x=2$ thì $y=3$.<br>  Bảng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D12_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra $a=-1$ và $b=3$ hay $3a+2b=3$."
  },
  {
    "id": "2D121TL15",
    "question": "Biết rằng hàm số $y=\\left(x^3-9x^2+29x-35\\right)\\mathrm{e}^{x}$ đạt cực đại tại $x=a$. Hỏi giá trị của $a^5+3$ bằng bao nhiêu?",
    "answer": "35",
    "explain": "Ta có $y'=\\left(3x^2-18x+29\\right)\\mathrm{e}^{x}+\\mathrm{e}^{x}\\left(x^3-9x^2+29x-35\\right)=\\mathrm{e}^{x}\\left(x^3-6x^2+11x-6\\right)$. <br>  Xét $y'=0 \\Leftrightarrow \\mathrm{e}^{x}\\left(x^3-6x^2+11x-6\\right)=0 \\Leftrightarrow x^3-6x^2+11x-6=0 \\Leftrightarrow x=1 \\text{ và } x=3 \\text{ và } x=2.$ <br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_041.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra hàm số đạt cực đại tại $x=2$. <br>  Vậy $a^5+3=2^5+3=35$."
  },
  {
    "id": "2D121TL16",
    "question": "Cho hàm số $y=x^3-3 x+2$. Gọi $x_1$, $x_2$ là các điểm cực trị của hàm số.<br>  Tính $P=x_1^3+x_2^3$.",
    "answer": "0",
    "explain": "Ta có $y'=3x^2-3$. Cho $y'=0\\Leftrightarrow 3x^2-3=0\\Leftrightarrow x=-1 \\text{ hoặc } x=1.$<br>  Vậy $x_1=-1$, $x_2=-1$ nên $P=(-1)^3+1^3=0$."
  },
  {
    "id": "2D121TL17",
    "question": "Biết hàm số $f(x) = x^3 - 2x^2 + x + 2$ đạt cực tiểu tại $x = a$ và đạt cực đại tại $x = b$. Giá trị của biểu thức $T = 2024a - 2025b$ là bao nhiêu?",
    "answer": "1349",
    "explain": "Ta có $f'(x) = 3x^2 - 4x + 1$.<br>  Xét phương trình $f'(x) = 0 \\Leftrightarrow 3x^2 - 4x + 1 = 0 \\Leftrightarrow x = 1 \\text{ hoặc } x = \\dfrac{1}{3}.$<br>  Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_048.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên suy ra $a = 1$; $b = \\dfrac{1}{3}$.<br>  Vậy $2024a - 2025b = 2024 - 675 = 1349$."
  },
  {
    "id": "2D121TL18",
    "question": "Tìm giá trị cực tiểu của hàm số $y=\\dfrac{x^2+4}{x}$",
    "answer": "4",
    "explain": "$y'=\\dfrac{x^2-4}{x^2}\\quad (x\\neq 0)$.<br>   $y'=0 \\Leftrightarrow \\dfrac{x^2-4}{x^2}=0 \\Leftrightarrow x^2-4=0 \\Leftrightarrow x=2 \\Rightarrow y= 4 \\text{ và } x=-2 \\Rightarrow y=-4 $.<br>   Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_052.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, $y_\\text{CT}=4$"
  },
  {
    "id": "2D124TL19",
    "question": "Biết đường thằng $d\\colon y=(3 m+1)x+3$ vuông góc với đường thẳng đi qua hai điểm cực trị của đồ thị hàm số $y=x^3-3 x^2-1$. Giá trị của $m$ bằng bao nhiêu? (làm tròn đến hàng phần chục).",
    "answer": "-0{,}2",
    "explain": "&lt;strong&gt;Phương pháp giải:&lt;/strong&gt;  <br>- Giải phương trình $y'=0$, từ đó xác định $2$ điểm cực trị của đồ thị hàm số $A\\left(x_1 ; y_1\\right), B\\left(x_2 ; y_2\\right)$.<br>- Phương trình đường thẳng đi qua $2$ điểm $A$, $B$ là $AB\\colon \\dfrac{x-x_1}{x_2-x_1}=\\dfrac{y-y_1}{y_2-y_1}$.<br>- Hai đường thẳng $d\\colon y=a x+b$ và $d'\\colon y=a' x+b'$ vuông góc với nhau khi $a \\cdot a'=-1$.   &lt;strong&gt;Giải chi tiết&lt;/strong&gt;<br>  Ta có $y=x^3-3 x^2-1 \\Rightarrow y'=3 x^2-6 x$.<br>  Cho $y'=0 \\Leftrightarrow 3 x(x-2)=0 \\Leftrightarrow x=0 \\Rightarrow y=-1 \\text{ hoặc } x=2 \\Rightarrow y=1.$<br>  Do đó đồ thị hàm số đã cho có $2$ điểm cực trị $A(0 ;-1) ; B(2 ;-5)$.<br>  Phương trình đường thẳng $A B$ là $\\dfrac{x-0}{2-0}=\\dfrac{y+1}{-5+1} \\Leftrightarrow y=-2 x-1$.<br>  Do $AB \\perp d$ nên được $(3 m+1) \\cdot(-2)=-1 \\Leftrightarrow 3 m+1=\\dfrac{1}{2} \\Leftrightarrow m=-\\dfrac{1}{6}\\approx -0{,}2$."
  },
  {
    "id": "2D124TL20",
    "question": "Cho hàm số $y=2x^3 -6x^2-m$, với $m$ là tham số. Hỏi giá trị $m$ bằng bao nhiêu thì điểm cực tiểu của đồ thị hàm số thuộc vào trục $Ox$.",
    "answer": "-8",
    "explain": "Ta có $y'=6x^2-12x$, $y'=0\\Leftrightarrow x=0$; $x=2$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_060.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Để điểm cực tiểu của đồ thị hàm số thuộc trục $Ox$ thì $y_{CT}=0$, suy ra $-8-m=0\\Leftrightarrow m=-8$"
  },
  {
    "id": "2D121TL21",
    "question": "Tìm giá trị cực tiểu của hàm số $y=-x^3+3x^2-4$.",
    "answer": "-4",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Đạo hàm $y'=-3x^2+6x$.<br>  Xét $y'=0\\Leftrightarrow -3x^2+6x=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_062.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị cực tiểu của hàm số là $y=-4$."
  },
  {
    "id": "2D127TL22",
    "question": "Một vật chuyển động theo quy luật $s=-\\dfrac{1}{4}t^{3}+6t^{2}$ với $t$ là khoảng thời gian tính từ khi vật bắt đầu chuyển động và $s$ (m) là quãng đường vật đi được trong khoảng thời gian đó. Biết trong khoảng thời gian $ 15 $ giây, kể từ khi bắt đầu chuyển động, vận tốc lớn nhất của vật đạt bằng bao nhiêu?",
    "answer": "48",
    "explain": "Ta có $v(t)=s'(t)=-\\dfrac{3}{4}t^2+12t $.<br>  Đề bài yêu cầu tìm giát trị lớn nhất của $ v(t) $ trên $ [0;15] $.<br>  Khi đó $ v'(t)= -\\dfrac{3}{2}t+12$. Cho $ v'(t)=0 \\Leftrightarrow -\\dfrac{3}{2}t+12=0 \\Leftrightarrow t=8 $.<br>  Ta tính được $ v(0)=0 $, $ v(8)= 48$, $ v(15)= 11{,}25$.<br>  Vậy vận tốc lớn nhất của vật đó là $ 48 $ m/s."
  },
  {
    "id": "2D127TL23",
    "question": "Một doanh nghiệp dự định sản xuất không quá $ 500 $ sản phẩm. Nếu doanh nghiệp sản xuất $x$ sản phẩm $(1 \\le x \\le 500)$ thì doanh thu nhận được khi bán hết số sản phẩm đó được biểu diễn bằng hàm là $F(x)=x^3-1\\,999x^{2}+1\\,001\\,000x+250\\,000$ (đồng), trong khi chi phí sản xuất bình quân cho một sản phẩm là $G(x)=x+1\\,000+\\dfrac{250\\,000}{x}$ (đồng). Doanh nghiệp cần sản xuất bao nhiêu sản phẩm để lợi nhuận thu được là lớn nhất?",
    "answer": "250",
    "explain": "Ta có $ x \\in \\mathbb{N} $ và $ 1 \\le x \\le 500 $. Ta có $F(x) = x^3-1\\,999x^{2} + 1\\,001\\,000x + 250\\,000$ và chi phí khi sản xuất $ x $ sản phẩm là $x\\cdot G(x) = x^{2} + 1\\,000x + 250\\,000$.<br> Gọi $ L(x) $ là hàm lợi nhuận, khi đó $L(x) = F(x) - G(x) =x^3 -2\\,000x^{2} + 1\\,000\\,000x \\Rightarrow L'(x)=3x^2-4\\,000x + 1\\,000\\,000.$ Ta cần tìm giá trị lớn nhất của $ F(x) $ trên $ [1;500] $.<br> Cho $ L'(x)=0 \\Leftrightarrow 3x^2-4\\,000x + 1\\,000\\,000=0 \\Leftrightarrow x=1\\,000 \\text{(loại)} \\text{ hoặc } x=\\dfrac{1\\,000}{3} \\text{(nhận)}.$<br> Ta có bảng biến thiên như sau <br><img src=\"data/12/2D1/im2D1/2D12_tikz_065.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Do $ x $ là số tự nhiên nên ta xét $ L(333)= 146\\,148\\,037$ và $ L(334)= 148\\,147\\,704$.<br> Vậy lợi nhuận lớn nhất khi sản xuất $ 333 $ sản phẩm."
  },
  {
    "id": "2D127TL24",
    "question": "Một tác giả muốn xuất bản một cuốn sách Toán học. Gọi $t $ ($t\\ge 1$) là số cuốn sách sẽ in và tổng số tiền cần bỏ ra để in $t$ cuốn sách là $T=7\\,000+50t$ (đơn vị nghìn đồng). Gọi $f(t)$ là chi phí trung bình cho mỗi cuốn sách. Khi số sách tăng lên thì chi phí trung bình của mỗi cuốn sách tối đa không vượt quá bao nhiêu nghìn đồng?",
    "answer": "50",
    "explain": "Chi phí trung bình $f(t) = \\dfrac{7\\,000 + 50t}{t} = \\dfrac{7\\,000}{t} + 50$.<br>  Khi đó $\\lim\\limits_{t\\to +\\infty} f(t) = 50$.<br>  Vậy chi phí trung bình không vượt quá $ 50 $ nghìn đồng."
  },
  {
    "id": "2D127TL25",
    "question": "Một xe khách đi từ TP.HCM đến Đà Nẵng chở tối đa được $ 60 $ hành khách mỗi chuyến. Nếu một chuyến chở được $m$ hành khách thì giá tiền cho mỗi hành khách được tính là $\\left(300 - \\dfrac{5m}{2}\\right)^2$ đồng. Tính số hành khách trên mỗi chuyến xe để nhà xe thu được lợi nhuận mỗi chuyến là lớn nhất?",
    "answer": "40",
    "explain": "Doanh thu $ R(m) = m\\left(300 - \\dfrac{5m}{2}\\right)^2 = 90\\,000m -1\\,500m^2+ \\dfrac{25}{4}m^{3}$. Theo đề bài ta có điều kiện $ 0 \\le m \\le 60 $ và $ m\\in \\mathbb{N} $.<br> Yêu cầu đề bài là tìm giá trị lớn nhất của $ R(m) $ trên $ [0;60] $.<br> Ta có $ R'(m) = 90\\,000 - 3\\,000 m +\\dfrac{75}{4}m^2$.<br> Cho $ R'(m)=0 \\Leftrightarrow 90\\,000 - 3\\,000 m +\\dfrac{75}{4}m^2=0 \\Leftrightarrow x=120 \\text{(loại)} \\text{ hoặc } x=40 \\text{(nhận)}.$<br> Ta có $ R(0)=0 $, $ R(40)= 1\\,600\\,000$, $ R(60)=1\\,350\\,000 $.<br> Vậy chuyến xe thu lợi lớn nhất khi số hành khác là $ 40 $ hành khách."
  },
  {
    "id": "2D121TL26",
    "question": "Để giảm nhiệt độ phòng từ $28^\\circ$C, một hệ thống làm mát được phép hoạt động trong $ 10 $ phút. Gọi $T$ (đơn vị $^\\circ$C) là nhiệt độ phòng ở phút thứ $t$ được cho bởi công thức $T= - 0{,}008t^{3} - 0{,}16t + 28$ $(t \\in [1;10])$. Tìm nhiệt độ thấp nhất trong phòng đạt được trong $ 10 $ phút kể từ khi hệ thống làm mát bắt đầu hoạt động.",
    "answer": "32{,}6",
    "explain": "Yêu cầu đề bài là tìm giá trị nhỏ nhất của $T(t) = -0{,}008t^{3} - 0{,}16t + 28$ trong $ [1;10] $.<br>  Ta có $ T'(t) = -0{,}024t^2 - 0{,}16 &lt;0$, $ \\forall t \\in [0;10] $.<br>  Dẫn đến $ T $ là hàm nghịch biến trên $ [0;10] $.<br>  Vậy nhiệt độ thấp nhất là $T(10)= 18{,}4 ^\\circ$C."
  },
  {
    "id": "2D127TL27",
    "question": "Công ty nước sạch Bình An đang cần lắp đặt đường ống dẫn nước từ nhà máy nước tới hòn đảo nhỏ trong sơ đồ (đường ống được xuất phát từ nhà máy đến điểm $T$ rồi đi ra đảo). Bến tàu cách đảo $ 1 $ km, đó chính là vị trí trên đất liền gần với đảo nhất. Nhà máy nước cách bờ biển $ 4 $ km. Biết rằng chi phí đặt một ki-lô-mét ống dẫn nước trên đất liền là $ 30 $ triệu đồng và còn lại đặt dưới nước là $ 50 $ triệu đồng. Khoảng cách từ điểm $T$ đến nhà máy nước là bao nhiêu ki-lô-mét để tổng chi phí lắp đặt là nhỏ nhất?<br><img src=\"data/12/2D1/im2D1/2D12_tikz_066.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "0{,}75",
    "explain": "<br><img src=\"data/12/2D1/im2D1/2D12_tikz_067.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Gọi $ BT=x $ (km) ($ 0&lt;x&lt;4 $).<br> Chi phí $C(x)=30\\cdot (4 - x) + 50\\sqrt{x^{2}+1}=120 - 30x + 50\\sqrt{x^{2}+1}$.<br> Khi đó, ta có $C'(x)= -30 + \\dfrac{50x}{\\sqrt{x^{2}+1}}$.<br> Cho $ C'(x)=0 \\Leftrightarrow \\dfrac{50x}{\\sqrt{x^{2}+1}} = 30 25x^{2} = 9(x^{2}+1) \\Leftrightarrow 16x^{2} = 9 \\Leftrightarrow x=-0{,}75 \\text{(nhận)} \\text{ hoặc } x=0{,}75 \\text{(nhận)}.$<br> Ta có bảng biến thiên như sau <br><img src=\"data/12/2D1/im2D1/2D12_tikz_068.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Vậy khoảng cách từ điểm $ T $ đến nhà máy nước là $ 0{,}75 $ km để tổng chi phí là thấp nhất."
  },
  {
    "id": "2D121TL28",
    "question": "Giá trị cực đại của hàm số $y=2x^3+3x^2-36x+1$ bằng bao nhiêu?",
    "answer": "82",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có $y'=6x^2+6x-36$<br>  $y'=0 \\Leftrightarrow 6x^2+6x-36=0 \\Leftrightarrow x=2 \\text{ hoặc } x=-3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_073.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên ta có giá trị cực đại của hàm số là $82$."
  },
  {
    "id": "2D122TL29",
    "question": "Cho hàm số $f(x) $, bảng xét dấu của $f'(x)$ như sau:  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_078.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Số điểm cực trị của hàm số trên là bao nhiêu?",
    "answer": "2",
    "explain": "Dựa vào bảng biến thiên ta có hàm số $f(x)$ có 2 điểm cực trị tại $x=-1$ và $x=1$."
  },
  {
    "id": "2D122TL30",
    "question": "Gọi $A$, $B$ là các điểm cực trị của đồ thị hàm số $y=x^3+ax^2+b$ biết $A(1;2)$. Tính diện tích của tam giác $OAB$ (với $O$ là gốc tọa độ) bằng bao nhiêu?",
    "answer": "1{,}25",
    "explain": "Hàm số $y=x^3+ax^2+b$ xác định với mọi $x\\in\\mathbb{R}$.<br>  Ta có $y'=3x^2+2ax$.<br>  Vì $A(1;2)$ là điểm cực trị của đồ thị hàm số đã cho nên \\[y'(1)=0 \\text{ và } y(1)=2\\Leftrightarrow3+2a=0 \\text{ và } 1+a+b=2\\Leftrightarrow a=-\\dfrac{3}{2} \\text{ và } b=\\dfrac{5}{2}.\\]  Với $a=-\\dfrac{3}{2}$, $b=\\dfrac{5}{2}$ thì $y=x^3-\\dfrac{3}{2}x^2+\\dfrac{5}{2}$.<br>  Ta có $y'=3x^2-3x$; $y'=0\\Leftrightarrow x=1 \\text{ hoặc } x=0.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_087.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, suy ra $A(1;2)$ và $B\\left(0;\\dfrac{5}{2}\\right)$ là các điểm cực trị của đồ thị hàm số đã cho.<br>  Mặt khác $\\overrightarrow{OA}=(1;2)$, $\\overrightarrow{AB}=\\left(-1;\\dfrac{1}{2}\\right)$.<br>  Vì $\\overrightarrow{OA}\\cdot\\overrightarrow{AB}=-1\\cdot 1+2\\cdot\\dfrac{1}{2}=0$ nên $\\overrightarrow{OA}\\perp \\overrightarrow{OB}$ hay $\\triangle OAB$ vuông tại $A$.<br>  Vậy diện tích $\\triangle OAB$ là $S=\\dfrac{1}{2}OA\\cdot AB=\\dfrac{1}{2}\\cdot\\sqrt{1^2+2^2}\\cdot\\sqrt{(-1)^2+\\left(\\dfrac{1}{2}\\right)^2}=\\dfrac{5}{4}=1{,}25$."
  },
  {
    "id": "2D122TL31",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$, có đồ thị hàm số như hình vẽ. Hàm số $y=f(x^2-1)$ có bao nhiêu điểm cực trị?<br><img src=\"data/12/2D1/im2D1/2D12_tikz_092.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "7",
    "explain": "Ta có $y' = 2xf'(x^2-1)$. Khi đó   $y' = 0 \\Leftrightarrow x=0 \\text{ hoặc } f'(x^2-1) = 0\\Leftrightarrow x=0 \\text{ hoặc } x^2 - 1 = -3 \\text{ hoặc } x^2 - 1 = -1 \\text{ hoặc } x^2 - 1 = 0 \\text{ hoặc } x^2 - 1 = 1 \\text{ hoặc } x^2 - 1 = 3 \\Leftrightarrow x = 0 \\text{ hoặc } x^2 = -2 \\ \\text{(vô nghiệm)} \\text{ hoặc } x^2 = 0 \\text{ hoặc } x=\\pm 1 \\text{ hoặc } x=\\pm \\sqrt{2} \\text{ hoặc } x=\\pm 2.$  Vậy hàm số $y=f(x^2-1)$ có $7$ điểm cực trị."
  },
  {
    "id": "2D126TL32",
    "question": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ có đạo hàm $f'(x)=x(x-1)^2$, $\\forall x \\in \\mathbb{R}$. Có bao nhiêu giá trị nguyên dương của tham số $m$ để hàm số $y=f\\left(x^2+4 x+m\\right)$ có $3$ điểm cực trị?",
    "answer": "3",
    "explain": "Ta có   $f'(x)=x(x-1)^2=0\\Leftrightarrow x=0 \\text{ hoặc } x=1\\quad (\\text{kép}).$<br> Đặt $g(x)=f(x^2+4x+m)$.<br>  Ta có $g'(x)=0$<br>$\\Leftrightarrow (2x+4)f'(x^2+4x+m)=0$<br>$\\Leftrightarrow (2x+4)(x^2+4 x+m)\\cdot(x^2+4 x+m-1)^2=0$<br>$\\Leftrightarrow x=-2 \\text{ hoặc } x^2+4x+m=0\\quad (1) \\text{ hoặc } x^2+4x+m=1 \\quad (\\text{kép}).$  Do đó để hàm số $y=g(x)$ có $3$ điểm cực trị thì phương trình $(1)$ có hai nghiệm phân biệt.<br>   Tức là \\[4^2-4m&gt;0\\Leftrightarrow m&lt;4.\\]  Vì $m$ nguyên dương nên $m\\in \\{1;2;3\\}$.<br> Vậy có $3$ giá trị của $m$ thỏa yêu cầu bài toán."
  },
  {
    "id": "2D122TL33",
    "question": "Biết đường thằng đi qua hai điểm cực trị của đồ thị hàm số $y=-x^3+3x^2+9x+1$ là $ax+by+4=0$. Giá trị của biểu thức $a+2b$ bằng bao nhiêu?",
    "answer": "6",
    "explain": "Ta có $y' = -3x^2 + 6x + 9$. Suy ra   $y'=0 \\Leftrightarrow -3x^2 + 6x + 9 = 0 \\Leftrightarrow x = -1 \\text{ hoặc } x = 3.$ <br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_094.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, $(-1;-4)$ và $(3;28)$ là hai điểm cực trị của đồ thị hàm số đã cho. <br>  Ta có $(-1;-4)$ và $(3;28)$ thuộc đường thẳng $d\\colon ax+by+4 =0$ nên  \\[-a - 4b + 4 = 0 \\text{ và } 3a + 28b + 4 = 0  \\Leftrightarrow -a - 4b = -4 \\text{ và } 3a + 28b = -4  \\Leftrightarrow a = 8 \\text{ và } b = -1.\\]  Vậy $a + 2b = 6$."
  },
  {
    "id": "2D122TL34",
    "question": "Gọi $M(x_0;y_0)$ là điểm cực trị của đồ thị hàm số $y=\\sqrt{16x-x^2}$. Tính giá trị của $P=5x_0 + 10y_0$.",
    "answer": "120",
    "explain": "Tập xác định $\\mathscr{D}=[0;16]$.<br>  Ta có $y'=\\dfrac{8-x}{\\sqrt{16x-x^2}}$.  Cho $y'=0\\Leftrightarrow 8-x=0\\Leftrightarrow x=8$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_096.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta có điểm cực trị của đồ thị hàm số là $M(8;8)$. Suy ra $x_0=8$ và $y_0=8$.<br>  Vậy $P=5x_0+10y_0= 5\\cdot 8 + 10 \\cdot 8 = 120$."
  },
  {
    "id": "2D122TL35",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_098.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hỏi hàm số $y=f(x)$ có bao nhiêu điểm cực trị?",
    "answer": "1",
    "explain": "Từ bảng biến thiên ta thấy hàm số $y=f(x)$ có một điểm cực trị."
  },
  {
    "id": "2D121TL36",
    "question": "Tìm giá trị cực tiểu của hàm số $y=x^3+6x^2-15x+2\\,033$.",
    "answer": "2\\,025",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có  $y'=3x^2+12x-15=3\\left(x^2+4 x-5\\right)=3(x+5)(x-1) \\Leftrightarrow x+5=0 \\text{ hoặc } x-1=0\\Leftrightarrow x=-5 \\text{ hoặc } x=1$.<br>  Bảng biến thiên:<br>  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_101.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta có giá trị cực tiểu của hàm số là $2\\,025$."
  },
  {
    "id": "2D127TL37",
    "question": "Một vật chuyển động với vận tốc $v(\\mathrm{~km} / \\mathrm{h})$ phụ thuộc vào thời gian $t(\\mathrm{~h})$ có đồ thị của hàm số dạng hàm bậc ba như hình bên dưới. Biết rằng tại thời điểm $t_1=1 \\mathrm{~h}$ vật có vận tốc $v_1=4 \\mathrm{~km} / \\mathrm{h}$ và tại thời điểm $t_2=2 \\mathrm{~h}$ vật có vận tốc $v_2=1 \\mathrm{~km} / \\mathrm{h}$. Ngoài ra, đồ thị của hàm số có cực đại tại $t=1$ và cực tiểu tại $t=2$. Tính vận tốc của vật tại thời điểm $t=3 \\mathrm{~h}$.<br><img src=\"data/12/2D1/im2D1/2D12_tikz_106.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "16",
    "explain": "Giả sử vận tốc của vật được cho bởi hàm số bậc ba có dạng:  $ v(t) = at^3 + bt^2 + ct + d.$  Từ đề bài, ta có các điều kiện: $v(1) = 4 \\text{ và } v(2)=1 \\Leftrightarrow a(1)^3 + b(1)^2 + c(1) + d = 4 \\text{ và } a(2)^3 + b(2)^2 + c(2) + d = 1$<br>  - Hàm số đạt cực đại tại $t = 1$ và cực tiểu tại $t = 2$, tức là $v'(1) = 0$ và $v'(2) = 0$.<br>  Ta có:  $v^\\prime(t) = 3at^2 + 2bt + c$.  hay  $3a(1)^2 + 2b(1) + c = 0 \\text{ và } 3a(2)^2 + 2b(2) + c = 0$.  <br> Giải hệ phương trình trên, ta tìm được:  $ a = 6, \\quad b = -27, \\quad c = 36, \\quad d = -11$.<br>  Vậy phương trình vận tốc là:  $ v(t) = 6t^3 - 27t^2 + 36t - 11$.<br>  Tại $t = 3$, ta tính:  $v(3) = 6(3)^3 - 27(3)^2 + 36(3) - 11 = 16$.<br>  Vậy vận tốc của vật tại thời điểm $t = 3$ là:  $ \\mathbf{16} \\text{ km/h}$."
  },
  {
    "id": "2D122TL38",
    "question": "Khoảng cách từ điểm cực tiểu của đồ thị hàm số $y=x^3-2x^2+x-1$ đến trục hoành là",
    "answer": "1",
    "explain": "Ta có $y'=3x^2-4x+1$. Suy ra $y'=0\\Leftrightarrow\\left[\\begin{aligned}  & x=1\\\\   & x=\\dfrac{1}{3}.\\\\   \\end{aligned}\\right.$  Bảng biến thiên của hàm số đã cho  <br><img src=\"data/12/2D1/im2D12/dlts_12_DLTS2_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy đồ thị hàm số đã cho có điểm cực tiểu là $A\\left(1;-1\\right)$. Khoảng cách từ điểm cực tiểu của đồ thị hàm số đã cho đến trục hoành bằng $1$."
  },
  {
    "id": "2D127TL39",
    "question": "Vị trí của một vật chuyển động $s(t)$ (tính theo mét) vật đi được sau khoảng thời gian $t$ (tính theo giây), $t \\geq 0$, được mô tả là một hàm số bậc ba có đồ thị như hình vẽ dưới đây. Trong 50 giây đầu tiên, vật chuyển động nhanh dần bắt đầu từ thời điểm giây thứ mấy?<br><img src=\"data/12/2D2/im2H21/dlts_12_DLTS10_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "6",
    "explain": "Vật chuyển động nhanh dần khi gia tốc $a(t)$ cùng dấu với vận tốc $v(t)$.   <br>  Dựa vào đồ thị hàm số ta xác định được:  $s(t) = \\dfrac{1}{6}t^3 - 2.5t^2 + 12t$.  <br>  Vận tốc được tính bằng đạo hàm của $s(t)$:  $v(t) = s'(t) = \\dfrac{1}{2}t^2 - 5t + 12.$  <br>  Gia tốc là đạo hàm của vận tốc:  \\[  a(t) = v'(t) = t - 5.  \\]  Ta có $v^\\prime=0 \\Leftrightarrow t=5$.<br>  Với $t &lt; 5$: $a(t) &lt; 0$ (vật chậm dần nếu $v(t) &gt; 0$, nhanh dần nếu $v(t) &lt; 0$).<br>  Với $t &gt; 5$: $a(t) &gt; 0$ (vật nhanh dần nếu $v(t) &gt; 0$, chậm dần nếu $v(t) &lt; 0$).  <br>  <strong>Thời điểm vật chuyển động nhanh dần</strong><br>  Tại $t = 6$: $v(6) &lt; 0$ và $a(6) &gt; 0$ $\\Rightarrow$ vật nhanh dần.  <br>  Vậy trong 50 giây đầu tiên, vật bắt đầu chuyển động nhanh dần từ giây thứ 6."
  },
  {
    "id": "2D123TL1",
    "question": "Tính tổng tất cả các giá trị nguyên của tham số $m$ để hàm số $y=\\dfrac{x^{2}+(m-1)x+3-2m}{x+m}$ đạt cực tiểu tại $x=-1$.",
    "answer": "2",
    "explain": "Tập xác định $\\mathscr{D} = \\mathbb{R} \\setminus \\{-m\\}$.<br> Ta có <br>- $y= x - 1 + \\dfrac{3-m}{x+m}$.<br>- $y'= 1 - \\dfrac{3-m}{(x+m)^2}$.<br>- $y''= \\dfrac{2(3-m)}{(x+m)^3}$. Để hàm số đạt cực tiểu tại $x=-1$ thì \\[ y'(-1)=0 \\text{ và } y''(-1)&gt;0 \\Leftrightarrow 1-\\dfrac{3-m}{(-1+m)^{2}}=0 \\quad (1) \\text{ và } \\dfrac{2(3-m)}{(-1+m)^{3}}&gt;0. \\quad (2) \\] Giải phương trình $(1)$, ta được \\[ (-1+m)^2 = 3-m \\Leftrightarrow m^2 - 2m + 1 = 3 - m \\Leftrightarrow m^2 - m - 2 = 0 \\Leftrightarrow m=-1 \\text{ hoặc } m=2. \\] Thay lần lượt các giá trị của $m$ vào bất phương trình $(2)$, ta được <br>- Với $m=-1 \\Rightarrow y''(-1) = \\dfrac{2(3 - (-1))}{(-1 - 1)^3} = \\dfrac{8}{-8} = -1 &lt; 0$ (loại vì đây là điểm cực đại).<br>- Với $m=2 \\Rightarrow y''(-1) = \\dfrac{2(3 - 2)}{(-1 + 2)^3} = \\dfrac{2}{1} = 2 &gt; 0$ (thỏa mãn điều kiện cực tiểu). Vậy $m=2$ là giá trị duy nhất thỏa mãn bài toán. Tổng tất cả các giá trị nguyên của $m$ là $2$."
  },
  {
    "id": "2D122TL39",
    "question": "Cho $M(a;b)$ là điểm nằm trên đường thẳng đi qua hai điểm cực trị của đồ thị hàm số $y=x^3-3x$ và hai điểm $A(1;2)$, $B(2;1)$. Khi $MA+MB$ ngắn nhất thì giá trị $b-a$ bằng bao nhiêu?",
    "answer": "1",
    "explain": "Tọa độ hai điểm cực trị của đồ thị hàm số $y=x^3-3x$ là $(-1;2)$; $(1;-2)$.<br>  Phương trình đường thẳng đi qua $2$ điểm cực trị là $d\\colon 2x+y=0$.<br>  Ta thấy hai điểm $A$, $B$ nằm cùng phía đối với $d$. Gọi $A'$ là điểm đối xứng với $A$ qua $d$.<br>  Khi đó $MA+MB=MA'+MB\\ge A'B$.<br>  Do đó $MA+MB$ ngắn nhất thì $M$, $A'$, $B$ thẳng hàng hay $M=A'B\\cap d$.<br>  Gọi $\\Delta $ là đường thẳng đi qua $A$ và vuông góc $d$ nên có phương trình  $\\Delta (x-1)-2(y-2)=0 \\Leftrightarrow x-2y+3=0.$  Gọi $I$ là giao điểm của $d$ và $\\Delta \\Rightarrow I\\left(-\\dfrac{3}{5};\\dfrac{6}{5} \\right) \\Rightarrow A'\\left(-\\dfrac{11}{5};\\dfrac{2}{5} \\right)$.<br>  Suy ra $\\overrightarrow{A'B}=\\left(\\dfrac{21}{5};\\dfrac{3}{5} \\right)$. Vậy đường thẳng $A'B$ có véctơ pháp tuyến $\\overrightarrow{n}=(3;-21)$.<br>  Phương trình $A'B\\colon 3(x-2)-21(y-1)=0 \\Leftrightarrow 3x-21y+15=0$.<br>  Vì $M=A'B\\cap d\\Rightarrow M\\left(-\\dfrac{1}{3};\\dfrac{2}{3} \\right)$ nên $a=-\\dfrac{1}{3};b=\\dfrac{2}{3}$.<br>  Khi đó $b-a=\\dfrac{2}{3}-\\left(-\\dfrac{1}{3} \\right)=1$."
  },
  {
    "id": "2D127TL3",
    "question": "Khi loại thuốc $A$ được tiêm vào bệnh nhân, nồng độ mg/l của thuốc trong máu sau $x$ phút (kể từ khi bắt đầu tiêm) được xác định bởi công thức $C(x)=\\dfrac{30x}{x^2+2}$. Để đưa ra những lời khuyên và cách xử lí phù hợp cho bệnh nhân, ta cần tìm khoảng thời gian mà nồng độ của thuốc trong máu đang tăng. Em hãy cho biết hàm nồng độ thuốc trong máu $C(x)$ đạt giá trị cực đại là bao nhiêu trong khoảng thời gian $6$ phút sau khi tiêm. (kết quả làm tròn đến hàng phần mười)",
    "answer": "10,6",
    "explain": "Ta có $C'(x)=\\dfrac{-30x^2+60}{\\left(x^2+2\\right)^2}$.<br>   Suy ra   $C'(x)=0 \\Leftrightarrow -30x^2+60=0$<br>$\\Leftrightarrow x=\\sqrt{2}\\Rightarrow C(x)=\\dfrac{15\\sqrt{2}}{2}\\approx 10{,}6 \\text{ hoặc } x=-\\sqrt{2} \\notin [0;6].$  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D12/loc8_TT_THPT_Lien_cap_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy $C(x)$ đạt cực đại trên khoảng thời gian $6$ phút sau khi tiêm bằng $10{,}6$ (mg/l)."
  },
  {
    "id": "2D122TL4",
    "question": "Cho hàm số $f(x)$ có đạo hàm $f'(x)=\\left(x-1\\right)\\left(x^2-3\\right)\\left(x^4-1\\right)$, $\\forall x\\in \\mathbb{R}$. Tìm số điểm cực đại của hàm số $y=f(x)$.",
    "answer": "1",
    "explain": "Xét phương trình:  $f'(x)=0 \\Leftrightarrow \\left(x-1\\right)\\left(x^2-3\\right)\\left(x^4-1\\right)=0 \\Leftrightarrow x-1=0 \\text{ hoặc } x^2-3=0 \\text{ hoặc } x^4-1=0 \\Leftrightarrow x=1 \\text{ hoặc } x=\\sqrt{3} \\text{ hoặc } x=-\\sqrt{3} \\text{ hoặc } x=-1.$<br>  Bảng xét dấu:  <br><img src=\"data/12/2D1/im2D12/loc8_TT_THPT_NguyenVi_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vì $f'(x)$ đổi dấu từ dương sang âm $1$ lần tại $x=-1$ nên hàm số $f(x)$ có $1$ điểm cực đại."
  }
];
