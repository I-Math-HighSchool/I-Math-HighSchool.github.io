// =========================================================================
// KHỐI DỮ LIỆU: 1D13 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D13 = [
  {
    "id": "1D135TL1",
    "question": "[Dự án đề kiểm tra Toán 11 GHKI NH25-26- Hieu Hieu Minh Minh]%[THPT Nguyen Binh Khiem - Ha Noi]  Cho góc lượng giác $x \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$ và có $\\sin x = \\dfrac{1}{3}$. Tính giá trị biểu thức $A = \\cos\\left(\\dfrac{\\pi}{4}+x\\right)$ (làm tròn kết quả đến hàng phần chục).",
    "answer": "-0{,}9",
    "explain": "Ta có $A = \\cos\\left(\\dfrac{\\pi}{4}+x\\right) = \\cos \\dfrac{\\pi}{4} \\cdot \\cos x - \\sin \\dfrac{\\pi}{4} \\cdot \\sin x = \\dfrac{\\sqrt{2}}{2} \\cos x - \\dfrac{\\sqrt{2}}{2} \\sin x $.<br>  Ta có $\\sin^2 x + \\cos^2 x = 1 \\Leftrightarrow \\cos^2 x = 1 - \\sin^2 x = 1 - \\left( \\dfrac{1}{3}\\right)^2 = \\dfrac{8}{9}$.<br>  Do $x \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$ nên $\\cos x = - \\dfrac{2\\sqrt{2}}{3}$.<br>  Do đó $A = \\dfrac{\\sqrt{2}}{2} \\cdot \\left(- \\dfrac{2\\sqrt{2}}{3}\\right) - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{3} = - \\dfrac{4+ \\sqrt{2}}{2} \\approx -0{,}9$."
  },
  {
    "id": "1D135TL2",
    "question": "Giá trị biểu thức $ A=\\left(\\tan a+\\tan b\\right)\\cdot\\cot\\left(a+b\\right)+\\tan a\\cdot\\tan b+2024$ bằng bao nhiêu?",
    "answer": "2025",
    "explain": "Ta có $\\tan\\left(a+b\\right)=\\dfrac{\\tan a+\\tan b}{1-\\tan a\\cdot \\tan b}\\Rightarrow\\tan a+\\tan b=\\left(1-\\tan a\\cdot \\tan b\\right)\\cdot\\tan\\left(a+b\\right)$.<br>  Suy ra $ A=\\left(1-\\tan a\\cdot\\tan b\\right)\\cdot\\tan\\left(a+b\\right)\\cdot\\cot\\left(a+b\\right)+\\tan a\\cdot\\tan b+2024=1+2024=2025$."
  },
  {
    "id": "1D135TL3",
    "question": "Cho sơ đồ cấu trúc kim loại của một cây cầu ({\\it tham khảo hình vẽ sau}).  <br><img src=\"data/11/1D1/im1D13/1D13_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Biết $OX=9$ m, $OA=15$ m, $AY=8$ m, $\\sin\\widehat{XOY}=\\dfrac{a}{b}$. Tính $b-a$.",
    "answer": "1",
    "explain": "Đặt $\\alpha=\\widehat{XOA}$ và $\\beta=\\widehat{AOY}$.<br>  Trong tam giác vuông $XOA$ vuông tại $X$, $AX=\\sqrt{OA^2-OX^2}=12$ và  $\\sin\\alpha=\\dfrac{AX}{OA}=\\dfrac{12}{15}=\\dfrac{4}{5},\\quad \\cos\\alpha=\\dfrac{OX}{OA}=\\dfrac{9}{15}=\\dfrac{3}{5}.$  Trong tam giác vuông $AOY$ vuông tại $A$, $OY=\\sqrt{OA^2+AY^2}=17$ và  $\\sin\\beta=\\dfrac{AY}{OY}=\\dfrac{8}{17}, \\quad \\cos\\beta=\\dfrac{OA}{OY}=\\dfrac{15}{17}.$  Ta có  $\\sin\\widehat{XOY}  =\\sin\\left(\\alpha+\\beta\\right)$<br>$=\\sin\\alpha\\cos\\beta+\\sin\\beta\\cos\\alpha$<br>$=\\dfrac{4}{5}\\cdot \\dfrac{15}{17}+\\dfrac{8}{17}\\cdot \\dfrac{3}{5}$<br>$=\\dfrac{84}{85}.$  Vậy $b-a=85-84=1$."
  },
  {
    "id": "1D135TL4",
    "question": "Cho $\\sin\\alpha =\\dfrac{2}{3}$ và $\\cos\\alpha =\\dfrac{\\sqrt{5}}{3}$. Tính giá trị biểu thức $A =\\sin\\left(\\alpha +\\dfrac{\\pi}{3}\\right)$ (<em>làm tròn kết quả đến hàng phần trăm</em>).",
    "answer": "0{,}98",
    "explain": "Ta có  $A = \\sin\\alpha \\cdot \\cos\\dfrac{\\pi}{3} + \\cos\\alpha \\cdot \\sin\\dfrac{\\pi}{3}$<br>$= \\dfrac{2}{3} \\cdot \\dfrac{1}{2} + \\dfrac{\\sqrt{5}}{3} \\cdot \\dfrac{\\sqrt{3}}{2}$<br>$= \\dfrac{2 + \\sqrt{15}}{6} \\approx 0{,}98.$"
  },
  {
    "id": "1D133TL5",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\cos \\alpha = \\dfrac{-1}{2}$. Giá trị của $\\cos 2\\alpha$ bằng bao nhiêu? (kết quả làm tròn đến chữ số thập phân thứ nhất).",
    "answer": "-0{,}5",
    "explain": "Ta có  $\\cos2\\alpha=2\\cos^2\\alpha-1=2\\cdot\\left(-\\dfrac{1}{2}\\right)^2-1=-\\dfrac{1}{2}.$  Vậy $\\cos2\\alpha=-\\dfrac{1}{2}=-0{,}5$."
  },
  {
    "id": "1D135TL6",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\cos\\alpha = -\\dfrac{5}{13}$ và $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$. Tính $\\tan\\alpha$ (<em>làm tròn đến hàng phần mười</em>).",
    "answer": "2{,}4",
    "explain": "Vì $\\pi&lt;\\alpha&lt;\\dfrac{3\\pi}{2}$ nên $\\alpha$ thuộc góc phần tư thứ III, do đó $\\sin\\alpha&lt;0$, $\\cos\\alpha&lt;0$ và $\\tan\\alpha&gt;0$.<br>   Ta có  \\[  \\sin^2\\alpha=1-\\cos^2\\alpha  =1-\\dfrac{25}{169}=\\dfrac{144}{169}  \\Rightarrow \\sin\\alpha=-\\dfrac{12}{13}.  \\]  Suy ra  \\[  \\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}  =\\dfrac{-12/13}{-5/13}=\\dfrac{12}{5}=2{,}4.  \\]  Vậy $\\tan\\alpha = 2{,}4$."
  },
  {
    "id": "1D135TL7",
    "question": "Biết $\\cos x\\cdot\\cos(60^{\\circ}-x)\\cdot\\cos(60^{\\circ}+x)=k\\cdot\\cos 3x$ với $k\\in\\mathbb{R}$. Giá trị của $\\sin(k\\pi)$ là bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
    "answer": "0{,}71",
    "explain": "Ta có  $P = \\cos x \\cdot \\cos(60^{\\circ}-x) \\cdot \\cos(60^{\\circ}+x)$<br>$= \\cos x \\cdot \\dfrac{1}{2} \\left[\\cos(60^{\\circ}-x + 60^{\\circ}+x) + \\cos(60^{\\circ}-x - (60^{\\circ}+x))\\right]$<br>$= \\dfrac{1}{2} \\cos x \\cdot [\\cos 120^{\\circ} + \\cos(-2x)]$<br>$= \\dfrac{1}{2} \\cos x \\cdot \\left( -\\dfrac{1}{2} + \\cos 2x \\right)$<br>$= -\\dfrac{1}{4} \\cos x + \\dfrac{1}{2} \\cos 2x \\cos x$<br>$= -\\dfrac{1}{4} \\cos x + \\dfrac{1}{2} \\cdot \\dfrac{1}{2} (\\cos 3x + \\cos x)$<br>$= -\\dfrac{1}{4} \\cos x + \\dfrac{1}{4} \\cos 3x + \\dfrac{1}{4} \\cos x$<br>$= \\dfrac{1}{4} \\cos 3x.$  Suy ra $k=-\\dfrac{1}{4}$.<br>  Giá trị của $\\sin(k\\pi)=\\sin \\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sqrt{2}}{2}\\approx 0{,}71$."
  },
  {
    "id": "1D133TL8",
    "question": "Cho $\\sin x=\\dfrac{1}{5}$, $\\dfrac{\\pi}{2}&lt;x&lt;\\pi$. Biết $\\sin 2 x=\\dfrac{a \\sqrt{6}}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản và $b&gt;0$. Giá trị của biểu thức $P=a+b$ bằng bao nhiêu?",
    "answer": "21",
    "explain": "Ta có $\\dfrac{\\pi}{2}&lt;x&lt;\\pi \\Rightarrow \\cos x&lt;0$.<br>  Ta có $\\cos x=-\\sqrt{1-\\sin^2 x}=-\\sqrt{1-\\dfrac{1}{25}}=-\\dfrac{2 \\sqrt{6}}{5}$.<br>  Suy ra $\\sin 2 x=2 \\sin x \\cos x=-2 \\cdot \\dfrac{1}{5} \\cdot \\dfrac{2 \\sqrt{6}}{5}=\\dfrac{-4 \\sqrt{6}}{25} \\Rightarrow a=-4 \\text{ và } b=25.$<br>  Vậy $P=a+b=-4+25=21$."
  },
  {
    "id": "1D135TL9",
    "question": "Cho các góc $\\alpha, \\beta$ thỏa mãn $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$, $\\pi &lt; \\beta &lt; 2\\pi$, $\\sin\\alpha = \\dfrac{1}{3}$, $\\cos\\beta = -\\dfrac{2}{3}$. Tính $\\sin(\\alpha + \\beta)$ (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "0,48",
    "explain": "Ta có $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi \\Rightarrow \\cos\\alpha &lt; 0$.<br>  $\\cos^2\\alpha = 1-\\sin^2\\alpha = 1 - \\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{8}{9} \\Rightarrow \\cos\\alpha = -\\dfrac{2\\sqrt{2}}{3}$.<br>  Ta có $\\pi &lt; \\beta &lt; 2\\pi$ và $\\cos\\beta &lt; 0 \\Rightarrow \\pi &lt; \\beta &lt; \\dfrac{3\\pi}{2} \\Rightarrow \\sin\\beta &lt; 0$.<br>  $\\sin^2\\beta = 1-\\cos^2\\beta = 1 - \\left(-\\dfrac{2}{3}\\right)^2 = \\dfrac{5}{9} \\Rightarrow \\sin\\beta = -\\dfrac{\\sqrt{5}}{3}$.<br>  Do đó  \\[\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta = \\dfrac{1}{3}\\left(-\\dfrac{2}{3}\\right) + \\left(-\\dfrac{2\\sqrt{2}}{3}\\right)\\left(-\\dfrac{\\sqrt{5}}{3}\\right) = \\dfrac{2\\sqrt{10}-2}{9} \\approx 0{,}48.\\]"
  },
  {
    "id": "1D133TL10",
    "question": "Biết $\\sin \\alpha=\\dfrac{2}{5}$. Khi đó giá trị $\\cos 2\\alpha$ bằng bao nhiêu?",
    "answer": "0,68",
    "explain": "Ta có $\\cos 2\\alpha = 1 - 2\\sin^{2}\\alpha = 1 - 2\\cdot\\left(\\dfrac{2}{5}\\right)^{2} = \\dfrac{17}{25} = 0{,}68$."
  },
  {
    "id": "1D135TL11",
    "question": "Cho hai góc nhọn $\\alpha$ và $\\beta$. Biết $\\cos \\alpha=\\dfrac{2}{3}$; $\\cos \\beta=\\dfrac{3}{4}$. Đặt $P=\\cos(\\alpha+\\beta)\\cos(\\alpha-\\beta)$. Tính $72P$",
    "answer": "0,5",
    "explain": "Áp dụng công thức biến đổi tích thành tổng, ta có  $P =\\cos(\\alpha+\\beta)\\cos(\\alpha-\\beta)$<br>$= \\dfrac{1}{2}(\\cos 2\\alpha+\\cos 2\\beta)$<br>$=\\dfrac{1}{2}\\left[\\left(2\\cos^2\\alpha-1\\right)+\\left(2\\cos^2\\beta-1\\right)\\right]$<br>$=\\dfrac{1}{2}\\left[2\\cdot \\left(\\dfrac{2}{3}\\right)^2-1+2\\cdot \\left(\\dfrac{3}{4}\\right)^2-1\\right]$<br>$=\\dfrac{1}{144}.$  Vậy $72P=0{,}5$."
  },
  {
    "id": "1D133TL12",
    "question": "Cho $\\sin a + \\cos a = \\dfrac{1}{3}$. Biết giá trị $\\sin 2a = \\dfrac{m}{n}$. Tính giá trị biểu thức $A = m^2 + n^2$ (biết $\\dfrac{m}{n}$ là phân số tối giản và $m \\in \\mathbb{Z}$, $n \\in \\mathbb{N}$).",
    "answer": "145",
    "explain": "Ta có: $(\\sin a + \\cos a)^2 = \\sin^2 a + \\cos^2 a + 2\\sin a \\cos a = 1 + \\sin 2a$.<br>  Ta có $\\left(\\dfrac{1}{3}\\right)^2 = 1 + \\sin 2a \\Leftrightarrow \\dfrac{1}{9} = 1 + \\sin 2a$.<br>  Suy ra $\\sin 2a = \\dfrac{1}{9} - 1 = -\\dfrac{8}{9}$.<br>  Do đó $m = -8$, $n = 9$ (phân số đã tối giản).<br>  Giá trị biểu thức $A = m^2 + n^2 = (-8)^2 + 9^2 = 64 + 81 = 145$."
  },
  {
    "id": "1D133TL13",
    "question": "Biết $\\sin \\alpha = \\dfrac{1}{3}$ và $0 &lt; \\alpha &lt; \\dfrac{\\pi}{2}$. Khi đó $\\cos 2\\alpha$ có giá trị bằng bao nhiêu (làm tròn kết quả đến phần mười)?",
    "answer": "0,8",
    "explain": "Ta có $\\cos 2\\alpha = 1 - 2\\sin^2 \\alpha= 1 - 2 \\cdot \\left( \\dfrac{1}{3} \\right)^2 = 1 - \\dfrac{2}{9} = \\dfrac{7}{9} \\approx 0{,}8$."
  },
  {
    "id": "1D135TL14",
    "question": "Cho $\\sin x=-\\dfrac{3}{5}\\,\\,\\left(\\pi&lt;x&lt;\\dfrac{3\\pi}{2}\\right)$. Biết giá trị $\\sin\\left(x+\\dfrac{\\pi}{6}  \\right)=\\dfrac{a\\sqrt{3}+b}{10};\\,\\,(a,b\\in\\mathbb{Z})$. Tính $2a-b$.",
    "answer": "-2",
    "explain": "Ta có $\\cos x=\\pm\\sqrt{1-\\left(\\sin^2x\\right)}=\\pm\\dfrac{4}{5}$. Vì $\\left(\\pi&lt;x&lt;\\dfrac{3\\pi}{2}\\right)$ nên $\\cos x =-\\dfrac{4}{5}$.<br>   $\\sin\\left(x+\\dfrac{\\pi}{6}\\right)=\\sin x\\cos\\dfrac{\\pi}{6}+\\cos x\\sin\\dfrac{\\pi}{6}=\\dfrac{-3\\sqrt{3}-4}{10}$.<br>  Vậy $2a-b=2\\cdot(-3)+4=-2$"
  },
  {
    "id": "1D133TL15",
    "question": "Cho $\\sin x=\\dfrac{2}{3}$. Tính giá trị của biểu thức $A=\\cos 2x+1$ (<em>làm tròn kết quả đến hàng phần trăm</em>).",
    "answer": "1{,}11",
    "explain": "Ta có $\\cos 2x=1-2\\sin^2x$.<br>  Suy ra $A=\\cos 2x+1=1-2\\sin^2x+1=2-2\\sin^2x$.<br>  Thay $\\sin x=\\dfrac{2}{3}$ vào biểu thức trên, ta được  \\[A=2-2\\cdot\\left(\\dfrac{2}{3}\\right)^2=2-2\\cdot\\dfrac{4}{9}= 2-\\dfrac{8}{9}=\\dfrac{18-8}{9} = \\dfrac{10}{9} \\approx 1{,}11.\\]"
  },
  {
    "id": "1D135TL16",
    "question": "Cho $\\cos x=-\\dfrac{\\sqrt{3}}{3}$ và $-\\pi &lt; x &lt;-\\dfrac{\\pi}{2}$. Giá trị của biểu thức $T=9 \\sin(x+2025\\pi)+\\sqrt{3} \\tan (2025\\pi-x)$ bằng bao nhiêu (<em>làm tròn kết quả đến hàng phần trăm</em>)?",
    "answer": "4{,}9",
    "explain": "Ta có  $\\sin^2 x+\\cos^2 x=1$<br>$\\Rightarrow \\sin^2 x=1-\\cos^2 x=1-\\left(-\\dfrac{\\sqrt{3}}{3}\\right)^2=1-\\dfrac{1}{3}=\\dfrac{2}{3}$<br>$\\Rightarrow \\sin x=\\sqrt{\\dfrac{2}{3}} \\text{ hoặc } \\sin x=-\\sqrt{\\dfrac{2}{3}}.$  Vì $-\\pi &lt; x &lt;-\\dfrac{\\pi}{2}$ nên $\\sin x=-\\sqrt{\\dfrac{2}{3}}$.<br>  Khi đó  $T = 9 \\sin(x+2025\\pi)+\\sqrt{3} \\tan (2025\\pi-x)$<br>$= 9\\sin(x+\\pi) + \\sqrt{3}\\tan(\\pi-x)$<br>$= -9\\sin x-\\sqrt{3}\\tan x$<br>$= -9\\sin x-\\sqrt{3}\\cdot\\dfrac{\\sin x}{\\cos x}$<br>$= -9\\cdot\\left(-\\sqrt{\\dfrac{2}{3}}\\right)-\\sqrt{3}\\cdot\\dfrac{-\\sqrt{\\dfrac{2}{3}}}{\\dfrac{-\\sqrt{3}}{3}}$<br>$\\approx 4{,}9.$"
  },
  {
    "id": "1D132TL17",
    "question": "[Chuyên Vĩnh Phúc - Phú Thọ]  Cho hai góc nhọn $a$ và $b$. Biết $\\cos a=\\dfrac{1}{3}$, $\\cos b=\\dfrac{1}{4}$. Tính giá trị của biểu thức $144P$ biết $P=\\cos(a+b)\\cos(a-b)$.",
    "answer": "-119",
    "explain": "Ta có  $\\cos(a+b)\\cos(a-b) =\\dfrac{1}{2} \\left(\\cos 2a+\\cos 2b\\right)$<br>$= \\dfrac{1}{2}\\left(2\\cos^2 a-1+2\\cos^2 b-1\\right)$<br>$= \\cos^2 a+\\cos^2 b-1$<br>$=-\\dfrac{119}{144}.$  Do đó $144P=-119$."
  },
  {
    "id": "1D137TL18",
    "question": "[Chuyên Vĩnh Phúc - Phú Thọ]  Trong Vật lí, phương trình tổng quát của một vật dao động điều hoà cho bởi công thức $x(t)=A\\cos(\\omega t+\\varphi)$, trong đó $t$ là thời điểm (tính bằng giây), $x(t)$ là li độ của vật tại thời điểm $t$, $A$ là biên độ dao động ($A&gt;0$) và $\\varphi\\in[-\\pi;\\pi]$ là pha ban đầu của dao động. Xét hai dao động điều hoà có phương trình  \\[  x_1(t)=3\\cdot \\cos\\left(\\dfrac{\\pi}{6}t+\\dfrac{\\pi}{6}\\right)\\ \\text{cm},\\quad  x_2(t)=3\\cdot \\cos\\left(\\dfrac{\\pi}{6}t+\\dfrac{\\pi}{4}\\right)\\ \\text{cm}.  \\]  Biết dao động tổng hợp $x(t)=x_1(t)+x_2(t)$. Biên độ của dao động tổng hợp này là <em>(kết quả làm tròn đến hàng phần mười)</em>.",
    "answer": "5{,}9",
    "explain": "Đặt $\\omega=\\dfrac{\\pi}{6}$, $\\varphi_1=\\dfrac{\\pi}{6}$, $\\varphi_2=\\dfrac{\\pi}{4}$. Khi đó  $x(t) =3\\cos(\\omega t+\\varphi_1)+3\\cos(\\omega t+\\varphi_2).$<br>$=6\\cos\\left(\\dfrac{\\varphi_1-\\varphi_2}{2}\\right) \\cdot\\cos\\left(\\omega t+\\dfrac{\\varphi_1+\\varphi_2}{2}\\right).$  Do đó biên độ dao động là \\[  A=6\\left|\\cos\\left(\\dfrac{\\varphi_1-\\varphi_2}{2}\\right)\\right|  =6\\left|\\cos\\left(\\dfrac{\\dfrac{\\pi}{6}-\\dfrac{\\pi}{4}}{2}\\right)\\right|  =6\\cos\\left(\\dfrac{\\pi}{24}\\right)  \\approx 5{,}9.  \\]  Vậy biên độ của dao động tổng hợp này là $5{,}9$."
  },
  {
    "id": "1D133TL19",
    "question": "Cho $\\sin x = \\dfrac{1}{5}$ với $\\dfrac{\\pi}{2}&lt; x &lt; \\pi$. Biết $\\sin 2x = \\dfrac{a\\sqrt{6}}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản và $b &gt; 0$. Tính giá trị của biểu thức $P = a+b$.",
    "answer": "21",
    "explain": "Do $\\dfrac{\\pi}{2}&lt; x &lt; \\pi$ nên $\\cos x &lt; 0$. Khi đó $\\cos x = -\\sqrt{1-\\sin^2 x} = -\\dfrac{2\\sqrt{6}}{5}$.<br>  Suy ra $\\sin 2x = 2\\sin x\\cos x = -\\dfrac{4\\sqrt{6}}{25}$.<br>  Vậy $a=-4$ và $b=25$ nên $a+b=21$."
  },
  {
    "id": "1D135TL20",
    "question": "Cho $\\cot x = 2$. Tính giá trị biểu thức $A=\\dfrac{2\\sin x + 3\\cos x}{3\\sin x - 2\\cos x}$.",
    "answer": "-8",
    "explain": "Chia cả tử và mẫu cho $\\sin x$ (vì $\\cot x=2$ nên $\\sin x \\neq 0$), ta được  $A = \\dfrac{2 + 3\\cot x}{3 - 2\\cot x} = \\dfrac{2 + 3\\cdot 2}{3 - 2\\cdot 2} = \\dfrac{8}{-1} = -8.$"
  },
  {
    "id": "1D133TL21",
    "question": "Cho $\\sin a=\\dfrac{3}{5}$, $0^\\circ&lt;a&lt;90^\\circ$. Giá trị $E=\\sin 2a+\\cos 2a$ bằng bao nhiêu?",
    "answer": "1{,}24",
    "explain": "Vì $0^\\circ&lt;a&lt;90^\\circ$ nên $\\cos a&gt;0$.  <br>  Ta có $\\cos a=\\sqrt{1-\\sin^2a}=\\sqrt{1-\\left(\\dfrac{3}{5}\\right)^2}=\\dfrac{4}{5}$.  <br>  Tính các giá trị lượng giác của góc $2a$  $\\sin 2a=2\\sin a\\cos a=2\\cdot\\dfrac{3}{5}\\cdot\\dfrac{4}{5}=\\dfrac{24}{25}.$<br>$\\cos 2a=\\cos^2a-\\sin^2a=\\left(\\dfrac{4}{5}\\right)^2-\\left(\\dfrac{3}{5}\\right)^2=\\dfrac{16}{25}-\\dfrac{9}{25}=\\dfrac{7}{25}.$  Giá trị của biểu thức $E$  \\[E=\\dfrac{24}{25}+\\dfrac{7}{25}=\\dfrac{31}{25}=1{,}24. \\]"
  },
  {
    "id": "1D135TL22",
    "question": "Cho $\\sin \\alpha=\\dfrac{4}{5}$ với $\\dfrac{\\pi}{2}&lt;\\alpha &lt; \\pi$. Biết $\\cos \\left(\\alpha+\\dfrac{\\pi}{3}\\right)=\\dfrac{-a-b\\sqrt{a}}{10}, (a, b \\in \\mathbb{Z})$. Tính giá trị $a+b$.",
    "answer": "7",
    "explain": "Từ giả thiết suy ra $\\cos \\alpha = -\\dfrac{3}{5}$.<br>  Khi đó $\\cos \\left(\\alpha+\\dfrac{\\pi}{3}\\right)= \\cos \\alpha\\cdot \\cos \\dfrac{\\pi}{3} - \\sin \\alpha\\cdot \\sin \\dfrac{\\pi}{3}= -\\dfrac{3}{5} \\cdot \\dfrac{1}{2} - \\dfrac{4}{5} \\cdot \\dfrac{\\sqrt{3}}{2}=\\dfrac{-3-4\\cdot\\sqrt{3}}{10}$.<br>  Suy ra $a=3 \\text{ và } b=4$.<br>  Vậy $a+b=7$."
  },
  {
    "id": "1D133TL23",
    "question": "Cho $\\cos \\alpha=\\dfrac{2}{3}$. Tính giá trị của biểu thức $P=3-\\cos 2\\alpha$ (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "3,11",
    "explain": "Ta có   $P = 3-\\cos 2\\alpha$<br>$= 3-\\left(2\\cos^\\alpha-1\\right)$<br>$= 4-2\\cos^2\\alpha$<br>$= 4-2\\cdot\\left(\\dfrac{2}{3}\\right)^2$<br>$= \\dfrac{28}{9}$<br>$\\approx 3{,}11.$"
  },
  {
    "id": "1D135TL24",
    "question": "Từ một vị trí $A$, người ta buộc hai sợi cáp $AB$ và $AC$ đến một cái trụ cao $15$\\,m, được dựng vuông góc với mặt đất, chân trụ ở vị trí $D$. Biết $CD=9$\\,m và $AD=12$\\,m. Biết góc nhọn $\\alpha=\\widehat{BAC}$ và $\\tan \\alpha=\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản. Tính $T=2a-3b$?",
    "answer": "-77",
    "explain": "<br><img src=\"data/11/1D1/im1D13/1D13_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Tam giác $ABD$ vuông tại $D$ có $\\tan\\widehat{BAD}=\\dfrac{BD}{AD}=\\dfrac{5}{4}$.<br>- Tam giác $ACD$ vuông tại $D$ có $\\tan\\widehat{BAC}=\\dfrac{CD}{AD}=\\dfrac{3}{4}$.<br>- Mà $\\alpha=\\widehat{BAD}-\\widehat{CAD}$ nên   $\\tan \\alpha = \\tan\\left(\\widehat{BAD}-\\widehat{CAD}\\right)$<br>$= \\dfrac{\\tan\\widehat{BAD}-\\tan\\widehat{CAD}}{1+\\tan\\widehat{BAD}\\cdot\\tan\\widehat{CAD}}$<br>$= \\dfrac{\\tfrac{5}{4}-\\tfrac{3}{4}}{1+\\tfrac{5}{4}\\cdot\\tfrac{3}{4}}$<br>$= \\dfrac{8}{31}.$  Suy ra $a=8$, $b=31$.  Khi đó $T=2\\cdot 8-3\\cdot 31=-77$."
  },
  {
    "id": "1D135TL25",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha=\\dfrac{3}{4}$ và $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$. Biết rằng  $\\sin\\left(\\alpha+\\dfrac{\\pi}{4}\\right)=\\dfrac{3\\sqrt a+\\sqrt b}{c}$, với $a$, $b$, $c$ là các số nguyên nhỏ hơn $15$. Giá trị của biểu thức $P=a-b-2c$ bằng bao nhiêu?",
    "answer": "-28",
    "explain": "Vì $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$ nên  \\[  \\cos\\alpha=\\sqrt{1-\\sin^2\\alpha}=\\sqrt{1-\\dfrac{9}{16}}=\\dfrac{\\sqrt7}{4}.  \\]  Ta có  \\[  \\sin\\left(\\alpha+\\dfrac{\\pi}{4}\\right)  =\\sin\\alpha\\cos\\dfrac{\\pi}{4}+\\cos\\alpha\\sin\\dfrac{\\pi}{4}  =\\dfrac{3}{4}\\cdot\\dfrac{\\sqrt2}{2}+\\dfrac{\\sqrt7}{4}\\cdot\\dfrac{\\sqrt2}{2}  =\\dfrac{3\\sqrt2+\\sqrt{14}}{8}.  \\]  Suy ra $a=2,\\ b=14,\\ c=8$.  Do đó  \\[  P=a-b-2c=2-14-16=-28.  \\]"
  },
  {
    "id": "1D133TL26",
    "question": "Biết $\\sin \\alpha=\\dfrac{1}{3}$, khi đó $\\cos 2\\alpha$ có giá trị bằng bao nhiêu? (làm tròn kết quả đến phần mười)",
    "answer": "0{,}8",
    "explain": "Ta có $\\cos 2\\alpha=1-2\\sin^2\\alpha=1-2\\cdot \\left(\\dfrac{1}{3}\\right)^2=\\dfrac{7}{9}\\approx 0{,}8$."
  },
  {
    "id": "1D132TL27",
    "question": "Cho hai góc lượng giác $a, b$ biết $\\cos a=\\dfrac{1}{3}, \\cos b=\\dfrac{1}{4}$. Khi đó giá trị của biểu thức $P=\\cos (a+b)\\cdot\\cos (a-b)$ bằng bao nhiêu? (Làm tròn kết quả đến hàng phần mười).",
    "answer": "-0,8",
    "explain": "Ta có $P=\\cos (a+b)\\cdot\\cos (a-b)=\\dfrac{1}{2}(\\cos 2a+\\cos 2b)$.<br>  Trong đó $\\cos 2a=2\\cos^2a-1=2\\cdot\\left(\\dfrac{1}{3}\\right)^2-1=-\\dfrac{7}{9}$;<br>  $\\cos 2b=2\\cos^2b-1=2\\cdot\\left(\\dfrac{1}{4}\\right)^2-1=-\\dfrac{7}{8}$.<br>  Do đó   $P=\\dfrac{1}{2}\\cdot\\left[-\\dfrac{7}{9}+\\left(-\\dfrac{7}{8}\\right)\\right]=-\\dfrac{119}{144}\\approx -0{,}8.  $"
  },
  {
    "id": "1D135TL28",
    "question": "Cho hai góc $\\alpha $ và $\\beta $ thỏa mãn $\\sin\\alpha=\\dfrac{3}{5}$, $\\left(\\dfrac{\\pi}{2}&lt;\\alpha &lt;\\pi\\right)$ và $\\cos\\beta=\\dfrac{12}{13}$, $\\left(0&lt;\\beta &lt;\\dfrac{\\pi}{2}\\right)$. Tính giá trị của $\\sin\\left(\\alpha-\\beta\\right)$. (làm tròn kết quả đến hàng phần trăm)",
    "answer": "0{,}86",
    "explain": "Ta có $\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\Rightarrow \\cos^2 \\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{16}{25}$.<br>  Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos \\alpha = -\\dfrac{4}{5}$.<br>  Ta có $\\sin^2 \\beta + \\cos^2 \\beta = 1 \\Rightarrow \\sin^2 \\beta = 1 - \\left(\\dfrac{12}{13}\\right)^2 = \\dfrac{25}{169}$.<br>  Vì $0 &lt; \\beta &lt; \\dfrac{\\pi}{2}$ nên $\\sin \\beta = \\dfrac{5}{13}$.<br>  $\\sin(\\alpha - \\beta) = \\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta = \\dfrac{3}{5} \\cdot \\dfrac{12}{13} - \\left(-\\dfrac{4}{5}\\right) \\cdot \\dfrac{5}{13} = \\dfrac{36}{65} + \\dfrac{20}{65} = \\dfrac{56}{65}\\approx 0{,}86$."
  },
  {
    "id": "1D135TL29",
    "question": "Biết với mọi $x$ thì $\\sin^6x+\\cos^6x=a+b\\cos 4x$ với $a;b\\in \\mathbb{Q}$. Tính $a+b$.",
    "answer": "1",
    "explain": "Đặt $P=\\sin^6x+\\cos^6x$.<br>  Ta có $\\sin^6 x + \\cos^6 x = \\left( \\sin^2 x + \\cos^2 x\\right) \\left( \\sin^4 x - \\sin^2 x \\cos^2 x + \\cos^4 x\\right) =1 - 3\\sin^2 x \\cos^2 x$.<br>  Lại có $\\sin^2 x \\cos^2 x = \\dfrac{1}{4} \\sin^2 2x$.<br>  Vậy   $P= 1 - \\dfrac{3}{4} \\sin^2 2x = 1 - \\dfrac{3}{4} \\cdot \\left( \\dfrac{1 - \\cos 4x}{2} \\right)= \\dfrac{5}{8} + \\dfrac{3}{8} \\cos 4x$.<br>  Suy ra $a = \\dfrac{5}{8}$ và $b = \\dfrac{3}{8}$.<br>  Vậy $a + b = \\dfrac{5}{8} + \\dfrac{3}{8} = 1$."
  }
];
