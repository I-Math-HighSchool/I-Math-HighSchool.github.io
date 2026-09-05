// =========================================================================
// KHỐI DỮ LIỆU: 1D15 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D15 = [
  {
    "id": "1D155DS1",
    "question": "Cho đồ thị hàm số $y=f(x)=\\sin x$ như hình vẽ.  <br><img src=\"data/11/1D1/im1D15/1D15_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f\\left(-\\dfrac{3\\pi}{2}\\right)=-1$",
        "answer": false
      },
      {
        "text": "$\\sin 2\\pi=0$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[-3\\pi;3\\pi]$ phương trình $\\sin x=-\\dfrac{1}{3}$ có $6$ nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Phương trình $\\sin x=-\\dfrac{1}{3}$ có $2024$ nghiệm trên nửa khoảng $[0;2025\\pi)$",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào đồ thị ta có $f\\left(-\\dfrac{3\\pi}{2}\\right)=1$.<br>- Ta có $\\sin 2\\pi=2\\sin\\pi\\cdot\\cos\\pi=2\\cdot 0\\cdot 1=0$.<br>- <br><img src=\"data/11/1D1/im1D15/1D15_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Trên đoạn $[-3\\pi;3\\pi]$, số nghiệm của phương trình $\\sin x=-\\dfrac{1}{3}$ chính là số hoành độ giao điểm của đồ thị hàm số $y=\\sin x$ và đường thẳng $y=-\\dfrac{1}{3}$.<br>  Quan sát đồ thị ta thấy số hoành độ giao điểm của đồ thị hàm số $y=\\sin x$ và đường thẳng $y=-\\dfrac{1}{3}$ trên $[-3\\pi;3\\pi]$ là $6$.<br>- Quan sát đồ thị, trên $[0;2\\pi]$ phương trình $\\sin x=-\\dfrac{1}{3}$ có $2$ nghiệm.<br>  Suy ra trên $[0;2024\\pi]$ phương trình $\\sin x=-\\dfrac{1}{3}$ có $2\\cdot 1012=2024$ nghiệm.<br>  Trên $[2024\\pi;2025\\pi)$ phương trình $\\sin x=-\\dfrac{1}{3}$ vô nghiệm.<br>  Vậy Phương trình $\\sin x=-\\dfrac{1}{3}$ có $2024$ nghiệm trên nửa khoảng $[0;2025\\pi)$."
  },
  {
    "id": "1D153DS2",
    "question": "Cho hàm số $f(x)=\\cos 2x$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho là hàm số chẵn",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đối xứng qua trục $Ox$",
        "answer": false
      },
      {
        "text": "Nghiệm của phương trình $\\cos 2x=1$ là $x=k \\pi$, $k \\in \\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "Công thức $\\cos 2x=1-2 \\cos^2 x$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Hàm số $f(x)=\\cos 2x$ là hàm số chẵn.<br>- <strong>Sai</strong>.<br>  Vì $f(x)=\\cos 2x$ là hàm số chẵn nên đồ thị hàm số đối xứng qua trục $Oy$<br>- <strong>Đúng</strong>.<br>  $\\cos 2x=1\\Leftrightarrow 2x=k2\\pi\\Leftrightarrow x=k\\pi$, $k\\in\\mathbb{Z}$.<br>- <strong>Sai</strong>.<br>  $\\cos 2x=2 \\cos^2 x-1$."
  },
  {
    "id": "1D153DS3",
    "question": "Cho phương trình lượng giác $2\\sin x=\\sqrt2$.\\quad$(\\ast)$",
    "subQuestions": [
      {
        "text": "Phương trình tương đương với phương trình $(\\ast)$ là $\\sin x=\\sin\\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Phương trình $(\\ast)$ có nghiệm là: $x=\\dfrac{3\\pi}{4}+k2\\pi$; $x=\\dfrac{\\pi}{3}+k2\\pi (k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Phương trình $(\\ast)$ có nghiệm dương nhỏ nhất bằng $\\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Số nghiệm của phương trình $(\\ast)$ trong khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là hai nghiệm",
        "answer": false
      }
    ],
    "explain": "<br>- Phương trình $(\\ast)$ tương đương  $2\\sin x=\\sqrt2 \\Leftrightarrow \\sin x=\\dfrac{\\sqrt2}{2} \\Leftrightarrow \\sin x=\\sin\\dfrac{\\pi}{4}.$<br>- Phương trình $(\\ast)$ có nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi \\text{ hoặc } x=\\pi -\\dfrac{\\pi}{4}+k2\\pi \\Leftrightarrow x=\\dfrac{\\pi}{4}+k2\\pi \\text{ hoặc } x=\\dfrac{3\\pi}{4}+k2\\pi$ ($k \\in \\mathbb{Z}$).<br>- Với nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi$, để $x&gt;0$ thì $k \\geq 0$. Suy ra nghiệm dương nhỏ nhất là $x=\\dfrac{\\pi}{4}+0\\cdot 2\\pi=\\dfrac{\\pi}{4}$.<br>  Với nghiệm $x=\\dfrac{3\\pi}{4}+k2\\pi$, để $x&gt;0$ thì $k \\geq 0$. Suy ra nghiệm dương nhỏ nhất là $x=\\dfrac{3\\pi}{4}+0\\cdot 2\\pi=\\dfrac{3\\pi}{4}$.<br>  Suy ra nghiệm dương nhỏ nhất của phương trình $(\\ast)$ là $x=\\dfrac{\\pi}{4}$.<br>- Để nghiệm của phương trình $(\\ast)$ thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.  <br>- [\\it TH 1.]<br>- Với nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi$, ta có  $-\\dfrac{\\pi}{2} &lt; \\dfrac{\\pi}{4}+k2\\pi &lt; \\dfrac{\\pi}{2} \\Leftrightarrow -0{,}375 &lt; k &lt; 0{,}125.$  Do $k \\in \\mathbb{Z}$ nên $k=0$.<br>  Suy ra có một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là $x=\\dfrac{\\pi}{4}$.<br>- Với nghiệm $x=\\dfrac{3\\pi}{4}+k2\\pi$, ta có  $-\\dfrac{\\pi}{2} &lt; \\dfrac{3\\pi}{4}+k2\\pi &lt; \\dfrac{\\pi}{2} \\Leftrightarrow -0{,}625 &lt; k &lt; -0{,}125.$  Do $k \\in \\mathbb{Z}$ nên không có $k$ thỏa mãn.<br>  Suy ra không có nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.  Vậy phương trình $(\\ast)$ có một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$."
  },
  {
    "id": "1D153DS4",
    "question": "Cho hàm số $y=\\sin x$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Tập giá trị của hàm số là $[-1;1]$",
        "answer": true
      },
      {
        "text": "$x=2025 \\pi$ là một nghiệm của phương trình $\\sin x=0$",
        "answer": true
      },
      {
        "text": "Phương trình $\\sin x =0$ có họ nghiệm duy nhất là $x=k2 \\pi$ ($k \\in \\mathbb{Z})$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập xác định của hàm số $y=\\sin x$ là $\\mathbb{R}$.<br>- Tập giá trị của hàm số $y=\\sin x$ là $[-1;1]$.<br>- $\\sin x = 0 \\Leftrightarrow x = k \\pi$, $(k \\in \\mathbb{Z})$.<br>  Chọn $k=2025$, ta được $x=2025 \\pi$ là một nghiệm của phương trình $\\sin x=0$.<br>- Phương trình $\\sin x =0$ có họ nghiệm duy nhất là $x=k \\pi$ ($k \\in \\mathbb{Z})$."
  },
  {
    "id": "1D153DS5",
    "question": "Trên đường tròn lượng giác lấy $2$ điểm $M$, $N$ có hoành độ $\\dfrac{1}{2}$. Xét phương trình lượng giác $2\\cos x=\\sqrt{3}$. $(*)$<br><img src=\"data/11/1D1/im1D15/1D15_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm $M$, $N$ trong hình vẽ trên biểu diễn các nghiệm của phương trình $(*)$",
        "answer": false
      },
      {
        "text": "Phương trình $(*)$ tương đương với phương trình $\\cos x=\\dfrac{\\sqrt{3}}{2}$",
        "answer": true
      },
      {
        "text": "Phương trình $(*)$ có một nghiệm là $\\dfrac{\\pi}{3}$",
        "answer": false
      },
      {
        "text": "Trong khoảng $\\left[0; \\dfrac{\\pi}{2}\\right]$ phương trình $(*)$ có một nghiệm duy nhất",
        "answer": true
      }
    ],
    "explain": "<br>- Sai.<br>  Từ phương trình (*), ta có $\\cos x=\\dfrac{\\sqrt{3}}{2}$.<br>  Các nghiệm của phương trình là $x=\\dfrac{\\pi}{6}+k2\\pi$ và $x=-\\dfrac{\\pi}{6}+k2\\pi$, $k\\in \\mathbb{Z}$.<br>  Điểm $M$ trên đường tròn lượng giác có hoành độ $\\dfrac{1}{2}$ và nằm ở góc phần tư thứ nhất, tương ứng với góc $\\dfrac{\\pi}{3}$.<br>  Điểm $N$ trên đường tròn lượng giác có hoành độ $\\dfrac{1}{2}$ và nằm ở góc phần tư thứ tư, tương ứng với góc $-\\dfrac{\\pi}{3}$.<br>- Đúng.<br>  Chia cả hai vế của phương trình $2\\cos x=\\sqrt{3}$ cho $2$, ta được $\\cos x=\\dfrac{\\sqrt{3}}{2}$.<br>- Sai.<br>  Phương trình $(*)$ có nghiệm $x=\\dfrac{\\pi}{6}+k2\\pi$ và $x=-\\dfrac{\\pi}{6}+k2\\pi$, $k\\in \\mathbb{Z}$.<br>  Vậy phương trình $(*)$ không có nghiệm $x=\\dfrac{\\pi}{3}$.<br>- Đúng.<br>  Phương trình $(*)$ có nghiệm $x=\\dfrac{\\pi}{6}+k2\\pi$ và $x=-\\dfrac{\\pi}{6}+k2\\pi$, $k\\in \\mathbb{Z}$.<br>  Nghiệm $x=\\dfrac{\\pi}{6}+k2\\pi$ nằm trong khoảng $\\left[0; \\dfrac{\\pi}{2}\\right]$ khi $k=0$.<br>  Nghiệm $x=-\\dfrac{\\pi}{6}+k2\\pi$ không nằm trong khoảng $\\left[0; \\dfrac{\\pi}{2}\\right]$ với mọi giá trị của $k$.<br>  Vậy phương trình $(*)$ chỉ có một nghiệm trong khoảng $\\left[0; \\dfrac{\\pi}{2}\\right]$."
  },
  {
    "id": "1D155DS6",
    "question": "Cho hai hàm số $y=f(x)=\\sin x$ và $y=g(x)=\\cos\\left(2x+\\dfrac{\\pi}{3}\\right)$.",
    "subQuestions": [
      {
        "text": "Hàm số $=f(x)$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Giá trị $f\\left(\\dfrac{\\pi}{6}\\right)=g\\left(\\dfrac{\\pi}{6}\\right)$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)=g(x)$ có đúng $4$ nghiệm trong khoảng $[0;2\\pi]$",
        "answer": true
      },
      {
        "text": "Phương trình $g(x)=1$ có tập nghiệm $S=\\left\\{\\dfrac{\\pi}{6}+k\\pi,k\\in\\mathbb{Z}\\right\\}$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số $=f(x)$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>- Ta có $f\\left(\\dfrac{\\pi}{6}\\right)=\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$.<br>  Đồng thời $g\\left(\\dfrac{\\pi}{6}\\right)=\\cos\\left(2\\cdot \\dfrac{\\pi}{6}+\\dfrac{\\pi}{3}\\right)=-\\dfrac{1}{2}$.<br>  Do đó, $f\\left(\\dfrac{\\pi}{6}\\right)=-g\\left(\\dfrac{\\pi}{6}\\right)$.<br>- Giải phương trình $f(x)=g(x)$ ta có  $\\cos\\left(2x+\\dfrac{\\pi}{3}\\right)=\\sin x \\Leftrightarrow \\cos\\left(2x+\\dfrac{\\pi}{3}\\right)=\\cos\\left(\\dfrac{\\pi}{2}-x\\right)$<br>$\\Leftrightarrow 2x+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{2}-x+k2\\pi \\text{ hoặc } 2x+\\dfrac{\\pi}{3}=-\\dfrac{\\pi}{2}+x+k2\\pi$<br>$\\Leftrightarrow 3x=\\dfrac{\\pi}{6}+k2\\pi \\text{ hoặc } x=-\\dfrac{5\\pi}{6}+k2\\pi$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{18}+\\dfrac{k2\\pi}{3} \\text{ hoặc } x=-\\dfrac{5\\pi}{6}+k2\\pi,k\\in\\mathbb{Z}.$  <br>- Với $0\\le \\dfrac{\\pi}{18}+\\dfrac{k2\\pi}{3}\\le 2\\pi\\Leftrightarrow -\\dfrac{1}{2}\\le k\\le \\dfrac{35}{12}$.<br>  Do $k\\in\\mathbb{Z}$ nên $k\\in\\{0;1;2\\}$ suy ra $x\\in\\left\\{\\dfrac{\\pi}{18};\\dfrac{13\\pi }{18};\\dfrac{25\\pi}{18}\\right\\}$.<br>- Với $0\\le-\\dfrac{5\\pi}{6}+k2\\pi\\le 2\\pi\\Leftrightarrow \\dfrac{5}{12}\\le k\\le \\dfrac{17}{12}$.<br>  Do $k\\in\\mathbb{Z}$ nên $k\\in\\{1\\}$, suy ra $x=\\dfrac{7\\pi}{6}$.  Vậy phương trình $f(x)=g(x)$ có bốn nghiệm phân biệt thuộc đoạn $[0;2\\pi]$.<br>- Ta có  $g(x)=1 \\Leftrightarrow \\cos\\left(2x+\\dfrac{\\pi}{3}\\right)=1$<br>$\\Leftrightarrow 2x+\\dfrac{\\pi}{3}=k2\\pi$<br>$\\Leftrightarrow x=-\\dfrac{\\pi}{6}+k\\pi, k\\in\\mathbb{Z}.$  Phương trình $g(x)=1$ có tập nghiệm $S=\\left\\{-\\dfrac{\\pi}{6}+k\\pi,\\,k\\in\\mathbb{Z}\\right\\}$"
  },
  {
    "id": "1D153DS7",
    "question": "Cho phương trình lượng giác $2 \\cos x=\\sqrt{3}$. Khi đó",
    "subQuestions": [
      {
        "text": "Phương trình có nghiệm $x= \\pm \\dfrac{\\pi}{6}+k 2 \\pi, (k \\in \\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có $4$ nghiệm",
        "answer": false
      },
      {
        "text": "Tổng các nghiệm của phương trình trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ bằng $\\dfrac{25 \\pi}{6}$",
        "answer": true
      },
      {
        "text": "Trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có nghiệm nhỏ nhất bằng $\\dfrac{\\pi}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Phương trình tương đương với $\\cos x=\\dfrac{\\sqrt{3}}{2}=\\cos \\dfrac{\\pi}{6}\\Leftrightarrow x=\\pm \\dfrac{\\pi}{6}+k2\\pi, k\\in \\mathbb{Z}$.<br>- Xét  <br>- $0\\le \\dfrac{\\pi}{6}+k2\\pi\\le \\dfrac{5\\pi}{2}\\Leftrightarrow -\\dfrac{1}{12}\\le k\\le \\dfrac{7}{6}$ mà $k\\in \\mathbb{Z}$ nên $k\\in \\{0;1\\}$.<br>  Suy ra $x=\\dfrac{\\pi}{6}$ và $x=\\dfrac{13\\pi}{6}$.<br>- $0\\le -\\dfrac{\\pi}{6}+k2\\pi\\le \\dfrac{5\\pi}{2}\\Leftrightarrow \\dfrac{1}{12}\\le k\\le \\dfrac{4}{3}$ mà $k\\in \\mathbb{Z}$ nên $k\\in \\{1\\}$.<br>  Suy ra $x=\\dfrac{11\\pi}{6}$.  Vậy trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có $3$ nghiệm.<br>- Tổng các nghiệm trên đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ bằng $\\dfrac{\\pi}{6}+\\dfrac{13\\pi}{6}+\\dfrac{11\\pi}{6}=\\dfrac{25\\pi}{6}$.<br>- Trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có nghiệm nhỏ nhất bằng $\\dfrac{\\pi}{6}$."
  },
  {
    "id": "1D153DS8",
    "question": "Cho hàm số $y = 3 + 2\\cos x$.",
    "subQuestions": [
      {
        "text": "Phương trình $y=0$ tương đương $\\cos x = -\\dfrac{3}{2}$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số là $3$",
        "answer": false
      },
      {
        "text": "Phương trình có nghiệm là $x = \\arccos(-\\dfrac{3}{2}) + k2\\pi \\text{ hoặc } x = -\\arccos(-\\dfrac{3}{2}) + k2\\pi (k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số $\\mathscr D = \\mathbb{R}$",
        "answer": true
      }
    ],
    "explain": "<br>- $y = 0 \\Leftrightarrow 3 + 2\\cos x = 0 \\Leftrightarrow \\cos x = -\\dfrac{3}{2}$.<br>- Tập giá trị của $\\cos x$ là $T_{1} = \\left[ -1; 1 \\right]$.<br>  Suy ra $3+2\\cdot(-1)\\leq 3 + 2\\cos x \\leq 3+2\\cdot 1\\Leftrightarrow 1\\leq y \\leq 5$. Vậy $\\min y = 1$.<br>- Ta có  $y = 0 \\Leftrightarrow \\cos x = -\\dfrac{3}{2} &lt; -1$ nên phương trình vô nghiệm.<br>- Tập xác định của hàm số $\\mathscr D = \\mathbb{R}$."
  },
  {
    "id": "1D153DS9",
    "question": "Cho hàm số $g(x)=\\sin x$.",
    "subQuestions": [
      {
        "text": "Tập xác định cùa $g(x)$ là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $g(x)$ là hàm chẵn",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của $g(x)$ là $2$",
        "answer": false
      },
      {
        "text": "Nghiệm dương nhỏ nhất của phương trình $g(x)=\\dfrac{\\sqrt{3}}{2}$ có dạng $\\dfrac{a}{b} \\pi$ trong đó $\\dfrac{a}{b}$ là phân số tối giản, $a$; $b \\in \\mathbb{N}^*$ thoả mãn $a^{2}+b^{2}=10$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập xác định của $g(x)$ là $\\mathscr{D}=\\mathbb{R}$.<br>- <br>- $\\forall x\\in D\\Rightarrow -x\\in D$.<br>- $g(-x)=\\sin (-x)=-\\sin x=-g(x)$.  Suy ra $g(x)$ là hàm lẻ.<br>- Ta có $-1\\le \\sin x\\le 1$.<br>  Suy ra $-1\\le g(x)\\le 1$.<br>  Do đó giá trị lớn nhất của $g(x)$ là $1$.<br>- Ta có   $g(x)=\\dfrac{\\sqrt{3}}{2}$<br>$\\Leftrightarrow \\sin x=\\dfrac{\\sqrt{3}}{2}$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x=\\dfrac{2\\pi}{3}+k2\\pi,\\ k\\in \\mathbb{Z}.$  Suy ra nghiệm dương nhỏ nhất là $\\dfrac{\\pi}{3}$.<br>  Do đó $a^2+b^2=1^2+3^2=10$."
  },
  {
    "id": "1D153DS10",
    "question": "",
    "subQuestions": [
      {
        "text": "Phương trình $\\cos x=m$ vô nghiệm khi và chỉ khi $-1 \\le m \\le 1$",
        "answer": false
      },
      {
        "text": "$\\dfrac{\\pi}{5} \\text{ rad} = 35^{\\circ}$",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số $y=\\cot x$ là $\\mathscr{D}=\\mathbb{R}\\setminus\\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "answer": true
      },
      {
        "text": "Điểm biểu diễn của góc lượng giác $\\dfrac{41\\pi}{5}$ trên đường tròn lượng giác là điểm $M$ thuộc góc phần tư thứ $I$",
        "answer": true
      }
    ],
    "explain": "<br>- Phương trình $\\cos x=m$ vô nghiệm khi và chỉ khi $m\\in (-\\infty;-1)\\cup (1;+\\infty)$.<br>- $\\dfrac{\\pi}{5} \\text{ rad} =36^\\circ$.<br>- Hàm số $y=\\cot x$ xác định khi và chỉ khi $\\sin x\\ne 0\\Leftrightarrow x\\ne k\\pi$, $k \\in \\mathbb{Z}$.<br>  Khi đó tập xác định của hàm số $y=\\cot x$ là $\\mathscr{D}=\\mathbb{R}\\setminus\\{k\\pi, k \\in \\mathbb{Z}\\}$.<br>- Ta có $\\dfrac{41\\pi}{5}=8\\pi+\\dfrac{\\pi}{5}$. Do đó điểm biểu diễn của góc lượng giác $\\dfrac{41\\pi}{5}$ trên đường tròn lượng giác là điểm $M$ thuộc góc phần tư thứ $I$."
  },
  {
    "id": "1D153DS11",
    "question": "Cho hàm số $f(x) = 2\\sin x + 1$",
    "subQuestions": [
      {
        "text": "Nghiệm âm lớn nhất của phương trình $f(x) = 0$ là $x = -\\dfrac{5\\pi}{6}$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x) = 0 \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k2\\pi \\text{ hoặc } x = \\dfrac{7\\pi}{6} + k2\\pi(k \\in \\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Hàm số tuần hoàn với chu kỳ $T = 2\\pi$",
        "answer": true
      },
      {
        "text": "Tổng giá trị nhỏ nhất và lớn nhất của hàm số bằng $0$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $f(x) = 0 \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k2\\pi \\text{ hoặc } x = \\dfrac{7\\pi}{6} + k2\\pi(k \\in \\mathbb{Z})$.<br>  Suy ra nghiệm âm lớn nhất là $-\\dfrac{\\pi}{6}$.<br>- $f(x) = 0 \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k2\\pi \\text{ hoặc } x = \\dfrac{7\\pi}{6} + k2\\pi(k \\in \\mathbb{Z})$.<br>- Hàm số $y = \\sin x$ tuần hoàn với chu kỳ $2\\pi$ nên $f(x)$ cũng vậy.<br>- Ta có $-1\\leq2\\sin x+1\\leq 3$ nên $\\min f(x)=-1$ và $\\max f(x)=3$. <br>  Do đó $\\min f(x)+\\max f(x)=-1+3=2$."
  },
  {
    "id": "1D153DS12",
    "question": "Các mệnh đề sau là đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "$\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$",
        "answer": false
      },
      {
        "text": "$\\tan x = \\sqrt{3} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "$\\cot x = -1 \\Leftrightarrow x = \\frac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}$",
        "answer": false
      }
    ],
    "explain": "<br>- $\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$.<br>- $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$.<br>- $\\tan x = \\sqrt{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$.<br>- $\\cot x = -1 \\Leftrightarrow x = -\\dfrac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$."
  },
  {
    "id": "1D153DS13",
    "question": "Cho hàm số $y=f(x)=\\sin 2 x$.",
    "subQuestions": [
      {
        "text": "$\\forall x \\in\\left(0 ; \\dfrac{\\pi}{4}\\right)$ thì $f(x)&gt;0$",
        "answer": true
      },
      {
        "text": "$f\\left(\\dfrac{\\pi}{2}\\right)=1$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)=0$ có nghiệm là $x=k \\dfrac{\\pi}{2} ; k \\in \\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "Tập xác định của hàm số đã cho là $\\mathscr{D}=\\mathbb{R}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $x \\in\\left(0 ; \\dfrac{\\pi}{4}\\right)\\Rightarrow 2x \\in\\left(0 ; \\dfrac{\\pi}{2}\\right)\\Rightarrow f(x)=\\sin 2 x&gt;0,\\forall x \\in\\left(0 ; \\dfrac{\\pi}{4}\\right)$.<br>- Ta có $f\\left(\\dfrac{\\pi}{2}\\right)=\\sin \\pi =0$.<br>- Ta có $f(x)=0\\Leftrightarrow \\sin 2x =0\\Leftrightarrow 2x=k\\pi \\Leftrightarrow x=k \\dfrac{\\pi}{2} ; k \\in \\mathbb{Z} $.<br>- Tập xác định của hàm số đã cho là $\\mathscr{D}=\\mathbb{R}$."
  },
  {
    "id": "1D155DS14",
    "question": "Cho hai hàm số $f(x)=\\sin \\left(x+\\dfrac{\\pi}{4}\\right)$ và $g(x)=\\sin x$, khi đó",
    "subQuestions": [
      {
        "text": "Nghiệm của phương trình $f(x)=g(x)$ là $x=\\dfrac{3 \\pi}{8}+k \\pi \\; (k \\in \\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Hàm số $g(x)=\\sin x$ tuần hoàn với chu kỳ $2 \\pi$",
        "answer": true
      },
      {
        "text": "Tính $f\\left(\\dfrac{3 \\pi}{4}\\right)+g\\left(\\dfrac{\\pi}{2}\\right)=1$",
        "answer": true
      },
      {
        "text": "$\\sin \\left(x+\\dfrac{\\pi}{4}\\right)+\\sin x=2 \\sin \\left(x+\\dfrac{\\pi}{8}\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có   $f(x)=g(x) \\Leftrightarrow \\sin \\left(x+\\dfrac{\\pi}{4}\\right)=\\sin x$<br>$\\Leftrightarrow x+\\dfrac{\\pi}{4}=x+k2\\pi \\text{ hoặc } x+\\dfrac{\\pi}{4}=\\pi-x+k2\\pi$<br>$\\Leftrightarrow 0x=-\\dfrac{\\pi}{4}+k2\\pi \\; \\text{(vô nghiệm)} \\text{ hoặc } 2x=\\dfrac{3\\pi}{4}+k2\\pi$<br>$\\Leftrightarrow x=\\dfrac{3\\pi}{8}+k\\pi \\; (k\\in \\mathbb{Z}).$<br>- <strong>Đúng</strong>. Hàm số lượng giác $g(x)=\\sin x$ tuần hoàn với chu kỳ $2 \\pi$.<br>- <strong>Đúng</strong>. Ta có $f\\left(\\dfrac{3 \\pi}{4}\\right)+g\\left(\\dfrac{\\pi}{2}\\right)=\\sin \\left(\\dfrac{3\\pi}{4}+\\dfrac{\\pi}{4}\\right)+\\sin\\dfrac{\\pi}{2}=1$.<br>- <strong>Sai</strong>. Ta có   $\\sin \\left(x+\\dfrac{\\pi}{4}\\right)+\\sin x = 2\\sin\\left(\\dfrac{x+\\dfrac{\\pi}{4}+x}{2}\\right)\\cos\\left(\\dfrac{x+\\dfrac{\\pi}{4}-x}{2}\\right)$<br>$= 2\\sin\\left(x+\\dfrac{\\pi}{8}\\right)\\cos\\dfrac{\\pi}{8}$<br>$\\neq 2 \\sin \\left(x+\\dfrac{\\pi}{8}\\right).$"
  },
  {
    "id": "1D155DS15",
    "question": "Cho hai hàm số $y=f(x)=\\cos x$ và $y=g(x)=\\cos\\left(x+\\dfrac{\\pi}{3}\\right)$. Xét tính đúng sai các phát biểu sau",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)=\\cos x$ là hàm số tuần hoàn",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)=\\cos x$ là hàm số chẵn",
        "answer": true
      },
      {
        "text": "Phương trình $\\cos x=1$ có họ nghiệm là $x=k\\pi$,($k \\in \\mathbb{Z}$)",
        "answer": false
      },
      {
        "text": "Phương trình $\\cos x=\\cos\\left(x+\\dfrac{\\pi}{3}\\right)$ có họ nghiệm là $x=\\dfrac{\\pi}{6}+k\\pi$,($k \\in \\mathbb{Z}$)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Hàm số $y=\\cos x$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có  $\\cos(x+2\\pi)=\\cos x$. <br>  Vậy $y=\\cos x$ là hàm số tuần hoàn với chu kì $T=2\\pi$.<br>- <strong>Đúng</strong>.<br>  Hàm số $y=\\cos x$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có  $\\cos(-x)=\\cos x$. <br>  Vậy $y=\\cos x$ là hàm số chẵn.<br>- <strong>Sai</strong>.<br>  Phương trình $\\cos x=1 \\Leftrightarrow x=k2\\pi$,($k \\in \\mathbb{Z}$).<br>- <strong>Sai</strong>.<br>  Ta có  $\\cos x=\\cos\\left(x+\\dfrac{\\pi}{3}\\right) \\Leftrightarrow x=x+\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x=-\\left(x+\\dfrac{\\pi}{3}\\right)+k2\\pi$<br>$\\Leftrightarrow 0x=\\dfrac{\\pi}{3}+k2\\pi \\quad \\text{(vô nghiệm)} \\text{ hoặc } 2x=-\\dfrac{\\pi}{3}+k2\\pi$<br>$\\Leftrightarrow 2x=-\\dfrac{\\pi}{3}+k2\\pi$<br>$\\Leftrightarrow x=-\\dfrac{\\pi}{6}+k\\pi, \\quad(k \\in \\mathbb{Z}).$  Do đó, họ nghiệm $x=\\dfrac{\\pi}{6}+k\\pi$ là sai."
  },
  {
    "id": "1D153DS16",
    "question": "Xét tính đúng, sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Cho $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$. Khi đó $\\sin \\alpha &gt; 0$, $\\cos \\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "Cho $\\sin \\alpha=\\dfrac{1}{3}$ và $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Biết giá trị của $\\cos \\left(\\alpha-\\dfrac{\\pi}{6}\\right)=\\dfrac{1-a \\sqrt{6}}{b}$ với $a, b \\in \\mathbb{N}$ thì $a+b=8$",
        "answer": true
      },
      {
        "text": "Phương trình lượng giác $\\sin \\left(3x+\\dfrac{\\pi}{3}\\right)=-\\dfrac{\\sqrt{3}}{2}$ có nghiệm $x=-\\dfrac{\\pi}{9}+k \\dfrac{2\\pi}{3} \\text{ hoặc } x=\\dfrac{\\pi}{3}+k \\dfrac{2\\pi}{3}(k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$ phương trình $\\sin \\left(3x+\\dfrac{\\pi}{3}\\right)=-\\dfrac{\\sqrt{3}}{2}$ có $3$ nghiệm",
        "answer": false
      }
    ],
    "explain": "<br>- Vì $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$. Khi đó $\\sin \\alpha &lt; 0$, $\\cos \\alpha &lt; 0$.<br>- Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos \\alpha &lt; 0$.<br>  Khi đó $\\cos \\alpha =-\\sqrt{1-\\sin^2\\alpha}=-\\dfrac{2\\sqrt{2}}{3}$.<br>  Do đó  \\[\\cos \\left(\\alpha-\\dfrac{\\pi}{6}\\right)=\\cos\\left(\\dfrac{\\pi}{6}\\right)\\cdot \\cos x+\\sin\\left(\\dfrac{\\pi}{6}\\right)\\cdot \\sin x=\\dfrac{\\sqrt{3}}{2}\\cdot -\\dfrac{2\\sqrt{2}}{3}+\\dfrac{1}{2}\\cdot \\dfrac{1}{3}=\\dfrac{1-2 \\sqrt{6}}{6}.\\]  Suy ra $a=2$, $b=6$. Khi đó $a+b=8$.<br>- Ta có   $\\sin \\left(3x+\\dfrac{\\pi}{3}\\right)=-\\dfrac{\\sqrt{3}}{2} \\Leftrightarrow \\sin \\left(3x+\\dfrac{\\pi}{3}\\right)=\\sin\\left(-\\dfrac{\\pi}{3}\\right)$<br>$\\Leftrightarrow 3x+\\dfrac{\\pi}{3}=-\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } 3x+\\dfrac{\\pi}{3}=\\pi+\\dfrac{\\pi}{3}+k2\\pi$<br>$\\Leftrightarrow x=-\\dfrac{2\\pi}{9}+k \\dfrac{2\\pi}{3} \\text{ hoặc } x=\\dfrac{\\pi}{3}+k \\dfrac{2\\pi}{3}(k \\in \\mathbb{Z}).$<br>- Với $x\\in \\left(0; \\dfrac{\\pi}{2}\\right)$ ta có  <br>- $0&lt;-\\dfrac{2\\pi}{9}+k \\dfrac{2\\pi}{3}&lt;\\dfrac{\\pi}{2}\\Leftrightarrow \\dfrac{1}{3}&lt;k&lt;\\dfrac{13}{12}$. Vì $k \\in \\mathbb{Z}$ nên $k=1\\Rightarrow x=\\dfrac{4\\pi}{9}$.<br>- $0&lt;\\dfrac{\\pi}{3}+k \\dfrac{2\\pi}{3}&lt;\\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{1}{2}&lt;k&lt;\\dfrac{1}{4}$. Vì $k \\in \\mathbb{Z}$ nên $k=0\\Rightarrow x=\\dfrac{\\pi}{3}$.  Vậy trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$ phương trình $\\sin \\left(3x+\\dfrac{\\pi}{3}\\right)=-\\dfrac{\\sqrt{3}}{2}$ có $2$ nghiệm là $\\dfrac{4\\pi}{9}$, $\\dfrac{\\pi}{3}$."
  },
  {
    "id": "1D155DS17",
    "question": "[Chuyên Vĩnh Phúc - Phú Thọ]  Cho các hàm số $f(x)=\\sin x$ và $g(x)=\\cos 2x$. Khi đó, các mệnh đề sau đúng hay sai",
    "subQuestions": [
      {
        "text": "Hàm số $g(x)=\\cos 2x$ có đồ thị nhận trục tung làm trục đối xứng",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)=\\sin x$ đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Đồ thị hai hàm số $f(x)=\\sin x$ và $g(x)=\\cos 2x$ cắt nhau tại hai điểm phân biệt có hoành độ thuộc khoảng $(0;\\pi)$",
        "answer": true
      },
      {
        "text": "Tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất của phương trình $f(x)=g(x)$ là $-\\dfrac{\\pi}{6}$",
        "answer": false
      }
    ],
    "explain": "<br>- $g(-x)=\\cos(-2x)=\\cos 2x=g(x)$ nên $g$ là hàm số chẵn, đồ thị nhận trục tung làm trục đối xứng.<br>- Trên $\\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)$, hàm số $y=\\sin x$ đồng biến nên mệnh đề đúng.<br>- Phương trình hoành độ giao điểm của đồ thị hàm số   \\[  \\sin x=\\cos 2x=1-2\\sin^2 x\\Leftrightarrow 2\\sin^2 x+\\sin x-1=0  \\Leftrightarrow \\sin x=\\dfrac{1}{2} \\text{ hoặc } \\sin x=-1.  \\]  Suy ra $x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi$ hoặc $x=-\\dfrac{\\pi}{2}+k2\\pi$, $k\\in\\mathbb{Z}$.<br>  Do đó trên $(0;\\pi)$ phương trình có hai nghiệm là $x=\\dfrac{\\pi}{6}$ và $x=\\dfrac{5\\pi}{6}$.<br>- Nghiệm dương nhỏ nhất là $\\dfrac{\\pi}{6}$, nghiệm âm lớn nhất là $-\\dfrac{\\pi}{2}$.<br>  Tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất của phương trình $f(x)=g(x)$ là $-\\dfrac{\\pi}{3}$."
  },
  {
    "id": "1D153DS18",
    "question": "Cho phương trình lượng giác $\\cos\\left(x-\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{2}$. Khi đó các mệnh đề dưới đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Phương trình đã cho có các nghiệm là $x=k2\\pi~(k\\in\\mathbb{Z})$ và $x=\\dfrac{\\pi}{3}+k2\\pi~(k\\in\\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Phương trình đã cho có nghiệm âm lớn nhất bằng $-2\\pi$",
        "answer": false
      },
      {
        "text": "Số nghiệm của phương trình đã cho trên đoạn $[0;2\\pi]$ là $2$ nghiệm",
        "answer": true
      },
      {
        "text": "Tổng các nghiệm thuộc đoạn $[0;2\\pi]$ của phương trình đã cho bằng $\\dfrac{7\\pi}{3}$",
        "answer": false
      }
    ],
    "explain": "Ta có $\\cos\\left(x-\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{2} \\Leftrightarrow \\cos\\left(x-\\dfrac{\\pi}{6}\\right)=\\cos\\dfrac{\\pi}{6}$.  \\[ \\Leftrightarrow x-\\dfrac{\\pi}{6}=\\dfrac{\\pi}{6}+k2\\pi \\text{ hoặc } x-\\dfrac{\\pi}{6}=-\\dfrac{\\pi}{6}+k2\\pi \\Leftrightarrow x=\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x=k2\\pi~(k\\in\\mathbb{Z}). \\]  <br>- <strong>Đúng</strong>. Phương trình đã cho có các nghiệm là $x=k2\\pi$ và $x=\\dfrac{\\pi}{3}+k2\\pi$ với $k\\in\\mathbb{Z}$.<br>- <strong>Sai</strong>.  <br>- Với họ nghiệm $x=k2\\pi$, cho $k=-1$ ta được $x=-2\\pi$.<br>- Với họ nghiệm $x=\\dfrac{\\pi}{3}+k2\\pi$, cho $k=-1$ ta được $x=\\dfrac{\\pi}{3}-2\\pi=-\\dfrac{5\\pi}{3}$.  Vậy nghiệm âm lớn nhất là $-\\dfrac{5\\pi}{3}$.<br>- <strong>Đúng</strong>.  <br>- Với họ nghiệm $x=k2\\pi$, ta có $0 \\le k2\\pi \\le 2\\pi \\Leftrightarrow 0 \\le k \\le 1$. <br>  Do $k\\in\\mathbb{Z}$ nên $k\\in\\{0,1\\}$. <br>  Ta có các nghiệm $x=0, x=2\\pi$.<br>- Với họ nghiệm $x=\\dfrac{\\pi}{3}+k2\\pi$, ta có \\[0 \\le \\dfrac{\\pi}{3}+k2\\pi \\le 2\\pi \\Leftrightarrow -\\dfrac{1}{6} \\le k \\le \\dfrac{5}{6}.\\]   Do $k\\in\\mathbb{Z}$ nên $k=0$. Ta có nghiệm $x=\\dfrac{\\pi}{3}$.  Vậy phương trình có $3$ nghiệm là $x=0, x=2\\pi$, $x=\\dfrac{\\pi}{3}$ trên đoạn $[0;2\\pi]$.<br>- <strong>Sai</strong>. Tổng các nghiệm thuộc đoạn $[0;2\\pi]$ của phương trình đã cho bằng \\[0+2\\pi+\\dfrac{\\pi}{3}=\\dfrac{7\\pi}{3}.\\]"
  },
  {
    "id": "1D153DS19",
    "question": "Cho phương trình $\\sin \\left(x+\\dfrac{\\pi}{6}\\right)=m+1$. $\\qquad(*)$",
    "subQuestions": [
      {
        "text": "Điều kiện có nghiệm của phương trình $(*)$ là $-1\\leq m \\leq 1$",
        "answer": false
      },
      {
        "text": "Tổng các giá trị nguyên của $m$ để phương trình $(*)$ có nghiệm là $-3$",
        "answer": true
      },
      {
        "text": "Phương trình $\\sin \\left(x+\\dfrac{\\pi}{6}\\right)=1$ có nghiệm $x=\\dfrac{\\pi}{3}+k 2\\pi, k \\in \\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "Nghiệm dương bé nhất của phương trình $\\sin \\left(x+\\dfrac{\\pi}{6}\\right)=1$ là $x=\\dfrac{\\pi}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- Vì $-1\\leq\\sin \\left(x+\\dfrac{\\pi}{6}\\right)\\leq 1$ nên $-1\\leq m+1\\leq 1\\Leftrightarrow -2\\leq m\\leq 0$.<br>  Vậy phương trình $(*)$ có nghiệm khi và chỉ khi $ -2\\leq m\\leq 0$.<br>- Vì phương trình $(*)$ có nghiệm khi và chỉ khi $ -2\\leq m\\leq 0$ và $m$ nguyên nên $m\\in\\{-2;-1;0\\}$.<br>  Tổng các giá trị của $m$ là $-2+(-1)+0=-3$.<br>- Ta có $\\sin \\left(x+\\dfrac{\\pi}{6}\\right)=1\\Leftrightarrow x+\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}+k2\\pi\\Leftrightarrow x=\\dfrac{\\pi}{3}+k 2\\pi, k \\in \\mathbb{Z}$.<br>- Ta có $x=\\dfrac{\\pi}{3}+k 2\\pi&gt;0\\Leftrightarrow k&gt;-\\dfrac{1}{6}$.<br>  Vì $k$ nguyên dương bé nhất nên $k=0$.<br>  Vậy nghiệm dương bé nhất của phương trình $\\sin \\left(x+\\dfrac{\\pi}{6}\\right)=1$ là $x=\\dfrac{\\pi}{3}$."
  },
  {
    "id": "1D153DS20",
    "question": "Số lượng (đơn vị: nghìn con) của một loài bướm ở một khu bảo tồn thiên nhiên được biểu diễn theo hàm số $P(t)=3+2\\sin \\left(\\dfrac{\\pi}{6} t\\right)$, $0\\leq t \\leq 12$, với $t$ tính theo tuần kể từ khi các nhà khoa học ước tính số lượng.",
    "subQuestions": [
      {
        "text": "Số lượng bướm ban đầu là $5$ nghìn con",
        "answer": false
      },
      {
        "text": "Số lượng bướm nhỏ nhất là $3$ nghìn con",
        "answer": false
      },
      {
        "text": "Số lượng bướm luôn dao động từ $1$ nghìn con đến $5$ nghìn con",
        "answer": true
      },
      {
        "text": "Số lượng bướm lần đầu tiên chạm mức $4$ nghìn con khi $t=5$ tuần",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $P(0)=3+2\\sin \\left(\\dfrac{\\pi}{6}\\cdot 0\\right)=3$.<br>  Suy ra số lượng bướm ban đầu là $3$ nghìn con.<br>- Ta có $-1\\leq \\sin \\left(\\dfrac{\\pi}{6} t\\right)\\leq 1\\Leftrightarrow 1\\leq P(t)\\leq 5$.<br>  Ta có $P(t)=1\\Leftrightarrow \\sin \\left(\\dfrac{\\pi}{6} t\\right)=-1\\Leftrightarrow \\dfrac{\\pi}{6} t=-\\dfrac{\\pi}{2}+k2\\pi\\Leftrightarrow t=-3+12k$, $k\\in\\mathbb{Z}$.<br>  Vì $0\\leq t \\leq 12$ nên $0\\leq -3+12k \\leq 12\\Leftrightarrow \\dfrac{1}{4}\\leq k\\leq \\dfrac{5}{4}$ suy ra $k=1\\Rightarrow t=9$.<br>  Do đó số lượng bướm nhỏ nhất là $1$ nghìn con ứng với $t=9$.<br>- Vì $1\\leq P(t)\\leq 5$ nên số lượng bướm luôn dao động từ $1$ nghìn con đến $5$ nghìn con.<br>- Ta có   $P(t)=4 \\Leftrightarrow 3+2\\sin \\left(\\dfrac{\\pi}{6} t\\right)=4$<br>$\\Leftrightarrow \\sin \\left(\\dfrac{\\pi}{6} t\\right)=\\dfrac{1}{2}$<br>$\\Leftrightarrow \\sin \\left(\\dfrac{\\pi}{6} t\\right)=\\sin\\left(\\dfrac{\\pi}{6}\\right)$<br>$\\Leftrightarrow \\dfrac{\\pi}{6}t=\\dfrac{\\pi}{6}+k2\\pi \\text{ hoặc } \\dfrac{\\pi}{6}t=\\pi-\\dfrac{\\pi}{6}+k2\\pi$<br>$\\Leftrightarrow t=1+12k \\text{ hoặc } t=5+12k,k\\in\\mathbb{Z}.$  <br>- Với $t=1+12k$ ta có $0\\leq t \\leq 12\\Leftrightarrow 0\\leq 1+12k \\leq 12\\Leftrightarrow -\\dfrac{1}{12}\\leq k\\leq \\dfrac{1}{12}$.<br>  Do $k\\in\\mathbb{Z}$ suy ra $k=0\\Rightarrow t=1$.<br>  Suy ra số lượng bướm lần đầu tiên chạm mức $4$ nghìn con khi $t=1$ tuần.<br>- Với $t=5+12k$ ta có $0\\leq t \\leq 12\\Leftrightarrow 0\\leq 5+12k \\leq 12\\Leftrightarrow -\\dfrac{5}{12}\\leq k\\leq \\dfrac{7}{12}$.<br>  Do $k\\in\\mathbb{Z}$ suy ra $k=0\\Rightarrow t=5$.<br>  Suy ra số lượng bướm lần đầu tiên chạm mức $4$ nghìn con khi $t=5$ tuần."
  },
  {
    "id": "1D153DS21",
    "question": "Cho phương trình lượng giác $2\\cos\\left(x+\\dfrac{\\pi}{4}\\right)+\\sqrt{3}=0\\ (*)$. Khi đó",
    "subQuestions": [
      {
        "text": "Phương trình có đúng $2$ nghiệm phân biệt thuộc khoảng $(-\\pi;\\pi)$",
        "answer": true
      },
      {
        "text": "Phương trình $(*)$ tương đương $\\cos\\left(x+\\dfrac{\\pi}{4}\\right)=\\cos\\left(\\dfrac{\\pi}{6}\\right)$",
        "answer": false
      },
      {
        "text": "Nghiệm của phương trình $(*)$ là $x=-\\dfrac{\\pi}{12}+k2\\pi \\text{ hoặc } x=\\dfrac{7\\pi}{12}+k2\\pi,k\\in\\mathbb{Z}$",
        "answer": false
      },
      {
        "text": "Tổng các nghiệm của phương trình trong khoảng $(-\\pi;\\pi)$ bằng $\\dfrac{3\\pi}{2}$",
        "answer": true
      }
    ],
    "explain": "Ta giải phương trình $(*)$   \\[2\\cos\\left(x+\\dfrac{\\pi}{4}\\right)+\\sqrt{3}=0 \\Leftrightarrow \\cos\\left(x+\\dfrac{\\pi}{4}\\right)=-\\dfrac{\\sqrt{3}}{2}=\\cos\\dfrac{5\\pi}{6}.\\]  \\[\\Leftrightarrow x+\\dfrac{\\pi}{4}=\\dfrac{5\\pi}{6}+k2\\pi \\text{ hoặc } x+\\dfrac{\\pi}{4}=-\\dfrac{5\\pi}{6}+k2\\pi  \\Leftrightarrow x=\\dfrac{7\\pi}{12}+k2\\pi \\text{ hoặc } x=-\\dfrac{13\\pi}{12}+k2\\pi (k\\in\\mathbb{Z}).\\]  <br>- {\\bf Đúng.}<br>  Xét trong khoảng $(-\\pi;\\pi)$:  <br>- Với $x=\\dfrac{7\\pi}{12}+k2\\pi$: chọn $k=0 \\Rightarrow x=\\dfrac{7\\pi}{12}$.<br>- Với $x=-\\dfrac{13\\pi}{12}+k2\\pi$: chọn $k=1 \\Rightarrow x=\\dfrac{11\\pi}{12}$.  Vậy phương trình có đúng $2$ nghiệm phân biệt trong khoảng đã cho.<br>- {\\bf Sai.}<br>  Vì $\\cos\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{2} \\ne -\\dfrac{\\sqrt{3}}{2}$.<br>- {\\bf Sai.}<br>  Nghiệm $x=-\\dfrac{\\pi}{12}+k2\\pi$ không thỏa mãn phương trình.<br>- {\\bf Đúng.}<br>  Tổng các nghiệm là $\\dfrac{7\\pi}{12} + \\dfrac{11\\pi}{12} = \\dfrac{18\\pi}{12} = \\dfrac{3\\pi}{2}$."
  },
  {
    "id": "1D153DS22",
    "question": "Cho phương trình lượng giác $2 \\cos\\left(x+\\dfrac{\\pi}{4}\\right)+\\sqrt{3}=0$ (*). Khi đó",
    "subQuestions": [
      {
        "text": "Phương trình có đúng $2$ nghiệm phân biệt thuộc khoảng $(-\\pi;\\pi)$",
        "answer": true
      },
      {
        "text": "Phương trình (*) tương đương $\\cos\\left(x+\\dfrac{\\pi}{4}\\right)=\\cos\\left(\\dfrac{\\pi}{6}\\right)$",
        "answer": false
      },
      {
        "text": "Nghiệm của phương trình (*) là $x=-\\dfrac{\\pi}{12}+k2\\pi \\text{ hoặc } x=\\dfrac{7\\pi}{12}+k2\\pi\\,(k\\in\\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Tổng các nghiệm của phương trình trong khoảng $(-\\pi;\\pi)$ bằng $\\dfrac{3\\pi}{2}$",
        "answer": true
      }
    ],
    "explain": "Ta có   $2 \\cos\\left(x+\\dfrac{\\pi}{4}\\right)+\\sqrt{3}=0$<br>$\\Leftrightarrow \\cos\\left(x+\\dfrac{\\pi}{4}\\right) = -\\dfrac{\\sqrt{3}}{2}$<br>$\\Leftrightarrow \\cos\\left(x+\\dfrac{\\pi}{4}\\right) = \\cos\\left(\\dfrac{5\\pi}{6}\\right)$<br>$\\Leftrightarrow x+\\dfrac{\\pi}{4} = \\dfrac{5\\pi}{6} + k2\\pi \\text{ hoặc } x+\\dfrac{\\pi}{4} = -\\dfrac{5\\pi}{6} + k2\\pi$<br>$\\Leftrightarrow x = \\dfrac{5\\pi}{6} - \\dfrac{\\pi}{4} + k2\\pi \\text{ hoặc } x = -\\dfrac{5\\pi}{6} - \\dfrac{\\pi}{4} + k2\\pi$<br>$\\Leftrightarrow x = \\dfrac{7\\pi}{12} + k2\\pi \\text{ hoặc } x = -\\dfrac{13\\pi}{12} + k2\\pi \\,(k\\in\\mathbb{Z}).$  <br>- Với $x=\\dfrac{7\\pi}{12}+k2\\pi$: cho $k=0 \\Rightarrow x=\\dfrac{7\\pi}{12} \\in (-\\pi;\\pi)$.<br>  Với $x=-\\dfrac{13\\pi}{12}+k2\\pi$: cho $k=1 \\Rightarrow x=-\\dfrac{13\\pi}{12}+2\\pi=\\dfrac{11\\pi}{12} \\in (-\\pi;\\pi)$.<br>  Vậy phương trình có đúng $2$ nghiệm $x=\\dfrac{7\\pi}{12}$ và $x=\\dfrac{11\\pi}{12}$ thuộc $(-\\pi;\\pi)$.<br>- Phương trình (*) tương đương $\\cos\\left(x+\\dfrac{\\pi}{4}\\right)=-\\dfrac{\\sqrt{3}}{2}$. <br>  Mà $\\cos\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{2} \\neq-\\dfrac{\\sqrt{3}}{2}$.<br>- Nghiệm của phương trình là $x=\\dfrac{7\\pi}{12}+k2\\pi \\text{ hoặc } x=-\\dfrac{13\\pi}{12}+k2\\pi \\,(k\\in\\mathbb{Z})$.<br>- Tổng các nghiệm trong $(-\\pi;\\pi)$ là $\\dfrac{7\\pi}{12}+\\dfrac{11\\pi}{12}=\\dfrac{18\\pi}{12}=\\dfrac{3\\pi}{2}$."
  },
  {
    "id": "1D154DS23",
    "question": "Cho phương trình lượng giác $\\tan \\left(2x-15^{\\circ}\\right)=1$. Khi đó",
    "subQuestions": [
      {
        "text": "Phương trình có nghiệm $x=30^{\\circ}+k 90^{\\circ}$, $(k \\in \\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Phương trình có nghiệm âm lớn nhất bằng $-30^{\\circ}$",
        "answer": false
      },
      {
        "text": "Tổng các nghiệm của phương trình trong khoảng $\\left(-180^{\\circ}; 90^{\\circ}\\right)$ bằng $-180^{\\circ}$",
        "answer": true
      },
      {
        "text": "Trong khoảng $\\left(-180^{\\circ}; 90^{\\circ}\\right)$ phương trình có nghiệm lớn nhất bằng $60^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\tan \\left(2x-15^{\\circ}\\right)=1\\Leftrightarrow 2x-15^{\\circ}=45^\\circ+k180^\\circ \\Leftrightarrow x=30^\\circ+k90^\\circ$, $(k \\in \\mathbb{Z})$.<br>- Phương trình đã cho có nghiệm âm khi $30^\\circ+k180^\\circ&lt;0\\Leftrightarrow k&lt;-0{,}17$.<br>  Khi đó nghiệm âm lớn nhất của phương trình đã cho là $x=30-90=-60^\\circ$.<br>- Ta có   $-180^{\\circ} lt;x lt; 90^{\\circ}$<br>$\\Leftrightarrow -180^{\\circ} lt;30^\\circ+k90^\\circ lt; 90^{\\circ}$<br>$\\Leftrightarrow -210^{\\circ} lt;k90^\\circ lt; 60^{\\circ}$<br>$\\Leftrightarrow -2{,}3 lt;k lt; 0{,}7.$  Mà $k \\in \\mathbb{Z}$ nên $k\\in\\{-2;-1;0\\}$. Do đó $x\\in\\left\\{-150^\\circ;-60^\\circ;30^\\circ\\right\\}$.<br>  Vậy, tổng các nghiệm của phương trình trong khoảng $\\left(-180^{\\circ}; 90^{\\circ}\\right)$ bằng $-180^{\\circ}$.<br>- Trong khoảng $\\left(-180^{\\circ}; 90^{\\circ}\\right)$ phương trình có nghiệm lớn nhất bằng $30^{\\circ}$."
  },
  {
    "id": "1D155DS24",
    "question": "Cho hai hàm số $f(x)=\\sin\\left(x+\\dfrac{\\pi}{4}\\right)$ và $g(x)=\\sin x$, khi đó:",
    "subQuestions": [
      {
        "text": "Nghiệm của phương trình $f(x)=g(x)$ là $x=\\dfrac{3\\pi}{8}+k\\pi\\ (k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Hàm số $g(x)=\\sin x$ tuần hoàn với chu kỳ $2 \\pi$",
        "answer": false
      },
      {
        "text": "$f\\left(\\dfrac{3\\pi}{4}\\right)+g\\left(\\dfrac{\\pi}{2}\\right)=1$",
        "answer": false
      },
      {
        "text": "$\\sin \\left(x+\\dfrac{\\pi}{4}\\right)+\\sin x=2\\sin \\left(x+\\dfrac{\\pi}{8}\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Ta có  $f(x)=g(x)\\Leftrightarrow \\sin\\left(x+\\dfrac{\\pi}{4}\\right)=\\sin x\\Leftrightarrow x+\\dfrac{\\pi}{4}=x+k2\\pi \\text{ hoặc } x+\\dfrac{\\pi}{4}=\\pi-x+k2\\pi\\Leftrightarrow x=\\dfrac{3\\pi}{8}+k\\pi\\ (k\\in\\mathbb{Z}).$<br>- <strong>Đúng</strong>.<br>  Hàm số $g(x)=\\sin x$ tuần hoàn với chu kỳ $2 \\pi$<br>- <strong>Đúng</strong>.<br>  $f\\left(\\dfrac{3\\pi}{4}\\right)+g\\left(\\dfrac{\\pi}{2}\\right)=\\sin \\pi +\\sin\\dfrac{\\pi}{2}=1$.<br>- <strong>Sai</strong>.<br>  Ta có $\\sin\\left(x+\\dfrac{\\pi}{4}\\right)+\\sin x=2\\sin \\left(\\dfrac{x+\\dfrac{\\pi}{4}+x}{2}\\right)\\sin\\left(\\dfrac{x+\\dfrac{\\pi}{4}-x}{2}\\right)=2\\sin \\left(x+\\dfrac{\\pi}{8}\\right)\\sin\\dfrac{\\pi}{8}$."
  },
  {
    "id": "1D155DS25",
    "question": "Cho phương trình $\\dfrac{\\sin 3x}{\\cos x+1}=0$.",
    "subQuestions": [
      {
        "text": "Điều kiện xác định của phương trình là $ x\\ne\\pi+k2\\pi, k\\in\\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "$\\sin 3x=0\\Leftrightarrow x=\\dfrac{k\\pi}{3}\\left(k\\in\\mathbb{Z}\\right)$",
        "answer": true
      },
      {
        "text": "Phương trình $\\dfrac{\\sin 3x}{\\cos x+1}=0$ có $7$ nghiệm thuộc đoạn $\\left[2\\pi ;4\\pi\\right]$",
        "answer": false
      },
      {
        "text": "Tổng các nghiệm của phương trình $\\dfrac{\\sin 3x}{\\cos x+1}=0$ trên đoạn $\\left[2\\pi ;4\\pi\\right]$ là $ 21\\pi $",
        "answer": false
      }
    ],
    "explain": "<br>- Phương trình có nghĩa khi $\\cos x + 1 \\neq 0 \\Leftrightarrow \\cos x \\neq -1 \\Leftrightarrow x \\neq \\pi + k2\\pi, k\\in\\mathbb{Z}.$<br>- $\\sin 3x = 0 \\Leftrightarrow 3x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{3}, k \\in \\mathbb{Z}.$<br>- Xét $x = \\dfrac{k\\pi}{3}$ trên $[2\\pi; 4\\pi]$.<br>  Ta có $ 2\\pi \\le \\dfrac{k\\pi}{3} \\le 4\\pi \\Leftrightarrow 6 \\le k \\le 12$.<br>  Vì $k \\in \\mathbb{Z}$ nên $k \\in \\{6; 7; 8; 9; 10; 11; 12\\}$.<br>  Xét điều kiện của phương trình $x \\neq \\pi + k2\\pi$ thì giá trị $x = 3\\pi$ (ứng với $k=9$) không thỏa mãn.<br>  Vậy tập nghiệm của phương trình là $S= \\left\\lbrace 2\\pi; \\dfrac{7\\pi}{3}; \\dfrac{8\\pi}{3}; \\dfrac{10\\pi}{3}; \\dfrac{11\\pi}{3}; 4\\pi\\right\\rbrace $.<br>  Tức là phương trình đã cho có $6$ nghiệm thuộc đoạn $\\left[2\\pi ;4\\pi\\right]$.<br>- Tổng các nghiệm của phương trình đã cho trên đoạn $\\left[2\\pi ;4\\pi\\right]$ là $2\\pi + \\dfrac{7\\pi}{3} + \\dfrac{8\\pi}{3} + \\dfrac{10\\pi}{3} + \\dfrac{11\\pi}{3} + 4\\pi = 18\\pi.$"
  },
  {
    "id": "1D155DS26",
    "question": "Cho phương trình $\\dfrac{\\sin 2x-\\sin x}{\\cos x+1}=0\\; (*)$. Khẳng định sau đúng hay sai.",
    "subQuestions": [
      {
        "text": "Điều kiện xác định của phương trình $x\\ne \\pi+k2\\pi, \\; k\\in Z$",
        "answer": true
      },
      {
        "text": "Phương trình có nghiệm $x=\\pi$",
        "answer": false
      },
      {
        "text": "Nghiệm dương nhỏ nhất của phương trình là $\\dfrac{\\pi}{3}$",
        "answer": true
      },
      {
        "text": "Số nghiệm của phương trình trên đoạn $\\left[0;\\; 2\\pi \\right]$ là $5$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\cos x+1 \\ne 0 \\Leftrightarrow \\cos x \\ne -1 \\Leftrightarrow x \\ne \\pi+k2\\pi \\ (k \\in \\mathbb{Z})$.<br>- $x = \\pi$ không thỏa mãn điều kiện nên loại.<br>- Với điều kiện $x \\ne \\pi+k2\\pi, k \\in \\mathbb{Z}$ thì  $(\\ast) \\Leftrightarrow \\sin 2x - \\sin x = 0$<br>$\\Leftrightarrow \\sin 2x = \\sin x$<br>$\\Leftrightarrow x = k2\\pi \\text{ hoặc } x = \\dfrac{\\pi}{3} + \\dfrac{k2\\pi}{3},\\, (k \\in \\mathbb{Z}).$  Kết hợp điều kiện suy ra họ nghiệm của phương trình  $x = k2\\pi \\text{ hoặc } x = \\dfrac{\\pi}{3} + k2\\pi \\text{ hoặc } x = -\\dfrac{\\pi}{3} + k2\\pi (k \\in \\mathbb{Z})$.<br>  Từ đó suy ra nghiệm dương nhỏ nhất của phương trình là $\\dfrac{\\pi}{3}$.<br>- Trên $[0; 2\\pi]$ họ nghiệm $x = k2\\pi$ có $2$ nghiệm $x=0; x=2\\pi$.<br>  Họ nghiệm $x = \\dfrac{\\pi}{3} + k2\\pi$ có $1$ nghiệm $x = \\dfrac{\\pi}{3}$.<br>  Họ nghiệm $x = -\\dfrac{\\pi}{3} + k2\\pi$ có $1$ nghiệm $x = \\dfrac{5\\pi}{3}$.<br>  Vậy phương trình có $4$ nghiệm trên $[0; 2\\pi]$."
  },
  {
    "id": "1D151DS1",
    "question": "Cho phương trình lượng giác $2\\sin x=\\sqrt{2}$ ($\\ast$). Khi đó",
    "subQuestions": [
      {
        "text": "Phương trình tương đương với phương trình ($\\ast$) là $\\sin x=\\sin \\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Phương trình ($\\ast$) có nghiệm là $x=\\dfrac{3 \\pi}{4}+k 2 \\pi$, $x=\\dfrac{\\pi}{3}+k 2 \\pi$, $(k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Phương trình ($\\ast$) có nghiệm dương nhỏ nhất bằng $\\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Số nghiệm của phương trình ($\\ast$) trong khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là hai nghiệm",
        "answer": false
      }
    ],
    "explain": "Ta có   $2\\sin x=\\sqrt{2}$<br>$\\Leftrightarrow \\sin x =\\dfrac{\\sqrt{2}}{2}$<br>$\\Leftrightarrow \\sin x=\\sin \\dfrac{\\pi}{4}$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{4}+k2\\pi \\text{ hoặc } x=\\dfrac{3\\pi}{4}+k2\\pi (k\\in\\mathbb{Z}).$  <br>- Có phương trình $(\\ast) \\Leftrightarrow\\sin x=\\sin \\dfrac{\\pi}{4}$.<br>- Phương trình ($\\ast$) có nghiệm là $x=\\dfrac{\\pi}{4}+k2\\pi$, $x=\\dfrac{3\\pi}{4}+k2\\pi$ $(k\\in\\mathbb{Z})$.<br>- Ta có  <br>- $\\dfrac{\\pi}{4}+k2\\pi &gt;0\\Leftrightarrow k&gt;-\\dfrac{1}{8}$.<br>  Mà $k\\in\\mathbb{Z}$ nên $k\\in\\{0;1;2;\\ldots\\}$. Do đó $x\\in\\left\\lbrace \\dfrac{\\pi}{4}; \\dfrac{9\\pi}{4};\\ldots\\right\\rbrace$.<br>- $\\dfrac{3\\pi}{4}+k2\\pi &gt;0\\Leftrightarrow k&gt;-\\dfrac{3}{8}$.<br>  Mà $k\\in\\mathbb{Z}$ nên $k\\in\\{0;1;2;\\ldots\\}$. Do đó $x\\in\\left\\lbrace \\dfrac{3\\pi}{4}; \\dfrac{11\\pi}{4};\\ldots\\right\\rbrace$.  Vậy nghiệm dương nhỏ nhất của phương trình ($\\ast$) là $\\dfrac{\\pi}{4}$.<br>- Để $x\\in \\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ thì  <br>- $-\\dfrac{\\pi}{2}&lt;\\dfrac{\\pi}{4}+k2\\pi&lt;\\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{3}{8}&lt;k&lt;\\dfrac{1}{8}$.<br>  Mà $k\\in\\mathbb{Z}$ nên $k=0$ suy ra $x=\\dfrac{\\pi}{4}$.<br>- $-\\dfrac{\\pi}{2}&lt;\\dfrac{3\\pi}{4}+k2\\pi&lt;\\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{5}{8}&lt;k&lt;-\\dfrac{1}{8}$.<br>  Mà $k\\in\\mathbb{Z}$ nên $k\\in\\varnothing$ do đó $x\\in\\varnothing$.  Vậy số nghiệm của phương trình ($\\ast$) trong khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là một nghiệm."
  },
  {
    "id": "1D153DS23",
    "question": "Cho hàm số $f(x) = \\sqrt{2}\\cos\\left(x + \\dfrac{\\pi}{4}\\right) - 1$.",
    "subQuestions": [
      {
        "text": "$f\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt{3}+3}{2}$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)=-1$ có nghiệm là $x = \\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$",
        "answer": false
      },
      {
        "text": "Tập giá trị của hàm số $f(x)$ là $S = \\left[-\\sqrt{2}-1; \\sqrt{2}-1\\right]$",
        "answer": true
      },
      {
        "text": "Số nghiệm của phương trình $f(x)=1$ trên đoạn $[0; 3\\pi]$ là $3$",
        "answer": false
      }
    ],
    "explain": "<br>- $f\\left(\\dfrac{\\pi}{6}\\right) = \\sqrt{2}\\cos\\left(\\dfrac{\\pi}{6}+\\dfrac{\\pi}{4}\\right)-1 = \\sqrt{2}\\cos\\dfrac{5\\pi}{12}-1= \\dfrac{\\sqrt{3}-3}{2}$.<br>- $f(x)=-1 \\Leftrightarrow \\sqrt{2}\\cos\\left(x+\\dfrac{\\pi}{4}\\right)=0 \\Leftrightarrow x+\\dfrac{\\pi}{4} = \\dfrac{\\pi}{2}+k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4}+k\\pi$.<br>- Vì $-1 \\le \\cos\\left(x+\\dfrac{\\pi}{4}\\right) \\le 1$ nên $-\\sqrt{2}-1 \\le f(x) \\le \\sqrt{2}-1$.<br>- $f(x)=1 \\Leftrightarrow \\cos\\left(x+\\dfrac{\\pi}{4}\\right)=\\sqrt{2} &gt; 1$ (vô nghiệm)."
  },
  {
    "id": "1D155DS2",
    "question": "Cho hàm số $f(x)=\\cos(-x)$ xác định trên tập $D$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi, k\\in\\mathbb{Z}\\right\\}$",
        "answer": false
      },
      {
        "text": "$y=-\\cos x,\\forall x\\in\\mathscr{D}$",
        "answer": false
      },
      {
        "text": "$f(x)=1\\Leftrightarrow x=k2\\pi, k\\in\\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "Tổng các nghiệm của phương trình $f(x)=1$ trên khoảng $[-\\pi;6\\pi]$ là $12\\pi$",
        "answer": true
      }
    ],
    "explain": "Ta có $f(x)=\\cos(-x)=\\cos x$ (do hàm $\\cos$ là hàm chẵn).  <br>- Hàm số $f(x)=\\cos x$ có tập xác định $D=\\mathbb{R}$.<br>- $f(x)=\\cos(-x)=\\cos x$.<br>- $f(x)=1\\Leftrightarrow\\cos x=1\\Leftrightarrow x=k2\\pi, k\\in\\mathbb{Z}$.<br>- Có $f(x)=1\\Leftrightarrow x=k2\\pi(k\\in\\mathbb{Z})$ trên đoạn $[-\\pi;6\\pi]$.<br>  Ta có $-\\pi\\le k2\\pi\\le 6\\pi\\Leftrightarrow-\\dfrac{1}{2}\\le k\\le 3$. Vì $k\\in\\mathbb{Z}$, nên $k\\in\\{0; 1; 2; 3\\}$.<br>  Các nghiệm là $x=0$, $x=2\\pi$, $x=4\\pi$, $x=6\\pi$.<br>  Tổng các nghiệm là $0+2\\pi+4\\pi+6\\pi=12\\pi$."
  },
  {
    "id": "1D151DS2",
    "question": "Cho phương trình lượng giác $2\\sin x=\\sqrt{2}$.\\qquad $(1)$",
    "subQuestions": [
      {
        "text": "Phương trình $(1)$ tương đương với phương trình $\\sin x=\\sin\\left(\\dfrac{\\pi}{4}\\right)$",
        "answer": true
      },
      {
        "text": "Phương trình $(1)$ có nghiệm là $x=\\dfrac{3\\pi}{4}+k2\\pi$; $x=\\dfrac{\\pi}{4}+k2\\pi$ $\\left(k\\in\\mathbb{Z}\\right)$",
        "answer": true
      },
      {
        "text": "Phương trình $(1)$ có nghiệm dương nhỏ nhất bằng $\\dfrac{3\\pi}{4}$",
        "answer": false
      },
      {
        "text": "Số nghiệm của phương trình $(1)$ trong khoảng $\\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)$ là hai nghiệm",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $2\\sin x=\\sqrt{2}\\Leftrightarrow\\sin x=\\dfrac{\\sqrt{2}}{2}\\Leftrightarrow\\sin x=\\sin\\left(\\dfrac{\\pi}{4}\\right)$.<br>- Ta có $\\sin x=\\sin\\left(\\dfrac{\\pi}{4}\\right)\\Leftrightarrow x=\\dfrac{\\pi}{4}+k2\\pi \\text{ hoặc } x=\\pi-\\dfrac{\\pi}{4}+k2\\pi\\Leftrightarrow x=\\dfrac{\\pi}{4}+k2\\pi \\text{ hoặc } x=\\dfrac{3\\pi}{4}+k2\\pi$ ($k\\in\\mathbb{Z}$).<br>  Vậy phương trình $(1)$ có các nghiệm là $x=\\dfrac{3\\pi}{4}+k2\\pi$; $ x=\\dfrac{\\pi}{4}+k2\\pi \\left(k\\in\\mathbb{Z}\\right)$.<br>- Xét $x=\\dfrac{3\\pi}{4}+k2\\pi$ $\\left(k\\in\\mathbb{Z}\\right)$ thì nghiệm dương nhỏ nhất là $x=\\dfrac{3\\pi}{4}$.<br>  Xét $x=\\dfrac{\\pi}{4}+k2\\pi$ $\\left(k\\in\\mathbb{Z}\\right)$ thì nghiệm dương nhỏ nhất là $x=\\dfrac{\\pi}{4}$. <br>  Vậy suy ra nghiệm dương nhỏ nhất của phương trình (1) là $x=\\dfrac{\\pi}{4}$.<br>- Xét $x\\in \\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)$, ta có  <br>- Với $x=\\dfrac{3\\pi}{4}+k2\\pi$ thì $-\\dfrac{\\pi}{2}&lt;\\dfrac{3\\pi}{4}+k2\\pi&lt;\\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{5}{8}&lt; k&lt; -\\dfrac{1}{8}$.<br>  Mà $k\\in \\mathbb{Z}$ suy ra $k\\in \\emptyset$.<br>- Với $x=\\dfrac{\\pi}{4}+k2\\pi$ thì $-\\dfrac{\\pi}{2}&lt;\\dfrac{\\pi}{4}+k2\\pi&lt;\\dfrac{\\pi}{2}\\Leftrightarrow -\\dfrac{3}{8}&lt; k&lt;\\dfrac{1}{8}$.<br>  Mà $k\\in \\mathbb{Z}$ suy ra $k=0\\Rightarrow x=\\dfrac{\\pi}{4}$.  Phương trình (1) có đúng một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)$ là $x=\\dfrac{\\pi}{4}$."
  }
];
