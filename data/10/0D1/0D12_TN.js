// =========================================================================
// KHỐI DỮ LIỆU: 0D12 - Trắc nghiệm
// Nguồn: SachBaiHoc_T10/Data-T10/DS10-CD1.1-Menh-De.tex + DS10-CD1.2-3-Tap-Hop.tex
// (bài tập giáo khoa gốc, giữ nguyên nội dung, không thuộc diện phải đổi số/ngữ
// cảnh vì không phải bài toán có bối cảnh thực tế mang tính đặc trưng).
// =========================================================================
window.tracNghiem0D12 = [
  {
    "id": "0D123TN1",
    "question": "Phần không bị gạch trên trục số dưới đây biểu diễn tập hợp $X$ là một tập con của tập số thực.  Mệnh đề nào dưới đây là đúng?<br><img src=\"data/10/0D1/im0D12/dlts_sbh_giuakii1_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$X = (-3; 2)$",
      "$X = [-3; 2]$",
      "$X = (-3; 2]$",
      "$X = [-3; 2)$"
    ],
    "answer": 2,
    "explain": "Ta có $X = (-3; 2]$."
  },
  {
    "id": "0D121TN1",
    "question": "Cho tập hợp $X=\\left\\{x \\in \\mathbb{Z} \\mid x^2-2=0\\right\\}$. Mệnh đề nào sau đây là đúng?",
    "options": [
      "$X=\\{-\\sqrt{2}\\}$",
      "$X=\\{\\sqrt{2}\\}$",
      "$X=\\varnothing$",
      "$X=\\{-\\sqrt{2}; \\sqrt{2}\\}$"
    ],
    "answer": 2,
    "explain": "Ta có $x^2-2=0\\Leftrightarrow x= \\pm \\sqrt{2}$. Vì $x \\in \\mathbb{Z}$ nên $X=\\varnothing$."
  },
  {
    "id": "0D121TN2",
    "question": "Kí hiệu nào sau đây dùng để viết đúng mệnh đề ``7 là số tự nhiên'' ?",
    "options": [
      "$7 \\subset \\mathbb{N}$",
      "$7 \\in \\mathbb{N}$",
      "$7&lt;\\mathbb{N}$",
      "$7 \\leq \\mathbb{N}$"
    ],
    "answer": 1,
    "explain": "Mệnh đề đúng là $7 \\in \\mathbb{N}$."
  },
  {
    "id": "0D121TN3",
    "question": "Kí hiệu nào sau đây dùng để viết đúng mệnh đề ``$\\sqrt{2}$ không phải là số hữu tỉ''?",
    "options": [
      "$\\sqrt{2} \\neq \\mathbb{Q}$",
      "$\\sqrt{2} \\not \\subset \\mathbb{Q}$",
      "$\\sqrt{2} \\notin \\mathbb{Q}$",
      "$\\sqrt{2} \\in \\mathbb{Q}$"
    ],
    "answer": 2,
    "explain": "Khẳng định đúng là $\\sqrt{2} \\notin \\mathbb{Q}$."
  },
  {
    "id": "0D123TN3",
    "question": "Cho tập hợp $A=\\left\\lbrace x \\in \\mathbb{R} :\\left(x^{2}-1\\right)\\left(x^{2}+2\\right)=0\\right\\rbrace$. Các phần tử của tập $A$ là",
    "options": [
      "$A=\\{1\\}$",
      "$A=\\{-1 ; 1\\}$",
      "$A=\\left\\lbrace \\pm \\sqrt{2} ;\\pm 1\\right\\rbrace $",
      "$A=\\{-1\\}$"
    ],
    "answer": 1,
    "explain": "Ta có $\\left(x^{2}-1\\right)\\left(x^{2}+2\\right)=0\\Leftrightarrow x^2-1=0 \\text{ hoặc } x^2+2=0\\Leftrightarrow x^2=1 \\text{ hoặc } x^2=-2\\Leftrightarrow x=\\pm1 \\text{ hoặc } x\\in\\varnothing.$<br>  Vì $x\\in\\mathbb{R}$ nên $A=\\{-1 ; 1\\}$."
  },
  {
    "id": "0D123TN4",
    "question": "Cho tập hợp $X=\\left\\lbrace x \\in \\mathbb{N} :(x+2)\\left(2 x^{2}-5 x+3\\right)=0\\right\\rbrace$. Các phần tử của tập $X$ là",
    "options": [
      "$X=\\{-2 ; 1\\}$",
      "$X=\\{1\\}$",
      "$X=\\left\\lbrace -2 ; 1 ; \\dfrac{3}{2}\\right\\rbrace$",
      "$X=\\left\\lbrace 1 ; \\dfrac{3}{2}\\right\\rbrace$"
    ],
    "answer": 1,
    "explain": "Ta có $(x+2)\\left(2 x^{2}-5 x+3\\right)=0\\Leftrightarrow x+2=0 \\text{ hoặc } 2 x^{2}-5 x+3=0\\Leftrightarrow x=-2 \\text{ hoặc } x=1,x=\\dfrac{3}{2}.$<br>  Vì $x\\in\\mathbb{N}$ nên $X=\\{1\\}$."
  },
  {
    "id": "0D121TN5",
    "question": "Cho tập hợp $X=\\left\\lbrace x\\in\\mathbb{Z}\\mid x^4-6x^2+8=0\\right\\rbrace$. Các phần tử của tập $X$ là",
    "options": [
      "$X=\\{-2 ; 2\\}$",
      "$X=\\{-\\sqrt 2;\\sqrt 2\\}$",
      "$X=\\{\\sqrt 2; 2\\}$",
      "$X=\\{-2 ;-\\sqrt 2;\\sqrt 2; 2\\}$"
    ],
    "answer": 0,
    "explain": "Ta có $x^4-6x^2+8=0\\Leftrightarrow (x^2-3)^2=1\\Leftrightarrow x^2=4 \\text{ hoặc } x^2=2\\Leftrightarrow x=\\pm2 \\text{ hoặc } x=\\pm\\sqrt{2}.$<br>  Vì $x\\in \\mathbb{Z}$ nên $x=\\pm 2$."
  },
  {
    "id": "0D123TN6",
    "question": "Cho tập hợp $X=\\left\\lbrace x\\in\\mathbb{Q}\\mid\\left(x^2-x-6\\right)\\left(x^2-5\\right)=0\\right\\rbrace$. Các phần tử của tập $X$ là",
    "options": [
      "$X=\\{\\sqrt 5; 3\\}$",
      "$X=\\{-\\sqrt 5;-2 ;\\sqrt 5; 3\\}$",
      "$X=\\{-2 ; 3\\}$",
      "$X=\\{x\\in\\mathbb{Q}\\mid-\\sqrt 5\\leq x\\leq 3\\}$"
    ],
    "answer": 2,
    "explain": "Ta có $\\left(x^2-x-6\\right)\\left(x^2-5\\right)=0\\Leftrightarrow x^2-x-6=0 \\text{ hoặc } x^2-5=0\\Leftrightarrow x=-2 \\text{ hoặc } x=3 \\text{ hoặc } x=\\pm \\sqrt{5}\\notin \\mathbb{Q}.$"
  },
  {
    "id": "0D121TN7",
    "question": "Hãy liệt kê các phần tử của tập hợp $M=\\{x\\in\\mathbb{N}~\\text{sao cho}~\\sqrt x ~\\text{là ước của} ~8\\}$",
    "options": [
      "$M=\\{1 ; 2 ; 4 ; 8\\}$",
      "$M=\\{0 ; 1 ; 2 ; 4 ; 8\\}$",
      "$M=\\{1 ; 4 ; 16 ; 64\\}$",
      "$M=\\{0 ; 1 ; 4 ; 16 ; 64\\}$"
    ],
    "answer": 2,
    "explain": "Ta có $8\\not\\vdots\\sqrt{2}$ do đó loại $M=\\{1 ; 2 ; 4 ; 8\\}$ và $M=\\{0 ; 1 ; 2 ; 4 ; 8\\}$.<br>  Ta có $0$ không là ước của $8$ nên loại $M=\\{0 ; 1 ; 4 ; 16 ; 64\\}$.<br>  Chỉ có $M=\\{1 ; 4 ; 16 ; 64\\}$ thỏa đề bài."
  },
  {
    "id": "0D121TN8",
    "question": "Số phần tử của tập hợp $A=\\left\\lbrace k^2+1|k\\in\\mathbb{Z},| k\\mid\\leq 2\\right\\rbrace$ là",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$5$"
    ],
    "answer": 2,
    "explain": "Ta có $k\\in\\mathbb{Z}$ và $| k\\mid\\leq 2$ nên $k\\in \\{-2 ; -1 ; 0 ; 1 ; 2\\}$.<br>  Thay các giá trị của $k$ vào $k^2+1$ ta được $3$ giá trị là $5; 2;0$."
  },
  {
    "id": "0D121TN9",
    "question": "Cho tập hợp $X=\\{0 ; 1 ; 2 ; a ; b\\}$. Số phần tử của tập $X $ là",
    "options": [
      "$3$",
      "$2$",
      "$5$",
      "$4$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "0D121TN10",
    "question": "Cho tập hợp $X=\\{2 ; 3 ; 4\\}$. Tập $X$ có bao nhiêu tập hợp con?",
    "options": [
      "$3$",
      "$6$",
      "$8$",
      "$9$"
    ],
    "answer": 2,
    "explain": "Số tập con của $X$ là $2^3=8$."
  },
  {
    "id": "0D121TN11",
    "question": "Tập $A=\\{0 ; 2 ; 4 ; 6\\}$ có bao nhiêu tập hợp con có đúng hai phần tử?",
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "explain": "Số tập con của $X$ có hai phần tử là   $\\{0 ; 2\\}$, $\\{0 ; 4\\}$, $\\{0 ; 6\\}$, $\\{2 ; 4\\}$, $\\{2 ; 6\\}$, $\\{4 ; 6\\}$."
  },
  {
    "id": "0D123TN12",
    "question": "Cho hai tập hợp $A =(-\\infty; m+1]$ và $B = (-1;+\\infty)$. Điều kiện để $(A \\cup B) = \\mathbb{R}$ là",
    "options": [
      "$m &gt;-1$",
      "$m \\ge -2$",
      "$m \\ge 0$",
      "$m &gt;-2$"
    ],
    "answer": 1,
    "explain": "$(A \\cup B) = \\mathbb{R} \\Leftrightarrow -1 \\leq m+1 \\Leftrightarrow m\\geq-2$."
  },
  {
    "id": "0D121TN13",
    "question": "Cho hai tập hợp $A =[1-2m;m+3]$ và $B = \\{ x \\in \\mathbb{R} | x \\ge 8-5m\\}$. Tìm tất cả các giá trị của tham số $m$ để $A \\cap B =\\varnothing$.",
    "options": [
      "$m \\ge \\dfrac{5}{6}$",
      "$m &lt; -\\dfrac{2}{3}$",
      "$m &lt;\\dfrac{5}{6}$",
      "$-\\dfrac{2}{3} \\le m &lt; \\dfrac{5}{6}$"
    ],
    "answer": 2,
    "explain": "<br>- Nếu $A =\\varnothing \\Leftrightarrow 1-2m &gt;m+3 \\Leftrightarrow m &lt; -\\dfrac{2}{3} $ thì $A \\cap B =\\varnothing$.<br>- Nếu $A \\ne \\varnothing \\Leftrightarrow 1-2m \\le m+3 \\Leftrightarrow m \\ge -\\dfrac{2}{3}$. Khi đó  $A \\cap B =\\varnothing \\Leftrightarrow m+3 &lt;8-5m \\Leftrightarrow m &lt; \\dfrac{5}{6}.$  Vậy tất cả $m$ thỏa bài toán là $m &lt; \\dfrac{5}{6}$."
  }
];
