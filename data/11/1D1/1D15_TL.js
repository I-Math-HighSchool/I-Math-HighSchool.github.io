// =========================================================================
// Lớp 11 - Chương 1 - §5. Phương trình lượng giác cơ bản - TL
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop11/1D15-PhuongTrinhLuongGiacCoBan.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.traLoiNgan1D15 = [
  {
    "id": "1D156TL1",
    "question": "Vận tốc của một con lắc đơn $v$\\,(cm/s) được cho bởi công thức $v(t)=2\\sin\\left(2t+\\dfrac{\\pi}{6}\\right)$. Lần đầu tiên vận tốc của con lắc đơn bằng $2$\\,(cm/s) là tại thời điểm $t=\\dfrac{\\pi}{a}$\\,(s). Hãy tìm $a$.",
    "answer": "6",
    "explain": "Ta có $2\\sin\\left(2t+\\dfrac{\\pi}{6}\\right) = 2\\Leftrightarrow \\sin\\left(2t+\\dfrac{\\pi}{6}\\right) = 1\\Leftrightarrow 2t+\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}+k2\\pi\\Leftrightarrow t=\\dfrac{\\pi}{6}+k\\dfrac{2\\pi}{3}$, $k\\in\\mathbb{Z}$.<br>  Lần đầu tiên vận tốc của con lắc đơn bằng $2$cm/s, ta cần tìm giá trị nhỏ nhất của $t$ lớn hơn $0$. Điều này xảy ra khi $k=0$ hay $t=\\dfrac{\\pi}{6}$.<br>  Vậy $a=6$."
  },
  {
    "id": "1D155TL2",
    "question": "Tổng các nghiệm của phương trình $\\sin x - \\cos 2x = 0$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ có dạng $-\\dfrac{a\\pi}{b}$ với $a, b \\in \\mathbb{Z}^+$ và $\\dfrac{a}{b}$ là phân số tối giản. Giá trị của biểu thức $a + b$ bằng",
    "answer": "4",
    "explain": "Ta có  $\\sin x - \\cos 2x = 0$<br>$\\Leftrightarrow \\sin x= \\cos 2x$<br>$\\Leftrightarrow \\sin x = \\sin\\left(\\dfrac{\\pi}{2}-2x\\right)$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{2}-2x+k2\\pi \\text{ hoặc } x=\\dfrac{\\pi}{2}+2x+k2\\pi$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{6}+k\\dfrac{2\\pi}{3} \\text{ hoặc } x=-\\dfrac{\\pi}{2}-k2\\pi.$  <br>- Với $x=\\dfrac{\\pi}{6}+k\\dfrac{2\\pi}{3}$.<br>  Vì $-\\dfrac{\\pi}{2}\\leq x \\leq \\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{\\pi}{2}\\leq \\dfrac{\\pi}{6}+k\\dfrac{2\\pi}{3} \\leq \\dfrac{\\pi}{2}\\Leftrightarrow -1\\leq k\\leq \\dfrac{1}{2}$.<br>  Vì $k\\in\\mathbb{Z}$ nên $k\\in\\{-1;0\\}$. Vậy $x=-\\dfrac{\\pi}{2}$, $x=\\dfrac{\\pi}{6}$.<br>- Với $x=-\\dfrac{\\pi}{2}-k2\\pi$.<br>  Vì $-\\dfrac{\\pi}{2}\\leq x \\leq \\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{\\pi}{2}\\leq -\\dfrac{\\pi}{2}-k2\\pi \\leq \\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{1}{2}\\leq k\\leq 0$.<br>  Vì $k\\in\\mathbb{Z}$ nên $k=0$. Vậy $x=-\\dfrac{\\pi}{2}$.  Vậy phương trình đã cho có hai nghiệm trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $x=-\\dfrac{\\pi}{2}$, $x=\\dfrac{\\pi}{6}$.<br>  Tổng các nghiệm $\\dfrac{\\pi}{6}+\\left(-\\dfrac{\\pi}{2}\\right)=-\\dfrac{\\pi}{3} \\Rightarrow a=1 \\text{ và } b=3\\Rightarrow a+b=4$."
  },
  {
    "id": "1D155TL3",
    "question": "Một quả bóng được ném xiên một góc $\\alpha\\left(0^{\\circ} &lt; \\alpha &lt; 90^{\\circ}\\right)$ từ mặt đất với tốc độ $v_0$ (m/s). Khoảng cách theo phương ngang từ vị trí ban đầu của quả bóng đến vị trí bóng chạm đất được tính theo công thức $d=\\dfrac{v_0^2\\sin 2\\alpha}{10}$. Nếu tốc độ ban đầu của quả bóng là $10$ m/s thì tồn tại hai góc ném $\\alpha_1$, $\\alpha_2$ $\\left(\\alpha_1 &gt; \\alpha_2\\right)$ để khoảng cách $d$ là $5$ m. Hiệu số đo hai góc ném $\\alpha_1-\\alpha_2$ bằng bao nhiêu độ?",
    "answer": "60",
    "explain": "Theo giả thuyết bài toán ta có   $\\dfrac{10^2\\cdot \\sin 2\\alpha}{10}=5\\Leftrightarrow\\sin 2\\alpha=\\dfrac{1}{2}\\Leftrightarrow2\\alpha =30^\\circ + k360^\\circ \\text{ và } 2\\alpha=150^\\circ+k360^\\circ\\Leftrightarrow\\alpha =15^\\circ + k180^\\circ \\text{ và } \\alpha=75^\\circ+k180^\\circ\\,(k\\in\\mathbb{Z}).$  Vì $0^{\\circ} &lt; \\alpha &lt; 90^{\\circ}$ và $\\alpha_1 &gt; \\alpha_2$ nên $\\alpha_1=75^\\circ$, $\\alpha_2=15^\\circ$.<br>  Suy ra $\\alpha_1-\\alpha_2=75^\\circ-15^\\circ=60^\\circ$."
  },
  {
    "id": "1D152TL4",
    "question": "Cho phương trình $\\cos3x=2m^2-3m+1\\quad (**)$. Có bao nhiêu giá trị nguyên của $m$ để phương trình $(**)$ có nghiệm?",
    "answer": "2",
    "explain": "Phương trình $\\cos3x=2m^2-3m+1$ có nghiệm khi và chỉ khi $-1\\le 2m^2-3m+1 \\le 1$.<br>  Ta xét hai bất phương trình  <br>- $2m^2-3m+1 \\ge -1 \\Leftrightarrow 2m^2-3m+2 \\ge 0$ luôn đúng với mọi $m$;<br>- $2m^2-3m+1 \\le 1 \\Leftrightarrow 2m^2-3m \\le 0 \\Leftrightarrow m(2m-3) \\le 0 \\Leftrightarrow 0 \\le m \\le \\dfrac{3}{2}$.  Vì $m$ nguyên nên $m\\in\\{0;1\\}$.<br>  Vậy có $2$ giá trị nguyên của $m$ để phương trình có nghiệm."
  },
  {
    "id": "1D153TL5",
    "question": "Thời gian tập thể dục của ông A vào ngày thứ $x$ trong một tháng được tính bằng công thức $t(x)=\\left|\\tan \\left(\\dfrac{\\pi}{3} x\\right)\\right|$ giờ. Hỏi trong một tháng $30$ ngày) có bao nhiêu ngày ông A không tập thể dục?",
    "answer": "10",
    "explain": "Để xác định số ngày ông A không tập thể dục, tức là tìm số ngày mà $t(x) = 0$, ta giải phương trình:  $t(x)= 0$<br>$\\Leftrightarrow \\left|\\tan \\left(\\dfrac{\\pi}{3} x\\right)\\right| =0$<br>$\\Leftrightarrow \\tan \\left(\\dfrac{\\pi}{3} x\\right)=0$<br>$\\Leftrightarrow \\dfrac{\\pi}{3}x=k\\pi$<br>$\\Leftrightarrow x=3k\\,\\left(k\\in\\mathbb{Z}\\right).$  Vì $x$ là số nguyên và $x\\in [1;30]$, nên  \\[  1 \\leq 3k \\leq 30 \\Rightarrow \\dfrac{1}{3} \\leq k \\leq 10  \\]  Vì $k$ là số nguyên, nên $k\\in\\left\\{1;2;\\ldots;9;10\\right\\}$.<br>  Vậy, có tất cả $10$ ngày trong tháng mà ông A không tập thể dục."
  },
  {
    "id": "1D155TL6",
    "question": "Phương trình $\\cos2x=\\cos x$ có bao nhiêu nghiệm thuộc khoảng $\\left(-2\\pi;\\dfrac{3\\pi}{2}\\right)$?",
    "answer": "5",
    "explain": "Ta có $\\cos2x=\\cos x\\Leftrightarrow 2x=x+k2\\pi \\text{ hoặc } 2x=-x+k2\\pi\\Leftrightarrow x=k2\\pi \\text{ hoặc } x=\\dfrac{k2\\pi}{3}, k\\in \\Bbb{Z}$.<br>  Vì $x\\in \\left(-2\\pi;\\dfrac{3\\pi}{2}\\right)$ nên $x\\in \\left\\{-\\dfrac{4\\pi}{3};-\\dfrac{2\\pi}{3};0;\\dfrac{2\\pi}{3};\\dfrac{4\\pi}{3}\\right\\}$.<br>  Vậy phương trình có $5$ nghiệm thuộc khoảng $\\left(-2\\pi;\\dfrac{3\\pi}{2}\\right)$."
  },
  {
    "id": "1D156TL7",
    "question": "Một chất điểm chuyển động đều theo chiều ngược chiều kim đồng hồ trên đường tròn bán kính $5$ cm. Khoảng cách $h$ (cm) từ chất điểm đến trục hoành được tính theo công thức $h = |y|$, trong đó $y = 5\\sin{\\dfrac{\\pi}{20}t}$ với $t$ là thời gian chuyển động của chất điểm tính bằng giây ($t\\geq0$) và chất điểm bắt đầu chuyển động từ vị trí $A$ (như hình sau). Hỏi chất điểm chuyển động một vòng hết bao nhiêu giây?  <br><img src=\"data/11/1D1/im1D15/1D15_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "40",
    "explain": "Xét $h = 0$ ta có   $5\\sin{\\dfrac{\\pi}{20}t}=0 \\Leftrightarrow \\sin{\\dfrac{\\pi}{20}t} = 0 \\Leftrightarrow \\dfrac{\\pi}{20}t = k\\pi \\Leftrightarrow t = 20k \\quad(k \\in \\mathbb{Z}, \\, k\\geq 0).$  Ta thấy, từ thời điểm ban đầu, cứ sau $20$ giây, khoảng cách từ chất điểm đến trục hoành lại bằng $0$. Suy ra sau mỗi $20$ giây, chất điểm chuyển động được nửa vòng.<br>  Vậy chất điểm chuyển động một vòng hết $40$ giây."
  },
  {
    "id": "1D153TL8",
    "question": "Một cái cổng vào một trung tâm thương mại có hình dạng là một phần của đồ thị hàm số $y=2\\cos \\left(\\dfrac{x}{2}\\right)+2$ (<em>tham khảo hình vẽ bên</em>). Gọi $A$, $B$ là hai điểm nằm trên cổng và $C$, $D$ là hai điểm nằm trên mặt nền của cổng sao cho $ABCD$ là hình chữ nhật. Người quản lí trung tâm thương mại muốn lắp một cái cửa kính tự động vào vị trí của hình chữ nhật $ABCD$. Tính diện tích của cái cửa kính cần lắp (<em>làm tròn kết quả đến hàng phần mười</em>), biết chiều cao của cửa kính là $AD=3$ mét.<br><img src=\"data/11/1D1/im1D15/1D15_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "12{,}6",
    "explain": "Do $AD=3$ m nên tung độ của hai điểm $A$, $B$ là $y_A=y_B=3$.<br>  Vì $A$, $B$ thuộc đồ thị hàm số $y=2\\cos\\left(\\dfrac{x}{2}\\right)+2$ nên ta có  $2\\cos\\left(\\dfrac{x}{2}\\right)+2=3$<br>$\\Leftrightarrow \\cos\\left(\\dfrac{x}{2}\\right)=\\dfrac{1}{2}$<br>$\\Leftrightarrow \\dfrac{x}{2}=\\pm \\dfrac{\\pi}{3}+k2\\pi$<br>$\\Leftrightarrow x=\\pm \\dfrac{2\\pi}{3}+k4\\pi \\text{ (với } k\\in \\mathbb{Z}).$  Giả sử $A\\left(-\\dfrac{2\\pi}{3}; 3\\right)$ và $B\\left(\\dfrac{2\\pi}{3}; 3\\right)$.<br>  Chiều rộng của cửa kính là $CD=AB=\\dfrac{4\\pi}{3}$ (m).<br>  Diện tích của cửa kính hình chữ nhật $ABCD$ là  $S_{ABCD}=AD\\cdot CD=3\\cdot \\dfrac{4\\pi}{3}=4\\pi \\approx 12{,}6 \\text{ (m}^2).$"
  },
  {
    "id": "1D153TL9",
    "question": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu $h$ (m) của mực nước trong kênh đó tính theo thời gian $t$ giờ được cho bởi công thức $h = 2\\cos\\left(\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3}\\right) + 12$ với ($0 \\leq t \\leq 24$). Độ sâu của mực nước trong con kênh đó đạt $14$ m lần đầu tiên trong ngày vào lúc mấy giờ?",
    "answer": "20",
    "explain": "Khi độ sau của mực nước là $14$ m, ta có  $h = 14$<br>$2\\cos\\left(\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3}\\right) + 12 = 14$<br>$\\cos\\left(\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3}\\right) = 1$<br>$\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3} = k2\\pi$<br>$t = -4+24k\\quad (k\\in\\mathbb{Z}).$  Ta có $0\\leq t \\leq 24$ nên $0\\leq -4+24k \\leq 24$, suy ra $\\dfrac{1}{6}\\leq t \\leq \\dfrac{7}{6}$.<br>  Do $t\\in\\mathbb{Z}$ nên $t=1$.<br>  Vậy độ sâu của mực nước trong con kênh đó đạt $14m$ lần đầu tiên trong ngày vào lúc $t=-4+24\\cdot1=20$ giờ."
  },
  {
    "id": "1D155TL10",
    "question": "Phương trình $\\sin 3x = \\cos 2x$ có bao nhiêu nghiệm trên $[0;\\pi]$?",
    "answer": "3",
    "explain": "Ta có  $\\sin 3x = \\cos 2x$<br>$\\Leftrightarrow \\sin 3x = \\sin\\left(\\dfrac{\\pi}{2}-2x\\right)$<br>$\\Leftrightarrow 3x=\\dfrac{\\pi}{2}-2x+k2\\pi \\text{ hoặc } 3x=\\pi-\\left(\\dfrac{\\pi}{2}-2x\\right)+k2\\pi$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{10}+\\dfrac{2k\\pi}{5} \\text{ hoặc } x=\\dfrac{\\pi}{2}+k2\\pi.$  Xét trên $[0;\\pi]$ chỉ có $3$ nghiệm  \\[  x\\in\\bigg\\{\\dfrac{\\pi}{10},\\ \\dfrac{\\pi}{2},\\ \\dfrac{9\\pi}{10}\\bigg\\}.  \\]  Vậy phương trình có $3$ nghiệm trên $[0;\\pi]$."
  },
  {
    "id": "1D156TL11",
    "question": "Một chiếc bánh xe nước có dạng hình tròn bán kính $3{,}5\\, \\text{m}$, trục của nó đặt cách mặt nước $3\\, \\text{m}$ (hình bên dưới). Khi bánh xe nước quay đều, khoảng cách $h$ (mét) tính từ một chiếc gầu gắn tại điểm $A$ trên bánh xe nước đến mặt nước là $h = \\left|y\\right|$, trong đó  $y = 3 + 3{,}5 \\sin\\left(2\\pi x - \\dfrac{\\pi}{2}\\right)$  với $x$ là thời gian quay của bánh xe nước ($x \\geq 0$), tính bằng phút; ta quy ước rằng $y &gt; 0$ khi gầu ở trên mặt nước và $y &lt; 0$ khi gầu ở dưới mặt nước. Hỏi chiếc gầu cách mặt nước $3\\, \\text{m}$ lần đầu tiên khi nào? (kết quả làm tròn đến chữ số thập phân thứ nhất sau dấu phẩy).",
    "answer": "0{,3}",
    "explain": "Giả thiết ta có $h=|y|=3$.  <br>- Trường hợp 1: $y=3$ suy ra $3 + 3{,}5 \\sin\\left(2\\pi x - \\dfrac{\\pi}{2}\\right)=3 $.<br>  Suy ra $ \\sin\\left(2\\pi x - \\dfrac{\\pi}{2}\\right)=0\\Rightarrow 2\\pi x - \\dfrac{\\pi}{2} = k\\pi\\Rightarrow x=\\dfrac{1}{4}+\\dfrac{k}{2}$ với $k \\in \\mathbb{Z}$.<br>  Lần đầu tiên nên $k=0$ suy ra $x=\\dfrac{1}{4}=0{,}25\\approx 0{,}3$ phút.<br>- Trường hợp 2: $y=-3$ suy ra $3 + 3{,}5 \\sin\\left(2\\pi x - \\dfrac{\\pi}{2}\\right)=-3 $.<br>  Suy ra $ \\sin\\left(2\\pi x - \\dfrac{\\pi}{2}\\right)=\\dfrac{-6}{3{,5}}&lt;-1$ nên phương trình vô nghiệm.<br>  Vậy chiếc gầu cách mặt nước $3\\, \\text{m}$ lần đầu tiên sau khoảng $0{,}3$ phút."
  },
  {
    "id": "1D156TL12",
    "question": "Giả sử một vật dao động điều hòa xung quanh vị trí cân bằng được cho bởi công thức $h(t)=2\\cos\\left(5t-\\dfrac{\\pi}{6}\\right)$. Ở đây, thời gian tính bằng giây và chiều cao $h(t)$ tính bằng cm. Hãy cho biết trong khoảng thời gian từ $0$ đên $9$ giây, vật đi qua vị trí cân bằng bao nhiêu lần?",
    "answer": "14",
    "explain": "Vật đi qua vị trí cân bằng khi  $h(t)=0\\Leftrightarrow\\cos\\left(5t-\\dfrac{\\pi}{6}\\right)=0\\Leftrightarrow5t-\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}+k\\pi\\Leftrightarrow t=\\dfrac{2\\pi}{15}+k\\dfrac{\\pi}{5}\\quad(k\\in\\mathbb{Z}).$  Do $0&lt;t&lt;9$ nên $0&lt;\\dfrac{2\\pi}{15}+k\\dfrac{\\pi}{5}&lt;9\\Leftrightarrow-\\dfrac{2}{3}&lt;k&lt;\\dfrac{45}{\\pi}-\\dfrac{2}{3}$.<br>  Do $k\\in\\mathbb{Z}$ nên $k\\in\\{0;1;\\ldots;13\\}$.<br>  Vậy vật đi qua vị trí cân bằng $14$ lần."
  },
  {
    "id": "1D153TL13",
    "question": "Số nghiệm của phương trình $\\cos 3 x=0$ trên nửa khoảng $\\left[\\dfrac{\\pi}{6}; \\dfrac{37 \\pi}{6}\\right)$ là bao nhiêu?",
    "answer": "18",
    "explain": "Ta có $\\cos 3 x=0 \\Leftrightarrow 3 x=\\dfrac{\\pi}{2}+k \\pi \\Leftrightarrow x=\\dfrac{\\pi}{6}+\\dfrac{k \\pi}{3}, k \\in \\mathbb{Z}$.<br>  Do $x \\in\\left[\\dfrac{\\pi}{6}; \\dfrac{37 \\pi}{6}\\right) \\Rightarrow \\dfrac{\\pi}{6} \\leq x&lt;\\dfrac{37 \\pi}{6} \\Leftrightarrow \\dfrac{\\pi}{6} \\leq \\dfrac{\\pi}{6}+\\dfrac{k \\pi}{3}&lt;\\dfrac{37 \\pi}{6} \\Leftrightarrow 0 \\leq k&lt;18$.<br>  Do $k \\in \\mathbb{Z}$ nên có $ 18 $ giá trị $ k $ thỏa mãn."
  },
  {
    "id": "1D153TL14",
    "question": "Trên đoạn $[0;2\\pi]$, gọi $S$ là tập hợp các giá trị của $x$ để đồ thị hàm số $y=\\sin x$ và $y=\\dfrac{1}{2}$ giao nhau. Tổng các phần tử của $S$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
    "answer": "3,14",
    "explain": "Xét phương trình $\\sin x=\\dfrac{1}{2}=\\sin \\dfrac{\\pi}{6}\\Leftrightarrow x=\\dfrac{\\pi}{6}+k2\\pi \\text{ hoặc } x=\\dfrac{5\\pi}{6}+k2\\pi,\\,k \\in \\mathbb{Z}$.<br>  Trên đoạn $[0;2\\pi]$, phương trình trên có đúng hai nghiệm là $x=\\dfrac{\\pi}{6}$, $x=\\dfrac{5\\pi}{6}$.<br>  Do đó $S=\\left\\{\\dfrac{\\pi}{6};\\dfrac{5\\pi}{6}\\right\\}$.<br>  Vậy tổng các phần tử của $S$ bằng $\\dfrac{\\pi}{6}+\\dfrac{5\\pi}{6}=\\pi\\approx 3{,}14$."
  },
  {
    "id": "1D153TL15",
    "question": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu $h$ (m) của mực nước trong kênh tính theo thời gian $t$ (giờ) trong một ngày ($0\\leq t &lt; 24$) cho bởi công thức $h=3\\cos \\left(\\dfrac{\\pi t}{6}+1\\right)+12$. Trong một ngày có bao nhiêu lần để độ sâu của mực nước là $10{,}5\\mathrm{~m}$.",
    "answer": "4",
    "explain": "Xét phương trình $3\\cos \\left(\\dfrac{\\pi t}{6}+1\\right)+12=10{,}5$. Ta có  $3\\cos \\left(\\dfrac{\\pi t}{6}+1\\right)+12=10{,}5$<br>$\\Leftrightarrow \\cos \\left(\\dfrac{\\pi t}{6}+1\\right)=\\dfrac{-1}{2}$<br>$\\Leftrightarrow \\cos \\left(\\dfrac{\\pi t}{6}+1\\right)=\\cos \\dfrac{2\\pi}{3}$<br>$\\Leftrightarrow \\dfrac{\\pi t}{6}+1=\\dfrac{2\\pi}{3}+k2\\pi \\text{ hoặc } \\dfrac{\\pi t}{6}+1=-\\dfrac{2\\pi}{3}+k2\\pi$<br>$\\Leftrightarrow \\dfrac{\\pi t}{6}=\\dfrac{2\\pi}{3}-1+k2\\pi \\text{ hoặc } \\dfrac{\\pi t}{6}=-\\dfrac{2\\pi}{3}-1+k2\\pi$<br>$\\Leftrightarrow t=4-\\dfrac{6}{\\pi}+12k \\text{ hoặc } t=-4-\\dfrac{6}{\\pi}+12k\\ \\left(k\\in\\mathbb{Z}\\right).$  Vì $0\\leq t&lt;24$ và $k\\in\\mathbb{Z}$ nên  <br>- $0\\leq 4-\\dfrac{6}{\\pi}+12k&lt;24\\Leftrightarrow -0{,}17\\leq k&lt;1{,}82\\Rightarrow k\\in\\{0;1\\}$.<br>- $0\\leq -4+\\dfrac{6}{\\pi}+12k&lt;24\\Leftrightarrow 0{,}49\\leq k&lt;2{,}49\\Rightarrow k\\in\\{1;2\\}$.  Vậy trong một ngày có $4$ lần để độ sâu của mực nước là $10{,}5\\mathrm{~m}$."
  },
  {
    "id": "1D153TL16",
    "question": "Huyết áp là áp lực cần thiết tác động lên thành của động mạch để đưa máu từ tim đến nuôi dưỡng các mô trong cơ thể. Huyết áp được tạo ra do lực co bóp của cơ tim và sức cản của thành động mạch. Mỗi lần tim đập, huyết áp của chúng ta tăng rồi giảm giữa các nhịp. Huyết áp tối đa và huyết áp tối thiểu gọi là huyết áp tâm thu và tâm trương. Giả sử huyết áp của một người đó được mô hình hoá bởi hàm số $P(t)=100+20 \\sin \\dfrac{8 \\pi t}{3}$, trong đó $P(t)$ là huyết áp tính theo đơn vị mmHg (milimét thủy ngân) và thời gian $t$ tính theo $s$ (giây). Hỏi trong khoảng từ $0$ đến $2$ giây, số lần huyết áp tâm thu đạt $120$ mmHg là bao nhiêu?",
    "answer": "3",
    "explain": "Ta có $P(t)=120\\Leftrightarrow \\sin\\dfrac{8\\pi t}{3}=1\\Leftrightarrow\\dfrac{8\\pi t}{3}=\\dfrac{\\pi}{2}+2k\\pi  \\Rightarrow t=\\dfrac{3}{16}+\\dfrac{3k}{4}\\ (k\\in\\mathbb{Z})$.<br>  Ta có $t\\in [0;2]\\Leftrightarrow 0\\le\\dfrac{3}{16}+\\dfrac{3k}{4}\\le2\\Leftrightarrow-\\dfrac{1}{4}\\le k\\le\\dfrac{29}{12}$.<br>  Vì $k\\in\\mathbb{Z}$ nên $k\\in\\{0,1,2\\}$, có $3$ giá trị.<br>  Vậy trong khoảng từ $0$ đến $2$ giây có $3$ lần huyết áp đạt $120$ mmHg."
  },
  {
    "id": "1D153TL17",
    "question": "Phương trình $\\cos x=\\dfrac{\\sqrt{3}}{2}$ có bao nhiêu nghiệm thuộc khoảng $(0;2\\pi)$?",
    "answer": "2",
    "explain": "Ta có $\\cos x = \\dfrac{\\sqrt{3}}{2} \\Leftrightarrow \\cos x =\\cos \\left( \\dfrac{\\pi}{6} \\right) \\Leftrightarrow x=\\dfrac{\\pi}{6}+k2\\pi \\text{ hoặc } x=-\\dfrac{\\pi}{6}+k2\\pi (k\\in \\mathbb{Z})$.<br>  Các nghiệm của phương trình trên khoảng $(0;2\\pi)$ là $\\dfrac{\\pi}{6}$ và $\\dfrac{11}{6}\\pi$.<br>  Vậy phương trình đã cho có $2$ nghiệm thuộc khoảng $(0;2\\pi)$."
  },
  {
    "id": "1D153TL18",
    "question": "Số giờ có ánh sáng mặt trời của một thành phố A ở vĩ độ $40^\\circ$ Bắc trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số có công thức  \\[d(t)=3\\sin \\left[\\dfrac{\\pi}{182} (t-80) \\right]+12,\\]  với $t \\in \\mathbb{Z}$ và $0&lt; t \\le 365$. Biết rằng vào một ngày của tháng $6$ dương lịch trong năm đó thì thành phố A có đúng $15$ giờ có ánh sáng mặt trời. Hỏi ngày đó là ngày mấy của tháng $6$?",
    "answer": "20",
    "explain": "Giả sử thành phố A có đúng $15$ giờ có ánh sáng mặt trời vào ngày thứ $\\mathrm{t}_0$.<br>  Ta có $d(t_0)=3 \\sin \\left[\\dfrac{\\pi}{182}\\left(t_0-80\\right)\\right]+12$.<br>  Mà $d(t_0)=15$ nên ta có  $3 \\sin \\left[\\dfrac{\\pi}{182}(t_0-80)\\right]+12=15$<br>$\\Leftrightarrow 3 \\sin \\left[\\dfrac{\\pi}{182}(t_0-80)\\right]=3$<br>$\\Leftrightarrow \\sin \\left[\\dfrac{\\pi}{182}(t_0-80)\\right]=1$<br>$\\Leftrightarrow \\dfrac{\\pi}{182}(t_0-80)=\\dfrac{\\pi}{2}+k2\\pi, k \\in \\mathbb{Z}$<br>$\\Leftrightarrow t_0-80=91+364k, k \\in \\mathbb{Z}$<br>$\\Leftrightarrow t_0=364k+171, k \\in \\mathbb{Z}.$   Mà $0 &lt; t_0 \\leq 365 \\Leftrightarrow -171 &lt; 364k \\leq 194\\Leftrightarrow -\\dfrac{171}{364} &lt; k \\leq \\dfrac{97}{182}$.<br>  Mà $k \\in \\mathbb{Z}$ nên $k=0$ do đó $t_0=171$.<br>  Vậy thành phố A có đúng $15$ giờ có ánh sáng mặt trời vào ngày thứ $171$ trong năm tức là vào ngày thứ $20$ của tháng $6$."
  },
  {
    "id": "1D153TL19",
    "question": "Giả sử số lượng $N$ của một loài hươu sau $t$ năm được xác định bởi công thức   $N = 30\\,000+20\\,000\\sin\\left(\\dfrac{\\pi t}{10}\\right)$ (con).  Xác định số năm để số lượng của loài hươu này bằng $50$ nghìn con lần đầu tiên theo công thức trên.",
    "answer": "5",
    "explain": "Theo đề bài, số lượng hươu bằng $50$ nghìn con, ta có  $50\\,000 = 30\\,000+20\\,000\\sin\\left(\\dfrac{\\pi t}{10}\\right)$<br>$\\Leftrightarrow 20\\,000 = 20\\,000\\sin\\left(\\dfrac{\\pi t}{10}\\right)$<br>$\\Leftrightarrow \\sin\\left(\\dfrac{\\pi t}{10}\\right) = 1$<br>$\\Leftrightarrow \\dfrac{\\pi t}{10} = \\dfrac{\\pi}{2} + k2\\pi\\quad (k \\in \\mathbb{Z})$<br>$\\Leftrightarrow t = 5 + 20k.$  Lần đầu tiên ứng với $k=0\\Rightarrow t=5$.<br>  Vậy sau $5$ năm thì số lượng hươu bằng $50$ nghìn con lần đầu tiên."
  },
  {
    "id": "1D153TL20",
    "question": "Số nghiệm của phương trình $\\cos x=0$ trên đoạn $[0;2\\pi]$ là bao nhiêu?",
    "answer": "2",
    "explain": "Ta có $\\cos x=0 \\Leftrightarrow x=\\dfrac{\\pi}{2}+k\\pi$. Trên $[0;2\\pi]$, $x=\\dfrac{\\pi}{2}$; $\\dfrac{3\\pi}{2}$.<br>  Vậy có $2$ nghiệm."
  },
  {
    "id": "1D155TL21",
    "question": "Tìm số nghiệm thuộc khoảng $(-50\\pi; 50\\pi)$ của phương trình $\\cos 3x + \\cos 2x=0$.",
    "answer": "250",
    "explain": "Phương trình đã cho tương đương  $\\cos 3x = -\\cos 2x$<br>$\\Leftrightarrow \\cos 3x=\\cos(\\pi+2x)$<br>$\\Leftrightarrow 3x=\\pi+2x+k2\\pi \\text{ hoặc } 3x=-\\pi-2x+k2\\pi \\ (k\\in \\mathbb{Z})$<br>$\\Leftrightarrow x=\\pi+k2\\pi \\text{ hoặc } x=-\\dfrac{\\pi}{5}+\\dfrac{k2\\pi}{5} \\ (k\\in \\mathbb{Z}).$  Ta có tập nghiệm $x=\\pi+k2\\pi$ bao gồm các giá trị của $x$ là số lẻ lần của $\\pi$.<br>  Với $x=-\\dfrac{\\pi}{5}+\\dfrac{k2\\pi}{5}=\\dfrac{(2k-1)\\pi}{5}$, nếu tử số $(2k-1)$ chia hết cho $5$ (ví dụ $k=3$ thì $x=\\pi$) thì sẽ chứa giá trị của nghiệm $x=\\pi+k2\\pi$.<br>  Do đó tập hợp các nghiệm của $x=-\\dfrac{\\pi}{5}+\\dfrac{k2\\pi}{5}$ chứa tập hợp các nghiệm của $x=\\pi+k2\\pi$.<br>  Xét $x\\in (-50\\pi; 50\\pi)$, ta có $-50\\pi&lt;-\\dfrac{\\pi}{5}+\\dfrac{k2\\pi}{5}&lt;50\\pi\\Leftrightarrow -\\dfrac{249}{2}&lt;k&lt;\\dfrac{251}{2}$.<br>  Mà $k\\in \\mathbb{Z}$ nên $k\\in \\{-124;-123;\\ldots;124;125\\}$. <br>  Vậy có tất cả $250$ giá trị thỏa mãn."
  },
  {
    "id": "1D153TL22",
    "question": "Phương trình lượng giác $\\cot\\left(2x - \\dfrac{\\pi}{4}\\right) = \\sqrt{3}$ có bao nhiêu nghiệm trên khoảng $\\left[\\dfrac{\\pi}{2}; \\dfrac{5\\pi}{2}\\right]$?",
    "answer": "4",
    "explain": "Phương trình tương đương với  $\\cot\\left(2x - \\dfrac{\\pi}{4}\\right) = \\cot\\dfrac{\\pi}{6}$<br>$\\Leftrightarrow 2x - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{6} + k\\pi$<br>$\\Leftrightarrow x = \\dfrac{5\\pi}{24} + k\\dfrac{\\pi}{2} \\quad (k \\in \\mathbb{Z}).$  Xét $x \\in \\left[\\dfrac{\\pi}{2}; \\dfrac{5\\pi}{2}\\right]$, ta có  $\\dfrac{\\pi}{2} \\le \\dfrac{5\\pi}{24} + k\\dfrac{\\pi}{2} \\le \\dfrac{5\\pi}{2}$<br>$\\Leftrightarrow \\dfrac{1}{2} \\le \\dfrac{5}{24} + \\dfrac{k}{2} \\le \\dfrac{5}{2}$<br>$\\Leftrightarrow \\dfrac{7}{12} \\le k \\le \\dfrac{55}{12}.$  Vì $k \\in \\mathbb{Z}$ nên $k \\in \\{1; 2; 3; 4\\}$.<br>  Vậy phương trình có $4$ nghiệm trên khoảng đã cho."
  },
  {
    "id": "1D155TL23",
    "question": "Nghiệm dương nhỏ nhất của phương trình $\\sin\\left(2x+\\dfrac{\\pi}{3}\\right)=\\sin x$ là $x_0=\\dfrac{m}{n}\\pi$ (với $\\dfrac{m}{n}$ là phân số tối giản $m$, $n\\in \\mathbb{N}^*$). Tính giá trị của biểu thức $m+2n$.",
    "answer": "20",
    "explain": "Ta có   $\\sin\\left(2x + \\dfrac{\\pi}{3}\\right) = \\sin x$<br>$\\Leftrightarrow 2x + \\frac{\\pi}{3} = x + k2\\pi \\text{ hoặc } 2x + \\frac{\\pi}{3} = \\pi - x + k2\\pi \\quad (k \\in \\mathbb{Z})$<br>$\\Leftrightarrow x = -\\frac{\\pi}{3} + k2\\pi \\text{ hoặc } 3x = \\frac{2\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$<br>$\\Leftrightarrow x = -\\frac{\\pi}{3} + k2\\pi \\text{ hoặc } x = \\frac{2\\pi}{9} + k\\frac{2\\pi}{3} \\quad (k \\in \\mathbb{Z}).$   Xét họ nghiệm $x = \\dfrac{2\\pi}{9} + k\\dfrac{2\\pi}{3}$, $k \\in \\mathbb{Z}$. <br>  Với $k=0$ ta được $x = \\dfrac{2\\pi}{9}$ (dương) <br>   Xét họ nghiệm $x = -\\dfrac{\\pi}{3} + k2\\pi$: <br>  Với $k=1$ ta được $x = \\dfrac{5\\pi}{3}$ (lớn hơn $\\dfrac{2\\pi}{9}$) <br>  Vậy nghiệm dương nhỏ nhất là $x_0 = \\dfrac{2\\pi}{9} = \\dfrac{2}{9}\\pi \\Rightarrow m=2$, $n=9$. <br>  Do đó $m + 2n = 2 + 2\\cdot 9 = 20$."
  },
  {
    "id": "1D153TL24",
    "question": "Tính số nghiệm của phương trình $\\cos 3x=0$ trên nửa khoảng $\\left[\\dfrac{\\pi}{6};\\dfrac{37\\pi}{6}\\right)$.",
    "answer": "18",
    "explain": "Ta có $\\cos 3x = 0 \\Leftrightarrow 3x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{3}$ với $k\\in\\mathbb{Z}$.<br>  Do $x\\in \\left[\\dfrac{\\pi}{6};\\dfrac{37\\pi}{6}\\right)$ nên $\\dfrac{\\pi}{6} \\le \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{3} &lt; \\dfrac{37\\pi}{6}$ hay $0\\le k &lt; 18$.<br>  Do $k\\in\\mathbb{Z}$ nên phương trình đã cho có $18$ nghiệm."
  },
  {
    "id": "1D153TL25",
    "question": "Giải phương trình $\\cos \\left(x+\\dfrac{\\pi}{5} \\right) = \\dfrac{1}{2}$.",
    "answer": "",
    "explain": "Ta có  $\\cos \\left(x+\\dfrac{\\pi}{5} \\right) = \\dfrac{1}{2}  \\Leftrightarrow \\cos \\left(x+\\dfrac{\\pi}{5} \\right) =\\cos \\left(\\dfrac{\\pi}{3} \\right)$<br>$\\Leftrightarrow x+\\dfrac{\\pi}{5}=\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x+\\dfrac{\\pi}{5}=-\\dfrac{\\pi}{3}+k2\\pi$<br>$\\Leftrightarrow x=\\dfrac{2\\pi}{15}+k2\\pi \\text{ hoặc } x=-\\dfrac{8\\pi}{15}+k2\\pi, \\quad k \\in \\mathbb{Z}.$"
  },
  {
    "id": "1D153TL26",
    "question": "Để rèn luyện sức khỏe bạn An tập thể dục vào mỗi buổi sáng và kết hợp chạy bộ trong một khoảng thời gian nhất định của mỗi buổi tập. Số phút chạy bộ của bạn An trong  ngày thứ $t$ của một tháng được cho bởi hàm số sau: $f(t)=30+40\\cos\\left(\\dfrac{\\pi t}{6}\\right)$, trong đó $f(t)$  tính bằng phút, $t\\in\\mathbb{Z}$ và $1\\le t\\le 31$. Bằng cách giải phương trình lượng giác, tính số ngày bạn An chạy bộ được 50 phút.",
    "answer": "4",
    "explain": "Theo đề bài, ta có $f(t)=50$. Do đó   $30+40\\cos\\left(\\dfrac{\\pi t}{6}\\right)= 50 \\nonumber$<br>$\\Leftrightarrow 40\\cos\\left(\\dfrac{\\pi t}{6}\\right)=20 \\nonumber$<br>$\\Leftrightarrow \\cos\\left(\\dfrac{\\pi t}{6}\\right)= \\dfrac{1}{2}=\\cos \\dfrac{\\pi}{3} \\nonumber$<br>$\\Leftrightarrow \\dfrac{\\pi t}{6}=\\pm \\dfrac{\\pi}{3}+k2\\pi \\nonumber$<br>$\\Leftrightarrow t= \\pm 2+12k, k \\in \\mathbb Z. \\nonumber$  \\textbullet~Với $t=-2+12k$. Vì $1\\le t\\le 31$ nên $1\\le -2+12k \\le 31$ suy ra $\\dfrac{1}{4}\\le k \\le \\dfrac{11}{4}$. <br>  Mà $k$ nguyên nên $k \\in \\{1,2\\}$.<br>  \\textbullet~Với $t=2+12k$. Vì $1\\le t\\le 31$ nên $1\\le 2+12k \\le 31$ suy ra $-\\dfrac{1}{12}\\le k \\le \\dfrac{29}{12}$. <br>  Mà $k$ nguyên nên $k \\in \\{1,2\\}$.<br>  Vậy tổng cộng có $4$ ngày bạn An chạy bộ được 50 phút."
  },
  {
    "id": "1D152TL27",
    "question": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\sin (x-3)+3=m$ có nghiệm?",
    "answer": "3",
    "explain": "Ta có  $-1\\le\\sin(x-3)\\le 1 \\Leftrightarrow -1+3\\le\\sin(x-3)+3\\le 1+3$<br>$\\Leftrightarrow 2\\le m\\le 4.$  Vì $m\\in\\mathbb{Z}$ nên $m\\in\\{2;3;4\\}$."
  },
  {
    "id": "1D153TL28",
    "question": "Cho phương trình lượng giác $2\\sin x = \\sqrt{3}$. Số nghiệm của phương trình đã cho trong khoảng $(0;2\\pi)$ là",
    "answer": "2",
    "explain": "Ta có   $2\\sin x = \\sqrt{3}$<br>$\\Leftrightarrow \\sin x =\\dfrac{\\sqrt{3}}{2}$<br>$\\Leftrightarrow \\sin x = \\sin \\dfrac{\\pi}{3}$<br>$\\Leftrightarrow x = \\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x = \\pi-\\dfrac{\\pi}{3}+k2\\pi \\quad (k \\in \\mathbb{Z})$<br>$\\Leftrightarrow x = \\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x = \\dfrac{2\\pi}{3}+k2\\pi \\quad (k \\in \\mathbb{Z}).$  Trên $(0;2\\pi)$ phương trình đã cho có hai nghiệm $\\dfrac{\\pi}{3}$ và $\\dfrac{2\\pi}{3}$."
  },
  {
    "id": "1D153TL29",
    "question": "Phương trình lượng giác: $\\tan \\left(2x-\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{3}$ có nghiệm $x=\\dfrac{a\\pi}{b}+k\\dfrac{\\pi}{c}$ ($a, b$ là $2$ số nguyên tố cùng nhau). Tính giá trị $a+b+c$.",
    "answer": "9",
    "explain": "$\\tan\\left(2x-\\dfrac{\\pi}{6}\\right) = \\tan\\dfrac{\\pi}{6} \\Leftrightarrow 2x - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + k\\pi$<br>$\\Leftrightarrow 2x = \\dfrac{\\pi}{3} + k\\pi$<br>$\\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\dfrac{\\pi}{2},\\quad (k \\in \\mathbb{R}).$  Theo đề, $x=\\dfrac{a\\pi}{b}+k\\dfrac{\\pi}{c}$ nên $a=1$, $b=6$, $c=2$.<br>  Khi đó $a+b+c= 9$."
  },
  {
    "id": "1D153TL30",
    "question": "Số giờ có ánh sáng của một thành phố trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số: $ s(t)=3\\sin\\left[\\dfrac{\\pi}{182}\\left(t-80\\right)\\right]+12$, $ t\\in\\mathbb{Z}$ và $ 0&lt;t\\le 365$. Vào ngày thứ mấy trong năm thì thành phố đó có nhiều giờ ánh sáng nhất?",
    "answer": "171",
    "explain": "Ta có hàm số $s(t) = 3\\sin\\left[\\dfrac{\\pi}{182}(t-80)\\right] + 12$.<br>  Vì $-1 \\le \\sin\\left[\\dfrac{\\pi}{182}(t-80)\\right] \\le 1$ nên $s(t) \\le 3 \\cdot 1 + 12 = 15$.<br>  Thành phố có nhiều giờ có ánh sáng nhất khi $s(t) = 15$. <br>  Điều này tương đương với <br>  $\\sin \\left[\\dfrac{\\pi}{182}(t-80)\\right]=1  \\Leftrightarrow \\dfrac{\\pi}{182}(t-80) = \\dfrac{\\pi}{2} + k2\\pi  \\Leftrightarrow t-80 = 91 + 364k   \\Leftrightarrow t = 171 + 364k \\quad (k \\in \\mathbb{Z})$.<br>  Do $0 &lt; t \\le 365$ và $t \\in \\mathbb{Z}$ nên ta chọn $k=0$, suy ra $t=171$.<br>  Vậy vào ngày thứ $171$ trong năm thì thành phố có nhiều giờ ánh sáng nhất."
  },
  {
    "id": "1D156TL31",
    "question": "Giả sử một vật dao động điều hòa xung quanh vị trí cân bằng theo phương trình $x=2 \\cos \\left(5 t-\\dfrac{\\pi}{6}\\right)$. Ở đây, thời gian $t$ tính bằng giây và quãng đường $x$ tính bằng centimét. Hãy cho biết trong khoảng thời gian từ $0$ đến $6$ giây, vật đi qua vị trí cân bằng bao nhiêu lần?",
    "answer": "6",
    "explain": "Phương trình dao động điều hòa có dạng $x = A \\cos (\\omega t + \\varphi)$.<br>  Vật đi qua vị trí cân bằng khi $x = 0$, tức là  \\[  2 \\cos \\left( 5t - \\dfrac{\\pi}{6} \\right) = 0 \\Rightarrow \\cos \\left( 5t - \\dfrac{\\pi}{6} \\right) = 0\\Leftrightarrow t = \\dfrac{4\\pi}{30} + \\dfrac{k\\pi}{5} = \\dfrac{2\\pi}{15} + \\dfrac{k\\pi}{5}.  \\]  Xét khoảng $0 \\leq t \\leq 6$, ta tìm các giá trị $k$ thỏa mãn  \\[  0 \\leq \\dfrac{2\\pi}{15} + \\dfrac{k\\pi}{5} \\leq 6\\Leftrightarrow -2 \\leq 3k \\leq 16 \\Leftrightarrow -\\dfrac{2}{3} \\leq k \\leq \\dfrac{16}{3}.  \\]  Với $k$ nguyên, ta có $k\\in \\{0, 1, 2, 3, 4, 5\\}$ ứng với $6$ lần đi qua vị trí cân bằng."
  },
  {
    "id": "1D153TL32",
    "question": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu $h$ (m) của mực nước trong kênh đó tính theo thời gian $t$ giờ được cho bởi công thức ${h = 2\\cos\\left(\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3}\\right) + 12}$ với ($0 \\leq t \\leq 24$). Độ sâu của mực nước trong con kênh đó đạt $14$ m lần đầu tiên trong ngày vào lúc mấy giờ?",
    "answer": "20",
    "explain": "Khi độ sau của mực nước là $14$ m, ta có  $h = 14$<br>$2\\cos\\left(\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3}\\right) + 12 = 14$<br>$\\cos\\left(\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3}\\right) = 1$<br>$\\dfrac{\\pi t}{12} + \\dfrac{\\pi}{3} = k2\\pi$<br>$t = -4+24k\\quad (k\\in\\mathbb{Z}).$  Ta có $0\\leq t \\leq 24$ nên $0\\leq -4+24k \\leq 24$, suy ra $\\dfrac{1}{6}\\leq t \\leq \\dfrac{7}{6}$.<br>  Do $t\\in\\mathbb{Z}$ nên $t=1$.<br>  Vậy độ sâu của mực nước trong con kênh đó đạt $14m$ lần đầu tiên trong ngày vào lúc $t=-4+24\\cdot1=20$ giờ."
  }
];
