// =========================================================================
// KHỐI DỮ LIỆU: 2D42 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2D42 = [
  {
    "id": "2D424TL1",
    "question": "Biết tích phân $I=\\displaystyle\\int\\limits_1^3\\dfrac{2x^2-3x+1}{x}\\mathrm{\\,d}x=a+\\ln b$, $a$, $b\\in\\mathbb{N}$. Tính $S=2a+b$.",
    "answer": "7",
    "explain": "Ta có $I=\\displaystyle\\int\\limits_1^3\\dfrac{2x^2-3x+1}{x}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^3\\left(2x-3+\\dfrac{1}{x}\\right)\\mathrm{\\,d}x=\\left(x^2-3x+\\ln|x|\\right)\\bigg|_1^3=2+\\ln3$.<br>  Vậy $a=2$, $b=3$ nên $S=2a+b=7$."
  },
  {
    "id": "2D427TL2",
    "question": "Một vật chuyển động với tốc độ $v(t)=3t+4$\\,(m/s), với thời gian $t$ tính theo giây, $t\\in[0;5]$. Tính quãng đường (đơn vị: mét) vật đi được trong khoảng thời gian từ $t=0$ đến $t=5$.",
    "answer": "57,5",
    "explain": "Quãng đường (đơn vị: mét) vật đi được trong khoảng thời gian từ $t=0$ đến $t=5$ là  \\[S=\\displaystyle\\int\\limits_0^5v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^5(3t+4)\\mathrm{\\,d}t=\\dfrac{115}{2}=57{,}5\\text{\\,m.}\\]"
  },
  {
    "id": "2D427TL3",
    "question": "Một quần thể vi khuẩn ban đầu gồm $500$ vi khuẩn, sau đó bắt đầu tăng trưởng. Gọi $P(t)$ là số lượng vi khuẩn của quần thể đó tại thời điểm $t$, trong đó $t$ tính theo ngày ($0 \\le t \\le 10$). Tốc độ tăng trưởng của quần thể vi khuẩn đó cho bởi hàm số $P'(t) = 150 \\sqrt{t}$. Tính số lượng vi khuẩn của quần thể đó sau $9$ ngày.",
    "answer": "3200",
    "explain": "Số lượng vi khuẩn của quần thể sau $t$ ngày $P(t)=\\displaystyle\\int150\\sqrt{t}\\;\\mathrm{d}t=100\\cdot t\\sqrt{t}+C$.<br>  Vì ban đầu quần thể có $500$ vi khuẩn nên $P(0)=500 \\Leftrightarrow C=500$.<br>  Vậy $P(t)=100\\cdot t\\sqrt{t}+500$.<br>  Số lượng vi khuẩn của quần thể sau $9$ ngày $P(9)=3200$ (vi khuẩn)."
  },
  {
    "id": "2D427TL4",
    "question": "Một viên đạn được bắn lên trời với vận tốc là $72$ (m/s) bắt đầu từ độ cao $2$ m. Hãy xác định chiều cao của viên đạn sau thời gian $5$ s kể từ lúc bắn biết gia tốc trọng trường là $9{,}8$ m/s$^2$ (làm tròn kết quả đến hàng đơn vị).",
    "answer": "240",
    "explain": "Vận tốc tại thời điểm $t$ là $v(t)=\\displaystyle\\int\\limits -9{,}8 \\mathrm{\\,d}t=-9{,}8t+C_1$.<br>  Do $v(0)=72$ nên $v(0)=-9{,}8 \\cdot 0+C_1 =72 \\Leftrightarrow C_1=72 \\Rightarrow v(t)=-9{,}8t+72$.<br>  Độ cao của viên đạn tại thời điểm $t$ là   \\[s(t)=\\displaystyle\\int\\limits v(t) \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\left(-9{,}8t+72\\right)\\mathrm{d}t=-4{,}9t^2+72t+C_2.\\]  Vì $s(0)=2$ nên $s(0)=-4{,}9 \\cdot 0^2+72 \\cdot 0+C_2=2\\Leftrightarrow C_2=2 \\Rightarrow s(t)=-4{,}9t^2+72t+2$.<br>  Vậy sau khoảng thời gian $5$ s kể từ lúc bắn, viên đạn ở độ cao  \\[s(5)=-4{,}9 \\cdot 5^2+72 \\cdot 5+2=239{,}5 \\ \\text{m}.\\]"
  },
  {
    "id": "2D427TL5",
    "question": "Một xe ô tô sau khi chờ hết đèn đỏ đã bắt đầu chuyển động với vận tốc được biểu thị bằng đồ thị là đường cong parabol. Biết rằng sau $5$ phút thì xe đạt đến vận tốc cao nhất $1\\,000$ m/phút và bắt đầu giảm tốc, đi được $6$ phút thì xe chuyển động đều. Quãng đường xe đi được sau $10$ phút đầu tiên kể từ khi hết đèn đỏ là bao nhiêu mét?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS17_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "8160",
    "explain": "Gọi phương trình parabol $(P)$ là $y=at^2+bt$ ($0 \\le t\\le 6$) (vì $O \\in (P)$).<br>  Dựa vào đồ thị hàm số, ta có $-\\dfrac{b}{2a}=5 \\text{ và } 25a+5b=1000 \\Leftrightarrow a=-40 \\text{ và } b=400.$<br>  Phương trình vận tốc của xe trong $6$ phút đầu là $v(t)=-40t^2+400t$.<br>  Bắt đầu từ phút thứ $6$ trở đi, xe chuyển động đều với vận tốc $v(6)=960$ m/s.<br>  Quãng đường xe đi được sau $10$ phút là \\[s(t)=\\displaystyle\\int\\limits_0^6 \\left(-40t^2+400t\\right)\\mathrm{d}t+\\displaystyle\\int\\limits_6^{10}960 \\mathrm{\\,d}t=8160 \\text{ m}.\\]"
  },
  {
    "id": "2D427TL6",
    "question": "Một máy bay di chuyển ra đến đường băng và bắt đầu chạy đà để cất cánh. Giả sử vận tốc của máy bay khi chạy đà được cho bởi $v(t) = 3t + 5$ (m/s), với $t$ là thời gian (tính bằng giây) kể từ khi máy bay bắt đầu chạy đà. Sau $30$ giây thì máy bay cất cánh rời đường băng. Quãng đường máy bay đã di chuyển từ khi bắt đầu chạy đà đến khi rời đường băng là bao nhiêu mét?",
    "answer": "1500",
    "explain": "Vận tốc của máy bay khi chạy đà là $v(t) = 3t + 5$ (m/s).<br>  Thời gian máy bay chạy đà trên đường băng là từ $t=0$ đến $t=30$ giây.<br>  Quãng đường $S$ máy bay đã di chuyển từ khi bắt đầu chạy đà đến khi rời đường băng là  \\[ S = \\displaystyle \\int _{0}^{30} v(t) \\mathrm{\\,d}t = \\displaystyle \\int _{0}^{30} (3t + 5) \\mathrm{\\,d}t = \\left. \\left( \\dfrac{3}{2}t^2 + 5t \\right) \\right|_{0}^{30} = 1500\\]  Vậy, quãng đường máy bay đã di chuyển là $1500$ mét."
  },
  {
    "id": "2D427TL7",
    "question": "Một ô tô đang chạy với vận tốc $20$ m/s thì người lái xe đạp thắng. Sau khi đạp thắng, ô tô chuyển động chậm dần đều với vận tốc $v(t) = -40t + 20$ (m/s), trong đó $t$ là thời gian tính bằng giây kể từ lúc đạp thắng. Hỏi từ lúc đạp thắng đến khi dừng hẳn, ô tô di chuyển bao nhiêu mét?",
    "answer": "320",
    "explain": "Khi bắt đầu đạp thắng thì $v=20\\Leftrightarrow -40t + 20 = 20 \\Leftrightarrow t = 0$.<br>  Khi ô tô dừng hẳn thì $v=0\\Leftrightarrow -40t + 20 = 0 \\Leftrightarrow t = \\dfrac{1}{2}$.<br>  Vậy   \\[ S = \\displaystyle\\int_{0}^{\\frac{1}{2}} (-40t + 20)\\mathrm{\\,d}t = 5. \\]"
  },
  {
    "id": "2D422TL8",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[-1;6]$ và có đồ thị là đường gấp khúc như hình bên. Biết $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn $[-1;6]$ và thỏa mãn $F(-1)=-2$. Giá trị của $F(4)+F(6)$ bằng bao nhiêu?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS23_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "3",
    "explain": "Ta có  <br>- $S_1=\\displaystyle\\int_{-1}^{2} f(x) \\mathrm{\\,d}x=3 \\Leftrightarrow F(2)-F(-1)=3 \\Leftrightarrow F(2)=1$.<br>- $S_2=\\displaystyle\\int_2^{4} f(x) \\mathrm{\\,d}x=1 \\Leftrightarrow F(4)-F(2)=1 \\Leftrightarrow F(4)=2$.<br>- $S_3=-\\displaystyle\\int_4^{6} f(x) \\mathrm{\\,d}x=1 \\Leftrightarrow F(4)-F(6)=1 \\Leftrightarrow F(6)=1$.  Vậy $F(4)+F(6)=3$."
  },
  {
    "id": "2D427TL9",
    "question": "Một chiếc xe đua $F1$ đạt tới vận tốc lớn nhất là $360$ km/h. Đồ thị bên biểu thị vận tốc $v$ của xe trong $5$ giây đầu tiên kể từ lúc xuất phát. Đồ thị trong $2$ giây đầu là một phần của một parabol đỉnh tại gốc tọa độ $O$, giây tiếp theo là đoạn thẳng và sau đúng $3$ giây thì xe đạt vận tốc lớn nhất. Biết rằng mỗi đơn vị trục hoành biểu thị $1$ giây, mỗi đơn vị trục tung biểu thị $10$ m/s và trong $5$ giây đầu xe chuyển động theo đường thẳng. Hỏi trong $5$ giây đó xe đã đi được quãng đường là bao nhiêu mét?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS23_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "320",
    "explain": "Đổi $360$ km/h $=100$ m/s. <br>  Ta xây dựng hàm vận tốc như sau:  <br>- Trong $2$ giây đầu: $v(t)=15t^2$.<br>- Từ giây thứ $2$ đến giây thứ $3$: $v(t)=40t-20$.<br>- Từ giây thứ $3$ đến giây thứ $5$: $v(t)=100$.  Vậy $\\displaystyle\\int_0^{2} 15t^2 \\mathrm{\\,d}t+\\displaystyle\\int_2^{3} \\left(40t-20 \\right) \\mathrm{\\,d}t+\\displaystyle\\int_3^{5} 100 \\mathrm{\\,d}t=320$."
  },
  {
    "id": "2D424TL10",
    "question": "Cho hàm số $f(x)=\\dfrac{a}{x^2}+\\dfrac{b}{x}+2$, với $a, b$ là các số hữu tỉ thỏa điều kiện $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1 f(x)\\mathrm{\\,d}x=2-3 \\ln 2$. Tính $T=a+b$.",
    "answer": "-2",
    "explain": "Ta có   $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1 f(x)\\mathrm{\\,d}x = \\int\\limits_{\\tfrac{1}{2}}^1\\left(\\dfrac{a}{x^2}+\\dfrac{b}{x}+2\\right)\\mathrm{\\,d}x$<br>$= \\left(-\\dfrac{a}{x}+b\\ln x+2x\\right)\\Bigg|_{\\tfrac{1}{2}}^1$<br>$= -a+2+2a+b\\ln 2-1$<br>$= a+1+b\\ln 2$  Khi đó ta được $ a+1=2 \\text{ và } b=-3\\Leftrightarrow a=1 \\text{ và } b=-3 $.<br>  Vậy $T=a+b=-2$."
  },
  {
    "id": "2D427TL11",
    "question": "Một xe ô tô đang chạy với vận tốc $18 \\mathrm{~m} / \\mathrm{s}$ thì người lái xe bất ngờ phát hiện chướng ngại vật trên đường. Người lái xe phản ứng một giây, sau đó đạp phanh khẩn cấp. Kể từ thời điểm này, ô tô chuyển động chậm dần đều với tốc độ $v(t)=-10 t+20~(\\mathrm{m} / \\mathrm{s})$, trong đó $t$ là thời gian tính bằng giây kể từ lúc đạp phanh. Hỏi kể từ lúc người lái xe phát hiện chướng ngại vật trên đường đến khi dừng hẳn, ô tô di chuyển được quãng đường bằng bao nhiêu mét?",
    "answer": "38",
    "explain": "Ta có ô tô dừng khi $ -10 t+20 =0\\Leftrightarrow t=2$.<br>  Vậy quãng đường xe di chuyển được từ lúc phát hiện chướng ngại vật đến khi xe dừng hẳn là   $ S=18+\\displaystyle\\int\\limits_{0}^{2} \\left(-10 t+20\\right) \\mathrm{\\,d}x =38.$"
  },
  {
    "id": "2D422TL12",
    "question": "Tìm giá trị của $b \\neq 1$ để $\\displaystyle\\int\\limits_1^b(2x-6)\\mathrm{\\,d}x=0$.",
    "answer": "-2",
    "explain": "Ta có $\\displaystyle\\int\\limits_1^b(2x-6)\\mathrm{\\,d}x=0\\Leftrightarrow (x^2-6x)\\bigg|_1^b=0\\Leftrightarrow b^2-6b+5=0\\Leftrightarrow b=1~\\text{(loại)} \\text{ hoặc } b=5~\\text{(nhận)}.$<br>  Vậy $b=5$."
  },
  {
    "id": "2D424TL13",
    "question": "Cho hàm số $f(x)=\\dfrac{a}{x^2}+\\dfrac{b}{x}+2$, với $a$, $b$ là các số hữu tỉ thỏa điều kiện $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1f(x)\\mathrm{\\,d}x=2-3\\ln 2$. Tính $T=a+b$.",
    "answer": "-2",
    "explain": "Ta có  $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1f(x)\\mathrm{\\,d}x =\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1 \\left(\\dfrac{a}{x^2}+\\dfrac{b}{x}+2\\right)\\mathrm{\\,d}x$<br>$=\\left(-\\dfrac{a}{x}+b\\ln |x|+2x\\right)\\Bigg|_{\\tfrac{1}{2}}^1$<br>$=-a+2-(-2a-b\\ln 2+1)$<br>$=a+1+b\\ln 2.$  Suy ra $a+1=2\\Leftrightarrow a=1$, $b=-3$.<br>  Vậy $a+b=-2$."
  },
  {
    "id": "2D422TL14",
    "question": "Người ta truyền nhiệt (tính bằng $^{\\circ} C)$ cho một bình nuôi cấy vi sinh vật từ $1^{\\circ} C$. Tốc độ tăng nhiệt độ của bình tại thời điểm $t$ phút $(0\\leq t \\leq 5)$ được cho bởi hàm số $f(t)=3t^2$ ($^{\\circ} C$/phút). Biết rằng nhiệt độ của bình đó tại thời điểm $t$ là một nguyên hàm của hàm số $f(t)$, tìm nhiệt độ trung bình của bình đó trong thời gian kể từ khi truyền nhiệt đến $5$ phút đầu. (làm tròn số đến hàng đơn vị)",
    "answer": "32",
    "explain": "Tính nguyên hàm của $f(t)$ để tìm hàm nhiệt độ $T(t)$:  \\[T(t)=\\displaystyle\\int f(t)\\mathrm{\\,d} t=\\displaystyle\\int 3 t^2 d t=t^3+C.\\]  Người ta truyền nhiệt cho một bình nuôi cấy vi sinh vật từ $1^{\\circ} C$.<br> Suy ra $T(0)=1 \\Rightarrow C=1 \\Rightarrow T(t)=t^3+1$.<br>  Vậy nhiệt độ trung bình của bình đó tại trong thời gian kể từ khi truyền nhiệt đến $5$ phút đầu là  \\[T_{t b}=\\dfrac{1}{5-0} \\cdot \\displaystyle\\int\\limits_0^5 T(t)\\mathrm{\\,d} t=\\dfrac{1}{5} \\cdot \\displaystyle\\int\\limits_0^5\\left(t^3+1\\right) \\mathrm{\\,d} t \\approx 32^{\\circ} C.\\]"
  },
  {
    "id": "2D424TL15",
    "question": "Cho hàm số $ f(x) =x^2 + x \\text{ khi} x \\leq 1, \\text{ và } \\dfrac{1}{x} + 1 \\text{ khi} x &gt; 1$. Biết rằng $\\displaystyle \\int \\limits_{-1}^2 f(x)\\, \\mathrm{d}x = \\dfrac{a}{b} + \\ln c$, $(a, b, c \\in \\mathbb{Z}$, $ \\dfrac{a}{b}$ là phân số tối giản). Tính $abc$.",
    "answer": "30",
    "explain": "Ta có  $\\displaystyle \\int \\limits_{-1}^2 f(x)\\, \\mathrm{d}x = \\int \\limits_{-1}^1 x^2+x \\mathrm{d}x + \\int \\limits_1^2 \\dfrac{1}{x} + 1 \\mathrm{\\,d}x$<br>$= \\left(\\dfrac{x^3}{3}+\\dfrac{x^2}{2}\\right)\\Bigg|_{-1}^1 + \\left(\\ln |x| +x\\right)\\Bigg|^2_1$<br>$= \\left(\\dfrac{1}{3}+\\dfrac{1}{2}+\\dfrac{1}{3}-\\dfrac{1}{2}\\right) + \\left(\\ln 2 +2 -\\ln 1-1\\right)$<br>$= \\dfrac{5}{3} + \\ln 2.$  Suy ra $a=5$, $b=3$ và $c=2$. <br>  Ta có \\[abc=5\\cdot 3 \\cdot 2=30.\\]"
  },
  {
    "id": "2D423TL16",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x)=\\sin x$ và $F(0)=1$. Tính $F \\left(\\dfrac{\\pi}{2}\\right)$.",
    "answer": "2",
    "explain": "Vì $F(x)$ là một nguyên hàm của hàm số $f(x)=\\sin x$ nên  $F\\left(\\dfrac{\\pi}{2}\\right)-F(0)=\\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x.$  Do đó $F\\left(\\dfrac{\\pi}{2}\\right)=F(0)+ \\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x=1+\\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} \\sin x \\mathrm{\\,d}x=1+1=2$."
  },
  {
    "id": "2D423TL17",
    "question": "Kết quả của tích phân $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}} \\sin x\\mathrm{\\,d}x = \\dfrac{a-\\sqrt{b}}{2}$. Tính $a+b$.",
    "answer": "4",
    "explain": "Ta có $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}} \\sin x\\mathrm{\\,d}x = -\\cos x\\Bigg|_0^{\\tfrac{\\pi}{4}} = \\left(-\\cos\\dfrac{\\pi}{4}\\right)-(-\\cos 0)=-\\dfrac{\\sqrt{2}}{2}-(-1)=\\dfrac{2-\\sqrt{2}}{2}$.<br>  Vậy $a+b=2+2=4$."
  },
  {
    "id": "2D423TL3",
    "question": "Cho $f(x)=\\dfrac{1}{\\sin ^2 x}$. Biết rằng $F(x)$ là một nguyên hàm của $f(x)$ thỏa $F\\left(\\dfrac{\\pi}{6}\\right)=0$. Tính $F\\left(\\dfrac{\\pi}{3}\\right)$. Kết quả được làm tròn đến hàng phần trăm.",
    "answer": "1{,}15",
    "explain": "Ta có   $\\displaystyle\\int\\limits_{\\dfrac{\\pi}{6}}^{\\dfrac{\\pi}{3}} f(x) \\mathrm{\\,d}x=\\dfrac{2}{\\sqrt{3}} \\Leftrightarrow F\\left(\\dfrac{\\pi}{3}\\right)-F\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{2}{\\sqrt{3}} \\Leftrightarrow F\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{2}{\\sqrt{3}} +F\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{2}{\\sqrt{3}} \\approx 1{,}15.$"
  }
];
