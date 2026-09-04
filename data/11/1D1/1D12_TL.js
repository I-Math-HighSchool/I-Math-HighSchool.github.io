// =========================================================================
// KHỐI DỮ LIỆU: §2. Giá trị lượng giác của một góc lượng giác - Trả lời ngắn
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop11/C1.2-GiaTriLuongGiac.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.traLoiNgan1D12 = [
  {
    "id": "1D122TL1",
    "question": "Tính giá trị biểu thức $N = \\cos ( \\alpha + 60^\\circ) + \\cos (\\alpha - 60^\\circ) - \\cos \\alpha + 2\\,025$, trong đó $\\alpha$ là số đo (theo đơn vị độ) của một góc bất kì.",
    "answer": "2025",
    "explain": "Ta có $\\cos ( \\alpha + 60^\\circ) + \\cos (\\alpha - 60^\\circ) = 2\\cos \\alpha \\cos 60^\\circ = \\cos \\alpha$.<br>  Suy ra $N = \\cos \\alpha - \\cos \\alpha + 2\\,025 = 2\\,025  $."
  },
  {
    "id": "1D122TL2",
    "question": "Cho $\\tan x = -2$. Tính giá trị của biểu thức $A=\\dfrac{3\\sin x-5\\cos x}{4\\sin x+\\cos x}$ (làm tròn kết quả đến hàng phần trăm).",
    "answer": "1{,}57",
    "explain": "Chia cả tử và mẫu của biểu thức $A$ cho $\\cos x$, ta được  $ A=\\dfrac{\\dfrac{3\\sin x}{\\cos x}-\\dfrac{5\\cos x}{\\cos x}}{\\dfrac{4\\sin x}{\\cos x}+\\dfrac{\\cos x}{\\cos x}} = \\dfrac{3\\tan x-5}{4\\tan x+1} = \\dfrac{3 \\cdot (-2) - 5}{4 \\cdot (-2) + 1} = \\dfrac{11}{7}\\approx 1{,}57. $  Vậy $A \\approx 1{,}57$."
  },
  {
    "id": "1D122TL3",
    "question": "Cho $\\tan x=2$. Tính giá trị của biểu thức $P=\\dfrac{\\sin x-5\\cos x}{\\sin x+\\cos x}$.",
    "answer": "-1",
    "explain": "Ta có $P=\\dfrac{\\sin x-5\\cos x}{\\sin x+\\cos x}=\\dfrac{\\dfrac{\\sin x}{\\cos x}-5}{\\dfrac{\\sin x}{\\cos x}+1}=\\dfrac{\\tan x-5}{\\tan x+1}=\\dfrac{2-5}{2+1}=-1$."
  },
  {
    "id": "1D122TL4",
    "question": "Biết $\\cos \\alpha=\\dfrac{4}{5}$ và $-\\dfrac{\\pi}{2} &lt; \\alpha &lt; 0$. Khi đó giá trị $\\sin \\alpha$ bằng bao nhiêu?",
    "answer": "-0,6",
    "explain": "Vì $-\\dfrac{\\pi}{2} &lt; \\alpha &lt; 0$ nên $\\sin \\alpha &lt; 0$. <br>  Suy ra $\\sin \\alpha = -\\sqrt{1-\\cos^{2}\\alpha} = -\\sqrt{1-\\left(\\dfrac{4}{5}\\right)^{2}} = -\\dfrac{3}{5} = -0,6$."
  },
  {
    "id": "1D122TL5",
    "question": "Cho góc lượng giác $\\alpha=210^\\circ$, trong số các giá trị lượng giác $\\sin \\alpha$, $\\cos \\alpha$, $\\tan \\alpha$, $\\cot \\alpha$ có bao nhiêu giá trị là số dương?",
    "answer": "2",
    "explain": "Góc lượng giác $\\alpha=210^\\circ$ nằm ở góc phần tư thứ III. Nên $\\sin \\alpha&lt;0$, $\\cos \\alpha&lt;0$, $\\tan \\alpha&gt;0$, $\\cot \\alpha&gt;0$.<br> Vậy có $2$ giá trị là số dương."
  },
  {
    "id": "1D122TL6",
    "question": "Cho góc lượng giác $x$ thỏa mãn $\\tan x = 1$. Tính giá trị biểu thức $P=\\dfrac{2\\cos x+5\\sin x}{\\cos x-3\\sin x}$ (làm tròn kết quả đến hàng phần mười).",
    "answer": "-3,5",
    "explain": "Với $\\cos x\\ne 0$ và $\\tan x=\\dfrac{\\sin x}{\\cos x}$ nên ta chia cả tử và mẫu của biểu thức $P$ cho $\\cos x$.<br>  Khi đó $P=\\dfrac{2+5\\tan x}{1-3\\tan x}=\\dfrac{1+5\\cdot 1}{1-3\\cdot 1}=-3{,}5$."
  },
  {
    "id": "1D122TL7",
    "question": "Cho $\\cot x=2$. Tính giá trị biểu thức $A=\\dfrac{2\\sin x+3\\cos x}{3\\sin x-2\\cos x}$.<br>",
    "answer": "-8",
    "explain": "Vì $\\cot x=2$ nên $\\sin x \\ne 0$.<br>  Ta chia cả tử và mẫu của $A$ cho $\\sin x$ ta được \\[ A=\\dfrac{2+3\\cot x}{3-2\\cot x }= \\dfrac{2+3\\cdot 2}{3-2\\cdot 2}=-8. \\]"
  },
  {
    "id": "1D122TL8",
    "question": "Số phút chạy bộ của bạn An trong ngày thứ $t$ của một tháng được cho bởi hàm số: $f(t)=30+40\\cos\\left(\\dfrac{\\pi t}{6}\\right)$, trong đó $1\\le t\\le 31, t\\in \\mathbb{Z}$. Tính số ngày bạn An chạy bộ được $50$ phút.",
    "answer": "5",
    "explain": "Ta có  $30+40\\cos\\left(\\dfrac{\\pi t}{6}\\right) = 50$<br>$\\Leftrightarrow \\cos\\left(\\dfrac{\\pi t}{6}\\right) = \\dfrac{1}{2} = \\cos\\dfrac{\\pi}{3}$<br>$\\Leftrightarrow \\dfrac{\\pi t}{6} = \\dfrac{\\pi}{3} + k2\\pi \\text{ hoặc } \\dfrac{\\pi t}{6} = -\\dfrac{\\pi}{3} + k2\\pi$<br>$\\Leftrightarrow t = 2 + 12k \\text{ hoặc } t = -2 + 12k.$  Ta xét từng trường hợp:  <br>- &lt;strong&gt;Trường hợp 1:&lt;/strong&gt; Với $t = 2 + 12k$.  \\[ 1 \\le 2 + 12k \\le 31 \\Leftrightarrow -1 \\le 12k \\le 29 \\Leftrightarrow -\\dfrac{1}{12} \\le k \\le \\dfrac{29}{12}. \\]  Mà $k \\in \\mathbb{Z}$ nên $k \\in \\{0; 1; 2\\}\\Rightarrow t\\in \\{2;14;26\\}$.<br>- &lt;strong&gt;Trường hợp 2:&lt;/strong&gt; Với $t = -2 + 12k$.  \\[ 1 \\le -2 + 12k \\le 31 \\Leftrightarrow 3 \\le 12k \\le 33 \\Leftrightarrow \\dfrac{3}{12} \\le k \\le \\dfrac{33}{12}. \\]  Mà $k \\in \\mathbb{Z}$ nên $k \\in \\{1; 2\\}\\Rightarrow t\\in \\{10;22\\}$.  Vậy có $3 + 2 = 5$ ngày thỏa mãn yêu cầu bài toán."
  },
  {
    "id": "1D122TL9",
    "question": "Tập hợp các giá trị của tham số $m$ để phương trình $\\sin\\left(x-\\dfrac{\\pi}{3}\\right)+2=2m-1$ có nghiệm là $[a;b]$. Khi đó $2a+b$ bằng bao nhiêu?",
    "answer": "4",
    "explain": "Phương trình đã cho tương đương với $\\sin\\left(x-\\dfrac{\\pi}{3}\\right) = 2m-3$.<br>  Để phương trình có nghiệm thì $-1 \\le 2m-3 \\le 1 \\Leftrightarrow 2 \\le 2m \\le 4 \\Leftrightarrow 1 \\le m \\le 2$.<br>  Tập giá trị là $[1; 2] \\Rightarrow a=1, b=2$.<br>  Giá trị $2a+b = 2\\cdot 1 + 2 = 4$."
  },
  {
    "id": "1D122TL10",
    "question": "Cho $\\alpha$ là góc tù thỏa mãn $\\cos\\alpha=-\\dfrac{1}{3}$. Giá trị biểu thức $A=\\sin^4\\alpha+\\cos^4\\alpha+\\sqrt{2}\\sin\\alpha\\cos\\alpha$ bằng $\\dfrac{a}{b}$ ($\\dfrac{a}{b}$ là phân số tối giản, $a,b\\in\\mathbb{Z}$). Tổng $a+b$ bằng bao nhiêu?",
    "answer": "110",
    "explain": "Vì $\\alpha$ là góc tù ($90^\\circ&lt;\\alpha&lt;180^\\circ$) nên $\\sin\\alpha&gt;0$.  <br>  Ta có $\\sin^2\\alpha=1-\\cos^2\\alpha=1-\\left(-\\dfrac{1}{3}\\right)^2=1-\\dfrac{1}{9}=\\dfrac{8}{9}$.  <br>  Suy ra $\\sin\\alpha=\\sqrt{\\dfrac{8}{9}}=\\dfrac{2\\sqrt{2}}{3}$.  <br>  Biến đổi biểu thức $A$  $A = (\\sin^2\\alpha+\\cos^2\\alpha)^2-2\\sin^2\\alpha\\cos^2\\alpha+\\sqrt{2}\\sin\\alpha\\cos\\alpha$<br>$= 1^2-2\\cdot\\dfrac{8}{9}\\cdot\\dfrac{1}{9}+\\sqrt{2}\\cdot\\dfrac{2\\sqrt{2}}{3}\\cdot\\left(-\\dfrac{1}{3}\\right)$<br>$= 1-\\dfrac{16}{81}-\\dfrac{4}{9}$<br>$= \\dfrac{29}{81}.$  Vậy $a=29$, $b=81$. Tổng $a+b=29+81=110$."
  },
  {
    "id": "1D122TL11",
    "question": "Cho biết $\\cos \\alpha=\\dfrac{3}{5}, 0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$. Giá trị $\\sin \\alpha$ bằng bao nhiêu?",
    "answer": "0{,}8",
    "explain": "Ta có công thức lượng giác cơ bản là $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.<br>  Suy ra  $\\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$.<br>  Vì $0 &lt; \\alpha &lt; \\dfrac{\\pi}{2}$ nên $\\sin \\alpha &gt; 0$.<br>  Vậy $\\sin \\alpha = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}=0{,}8$."
  }
];
