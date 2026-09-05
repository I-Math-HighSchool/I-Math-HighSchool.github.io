// =========================================================================
// KHỐI DỮ LIỆU: window.traLoiNgan2D11_2 = [
  {
    "id": "2D115TL7",
    "question": "Người ta thấy rằng trong $36$ tháng tính từ đầu năm 2020, giá thành $P$ của một loại sản phẩm vào tháng thứ $t$ thay đổi theo công thức $P(t)=80t^3-4\\,200t^2+60\\,000t+200\\,000$ (đồng) với $0\\le t\\le 36$. Biết giá thành đạt cực đại vào thời điểm $t_1$ và giá thành đạt cực tiểu vào thời điểm $t_2$. Tìm $2t_1-t_2$.",
    "answer": "-5",
    "explain": "Xét $P'(t)=240t^2-8\\,400t+60\\,000$ trên đoạn $[0;36]$.<br>  Cho $P'(t)=0\\Leftrightarrow x=10 \\text{ hoặc } x=25.$<br>  Bảng biến thiên của hàm số $P(t)$  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, hàm số $P(t)$ đạt cực đại tại điểm $t_1=10$ và cực tiểu tại điểm $t_2=25$.<br>  Vậy $2t_1-t_2=-5$."
  },
  {
    "id": "2D115TL8",
    "question": "Sự ảnh hưởng khi sử dụng một loại độc tố đối với vi khuẩn HP được các bác sĩ mô tả bằng hàm số $P(t)=\\dfrac{2t+1}{4t^2+2t+4}$, trong đó $P(t)$ là số lượng vi khuẩn HP sau thời gian $t$ (giờ) sử dụng độc tố. Sau khi sử dụng độc tố bao lâu thì số lượng vi khuẩn HP bắt đầu giảm <em>(kết quả được làm tròn đến hàng phần chục)</em>?",
    "answer": "0,5",
    "explain": "Ta có $P'(t)=\\dfrac{-8t^2-8t+6}{(4t^2+2t+4)^2}=\\dfrac{2(2t-1)(-2t-3)}{(4t^2+2t+4)^2}$; $P'(t)=0\\Rightarrow t=-\\dfrac{3}{2} \\text{ hoặc } t=\\dfrac{1}{2}.$  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy hàm số đạt cực đại tại $t=\\dfrac{1}{2}$ và $P'(t)&lt;0$, $\\forall t&gt;\\dfrac{1}{2}$ nên sau $0{,}5$ giờ thì số lượng vi khuẩn bắt đầu giảm."
  },
  {
    "id": "2D115TL9",
    "question": "Kính viễn vọng không gian Hubble được đưa vào vũ trụ ngày 24/4/1990 bằng tàu con thoi Discovery.  Vận tốc của tàu con thoi trong sứ mệnh này, từ lúc cất cánh tại thời điểm $t=0~(\\text{s})$ cho đến khi tên lửa đẩy được phóng đi tại thời điểm $t=126~(\\text{s})$, được cho bởi hàm số sau  $v(t) = 0{,}001302t^3 - 0{,}09029t^2+23$,  ($v(t)$ được tính bằng $\\text{feet}/\\text{s}$, $1~\\text{feet} = 0{,}3048~\\text{m}$).  (<em>Nguồn: J. Stewart, Calculus Seventh Edition, Brooks/Cole, CENGAGE Learning 2012</em>).  Gia tốc của tàu con thoi được tính bằng công thức $a(t)=v'(t)$ sẽ tăng trong khoảng thời gian $(a,b)$ đơn vị (s) tính từ thời điểm cất cánh cho đến khi tên lửa đẩy được phóng đi.  Tính $a+b$ (quy tròn đến hàng đơn vị).",
    "answer": "149",
    "explain": "Trong khoảng thời gian $t=0$ đến $t=126~\\text{s}$, vận tốc của tên lửa là  $  v(t) = 0{,}001302t^3 - 0{,}09029t^2+23.  $  Do đó gia tốc của nó là  $  a(t)  = v'(t)  = 0{,}003906 t^2 - 0{,}18058 t.  $  Xét đạo hàm của gia tốc  $  a'(t)  = 0{,}007812 t - 0{,}18058.  $  Cho $a'(t)=0$, ta được  $  0{,}007812 t - 0{,}18058  \\Rightarrow  t \\approx 23~\\text{s}.  $  Lập bảng biến thiên của $a(t)$:  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên trên, ta thấy $a(t)$ tăng trong khoảng $(23;126)$.   <br>  Do đó $a=23$ và $b=126$.  <br>  Vậy $a+b=149$."
  },
  {
    "id": "2D111TL10",
    "question": "Giả sử sự lây lan của một loại virus ở một địa phương có thể được mô hình hoá bằng hàm số  $N(t)=-t^3+12t^2$, $0 \\le t \\le 12$, trong đó $N$ là số người bị nhiễm bệnh (tính bằng trăm người) và $t$ là thời gian (tính bằng tuần). Đạo hàm $N'(t)$ biểu thị tốc độ lây lan của virus (còn gọi là tốc độ truyền bệnh). Hỏi virus sẽ lây lan nhanh nhất vào tuần thứ mấy?",
    "answer": "4",
    "explain": "Ta có $N'(t) = -3t^2 + 24t$.<br>  Khi đó tốc độ lây lan nhanh nhất ứng với giá trị lớn nhất của $N'(t)$.<br>   Xét đạo hàm cấp hai $N''(t) = -6t + 24$.<br>  Cho $N''(t) = 0 \\Rightarrow -6t + 24 = 0 \\Rightarrow t = 4$.  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy $N'(t)$ đạt giá trị lớn nhất tại $t = 4$.<br>   Vậy virus lây lan nhanh nhất vào tuần thứ $4$."
  },
  {
    "id": "2D115TL11",
    "question": "Một chất điểm chuyển động có phương trình $s(t)$ thì có vận tốc $v(t)=s'(t)$. Biết rằng phương trình chuyển động của chất điểm là $s(t)=\\dfrac{1}{3}t^3-3t^2+5t$ trong đó $t$ được tính bằng giây và $s$ được tính bằng mét. Kể từ giây thứ bao nhiêu trở đi thì vận tốc của chất điểm bắt đầu tăng?",
    "answer": "3",
    "explain": "Ta có $v(t)=s'(t)=t^2-6t+5$, $t \\ge 0$, suy ra $v'(t)=2t-6$.<br>  Lại có $v'(t)=0 \\Leftrightarrow t=3$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_026.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Kể từ giây thứ $3$ trở đi thì vận tốc của chất điểm bắt đầu tăng."
  },
  {
    "id": "2D115TL12",
    "question": "Một chất điểm chuyển động theo quy luật $S=-\\dfrac{1}{3}t^3+4 t^2+9 t$ (m/s) với $t\\geq 0$ là khoảng thời gian tính từ lúc vật bắt đầu chuyển động và $S$ là quãng đường vật chuyển động trong thời gian đó. Trong khoảng thời gian $10$ giây kể từ lúc bắt đầu chuyển động, khoảng thời gian $(a; b)$ giây thì vận tốc của vật tăng. Tính $a+b$?",
    "answer": "4",
    "explain": "Ta có $S=-\\dfrac{1}{3}t^3+4t^2+9t \\Rightarrow v(t)=S'(t)=-t^2+8t+9 \\Rightarrow v'(t)=-2 t+8$.<br>  Xét $v'(t)=0 \\Rightarrow-2t+8=0 \\Rightarrow t=4$.<br>  Ta có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_027.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Qua bảng biến thiên ta thấy, vận tốc tăng trong khoảng thời gian $(0; 4)$ giây nên $a=0$,$ b=4$.<br>  Suy ra $a+b=4$."
  },
  {
    "id": "2D115TL13",
    "question": "Một chuyển động được xác định bởi phương trình $S(t) = -\\dfrac{1}{3}t^3 + \\dfrac{3}{2}t^2 - 2t + 15$ với $t \\geq 0$, trong đó $t$ tính bằng giây và $S$ tính bằng mét. Kể từ giây thứ bao nhiêu trở đi thì vận tốc của vật giảm?",
    "answer": "1,5",
    "explain": "Ta có $v(t) = s'(t) = -t^2 + 3t - 2$.<br>  Xét hàm số $v(t) = -t^2 + 3t - 2$ với $t \\geq 0$.<br>  Ta có $v'(t) = -2t + 3$.<br>  Suy ra $v'(t) = 0 \\Leftrightarrow -2t + 3 = 0 \\Leftrightarrow t = \\dfrac{3}{2}$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta thấy kể từ khi $t \\geq \\dfrac{3}{2} = 1{,}5$ giây thì vận tốc giảm."
  },
  {
    "id": "2D112TL14",
    "question": "Cho điểm $A$ di động trên nửa đường tròn tâm $O$ đường kính $MN = 20$cm, $MOA = \\alpha$ ($0 &lt; \\alpha &lt; \\pi$). Lấy điểm $B$ thuộc nửa đường tròn và $C, D$ thuộc đường kính $MN$ sao cho $ABCD$ là hình chữ nhật. Khi $A$ di động từ trái sang phải, khi đó trong các khoảng $(a;b]$ và $[c;d]$ của $\\alpha$ thì diện tích của hình chữ nhật $ABCD$ tăng. Tính $a+b+c+d$ (kết quả làm tròn đến hàng phần trăm).<br><img src=\"data/12/2D1/im2D1/2D11_tikz_038.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "4,71",
    "explain": "Gọi R là bán kính đường tròn, ta có ${R = \\dfrac{MN}{2} = \\dfrac{20}{2} = 10 cm}$.<br>  Trong tam giác vuông $ADO$, ta có:<br>  ${OD =\\cos \\alpha = R \\cos \\alpha = 10 \\cos \\alpha}$<br>  ${AD =\\sin \\alpha = R \\sin \\alpha = 10 \\sin \\alpha}$.<br>  Suy ra ${CD = 2OD = 2 \\cdot 10 \\cos \\alpha = 20 \\cos \\alpha}$.<br>  Diện tích hình chữ nhật $ABCD$ là<br>  ${S(\\alpha) = AD \\cdot CD = (10 \\sin \\alpha) \\cdot (20 \\cos \\alpha) = 200 \\sin \\alpha \\cos \\alpha = 100 \\sin(2\\alpha)}$.<br>  Để diện tích hình chữ nhật tăng, ta cần ${S' (\\alpha) \\ge 0}$.<br>  ${S'(\\alpha) = 100 \\cdot \\cos(2\\alpha) = 200 \\cos(2\\alpha)}$.<br>  ${S' (\\alpha) \\ge 0 \\Leftrightarrow 200 \\cos(2\\alpha) &gt; 0 \\Leftrightarrow \\cos(2\\alpha) \\ge 0}$.  <br>- Với $0 &lt; \\alpha &lt; \\dfrac{\\pi}{2}$, ta có $0 &lt; 2\\alpha &lt; \\pi$.<br>  Suy ra $\\cos(2\\alpha) \\ge 0$ khi $\\alpha \\in \\left(0;\\dfrac{\\pi}{4}\\right]$.<br>- Với $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$, ta có $0 &lt; \\pi -\\alpha&lt; \\dfrac{\\pi}{2}$.<br>  Diện tích hình chữ nhật $ABCD$ là $100\\sin2(\\pi-\\alpha)$.<br>  $S'(\\alpha) = -100 \\cdot \\cos2(\\pi-\\alpha) = -200 \\cos2(\\pi-\\alpha)$.<br>  Suy ra $S' (\\alpha) \\ge 0$ khi $\\alpha \\in \\left[ \\dfrac{\\pi}{2}; \\dfrac{3\\pi}{4}\\right]$.  Vậy các khoảng cần tìm là $\\left(a;b\\right] = \\left(0;\\dfrac{\\pi}{4}\\right]$ và $[c;d] = \\left[ \\dfrac{\\pi}{2}; \\dfrac{3\\pi}{4}\\right]$.<br>  $a = 0$, $b = \\dfrac{\\pi}{4}$, $c = \\dfrac{\\pi}{2}$, $d = \\dfrac{3\\pi}{4}$.<br>  Vậy ${a+b+c+d = 0 + \\dfrac{\\pi}{4} +\\dfrac{\\pi}{2}+ \\dfrac{3\\pi}{4}\\approx 4{,}71}$."
  },
  {
    "id": "2D111TL15",
    "question": "Cho hàm số $y=\\dfrac{mx+2\\,025}{x+2}$ với $m$ là tham số. Có bao nhiêu số nguyên dương $m$ để hàm số đã cho nghịch biến trên các khoảng xác định?",
    "answer": "1012",
    "explain": "Tập xác định của hàm số $\\mathscr{D}=\\mathbb{R}\\setminus\\{-2\\}$.<br>  Ta có $y'=\\dfrac{2m-2\\,025}{(x+2)^2}$.<br>  Để hàm số đã cho nghịch biến trên các khoảng xác định, điều kiện là  $y'&lt;0,\\forall x\\ne -2\\Leftrightarrow 2m-2025&lt;0\\Leftrightarrow m&lt;1012{,}5.$  Suy ra, có $1012$ các giá trị nguyên dương của $m$ thỏa mãn yêu cầu bài toán."
  },
  {
    "id": "2D113TL16",
    "question": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y=\\dfrac{x+4}{x+m}$ đồng biến trên $(-\\infty ;-7)$.",
    "answer": "3",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\backslash\\{-m\\}$.<br> Ta có $y'=\\dfrac{m-4}{(x+m)^2}$.<br> Hàm số đã cho đồng biến trên khoảng $(-\\infty;-7) \\Leftrightarrow y'&gt;0$ với mọi $x \\in(-\\infty;-7)$.<br> Khi đó $m - 4 &gt; 0 \\text{ và } - m \\notin (-\\infty; - 7 ) \\Leftrightarrow m-4&gt;0 \\text{ và } -m \\geq-7 \\Leftrightarrow 4&lt;m \\leq 7$.<br> Do $m\\in \\mathbb{Z}$ nên có $3$ giá trị nguyên của $m$ thỏa đề bài."
  },
  {
    "id": "2D111TL17",
    "question": "Độ cao (tính bằng mét) của tàu lượn siêu tốc so với mặt đất sau $t$ (giây) $(0 \\leq t \\leq 20)$ từ lúc bắt đầu được cho bởi công thức  $h(t)=-\\dfrac{4}{255}t^3+\\dfrac{49}{85}t^2 - \\dfrac{98}{17}t + 20$.  Trong khoảng thời gian $(a;b)$, tàu lượn đi lên. Tính $2a+b$ (kết quả làm tròn đến hàng phần chục).",
    "answer": "21,4",
    "explain": "Xét hàm số $h(t)=-\\dfrac{4}{255}t^3+\\dfrac{49}{85}t^2 - \\dfrac{98}{17}t + 20$, $0\\leq t \\leq 20$.<br>  Đạo hàm $h'(t)=-\\dfrac{12}{255}t^2+\\dfrac{98}{85}t-\\dfrac{98}{17}$.<br>  Khi đó $h'(t)=0\\Leftrightarrow   t=7 \\text{ hoặc } t=\\dfrac{37}{5}.$  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_060.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   Tàu lượn đi lên khi $t$ trong khoảng $\\left(7;\\dfrac{37}{5}\\right)$.<br>  Vậy $a=7$, $b=\\dfrac{37}{5}$ và $2a+b=21{,}4$."
  },
  {
    "id": "2D113TL18",
    "question": "Tính tổng các giá trị nguyên dương của tham số $m$ để hàm số $y=x^3-3mx^2+3(3m+4)x+2\\,025$ đồng biến trên $(2;+\\infty)$.",
    "answer": "10",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có $y'=3x^2-6mx+3(3m+4)=3\\left(x^2-2mx+3m+4\\right)  $.<br>  Đặt $g(x)=x^2-2m x+3m+4$.<br>  Hàm số $y$ đồng biến trên $(2 ;+\\infty)$ khi và chỉ khi $g(x) \\geq 0, \\forall x&gt;2$.<br>  Bảng biến thiên của hàm số $y=g(x)$  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_091.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Trường hợp 1:&lt;/strong&gt; $m \\leq 2$.<br>  Khi đó $\\forall x&gt;2 $ thì $g(x)&gt;g(2)=8-m$.<br>  Để $g(x) \\geq 0, \\forall x&gt;2$ thì điều kiện là $g(2) \\geq 0 \\Leftrightarrow 8-m \\geq 0 \\Leftrightarrow m \\leq 8.$  Kết hợp với $m \\leq 2$ và $m\\in \\mathbb{Z^+} $ suy ra $m\\in\\{1;2\\} $.<br>- &lt;strong&gt;Trường hợp 2:&lt;/strong&gt; $m &gt; 2$.<br>  Khi đó $\\forall x&gt;2 $ thì $g(x)&gt;g(m)=-m^2+3m+4$.<br>  Để $g(x) \\geq 0, \\forall x&gt;2$ thì điều kiện là $-m^2+3 m+4 \\geq 0 \\Leftrightarrow m^2-3 m-4 \\leq 0 \\Leftrightarrow-1 \\leq m \\leq 4. $  Kết hợp với $m &gt; 2$ và $m\\in \\mathbb{Z^+} $ suy ra $m\\in\\{3;4\\} $.  Vậy $m\\in\\{1;2;3;4\\} $. Tổng các giá trị đó là $1+2+3+4=10$."
  }
];
