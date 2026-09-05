// =========================================================================
// KHỐI DỮ LIỆU: 2D15 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2D15 = [
  {
    "id": "2D158TL1",
    "question": "Nhà máy A chuyên sản xuất một loại sản phẩm cho nhà máy B. Hay nhà máy thỏa thuận rằng, hàng tháng A cung cấp cho B số lượng sản phẩm theo đơn đặt hàng của B (tối đa $100$ tấn sản phẩm). Nếu số lượng đặt hàng là $x$ tấn sản phẩm thì giá bán cho mỗi sản phẩm là $G(x)=45-0{,}001x^2$ (triệu đồng). Chi phí để A sản xuất $x$ tấn sản phẩm trong một tháng là $C(x)=100+30x$ (triệu đồng) (gồm $100$ triệu đồng chi phí cố định và $30$ triệu đồng cho mỗi tấn sản phẩm). Hỏi A bán cho B khoảng bao nhiêu tấn sản phẩm mỗi tháng thì A thu được lợi nhuận lớn nhất? (làm tròn kết quả đến hàng phần mười)",
    "answer": "70,7",
    "explain": "Lợi nhuận thu được mỗi tháng của nhà máy $A$ là  $x\\cdot G(x)-C(x)=-0{,}001x^3+15x-100.$  Xét hàm số $f(x)=-0{,}001x^3+15x-100$ với $0\\le x\\le 100$.<br>  Ta có $f'(x)=-0{,}003x^2+15$.<br>  Cho $f'(x)=0\\Leftrightarrow x=50\\sqrt{2} \\text{ hoặc } x=-50\\sqrt{2}.$<br>  Ta có $f(0)=-100$, $f(50\\sqrt{2})=500\\sqrt{2}$, $f(100)=400$.<br>  Vậy lợi nhuận lớn nhất khi A bán cho B khoảng $70{,}7$ tấn sản phẩm."
  },
  {
    "id": "2D151TL2",
    "question": "Cho một tấm nhôm hình vuông cạnh $12$cm. Người ta cắt ở bốn góc của tấm nhôm bốn hình vuông bằng nhau, mỗi hình vuông có cạnh bằng $x$(cm), rồi gập tấm nhôm lại để được một cái hộp có dạng hình hộp chữ nhật không có nắp (Tham khảo hình vẽ). Giá trị của $x$ bằng bao nhiêu centimet (cm) để thể tích của khối hộp đó là lớn nhất?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2",
    "explain": "Sau khi cắt $4$ góc và gập lại ta được hình hộp chữ nhật có kích thước đáy $12-2x$ (cm) và chiều cao là $x$.<br>  Khi đó thể tích khối hộp thu được là $V=(12-2x)^2x=144x-48x^2+4x^3$.<br>  Xét $V=f(x)=144x-48x^2+4x^3$ có $f'(x)=144-96x+12x^2=0 \\Leftrightarrow x=2 \\text{ hoặc } x=6.$<br>  Ta có bảng biến thiên của $f(x)$  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên suy ra $x=2$ thì $f(x)$ đạt giá trị lớn nhất.<br>  Vậy $x=2$ cm thì thể tích khối hộp lớn nhất."
  },
  {
    "id": "2D151TL3",
    "question": "Cho hàm số bậc ba $y=ax^3+bx^2+c$ có đồ thị $(C)$. Biết $(C)$ đi qua điểm $A(-2;2)$ và nhận điểm $B(2;3)$ làm điểm cực trị. Giá trị của $T=a+b+c$ bằng bao nhiêu? (làm tròn kết quả đến hàng phần trăm).",
    "answer": "3,13",
    "explain": "Ta có $y=ax^3+bx^2+c \\Rightarrow y'=3ax^2+2bx$.<br>  Vì $(C)$ đi qua điểm $A(-2;2)$ nên $y(-2)=2 \\Leftrightarrow -8a+4b+c=2$.<br>  Đồ thị $(C)$ nhận điểm $B(2;3)$ làm điểm cực trị nên $y(2)=3 \\Leftrightarrow 8a+4b+c=3$,<br> và $y'(2)=0 \\Leftrightarrow 12a+4b=0$.<br>  Ta có hệ phương trình $-8a+4b+c=2 \\text{ và } 8a+4b+c=3 \\text{ và } 12a+4b=0 \\Leftrightarrow a=\\dfrac{1}{16} \\text{ và } b=\\dfrac{-3}{16} \\text{ và } c=\\dfrac{13}{4}.$<br>  Khi đó $T=a+b+c = \\dfrac{1}{16} + \\dfrac{-3}{16} + \\dfrac{13}{4} =\\dfrac{25}{8} \\approx 3,13 $."
  },
  {
    "id": "2D151TL4",
    "question": "Cho hàm số $y = f(x) = \\dfrac{x^2+bx+c}{mx}$ có đồ thị $(C)$. Biết $(C)$ đi qua hai điểm $A(1;1)$ và $B(5;1)$ và tiệm cận xiên của đồ thị $(C)$ có hệ số góc bằng $-\\dfrac{1}{2}$. Tính $f(-1)$.",
    "answer": "7",
    "explain": "Vì đồ thị $(C)$ của hàm số đi qua hai điểm $A(1;1)$ và $B(5;1)$ nên ta có  $ 1 = \\dfrac{1^2 + b\\cdot 1 + c}{m\\cdot 1} \\text{ và } 1 = \\dfrac{5^2 + b\\cdot 5 + c}{m\\cdot 5} \\Leftrightarrow b + c = m - 1 \\text{ và } 5b + c = 5m - 25. \\quad (*) $  Ta có $f(x) = \\dfrac{x^2+bx+c}{mx} = \\dfrac{1}{m}x + \\dfrac{b}{m} + \\dfrac{c}{mx}.$<br>  Do đó phương trình đường tiệm cận xiên có dạng $y = \\dfrac{1}{m}x + \\dfrac{b}{m}$.<br>  Theo đề bài, ta có  $ \\dfrac{1}{m} = -\\dfrac{1}{2} \\Leftrightarrow m = -2.$  Thay $m=-2$ vào hệ phương trình $(*)$, ta được  $ b + c = -3 \\text{ và } 5b + c = -35 \\Leftrightarrow b = -8 \\text{ và } c = 5. $  Do đó $f(x) = \\dfrac{x^2-5x+8}{-2x} \\Rightarrow f(-1) = \\dfrac{(-1)^2-5\\cdot (-1)+8}{-2\\cdot (-1)} = 7$."
  },
  {
    "id": "2D153TL5",
    "question": "Cho hàm số $f(x)=\\dfrac{ax+b}{2x+d}$ ($a$, $b$, $d \\in \\mathbb{R}$). Biết rằng đồ thị hàm số đã cho đi qua điểm $(-1;7)$ và giao điểm hai tiệm cận là $(-2;3)$. Giá trị biểu thức $\\dfrac{2a+3b+d+8}{14}$ bằng",
    "answer": "6",
    "explain": "Vì giao điểm của hai đường tiệm cận là $(-2;3)$ nên đồ thị hàm số có $2$ đường tiệm cận là $x=-2$ và $y=3$.<br>  Từ đó ta có $-\\dfrac{d}{2}=-2\\Leftrightarrow d=4$.<br>  Và $\\dfrac{a}{2}=3\\Leftrightarrow a=6$.<br>  Đồ thị hàm số đi qua điểm $(-1;7)$ nên $7=\\dfrac{-a+b}{-2+d}\\Leftrightarrow b=20$.<br>  Vậy $\\dfrac{2a+3b+d+8}{14}=\\dfrac{2\\cdot 6+3\\cdot 20+4+8}{14}=6$."
  },
  {
    "id": "2D158TL6",
    "question": "Thầy Hiếu tham dự giải “ Đi bộ trực tuyến Ngành Giáo dục và Đào tạo Edu Run-HCMC”\\ năm 2025. Quãng đường thầy Hiếu đi được biểu diễn bằng hàm số $s(t)=at^3+bt^2+ct+d$ (với $a\\ne 0$) có đồ thị như hình vẽ (trong đó $t$ là thời gian tính bằng giờ, $s$ là quãng đường tính bằng km). Khi đó, vận tốc tối đa của thầy Hiếu đạt được trong quá trình đi bộ là bao nhiêu (đơn vị km/h)?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_027.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "9",
    "explain": "Dựa vào đồ thị ta thấy đồ thị hàm số đi qua các điểm: $O(0;0)$, $A(2;12)$, $B(4;24)$ và nhận $B(4;24)$ làm một điểm cực trị.<br>  Ta có $s(t)=at^3+bt^2+ct+d\\Rightarrow s'(t)=3at^2+2bt+c$.<br>  Khi đó ta có hệ sau $s(0)=0 \\text{ và } s(2)=12 \\text{ và } s(4)=24 \\text{ và } {s}'(4)=0  \\Leftrightarrow d=0 \\text{ và } 8a+4b+2c+d=12 \\text{ và } 64a+16b+4c+d=24 \\text{ và } 48a+8b+c=0  \\Leftrightarrow a=-\\dfrac{3}{4} \\text{ và } b=\\dfrac{9}{2} \\text{ và } c=0 \\text{ và } d=0.$<br>  Nên $s(t)=-\\dfrac{3}{4}{t^3}+\\dfrac{9}{2}{t^2}\\Rightarrow v(t)=s'(t)=-\\dfrac{9}{4}{t^2}+9t$.<br>  Thầy Hiếu dừng đi bộ khi $v(t)=0\\Leftrightarrow -\\dfrac{9}{4}{t^2}+9t=0  \\Leftrightarrow t=0 \\text{ và } t=4.$<br>  Bài toán trở thành tìm giá trị lớn nhất của $v(t)$ trên $[0;4]$.<br>  Ta có $v'(t)=-\\dfrac{9}{2}t+9\\Rightarrow v'(t)=0\\Leftrightarrow t=2$.<br>  Khi đó $v(0)=0$, $v(2)=9$, $v(4)=0$.<br>  Vậy vận tốc lớn nhất mà thầy Hiếu đạt được là $9$\\,(km/h) tại thời điểm $t=2$\\,(h)."
  },
  {
    "id": "2D151TL7",
    "question": "Với mỗi số tự nhiên dương $n$, đồ thị hàm số $f(x) = \\dfrac{1 - x^3}{x}$ luôn cắt đường thẳng $y = n$ tại một điểm có hoành độ là $a_n$. Tính $\\lim \\limits_{x \\to {+\\infty}} {a_n}$.",
    "answer": "0",
    "explain": "Phương trình hoành độ giao điểm:<br>  ${\\dfrac{1-x^3}{x} = n}$.<br>  Xét hàm số $f(x)=\\dfrac{1-x^3}{x}$: Tập xác định $\\mathscr{D}=\\mathbb{R}\\backslash\\{0\\}$.<br>  Ta có ${f(x) = 0}$ khi $x=1$.<br>  $f'(x)=-\\dfrac{1}{x^2}-2x=0 \\Leftrightarrow x^3=-\\dfrac{1}{2} \\Rightarrow x=-\\dfrac{1}{\\sqrt[3]{2}}$.<br>  Ta có bảng biến thiên của hàm số $f(x)=\\dfrac{1-x^3}{x}$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_031.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Theo đề bài ta có: Với mỗi số tự nhiên dương $n$, đồ thị hàm số $f(x) = \\dfrac{1 - x^3}{x}$ luôn cắt đường thẳng $y = n$ tại một điểm có hoành độ là $a_n$.<br>  Từ bảng biến thiên suy ra $0&lt;a_n\\le 1$ nên $\\lim \\limits_{x \\to {+\\infty}} {a_n}=0$."
  },
  {
    "id": "2D152TL8",
    "question": "Cho hàm số $y=\\dfrac{2x+1}{x-1}$ có đồ thị $(C)$. Gọi $I$ là tâm đối xứng của $(C)$. Điểm $A\\in (C)$ sao cho tam giác $OAI$ là tam giác vuông cân tại $O$. Tìm hoành độ của $A$.",
    "answer": "-2",
    "explain": "Tâm đối xứng của $(C)$ là $I(1;2)$.<br>  Ta có $y=\\dfrac{2(x-1)+3}{x-1}=2+\\dfrac{3}{x-1}$.<br>  Gọi $A\\in (C)\\Rightarrow A\\left(x_A;2+\\dfrac{3}{x_A-1}\\right)$.<br>  Ta có $\\overrightarrow{OA}=\\left(x_A;2+\\dfrac{3}{x_A-1}\\right)$, $\\overrightarrow{OI}=(1;2)\\Rightarrow OI=\\sqrt{5}$.<br>  Tam giác $OAI$ vuông cân tại $O\\Rightarrow \\overrightarrow{OA}\\cdot \\overrightarrow{OI}=0\\Leftrightarrow x_A+4+\\dfrac{6}{x_A-1}=0\\Leftrightarrow x_A=-1 \\text{ hoặc } x_A=-2.$<br>  Với $x_A=-1\\Rightarrow \\overrightarrow{OA}=\\left(-1;\\dfrac{1}{2}\\right)\\Rightarrow OA=\\dfrac{\\sqrt{5}}{2}\\ne OI$ (loại).<br>  Với $x_A=-2\\Rightarrow \\overrightarrow{OA}=\\left(-2;1\\right)\\Rightarrow OA=\\sqrt{5}=OI$ (nhận).<br>  Vậy hoành độ của $A$ bằng $-2$."
  },
  {
    "id": "2D151TL9",
    "question": "Cho hàm số $y=\\dfrac{ax+b}{cx-1}$ có đồ thị như hình vẽ bên. Tính giá trị của biểu thức $S=a+b+c$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_038.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2",
    "explain": "Đồ thị có đường tiệm cận đứng là $x=1$ suy ra $\\dfrac{1}{c}=1\\Leftrightarrow c=1$.<br>  Đồ thị có đường tiệm cận ngang là $y=-1$ suy ra $\\dfrac{a}{c}=-1\\Leftrightarrow a=-c=-1$.<br>  Đồ thị của hàm số đi qua điểm $(2;0)$ nên ta có $2a+b=0$, do đó $b=-2a=2$.<br>  Từ đó ta được $a=-1$; $b=2$; $c=1$ suy ra $S=a+b+c=2$."
  },
  {
    "id": "2D158TL10",
    "question": "Một vật chuyển động trên đường thẳng được xác định bởi công thức $s(t)=t^{3}-3t^{2}+7t-2$, trong đó $t&gt;0$ và tính bằng giây và $s(t)$ là quãng đường chuyển động được của vật trong $t$ giây tính bằng mét. Gia tốc của vật tại thời điểm mà vận tốc của chuyển động bằng $16$ m/s là bao nhiêu?",
    "answer": "12",
    "explain": "Vận tốc tức thời của chuyển dộng là $v(t)=s'(t)=3t^2-6t+7$ (m/s).<br>  Gia tốc tức thời của chuyển động là $a(t)=v'(t)=6t-6$ (m/s$^2$).<br>  Theo đề $v(t)=16\\Rightarrow 3t^2-6t+7=16\\Rightarrow t=-1 \\text{ hoặc } t=3.$<br>  Mà $t&gt;0$ nên ta được $t=3$.<br>  Vậy gia tốc của vật tại thời điểm mà vận tốc của chuyển động bằng $16$ m/s là $a(3)=12$ (m/s$^2$)."
  },
  {
    "id": "2D158TL11",
    "question": "Một học sinh tham dự giải “Đi bộ trực tuyến Ngành Giáo dục và Đào tạo” năm 2024.  Quãng đường học sinh đó đi được biểu diễn bằng hàm số $s(t) = at^3 + bt^2 + ct + d$ có đồ thị như hình trên. Khi đó, vận tốc tối đa của học sinh đó đạt được trong quá trình đi bộ là bao nhiêu km/h?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_047.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "9",
    "explain": "Ta có $v(t)=s'(t)=3at^2+2bt+c$.<br>  Dựa vào đồ thị, ta có hệ phương trình  $s(0)=0 \\text{ và } s(2)=12 \\text{ và } s(4)=24 \\text{ và } s'(4)=0 \\Leftrightarrow d=0 \\text{ và } 8a+4b+2c+d=12 \\text{ và } 64a+16b+4c+d=24 \\text{ và } 48a+8b+c=0 \\Leftrightarrow a=-\\dfrac{3}{4} \\text{ và } b=\\dfrac{9}{2} \\text{ và } c=0 \\text{ và } d=0.$  $ \\Rightarrow s(t)=-\\dfrac{3}{4}t^3+\\dfrac{9}{2}t^2$.<br>  Vậy $v(t)=-\\dfrac{9}{4}t^2+9t$. Ta có $v'(t)=-\\dfrac{9}{2}t+9$.<br>  Xét $v'(t)=0 \\Leftrightarrow t=2$.<br>  Ta có bảng biến thiên của $v(t)$  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_048.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy vận tốc tối đa của học sinh đó đạt được trong quá trình đi bộ là $9$ km/h."
  },
  {
    "id": "2D158TL12",
    "question": "Công ty của Bác An định làm một bể chứa nước có dạng hình trụ có nắp đậy bằng thép không gỉ có thể tích $2 \\pi\\,\\left(\\mathrm{~m}^3\\right)$ để đựng nước. Biết giá mỗi mét vuông thép không gỉ là $500$ nghìn đồng. Hỏi chi phí nguyên vật liệu làm mỗi bể nước thấp nhất là bao nhiêu? (kết quả tính bằng đơn vị nghìn đồng và lấy $\\pi=3{,}14$)",
    "answer": "9425",
    "explain": "Gọi $r$ là bán kính đáy, $x$ là chiều cao của thùng nước.<br>  Ta có $V=\\pi\\cdot r^2\\cdot x\\Rightarrow r=\\dfrac{V}{\\pi\\cdot x}=\\dfrac{2\\pi}{\\pi x}=\\dfrac{2}{x}$.<br>  Diện tích toàn phần của bể nước là là  $S(x) = 2\\pi r^2+2\\pi rx$<br>$= 2\\pi\\left(\\dfrac{2}{x}+\\sqrt{\\dfrac{2}{x}\\cdot x}\\right)$<br>$= 2\\pi\\left(\\dfrac{2}{x}+\\sqrt{2x}\\right)$<br>$S'(x) = 2\\pi\\left(-\\dfrac{2}{x^2}+\\dfrac{2}{2\\sqrt{2x}}\\right)$<br>$= 2\\pi\\left(\\dfrac{1}{\\sqrt{2x}}-\\dfrac{2}{x^2}\\right).$  Cho $S'(x)=0\\Leftrightarrow \\dfrac{1}{\\sqrt{2x}}-\\dfrac{2}{x^2}=0\\Leftrightarrow x=2$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_059.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên ta có $\\min S(x)=6\\pi$ (m$^{2}$).<br>  Chi phí nguyên liệu làm bể nước thấp nhất là $6\\pi\\cdot 500\\,000=9420$ (nghin đồng)."
  },
  {
    "id": "2D151TL13",
    "question": "Trong $8$ phút đầu tiên kể từ khi xuất phát, độ cao $h$ (tính bằng mét) của khinh khí cầu vào thời điểm $t$ phút được cho bởi công thức $h(t)=at^3+bt^2+ct+d\\, (a\\neq 0)$. Đồ thị của hàm số $h(t)$ được biểu diễn trong hình bên dưới. Tìm độ cao của khinh khí cầu vào thời điểm $5$ phút (đơn vị: mét)   <br><img src=\"data/12/2D1/im2D1/2D15_tikz_060.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "345",
    "explain": "Gọi $(C)$ là đồ thị hàm số. Ta có  $O(0;0)\\in (C)\\Leftrightarrow d=0$;<br>  $A(3;405)\\in (C)\\Leftrightarrow 405=27a+9b+3c$;<br>  $B(6;324)\\in (C)\\Leftrightarrow 324=216a+36b+6c$;<br>  $C(8;480)\\in (C)\\Leftrightarrow 480=512a+64b+8c$.<br>  Ta có hệ phương trình  \\[  27a+9b+3c=405 \\text{ và } 216a+36b+6c=324 \\text{ và } 512a+64b+8c=480  \\Leftrightarrow  a=6 \\text{ và } b=-81 \\text{ và } c=324.  \\]  Do đó, ta có $h(t)=6t^3-81t^2+324t$.<br>  Tại thời điểm $t=5$ phút, ta có $h(t)=345$ mét."
  },
  {
    "id": "2D151TL14",
    "question": "Bạn An có một tấm kính thủy tinh hình vuông, cạnh bằng $4$ dm, An muốn cắt ở bốn góc bốn tứ giác (được tô đậm như trong hình), sau đó gập lại để tạo thành một cái bể cá có dạng hình chóp cụt đều với đáy là hình vuông $A B C D$ có cạnh bằng $1$ dm và miệng bể là một hình vuông có cạnh bằng $x$ dm.   <br><div style=\"display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;margin:8px auto;\"><img src=\"data/12/2D1/im2D1/2D15_tikz_064.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"><img src=\"data/12/2D1/im2D1/2D15_tikz_065.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"></div>  Hỏi $x$ bằng bao nhiêu đềcimet thì bể cá có thể tích lớn nhất? (kết quả làm tròn đến hàng phần trăm).",
    "answer": "3,18",
    "explain": "Giả sử tấm kính thủy tinh hình vuông có cạnh là $\\ell$.<br>  Khi đó chiều cao mặt bên của hình chóp cụt đều là $H K=\\dfrac{1}{2}(\\ell-1)$.<br>  Suy ra chiều cao của của hình chóp cụt đều là $O O^{\\prime}=H I=\\left(\\dfrac{l-1}{2}\\right)^2-\\left(\\dfrac{x-1}{2}\\right)^2=\\dfrac{1}{2} \\sqrt{(\\ell-1)^2-(x-1)^2}$.<br>  Vậy thể tích của hình chóp cụt đều là $V=\\dfrac{1}{6} \\sqrt{(\\ell-1)^2-(x-1)^2} \\cdot\\left(1+x+x^2\\right)$.<br>  Với $\\ell=4$ ta có  $V=\\dfrac{1}{6} \\sqrt{(4-1)^2-(x-1)^2} \\cdot\\left(1+x+x^2\\right)=\\dfrac{1}{6} \\sqrt{-x^2+2 x+8} \\cdot\\left(1+x+x^2\\right)$ $(1&lt;x&lt;4)$.<br>  Khảo sát hàm số $V(x)$ trên $\\left(1;4\\right)$ ta được $V_{\\max}\\approx 4{,}91 \\Leftrightarrow x=3{,}18$ dm."
  },
  {
    "id": "2D158TL15",
    "question": "Một con cá hồi bơi ngược dòng nước để vượt một khoảng cách là $300$ km. Vận tốc dòng nước là $6$ (km/h). Nếu vận tốc bơi của cá khi nước đứng yên là $v$ (km/h) thì năng lượng tiêu hao của cá trong $t$ giờ được cho bởi công thức $E(v)=cv^{3}t$ (trong đó $c$ là hằng số dương, $E$ được tính bằng đơn vị Jun). Cá bơi ngược dòng quãng đường $300$ km trên trong khoảng thời gian $t$ với vận tốc bằng bao nhiêu để năng lượng tiêu hao là thấp nhất?",
    "answer": "3",
    "explain": "Vận tốc của cá khi bơi ngược dòng nước là $v-6$ (km/h).<br>  Thời gian để cá vượt qua quãng đường $300$ km là $t=\\dfrac{300}{v-6}$ (giờ).<br>  Năng lượng tiêu hao của cá để vượt qua quãng đường đó là $E(v)=cv^3 \\cdot \\dfrac{300}{v-6}$ (J) với $v&gt;6$.<br>  Ta có  $E'(v)=600 c \\cdot \\frac{v^2(v-9)}{(v-6)^2}$<br>$\\Rightarrow E'(v)=0   \\Leftrightarrow v=9\\in \\left(6;+\\infty \\right) \\text{ hoặc } v=6\\notin\\left(6;+\\infty\\right)$<br>$\\Rightarrow E(9)=72900c.$  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_072.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta có  $E_{\\min}=72900c \\text { khi } v=9(km/h).$  Vậy để ít tiêu hao năng lượng nhất, cá phải bơi với vận tốc là $v=9$ (km/h).<br>  Vận tốc khi bơi ngược dòng nước là $v-6=9-6=3$ (km/h)."
  },
  {
    "id": "2D151TL16",
    "question": "Cho hàm số $y=\\dfrac{ax+3}{x+b}$ ($a,~ b \\in \\mathbb{R}$) có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_094.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị của $y(1)$ bằng bao nhiêu (làm tròn kết quả đến hàng phần chục)?",
    "answer": "2,5",
    "explain": "Dựa vào bảng biến thiên đã cho ta suy ra $a=2$, $b=1$.<br>  Khi đó $y=\\dfrac{2x+3}{x+1}$ nên $y(1)=2{,}5$."
  },
  {
    "id": "2D151TL17",
    "question": "Một hàng rào cao $2{,}4$ mét được đặt song song và cách bước tường của ngôi nhà một khoảng bằng $1{,}5$ mét. Chiều dài ngắn nhất của cây thang để nó đứng dưới đất vươn qua hàng rào tựa vào ngôi nhà (xem hình vẽ) là bao nhiêu mét (làm tròn kết quả đến hàng phần chục)?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_105.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "5,5",
    "explain": "<br><img src=\"data/12/2D1/im2D1/2D15_tikz_106.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Minh hoạ bài toán bằng hình trên, với $B$ là vị trí đặt thang trên mặt đất, khoảng cách từ nhà đến hàng rào có độ dài là đoạn $AK=1{,}5$ m và hàng rào có độ cao $HK=2{,}4$ m.<br>  Đặt $x$ (m) là độ dài đoạn $KB$. Do $HK \\parallel AC$ (cùng vuông góc $AB$) nên $\\dfrac{HK}{AC}=\\dfrac{KB}{AB}$.<br>  Do đó $AC = AB \\cdot \\dfrac{HK}{KB} = (x+1{,}5) \\cdot \\dfrac{2{,}4}{x} = 2{,}4 + \\dfrac{3{,}6}{x}$.<br>  Xét tam giác $ABC$ vuông tại $A$. Ta có  \\[BC = \\sqrt{AC^2 + AB^2} = \\sqrt{\\left(2{,}4+\\dfrac{3{,}6}{x}\\right)^2 + (x+1{,}5)^2} = \\sqrt{x^2 + 3x + \\dfrac{17{,}28}{x} + \\dfrac{12{,}96}{x^2} + 8{,}01}.\\]  Xét hàm số $f(x)=\\sqrt{x^2 + 3x + \\dfrac{17{,}28}{x} + \\dfrac{12{,}96}{x^2} + 8{,}01}$ trên khoảng $(0;+\\infty)$.<br>  Ta có $f'(x)=\\dfrac{2x+3-\\dfrac{17{,}28}{x^2} - \\dfrac{25{,}92}{x^3}}{2\\sqrt{x^2 + 3x + \\dfrac{17{,}28}{x} + \\dfrac{12{,}96}{x^2} + 8{,}01}}$.<br>  Suy ra \\[f'(x)=0 \\Leftrightarrow 2x+3-\\dfrac{17{,}28}{x^2} - \\dfrac{25{,}92}{x^3} = 0 \\Leftrightarrow 2x^4+3x^3-17{,}78x-25,92=0 \\Leftrightarrow x \\approx 2{,}063.\\]  Do đó $\\max f(x) \\approx f(2{,}063) \\approx 5{,}5$.<br>  Vậy chiều dài thang ngắn nhất thoả yêu cầu đề bài gần bằng $5{,}5$ mét."
  },
  {
    "id": "2D151TL18",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax+1}{cx+d}$, ($a$, $c$, $d \\in \\mathbb{R}$) có đồ thị như hình vẽ dưới đây. Tìm giá trị của $f(9)$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_110.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1,9",
    "explain": "Đồ thị hàm số có tiệm cận đứng $x=-1$ nên $-\\dfrac{d}{c}=-1\\Rightarrow d=c$.<br>  Đồ thị hàm số có tiệm cận ngang $y=2$ nên $\\dfrac{a}{c}=2 \\Rightarrow a=2c$.<br>  Với $d=c$ và $a=2c$, ta có $y=f(x)=\\dfrac{2cx+1}{cx+c}$.<br>  Đồ thị hàm đi qua điểm $(0;1)$ nên $1=\\dfrac{2c\\cdot 0+1}{c\\cdot0+c} \\Rightarrow c=1$.<br>  Với $c=1$, ta có $a=2$ và $d=1$. Suy ra $y=f(x)=\\dfrac{2x+1}{x+1}$.<br>  Khi đó $f(9)=1{,}9$."
  },
  {
    "id": "2D151TL19",
    "question": "Cho hàm số $y=\\dfrac{ax+2}{cx+b}$ có đồ thị như hình vẽ ($a$, $b$, $c$ là các hằng số thực). Tính giá trị của biểu thức $S=a+b+c$.",
    "answer": "0",
    "explain": "Đồ thị có đường tiệm cận đứng là $x=2$ suy ra $-\\dfrac{b}{c}=2\\Leftrightarrow b=-2c$. Đồ thị có đường tiệm cận ngang là $y=1$ suy ra $\\dfrac{a}{c}=1\\Leftrightarrow a=c$.<br>  Khi đó $y=\\dfrac{cx+2}{cx-2c}$. Đồ thị của hàm số đi qua điểm $\\left(-2;0\\right)$ nên ta có $c=1$. Từ đó ta được $a=1;b=-2;c=1$ suy ra $S=a+b+c=0$."
  },
  {
    "id": "2D158TL20",
    "question": "Một vận động viên tham gia cuộc thi chạy bộ. Quãng đường vận động viên đó chạy được biểu diễn bằng hàm số $s(t) = at^3 + bt^2 + ct + d$ có đồ thị như hình trên. Khi đó, vận tốc tối đa của vận động viên đó đạt được trong quá trình chạy bộ là bao nhiêu km/h?<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS12_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "9",
    "explain": "Ta có $v(t)=s'(t)=3at^2+2bt+c$.<br>  Dựa vào đồ thị, ta có hệ phương trình  $s(0)=0 \\text{ và } s(2)=12 \\text{ và } s(4)=24 \\text{ và } s'(4)=0 \\Leftrightarrow d=0 \\text{ và } 8a+4b+2c+d=12 \\text{ và } 64a+16b+4c+d=24 \\text{ và } 48a+8b+c=0 \\Leftrightarrow a=-\\dfrac{3}{4} \\text{ và } b=\\dfrac{9}{2} \\text{ và } c=0 \\text{ và } d=0.$  $ \\Rightarrow s(t)=-\\dfrac{3}{4}t^3+\\dfrac{9}{2}t^2$.<br>  Vậy $v(t)=-\\dfrac{9}{4}t^2+9t$. Ta có $v'(t)=-\\dfrac{9}{2}t+9$.<br>  Xét $v'(t)=0 \\Leftrightarrow t=2$.<br>  Ta có bảng biến thiên của $v(t)$  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS12_016.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy vận tốc tối đa của học sinh đó đạt được trong quá trình đi bộ là $9$ km/h."
  },
  {
    "id": "2D151TL21",
    "question": "Cho hàm số $y=ax+2+\\dfrac{b}{x+c}$ có đồ thị như hình vẽ ($a$, $b$, $c$ là các hằng số thực). Tính $P=a+b+c.$<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS2_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "-3",
    "explain": "Đồ thị hàm số $y=ax+2+\\dfrac{b}{x+c}$ có đường tiệm cận xiên là $y=ax+2$, mà như hình vẽ đường tiệm cận xiên đi qua điểm $\\left(2;0\\right)$ nên $a=-1$.  Đồ thị của hàm số có đường tiệm cận đứng là $x=1$ nên $1+c=0$ hay $c=-1$.  Khi đó hàm số đã cho có dạng $y=-x+2+\\dfrac{b}{x-1}$. Mặt khác đồ thị hàm số đi qua điểm $\\left(0;3\\right)$ nên $-0+2+\\dfrac{b}{0-1}=3$ hay $b=-1$.  Vậy $P=a+b+c=-3.$"
  },
  {
    "id": "2D158TL22",
    "question": "Một doanh nghiệp kinh doanh sản xuất đồng hồ có đồ thị hàm tổng chi phí theo số sản phẩm là một phần đồ thị của hàm số bậc hai trên bậc nhất $f(x)=\\dfrac{ax^2+bx+c}{x+e}$ như hình vẽ (mỗi đơn vị trên trục hoành tương ứng $100$ sản phẩm và mỗi đơn vị trên trục tung tương ứng $1\\,000$ USD). Biết rằng tâm đối xứng của đồ thị hàm số $f(x)$ là $A\\left(-1;\\dfrac{2}{3}\\right)$ và đường tiệm cận xiên của đồ thị hàm số đi qua điểm $B(3;2)$.   Theo khảo sát, tổng doanh thu của doanh nghiệp này được mô tả bởi hàm số $R(x)=x^2+2x$ và lợi nhuận thu về khi bán $200$ sản phẩm bằng $5\\,250$ USD. Khi chi phí theo số sản phẩm đạt giá trị nhỏ nhất thì số sản phẩm sản xuất được là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị)<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS4_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "121",
    "explain": "Dễ dàng suy ra được $e=1$ và đồ thị có đường tiệm cận đứng là $x=-1$.<br>   Gọi đường tiệm cận xiên của đồ thị hàm số $f(x)$ là $y=ax+b$.<br>   Theo giả thiết ta có $-a+b=\\dfrac{2}{3} \\text{ và } 3a+b=2\\Leftrightarrow a=\\dfrac{1}{3} \\text{ và } b=1$ nên đường tiệm cận xiên là $y=\\dfrac{1}{3}x+1$.<br>   Hàm số $f(x)=\\dfrac{ax^2+bx+c}{x+e}$ được viết lại dưới dạng $f(x)=\\dfrac{1}{3}x+1+\\dfrac{d}{x+1}$.<br>   Lợi nhuận $=$ Doanh thu $-$ Chi phí $\\Leftrightarrow P(x)=R(x)-f(x)\\Leftrightarrow x^2+2x-\\dfrac{1}{3}x-1-\\dfrac{d}{x+1}$.<br>   Theo giả thiết lợi nhuận thu về khi bán $200$ sản phẩm bằng $5\\,250$ USD.<br>   Khi đó $P(2)=5{,}25\\Leftrightarrow \\dfrac{19}{3}-{d}{3}=5{,}25\\Leftrightarrow d=\\dfrac{13}{4}=3{,}25$.<br>   Vậy $f(x)=\\dfrac{1}{3}x+1+\\dfrac{3{,}25}{x+1}$ có đạo hàm $f'(x)=\\dfrac{1}{3}-\\dfrac{3{,}25}{(x+1)^2}=0\\Leftrightarrow x=\\dfrac{-\\sqrt{39}}{2}-1\\quad (\\text{loại}) \\text{ hoặc } x=\\dfrac{\\sqrt{39}}{2}-1\\quad (\\text{nhận})$.<br>   Bảng biến thiên  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS4_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy số sản phẩm khi chi phí đạt giá trị nhỏ nhất là $\\left(\\dfrac{\\sqrt{39}}{2}-1\\right)\\cdot 100 \\approx 121$ sản phẩm."
  },
  {
    "id": "2D151TL23",
    "question": "Cho hàm số $y=\\dfrac{ax-b}{x+c}$ với $a$, $b$, $c \\in\\mathbb{Z},\\,\\,ac+b\\ne 0$ và có đồ thị như hình bên. Giá trị của $a+b-c$ bằng bao nhiêu?<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS9_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "4",
    "explain": "Theo đề bài ta có<br>  Tiệm cận ngang $y=a=1$, tiệm cận đứng $x=-c=2\\Rightarrow c=-2$.<br>  Giao điểm của đồ thị với trục $Ox$ là $\\left(1;0\\right)$ nên $\\dfrac{b}{a}=1\\Rightarrow b=1$.<br>  Vậy $a+b-c=1+1-(-2)=4$."
  },
  {
    "id": "2D151TL1",
    "question": "Chú kiến bị lạc tổ, chú đang loay hoay để tìm tổ. Chú đi theo suy đoán và đặt hệ trục tọa độ $Oxy$ thì đường đi của chú có quỹ đạo là một phần đường cong đồ thị hàm số có công thức $y=f(x)=a(x-b)^2$ (với $a$, $b$ là các số thực dương).<br>  Hàm số $y=f(x)$ có tính chất: Với số thực $k$ gọi hàm số $g(k)=\\max\\limits_{[k;k+2]} f(x)-\\min\\limits_{[k;k+2]} f(x)$. Hàm số $g(k)$ thỏa mãn $g(3)=a \\text{ và } g(2)+g(6)=32.$  Biết tổ của chú nằm ngay tại gốc tọa độ $O$. Thời điểm $9$ h sáng chú đang ở vị trí $A$ như hình vẽ.  Khoảng cách giữa chú kiến và tổ của mình là bao nhiêu (kết quả làm tròn đến hàng phần chục)?<br><img src=\"data/12/2D1/im2D15/loc8_TT_KSCL_Cum_lien_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "19,3",
    "explain": "Ta có $g(3)=\\max\\limits_{[3;5]} f(x)-\\min\\limits_{[3;5]} f(x)=a \\left[ \\max\\limits_{[3;5]} (x-b)^2-\\min\\limits_{[3;5]} (x-b)^2 \\right]$.<br>  Theo giả thiết $g(3)=a \\Leftrightarrow \\max\\limits_{[3;5]} (x-b)^2-\\min\\limits_{[3;5]} (x-b)^2=1$.<br>  +) Nếu $b \\le 3$ thì hàm số $(x-b)^2$ đồng biến trên $[3;5]$, khi đó  $(5-b)^2-(3-b)^2=1 \\Leftrightarrow -4b+16=1 \\Leftrightarrow b=\\dfrac{15}{4} \\text{ (loại vì } b gt; 3).$  +) Nếu $b \\ge 5$ thì hàm số $(x-b)^2$ nghịch biến trên $[3;5]$, khi đó  $(3-b)^2-(5-b)^2=1 \\Leftrightarrow 4b-16=1 \\Leftrightarrow b=\\dfrac{17}{4} \\text{ (loại vì } b lt; 5).$  +) Nếu $3 &lt; b &lt; 5$ thì $\\min\\limits_{[3;5]} (x-b)^2=0$ tại $x=b$. Khi đó  $\\max \\{(3-b)^2; (5-b)^2\\}=1 \\Leftrightarrow (3-b)^2=1 \\text{ hoặc } (5-b)^2=1 \\Leftrightarrow b=2 \\text{ (loại)} \\text{ hoặc } b=4 \\text{ (nhận)} \\text{ hoặc } b=6 \\text{ (loại).}$  Vậy $b=4$.<br>  Lại có  <br>- $g(2)=a \\left[ \\max\\limits_{[2;4]} (x-4)^2-\\min\\limits_{[2;4]} (x-4)^2 \\right]=a \\left[ (2-4)^2-0 \\right]=4a$.<br>- $g(6)=a \\left[ \\max\\limits_{[6;8]} (x-4)^2-\\min\\limits_{[6;8]} (x-4)^2 \\right]=a \\left[ (8-4)^2-(6-4)^2 \\right]=12a$.  Từ giả thiết $g(2)+g(6)=32 \\Leftrightarrow 4a+12a=32 \\Leftrightarrow 16a=32 \\Leftrightarrow a=2$.<br>  Do đó $f(x)=2(x-4)^2$. <br>  Tại vị trí $A$ có hoành độ $x=7$, suy ra tung độ $y_A=f(7)=2(7-4)^2=18 \\Rightarrow A(7; 18)$.<br>  Khoảng cách giữa chú kiến và tổ (gốc $O$) là  $OA=\\sqrt{7^2+18^2}=\\sqrt{373} \\approx 19{,}3.$"
  },
  {
    "id": "2D156TL2",
    "question": "Cho hàm số $y=\\dfrac{2x-1}{x+1}$ có đồ thị $(C)$ và $I$ là giao điểm của hai đường tiệm cận. Giả sử $M(x_0;y_0)$ là điểm trên đồ thị $(C)$ có hoành độ dương sao cho tiếp tuyến tại $M$ với $(C)$ cắt tiệm cận đứng và tiệm cận ngang lần lượt tại hai điểm $A$, $B$ thỏa mãn $IA^2+IB^2=40$. Tính giá trị của biểu thức $P=x_0^2+y_0^2+x_0y_0$ ?",
    "answer": "7",
    "explain": "Đồ thị $(C)\\colon y=\\dfrac{2x-1}{x+1}$ có tiệm cận đứng $x=-1$ và tiệm cận ngang $y=2$ nên $I(-1;2)$.<br>  Vì $M\\in (C)$ nên $M\\left(x_0;\\dfrac{2x_0-1}{x_0+1} \\right)$, $(x_0&gt;0)$<br>  Phương trình tiếp tuyến với $(C)$ tại $M$ là $y=\\dfrac{3}{(x_0+1)^2}(x-x_0)+\\dfrac{2x_0-1}{x_0+1}$.<br>  $\\Rightarrow A\\left(-1;\\dfrac{2x_0-4}{x_0+1} \\right),B(2x_0+1;2)$.<br>  Ta có $IA=\\left| \\dfrac{6}{x_0+1} \\right|$ và $IB=2|x_0+1|$.<br>  Khi đó   $IA^2+IB^2=40 \\Leftrightarrow \\dfrac{36}{(x_0+1)^2}+4(x_0+1)^2=40,\\, x_0 gt;0$<br>$\\Leftrightarrow (x_0+1)^4-10(x_0+1)^2+9=0$<br>$\\Leftrightarrow (x_0+1)^2=1 \\text{ hoặc } (x_0+1)^2=9$<br>$\\Leftrightarrow x_0=0 \\text{ (loại)} \\text{ hoặc } x_0=-2 \\text{ (loại)} \\text{ hoặc } x_0=2 \\text{ (nhận)} \\text{ hoặc } x_0=-4 \\text{ (loại)}$<br>$\\Leftrightarrow x_0=2\\Rightarrow y_0=1.$  Suy ra $M(2;1)$ và giá trị của biểu thức $P=x_0^2+y_0^2+x_0y_0=7$."
  },
  {
    "id": "2D151TL24",
    "question": "Hai thành phố $A$ và $B$ cách nhau một con sông. Người ta xây dựng một cây cầu $EF$ bắc qua sông biết rằng thành phố $A$ cách con sông một khoảng $4 \\text{ km}$ và thành phố $B$ cách con sông một khoảng $6 \\text{ km}$ (được mô hình hóa như hình vẽ), biết $HE+KF=20 \\text{ km}$ và độ dài $EF$ không đổi. Hỏi độ dài $EH$ bằng bao nhiêu kilomet để đường đi từ thành phố $A$ đến thành phố $B$ là ngắn nhất (đi theo đường $AEFB$)?",
    "answer": "8",
    "explain": "<br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_Lien_cap_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đặt $HE = x$, $FK = y$ với $x$, $y&gt;0$.<br>   Ta có   <br>- $HE+KF=20 \\Rightarrow x+y=20$.<br>- $AE = \\sqrt{16+x^2}$.<br>- $BF = \\sqrt{36+y^2} = \\sqrt{36+(20-x)^2}$  Vì $EF$ không đổi nên $AB$ ngắn nhất khi $AE+BF$ nhỏ nhất.<br>  Ta có $AE+BF = \\sqrt{16+x^2} + \\sqrt{36+(20-x)^2} = \\sqrt{16+x^2} + \\sqrt{x^2-40x+436}$.<br>  Đặt $f(x)=\\sqrt{16+x^2} + \\sqrt{x^2-40x+436}$.<br>  Ta có $f'(x) = \\dfrac{x}{\\sqrt{x^2+16}}-\\dfrac{x-20}{\\sqrt{x^2-40x+436}} = 0 \\Rightarrow x=8,\\ \\forall x \\in (0;20)$.  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_Lien_cap_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy để đường đi từ $A$ đến $B$ nhỏ nhất thì $HE=x=8$ (km)."
  },
  {
    "id": "2D156TL4",
    "question": "Cho hàm số $y = \\dfrac{6x - 4}{3x + 1}$ có đồ thị $(C)$ và $I$ là giao điểm của hai đường tiệm cận. Gọi $M$ là giao điểm của đồ thị $(C)$ và trục tung. Tiếp tuyến của $(C)$ tại $M$ cắt các đường tiệm cận tại hai điểm $A$ và $B$. Tính diện tích tam giác $IAB$.",
    "answer": "4",
    "explain": "Tọa độ giao điểm $M$ của $(C)$ với trục tung là $M(0; -4)$.<br>  Ta có $y = \\dfrac{6x - 4}{3x + 1} \\Rightarrow y' = \\dfrac{18}{(3x + 1)^2}$.<br>  Hệ số góc của tiếp tuyến tại $M(0; -4)$ là $k = y'(0) = 18$.<br>  Phương trình tiếp tuyến $\\Delta$ của $(C)$ tại $M$ có dạng  $y - y_M = k(x - x_M) \\Rightarrow \\Delta\\colon y = 18x - 4.$  Tiệm cận đứng của đồ thị hàm số là đường thẳng $x = -\\dfrac{1}{3}$.<br>  Tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 2$.<br>  Giao điểm $I$ của hai tiệm cận là $I\\left( -\\dfrac{1}{3}; 2 \\right)$.<br>  Giao điểm $A$ của tiếp tuyến $\\Delta$ và tiệm cận đứng là $A\\left( -\\dfrac{1}{3}; -10 \\right)$.<br>  Giao điểm $B$ của tiếp tuyến $\\Delta$ và tiệm cận ngang là $B\\left( \\dfrac{1}{3}; 2 \\right)$.<br>  Tam giác $IAB$ là tam giác vuông tại $I$ nên $S_{\\triangle IAB} = \\dfrac{1}{2} \\cdot IA \\cdot IB$.<br>  Ta có $IA = \\left|y_A - y_I\\right| = \\left|-10 - 2\\right| = 12$.<br>  Lại có $IB = \\left|x_B - x_I\\right| = \\left| \\dfrac{1}{3} - \\left( -\\dfrac{1}{3} \\right) \\right| = \\dfrac{2}{3}$.<br>  Suy ra diện tích tam giác $IAB$ là $S_{\\triangle IAB} = \\dfrac{1}{2} \\cdot 12 \\cdot \\dfrac{2}{3} = 4$ (đvdt)."
  }
];
