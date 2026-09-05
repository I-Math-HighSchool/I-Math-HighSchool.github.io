// =========================================================================
// KHỐI DỮ LIỆU: 0D31 - Đúng sai
// Nguồn: Bài tập giáo khoa (thư mục SachBaiHoc_T10/Data-T10, file
// HH10-CD1.4-DS.tex / DS10-CD3.4-DS.tex, đã có tag định tuyến %[...] sẵn
// trong nguồn), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu
// trúc dữ liệu.
// =========================================================================
window.dungSai0D31 = [
  {
    "id": "0D312DS1",
    "question": "Cho hàm số $y=x^3-3x$ có đồ thị $(C)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Điểm $M(0;1)$ thuộc đồ thị hàm số",
        "answer": false
      },
      {
        "text": "Tập xác định là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Tập xác định là $(-\\infty;+\\infty)$",
        "answer": true
      },
      {
        "text": "Hàm số đi qua điểm $N(1;-2)$",
        "answer": true
      }
    ],
    "explain": "Ta có $y(0)=0$ nên điểm $(0;0)$ thuộc đồ thị hàm số và điểm $M(0;1)$ không thuộc đồ thị hàm số."
  },
  {
    "id": "0D312DS2",
    "question": "Cho hàm số $y=f(x)=\\dfrac{2x-1}{x-2}$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Tập xác định là $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Tập xác định là $\\mathbb{R} \\setminus\\{2\\}$",
        "answer": true
      },
      {
        "text": "Tập xác định là $\\mathscr{D}=(-\\infty;2) \\cup(2;+\\infty)$",
        "answer": true
      },
      {
        "text": "Tập xác định là $\\mathbb{R} \\setminus\\{-2\\}$",
        "answer": false
      }
    ],
    "explain": "Điều kiện $x-2\\neq 0 \\Leftrightarrow x \\neq 2$.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R} \\setminus\\{2\\}$ hoặc $\\mathscr{D}=(-\\infty; 2) \\cup(2;+\\infty)$."
  },
  {
    "id": "0D312DS3",
    "question": "Cho hàm số $y=f(x)=\\sqrt{x-1}+2 \\text {khi } x \\geq 1 \\text{ và } \\dfrac{x^2-4}{x+1} \\text {khi } x &lt; 1 $. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hàm số xác định tại giá trị $x=2$",
        "answer": true
      },
      {
        "text": "Điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ thuộc đồ thị hàm số",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số là $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Giá trị biểu thức $f(0)+f(2)=-1$",
        "answer": true
      }
    ],
    "explain": "<br>- Với $x \\geq 1$ thì hàm số $f(x)=\\sqrt{x-1}+2$ xác định nên hàm số xác định tại $x=2$.<br>- Ta có $f(1)=\\sqrt{1-1}+2=2$ nên điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ không thuộc đồ thị hàm số.<br>- Với $x&lt;1$ hàm số $f(x)=\\dfrac{x^2-4}{x+1}$ không xác định tại $x=-1$.<br>- $f(0)=\\dfrac{0-4}{0+1}=-4$, $f(2)=\\sqrt{2-1}+2=3$. Do đó $f(0)+f(2)=-1$."
  },
  {
    "id": "0D312DS4",
    "question": "Cho hàm số $y=\\dfrac{2}{x-1}, x \\in(-\\infty; 0) \\text{ và } \\sqrt{x+1}, x \\in[0; 2] \\text{ và } x^2-1, x \\in(2; 5]$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm sồ là $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Điểm $A(0;2)$ thuộc đồ thị hàm số",
        "answer": false
      },
      {
        "text": "Giá trị $f(4)=15$",
        "answer": true
      },
      {
        "text": "Giá trị $f(0)+f(-1)=0$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập xác định của hàm số là $(-\\infty; 5]$.<br>- Với $x=0$ ta có $f(0)=\\sqrt{0+1}=1$ nên điểm $A(0;2)$ không thuộc đồ thị hàm số.<br>- Với $x=4\\Rightarrow f(4)=4^2-1=15$.<br>- Với $x=-1$ ta có $f(-1)=-1$.<br>  Vậy $f(0)+f(-1)=0$."
  },
  {
    "id": "0D314DS5",
    "question": "Cho đồ thị hàm số $y=f(x)$ có đồ thị như hình bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D31/dlts_sbh_ds10cd34_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số đi qua điểm $A(1;0)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $B(3;-2)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $C(2;-2)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $D(1;2)$",
        "answer": true
      }
    ],
    "explain": "<br>- Đồ thị hàm số đi qua điểm $A(1;0)$ là mệnh đề sai.<br>- Đồ thị hàm số đi qua điểm $B(3;-2)$ là mệnh đề đúng.<br>- Đồ thị hàm số đi qua điểm $C(2;-2)$ là mệnh đề sai.<br>- Đồ thị hàm số đi qua điểm $D(1;2)$ là mệnh đề đúng."
  },
  {
    "id": "0D311DS6",
    "question": "Cho hàm số $y=\\dfrac{-1}{2}x+3$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Điểm $A(2;2)$ thuộc đồ thị hàm số",
        "answer": true
      },
      {
        "text": "Điểm $B(2024;-1009)$ thuộc đồ thị hàm số",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $C(0;-3)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $D(6;0)$",
        "answer": true
      }
    ],
    "explain": "<br>- Thay tọa độ điểm $A(2; 2)$ vào hàm số ta được $2=\\dfrac{-1}{2} \\cdot 2+3$ (đúng).<br>  Do đó điểm $A(2;2)$ thuộc đồ thị hàm số. Vậy mệnh đề này đúng.<br>- Thay tọa độ điểm $B(2024;-1009)$ vào hàm số ta được $-1009=\\dfrac{-1}{2}\\cdot (2024)+3$ (đúng).<br>  Do đó điểm $B(2024;-1009)$ thuộc đồ thị hàm số.<br>  Vậy mệnh đề này đúng.<br>- Thay tọa độ điểm $C(0;-3)$ vào hàm số ta được $-3=\\dfrac{-1}{2} \\cdot 0+3$ (sai).<br>  Do đó điểm $C(0;-3)$ không thuộc đồ thị hàm số.<br>  Vậy mệnh đề hàm số đi qua điểm $C(0;-3)$ là mệnh đề sai.<br>- Thay tọa độ điểm $D(6;0)$ vào hàm số ta được $0=\\dfrac{-1}{2} \\cdot 6+3$ (đúng).<br>  Do đó đồ thị hàm số đi qua điểm $D(6;0)$.<br>  Vậy mệnh đề hàm số đi qua điểm $D(6;0)$ là mệnh đề đúng."
  },
  {
    "id": "0D315DS7",
    "question": "Cho hàm số $y=-2x+1$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hàm số đã cho đồng biến trên trên $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho nghịch biến trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đồ thị của hàm số là một đường thẳng đi lên theo hướng từ trái sang phải",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số luôn cắt trục tung tại điểm có tọa độ $(0;1)$",
        "answer": true
      }
    ],
    "explain": "Hàm số $y=-2x+1$ có hệ số $a=-2&lt; 0$ nên nghịch biến trên $\\mathbb{R}$, đồ thị của nó là một đường thẳng hướng xuống từ trái sang phải, đồ thị luôn cắt trục tung tại điểm có tọa độ $(0;1)$, nên  <br>- Mệnh đề ``Hàm số đã cho đồng biến trên trên $(0;+\\infty)$'' sai.<br>- Mệnh đề ``Hàm số đã cho nghịch biến trên $\\mathbb{R}$'' đúng.<br>- Mệnh đề ``Đồ thị của hàm số là một đường thẳng đi lên theo hướng từ trái sang phải'' sai.<br>- Mệnh đề ``Đồ thị hàm số luôn cắt trục tung tại điểm có tọa độ $(0;1)$'' đúng."
  },
  {
    "id": "0D311DS8",
    "question": "Cho hàm số $y=\\dfrac{2}{3} x-3$ có đồ thị là đường thẳng $d$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Đường thẳng $d$ đi qua điểm $A(1;-1)$",
        "answer": false
      },
      {
        "text": "Đường thẳng $d$ đi qua điểm $A\\left(5; y_0\\right)$ thì $y_0$ là một số nguyên",
        "answer": false
      },
      {
        "text": "Đường thẳng $d$ đi qua điểm $M\\left(x_0; y_0\\right)$ thì $2x_0-3y_0=9$",
        "answer": true
      },
      {
        "text": "Đường thẳng $d$ đi qua $M$ là giao điểm của đường thẳng $y=2x-3$ với trục tung",
        "answer": true
      }
    ],
    "explain": "<br>- Đường thẳng $d$ đi qua điểm $A(1;-1) \\Leftrightarrow-1=\\dfrac{2}{3} \\cdot 1-3 \\Leftrightarrow-1=-\\dfrac{7}{3}$ (vô lý).<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $A(1;-1)$'' sai.<br>- Đường thẳng $d$ có đi qua điểm có hoành độ bằng $5\\Rightarrow y=\\dfrac{2}{3} \\cdot 5-3=\\dfrac{1}{3} \\notin \\mathbb{Z}$.<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $A\\left(5; y_0\\right)$ thì $y_0$ là một số nguyên'' sai.<br>- Đường thẳng $d$ đi qua điểm $M\\left(x_0;y_0\\right)$ thì $y_0=\\dfrac{2}{3} x_0-3 \\Leftrightarrow 2x_0-3y_0=9$.<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $M\\left(x_0; y_0\\right)$ thì $2x_0-3y_0=9$'' đúng.<br>- Giao điểm của đường thẳng $y=2x-3$ với trục tung là $B(0;-3)$.<br>  Ta có $B(0;-3) \\in d$.<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $M$ là giao điểm của đường thẳng $y=2x-3$ với trục tung'' đúng."
  },
  {
    "id": "0D315DS9",
    "question": "Cho hàm số $y=\\left(m^2-1\\right) x+(m-1)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Với $m=3$ hàm số đồng biến trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Với $m=-2$ đồ thị hàm số là đường thẳng đi lên từ trái qua phải",
        "answer": true
      },
      {
        "text": "Có ba giá trị nguyên của $m$ để hàm số nghịch biến trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên $\\mathbb{R}$ khi $m \\in(-\\infty;-1) \\cup(1;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- Khi $m=3$ hàm số trở thành $y=8x+2$ đồng biến trên $\\mathbb{R}$.<br>  Vậy mệnh đề ``Với $m=3$ hàm số đồng biến trên $\\mathbb{R}$'' đúng.<br>- Khi $m=-2$ hàm số trở thành $y=3x-3$ đồng biến trên $\\mathbb{R}$ nên đồ thị hàm số là đường đi lên từ trái qua phải.<br>  Vậy mệnh đề ``Với $m=-2$ đồ thị hàm số là đường thẳng đi lên từ trái qua phải'' đúng.<br>- Hàm số nghịch biến trên $\\mathbb{R}$ khi $m^2-1&lt; 0\\Leftrightarrow-1&lt; m &lt; 1$.<br>  Mà $m$ nhận giá trị nguyên nên chỉ có $1$ giá trị $m=0$ thỏa mãn.<br>  Vậy mệnh đề ``Có ba giá trị nguyên của $m$ để hàm số nghịch biến trên $\\mathbb{R}$'' sai.<br>- Hàm số đồng biến trên $\\mathbb{R}$ khi $m^2-1&gt; 0\\Leftrightarrow m &lt;-1 \\text{ hoặc } m &gt; 1 \\Leftrightarrow m \\in(-\\infty;-1) \\cup(1;+\\infty)$.<br>  Vậy mệnh đề ``Hàm số đồng biến trên $\\mathbb{R}$ khi $m \\in(-\\infty;-1) \\cup(1;+\\infty)$'' đúng."
  },
  {
    "id": "0D311DS10",
    "question": "Cho hàm số $y=(m+5) x+2m-10$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số đi qua điểm $A(2;3)$ khi và chỉ khi $m=\\dfrac{3}{4}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $9$ khi và chỉ khi $m=3$",
        "answer": false
      },
      {
        "text": "Có $2$ giá trị nguyên của tham số $m$ để đồ thị hàm số tạo với hai trục tọa độ một tam giác có diện tích bằng $4$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số luôn đi qua điểm $M(-2;-20)$ với mọi giá trị của $m$",
        "answer": true
      }
    ],
    "explain": "<br>- Đồ thị hàm số đi qua điểm $A(2;3) \\Rightarrow 3=2(m+5)+2 m-10 \\Leftrightarrow m=\\dfrac{3}{4}$.<br>  Vậy mệnh đề ``Đồ thị hàm số đi qua điểm $A(2;3)$ khi và chỉ khi $m=\\dfrac{3}{4}$'' đúng.<br>- Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $9\\Rightarrow 9=2m-10\\Leftrightarrow m=\\dfrac{19}{2}$.<br>  Vậy mệnh đề ``Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $9$ khi và chỉ khi $m=3$'' sai.<br>- TH1: $m=-5$. Khi đó hàm số trở thành $y=-20$ là đường thẳng song song với trục $Ox$ nên không tạo thành tam giác.<br>   TH2: $m \\neq-5$. Khi đó đồ thị hàm số cắt trục $Ox$ tại $A\\left(\\dfrac{10-2m}{m+5};0\\right)$, cắt trục $Oy$ tại $B(0;2m-10)$.<br>  Tam giác $OAB$ vuông tại $O$ nên  $S_{\\triangle OAB} = \\dfrac{1}{2} \\cdot OA \\cdot OB$<br>$\\Rightarrow \\dfrac{1}{2} \\cdot\\left|\\dfrac{10-2m}{m+5}\\right|\\cdot|2m-10|=4$<br>$\\Leftrightarrow (2m-10)^2=8|m+5|$<br>$\\Leftrightarrow 4m^2-40m+100=8m+40 \\text{ hoặc } 4m^2-40m+100=-8m-40$<br>$\\Leftrightarrow 4m^2-48m+60=0 \\text{ hoặc } 4m^2-32m+140=0$<br>$\\Leftrightarrow m=6\\pm \\sqrt{21}.$  Vậy ``Có $2$ giá trị nguyên của tham số $m$ để đồ thị hàm số tạo với hai trục tọa độ một tam giác có diện tích bằng $4$'' sai.<br>- Ta có $y=(m+5)x+2m-10 \\Leftrightarrow m(x+2)+(5x-y-10)=0$.<br>  Đồ thị hàm số luôn đi qua điểm cố định với mọi $m$ $\\Leftrightarrow x+2=0 \\text{ và } 5x-y-10=0 \\Leftrightarrow x=-2 \\text{ và } y=-20.$<br>  Do đó điểm cố định có tọa độ là $M(-2;-20)$.<br>  Vậy mệnh đề ``Đồ thị hàm số luôn đi qua điểm $M(-2;-20)$ với mọi giá trị của $m$'' đúng."
  },
  {
    "id": "0D315DS11",
    "question": "Cho hàm số $y=\\dfrac{m-2}{m+1}x+2m-1$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Với $m&gt;2$, thì hàm số đồng biến trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Với $m&lt;1$, thì hàm số nghịch biến trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Có $2$ giá trị nguyên của tham số $m$ để hàm số đã cho nghịch biến trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Có $4$ giá trị của tham số $m$ để giá trị lớn nhất của hàm số trên $[-2;3]$ bằng $5$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số đồng biến trên $\\mathbb{R}$ khi và chỉ khi $\\dfrac{m-2}{m+1}&gt;0\\Leftrightarrow m&lt;-1 \\text{ hoặc } m&gt;2.$<br>  Vậy mệnh đề ``Với $m&gt;2$, thì hàm số đồng biến trên $\\mathbb{R}$'' đúng.<br>- Hàm số nghịch biến trên $\\mathbb{R}$ khi và chỉ khi $\\dfrac{m-2}{m+1}&lt;0\\Leftrightarrow -1&lt;m&lt;2$.<br>  Vậy mệnh đề ``Với $m&lt;1$, thì hàm số nghịch biến trên $\\mathbb{R}$'' sai.<br>- Với $-1&lt;m&lt;2$ thì hàm số đã cho nghịch biến trên $\\mathbb{R}$, mà $m$ nguyên nên $m=0$ hoặc $m=1$ để hàm số đã cho nghịch biến trên $\\mathbb{R}$.<br>  Vậy mệnh đề ``Có $2$ giá trị nguyên của tham số $m$ để hàm số đã cho nghịch biến trên $\\mathbb{R}$'' đúng.<br>- TH1: Với $\\dfrac{m-2}{m+1}&gt;0\\Leftrightarrow m&lt;-1 \\text{ hoặc } m&gt;2$ thì hàm số đã cho đồng biến trên $\\mathbb{R}$.<br>  Suy ra $\\max\\limits_{[-2;3]} y=y(3)=\\dfrac{3(m-2)}{m+1}+2m-1=5  \\Leftrightarrow 2m^2-m-12=0 \\Leftrightarrow m=\\dfrac{1+\\sqrt{97}}{4}\\text{ (thỏa mãn)} \\text{ hoặc } m=\\dfrac{1-\\sqrt{97}}{4}\\text{ (thỏa mãn).}$<br>  TH2: Với $\\dfrac{m-2}{m+1}&lt;0 \\Leftrightarrow-1&lt;m&lt;2$ thì hàm số đã cho nghịch biến trên $\\mathbb{R}$.<br>  Suy ra $\\max\\limits_{[-2;3]} y=y(-2)=-2\\cdot\\dfrac{m-2}{m+1}+2m-1=5  \\Leftrightarrow 2m^2-6m-2=0 \\Leftrightarrow m=\\dfrac{3-\\sqrt{13}}{2}\\text{ (thỏa mãn)} \\text{ hoặc } m=\\dfrac{3+\\sqrt{13}}{2}\\text{ (không thỏa mãn)}$.<br>  Do đó có $3$ giá trị của $m$ thỏa mãn yêu cầu.<br>  Vậy mệnh đề ``Có $4$ giá trị của tham số $m$ để giá trị lớn nhất của hàm số trên $[-2;3]$ bằng $5$'' sai."
  },
  {
    "id": "0D311DS12",
    "question": "Cho hàm số bậc nhất $y=a x+b$ $(a \\neq 0)$, có đồ thị là đường thẳng $(d)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Với $a=2$, $b=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $A$, $B$. Khi đó diện tích của tam giác $OAB$ bằng $\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Biết $(d)$ đi qua điểm $K(1;-2)$ và cắt đường thẳng $y=2x+1$ tại điểm có hoành độ bằng $6$. Khi đó tổng $S=a+3b=-12$",
        "answer": true
      },
      {
        "text": "Biết $(d)$ đi qua điểm $A(1;3)$ và cắt trục tung tại điểm có tung độ bằng $2$. Khi đó tổng $S=a^2+b=4$",
        "answer": false
      },
      {
        "text": "Với $a=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $P$ và $Q$. Khi đó diện tích tam giác $OPQ$ bằng $2$ thì $b\\in\\{-2;2\\}$",
        "answer": true
      }
    ],
    "explain": "<br>- Với $a=2$, $b=1$, ta có $d\\colon y=2x+1$.<br>  Khi đó $d\\cap Ox=A\\left(-\\dfrac{1}{2};0\\right) \\text{ và } d\\cap Oy=B(0;1)\\Rightarrow S_{\\triangle OAB}=\\dfrac{1}{2}OA\\cdot OB=\\dfrac{1}{2}\\cdot \\dfrac{1}{2}\\cdot 1=\\dfrac{1}{4}$.<br>  Vậy mệnh đề ``Với $a=2$, $b=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $A$, $B$. Khi đó diện tích của tam giác $OAB$ bằng $\\dfrac{1}{2}$'' sai.<br>- Điểm thuộc đường thẳng $y=2x+1$ có hoành độ bằng $6$ là $I(6;13)$.<br>  Gọi $d\\colon y=ax+b$. Ta có $K(1;-2)\\in d \\text{ và } I(6;13)\\in d\\Leftrightarrow a+b=-2 \\text{ và } 6a+b=13\\Leftrightarrow a=3 \\text{ và } b=-5.$<br>  Do đó $S=a+3b=-12$.<br>  Vậy mệnh đề ``Biết $(d)$ đi qua điểm $K(1;-2)$ và cắt đường thẳng $y=2x+1$ tại điểm có hoành độ bằng $6$. Khi đó tổng $S=a+3b=-12$'' đúng.<br>- Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $2$ suy ra đồ thị hàm số đi qua điểm $B(0;2)$.<br>  Đồ thị hàm số đi qua các điểm $A(1;3)$ và $B(0;2)$ nên ta có   \\[3=a\\cdot 1+b \\text{ và } 2=a\\cdot 0+b\\Leftrightarrow a=1 \\text{ và } b=2.\\]  Do đó $S=a^2+b=1^2+2=3$.<br>  Vậy mệnh đề ``Biết $(d)$ đi qua điểm $A(1;3)$ và cắt trục tung tại điểm có tung độ bằng $2$. Khi đó tổng $S=a^2+b=4$'' sai.<br>- Với $a=1$, ta có $d\\colon y=x+b$.<br>  Ta có $d\\cap Ox=P(-b;0),\\, OP=|b| \\text{ và } d\\cap Oy=Q(0;b),\\, OQ=|b|\\Rightarrow S_{\\triangle OPQ}=\\dfrac{1}{2}OP\\cdot OQ=\\dfrac{1}{2}b^2$, $b\\ne 0$.<br>  $S_{\\triangle OPQ}=2\\Leftrightarrow \\dfrac{1}{2}b^2=2\\Leftrightarrow b=\\pm 2$.<br>  Vậy mệnh đề ``Với $a=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $P$ và $Q$. Khi đó diện tích tam giác $OPQ$ bằng $2$ thì $b\\in\\{-2;2\\}$'' đúng."
  },
  {
    "id": "0D315DS13",
    "question": "Cho hàm số $f(x)=|x+m|$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Khi $m=-1$, hàm số $g(x)=f(x)+|x+3|$ nghịch biến trên $(-2025;-5)$",
        "answer": true
      },
      {
        "text": "Khi $m=-1$, gọi $T$ là tập hợp các giá trị nguyên của $x$ để hàm số $g(x)=f(x)+|x+3|$ đạt giá trị nhỏ nhất. Số phần tử của $T$ là $3$",
        "answer": false
      },
      {
        "text": "Khi $m=-1$, miền giá trị của hàm số $h(x)=f(x)+2$ trên $[-1;3]$ là $T=[a;b]$, với $a+b=6$",
        "answer": true
      },
      {
        "text": "Gọi $S$ là tập hợp các giá trị của tham số $m$ để hàm số $f(x)=|x+m|$ đạt giá trị nhỏ nhất trên $[0;2]$ bằng $3$. Tổng tất cả các phần tử của $S$ là $8$",
        "answer": false
      }
    ],
    "explain": "<br>- Khi $m=-1$, hàm số $g(x)=|x-1|+|x+3|$ trên $(-2025;-5)$ có dạng $g(x)=-x+1-x-3=-2x-2$ nên hàm số nghịch biến trên $(-2025;-5)$.<br>  Vậy mệnh đề ``Khi $m=-1$, hàm số $g(x)=f(x)+|x+3|$ nghịch biến trên $(-2025;-5)$'' đúng.<br>- Khi $m=-1$, hàm số $g(x)=|x-1|+|x+3|=-2x-2,\\,x&lt;-3 \\text{ và } 4,\\,-3\\leq x \\leq 1 \\text{ và } 2x+2,\\,x&gt;1$ đạt giá trị nhỏ nhất là $4$, khi $x \\in[-3;1]$. Vì $x$ nguyên nên có $5$ giá trị của $x$ là $-3$; $-2$; $-1$; $0$; $1$.<br>  Vậy mệnh đề ``Khi $m=-1$, gọi $T$ là tập hợp các giá trị nguyên của $x$ để hàm số $g(x)=f(x)+|x+3|$ đạt giá trị nhỏ nhất. Số phần tử của $T$ là $3$'' sai.<br>- Khi $m=-1$, $f(x)=|x-1|$.<br>  Ta có  $-1\\le x\\le 3,\\,\\forall x \\in [-1;3]$<br>$\\Leftrightarrow -2 \\leq x-1 \\leq 2,\\, \\forall x \\in[-1;3]$<br>$\\Leftrightarrow 0 \\leq|x-1|\\leq 2,\\, \\forall x \\in[-1;3]$<br>$\\Leftrightarrow 2 \\leq|x-1|+2 \\leq 4,\\, \\forall x \\in[-1;3]$<br>$\\Leftrightarrow 2 \\leq h(x) \\leq 4,\\, \\forall x \\in[-1;3].$  Vậy miền giá trị của hàm số trên đoạn $[-1;3]$ là $T=[2;4]$. Suy ra $a+b=6$.<br>  Vậy mệnh đề ``Khi $m=-1$, miền giá trị của hàm số $h(x)=f(x)+2$ trên $[-1;3]$ là $T=[a;b]$, với $a+b=6$'' đúng.<br>- Với $\\forall x \\in[0; 2]$ ta có $m \\leq x+m \\leq 2+m$.<br>  Do đó nếu $m \\in[-2;0]$ thì $|x+m|$ đạt giá trị nhỏ nhất là $0$; nếu $m \\notin[-2;0]$ thì $|x+m|$ đạt giá trị nhỏ nhất là min $\\{|m|;|2+m|\\}$.<br>  Yêu cầu bài toán trở thành tìm $m$ sao cho $\\min \\{|m|;|2+m|\\}=3$.<br>  Trường hợp 1: $|m|=3 \\text{ và } |2+m|\\geq 3 \\Leftrightarrow m=3$ (thỏa mãn).<br>  Trường hợp 2: $|m|\\geq 3 \\text{ và } |2+m|=3 \\Leftrightarrow m=-5$ (thỏa mãn).<br>  Do đó giá trị $m$ thỏa mãn bài toán là $m=3$ và $m=-5$. Vậy tổng các giá trị của $m$ là $3-5=-2$.<br>  Vậy mệnh đề ``Gọi $S$ là tập hợp các giá trị của tham số $m$ để hàm số $f(x)=|x+m|$ đạt giá trị nhỏ nhất trên $[0;2]$ bằng $3$. Tổng tất cả các phần tử của $S$ là $8$'' sai."
  },
  {
    "id": "0D313DS1",
    "question": "Cho hàm số $y=1+2x$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số không cắt trục hoành",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số cắt tung tại một điểm",
        "answer": true
      },
      {
        "text": "Hoành độ giao điểm của đồ thị hàm số với trục hoành là một giá trị dương",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số giao với trục tung tại điểm có tung độ bé hơn $1$",
        "answer": false
      }
    ],
    "explain": "Ta có đồ thị hàm số $y=1+2x$ cắt trục hoành tại điểm có tọa độ là $\\left(-\\dfrac{1}{2}; 0\\right)$ và cắt trục tung tại điểm có tọa độ là $(0;1)$ suy ra  <br>- Mệnh đề ``Đồ thị hàm số không cắt trục hoành'' sai.<br>- Mệnh đề ``Đồ thị hàm số cắt tung tại một điểm'' đúng.<br>- Mệnh đề ``Hoành độ giao điểm của đồ thị hàm số với trục hoành là một giá trị dương'' sai.<br>- Mệnh đề ``Đồ thị hàm số giao với trục tung tại điểm có tung độ bé hơn $1$'' sai."
  },
  {
    "id": "0D312DS5",
    "question": "Cho hàm số $f(x)=\\dfrac{2x-1}{x^2-6x+5} \\text { khi} x&lt;5 \\text{ và } \\sqrt{x+2} \\text { khi} x \\geq 5 $. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hàm số xác định tại $x=1$",
        "answer": false
      },
      {
        "text": "Hàm số không xác định tại $x=5$",
        "answer": false
      },
      {
        "text": "Hàm số xác định trong nửa khoảng $[-2;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số xác định trong khoảng $(1;3)$",
        "answer": true
      }
    ],
    "explain": "Hàm số có tập xác định $\\mathbb{R} \\setminus\\{1\\}$ nên  <br>- Mệnh đề ``Hàm số xác định tại $x=1$'' sai.<br>- Mệnh đề ``Hàm số không xác định tại $x=5$'' sai.<br>- Mệnh đề ``Hàm số xác định trong nửa khoảng $[-2;+\\infty)$'' sai.<br>- Mệnh đề ``Hàm số xác định trong khoảng $(1;3)$'' đúng."
  },
  {
    "id": "0D312DS6",
    "question": "Cho hàm số $f(x)=\\sqrt{3x+1}-1 \\text {khi } x \\geq 5 \\text{ và } 2x-7 \\text {khi }-2\\leq x&lt;5 $. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$f(8)=4$",
        "answer": true
      },
      {
        "text": "$f(-3)=-13$",
        "answer": false
      },
      {
        "text": "Có một giá trị của $x$ để $f(x)=1$",
        "answer": true
      },
      {
        "text": "$3f(5)+f(0)=15$",
        "answer": false
      }
    ],
    "explain": "<br>- Với $x=8$ thì $f(8)=\\sqrt{3\\cdot 8+1}-1=4$.<br>- Vì $-3$ không thuộc tập xác định của hàm số nên không tồn tại $f(-3)$.<br>- $f(x)=1\\Leftrightarrow -2\\leq x&lt;5 \\text{ và } 2x-7=1\\Leftrightarrow-2\\leq x&lt;5 \\text{ và } x=4 \\Leftrightarrow x=4$.<br>  Vậy có một giá trị của $x$ để $f(x)=1$ là mệnh đề đúng.<br>- $3f(5)+f(0)=3\\left(\\sqrt{3\\cdot 5+1}-1\\right)+(2\\cdot 0-7)=2$."
  },
  {
    "id": "0D312DS7",
    "question": "Cho hàm số $y=\\sqrt{3-2x}$ có tập xác định là $\\mathscr{D}$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\mathscr{D}=\\left[\\dfrac{3}{2};+\\infty\\right)$",
        "answer": false
      },
      {
        "text": "$x_0=1\\in \\mathscr{D}$",
        "answer": true
      },
      {
        "text": "$(-3;0) \\subset \\mathscr{D}$",
        "answer": true
      },
      {
        "text": "$\\left(\\dfrac{3}{2};3\\right) \\cap \\mathscr{D}=\\left\\{\\dfrac{3}{2}\\right\\}$",
        "answer": false
      }
    ],
    "explain": "<br>- Điều kiện xác định là $3-2x \\geq 0\\Leftrightarrow x \\leq \\dfrac{3}{2}$. Suy ra $\\mathscr{D}=\\left(-\\infty;\\dfrac{3}{2}\\right]$.<br>- $\\mathscr{D}=\\left(-\\infty; \\dfrac{3}{2}\\right]$ nên $x_0=1\\in \\mathscr{D}$.<br>- Vì $(-3;0) \\subset\\left(-\\infty;\\dfrac{3}{2}\\right]$ nên $(-3;0) \\subset\\mathscr{D}$.<br>- $\\left(\\dfrac{3}{2};3\\right) \\cap \\mathscr{D}=\\varnothing$."
  },
  {
    "id": "0D315DS1",
    "question": "Cho hàm số $y=(m-7) x+2$ có đồ thị là $(d)$ ($m$ là tham số thực). Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hàm số đã cho là hàm số nhất $\\Leftrightarrow m \\neq 7$",
        "answer": true
      },
      {
        "text": "$(d)$ luôn đi qua điểm $A(0; 2)$ với mọi $m$",
        "answer": true
      },
      {
        "text": "Khi $m=6$ thì $(d)$ tạo với hai trục tọa độ $Ox$, $Oy$ một tam giác có diện tích bằng $4$",
        "answer": false
      },
      {
        "text": "Chỉ có đúng $6$ giá trị nguyên dương của tham số $m$ để hàm số đã cho là hàm số nghịch biến",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số đã cho là hàm số bậc nhất $\\Leftrightarrow m-7\\neq 0\\Leftrightarrow m \\neq 7$.<br>  Vậy mệnh đề ``Hàm số đã cho là hàm số nhất $\\Leftrightarrow m \\neq 7$'' đúng.<br>- Thay tọa độ điểm $A(0;2)$ vào công thức hàm số ta được $2=(m-7)\\cdot 0+2$ (luôn đúng với mọi $m$).<br>  Vậy mệnh đề ``$(d)$ luôn đi qua điểm $A(0;2)$ với mọi $m$'' là đúng.<br>- Khi $m=6\\Rightarrow(d)\\colon y=-x+2$.<br>  Gọi $A$, $B$ lần lượt là giao điểm của $(d)$ và $Ox$, $Oy$ $\\Rightarrow A(2;0)$, $B(0;2)$.<br>  Nhận xét: $\\triangle OAB$ vuông tại $O \\Rightarrow S_{\\triangle OAB}=\\dfrac{1}{2} OA \\cdot OB=2$.<br>  Vậy mệnh đề ``Khi $m=6$ thì $(d)$ tạo với hai trục tọa độ $Ox$, $Oy$ một tam giác có diện tích bằng $4$'' sai.<br>- Hàm số đã cho là hàm số nghịch biến $\\Leftrightarrow m-7&lt;0\\Leftrightarrow m&lt;7$.<br>  Mà $m$ là số nguyên dương nên $m \\in\\{1;2;3;4;5;6\\}$.  Vậy mệnh đề ``Chỉ có đúng $6$ giá trị nguyên dương của tham số $m$ để hàm số đã cho là hàm số nghịch biến'' đúng."
  },
  {
    "id": "0D311DS1",
    "question": "Cho hàm số $y=-x+3$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số cắt trục hoành tại điểm $A(-3;0)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm $B(0;3)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác vuông cân",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác có diện tích bằng $9$",
        "answer": false
      }
    ],
    "explain": "<br>- Thay tọa độ $A(-3;0)$ vào hàm số $y=-x+3$ ta được $0=6$ (không thoả mãn).<br>  Vậy mệnh đề ``Đồ thị hàm số cắt trục hoành tại điểm $A(-3;0)$'' sai.<br>- Thay tọa độ $B(0;3)$ vào hàm số $y=-x+3$ ta được $3=3$ (thoả mãn).<br>  Vậy mệnh đề ``Đồ thị hàm số cắt trục tung tại điểm $B(0;3)$'' đúng.<br>- Đồ thị hàm số cắt trục hoành, trục tung lần lượt tại điểm điểm $M(3;0)$ và $B(0;3)$ nên $OM=OB=3$. Do đó $\\triangle MOB$ vuông cân tại $O$.<br>  Vậy mệnh đề ``Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác vuông cân'' đúng.<br>- Diện tích tam giác $MOB$ là $S=\\dfrac{1}{2} \\cdot OM\\cdot OB=\\dfrac{1}{2} \\cdot 3\\cdot 3=\\dfrac{9}{2}$.<br>  Vậy mệnh đề ``Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác có diện tích bằng $9$'' sai."
  },
  {
    "id": "0D314DS1",
    "question": "Thành phố Hồ Chí Minh ghi nhận số ca mắc mới Covid-19 trong các tuần đầu năm 2023 như biểu đồ dưới đây.  <br><img src=\"data/10/0D3/im0D31/loc2_0_TN_DS_TLN_Chuy_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đặt $y$ là số ca mắc mới Covid-19 tương ứng với với tuần thứ $x$ thì phép đặt đó cho ta một hàm số $y=f(x)$.",
    "subQuestions": [
      {
        "text": "$f(3)=16$",
        "answer": true
      },
      {
        "text": "Tập giá trị của hàm số là $T=[0;50]$",
        "answer": false
      },
      {
        "text": "Trong $4$ tuần đầu năm 2023, hàm số $y=f(x)$ nghịch biến",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=f(x)$ lần lượt là $M$, $m$. Khi đó $M-m=14$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Với $x=3$ thì số ca mắc bệnh là $16$.<br>- <strong>Sai</strong>. Tập giá trị của hàm số là $T=[3;47]$.<br>- <strong>Đúng</strong>. Trong $4$ tuần đầu năm 2023, hàm số $y=f(x)$ nghịch biến.<br>- <strong>Sai</strong>. Giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=f(x)$ lần lượt là $M=47$, $m=3$. Khi đó $M-m=47-3=44$."
  },
  {
    "id": "0D315DS14",
    "question": "Cho hàm số $f(x) = 5x+2 \\text{ khi } x \\ge 1 \\text{ và } 3-x \\text{ khi } x &lt; 1.$",
    "subQuestions": [
      {
        "text": "Ta có $f(0) = 3$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(-\\infty;+\\infty)$",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số đã cho là $\\mathscr{D} = \\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Ta có $f(2) = 12$",
        "answer": true
      }
    ],
    "explain": "<br>- Với $x = 0 &lt; 1$, ta có $f(0) = 3 - 0 = 3$.<br>- Khi $x \\geq 1$, ta có $f(x) = 5x + 2$ là hàm số đồng biến trên khoảng $(1;+\\infty)$.<br>  Khi $x &lt; 1$, ta có $f(x) = 3 - x$ là hàm số nghịch biến trên khoảng $(-\\infty;1)$.<br>  Vậy hàm số không đồng biến trên khoảng $(-\\infty; +\\infty)$.<br>- Khi $x \\geq 1$, ta có $f(x) = 5x + 2$, hàm số có tập xác định là $\\mathscr{D}_1 = [1;+\\infty)$.<br>  Khi $x &lt; 1$, ta có $f(x) = 3 - x$, hàm số có tập xác định là $\\mathscr{D}_2 = (-\\infty;1)$.<br>  Khi đó, hàm số $y = f(x)$ có tập xác định $\\mathscr{D} = \\mathscr{D}_1 \\cup \\mathscr{D}_2 = \\mathbb{R}$.<br>- Với $x = 2 &gt; 1$, ta có $f(2) = 5 \\cdot 2 + 2 = 12$."
  },
  {
    "id": "0D312DS8",
    "question": "Cho hàm số $y=f(x)=\\sqrt{x-1}+2 \\text {khi } x \\geq 1 \\text{ và } \\dfrac{x^2-4}{x+1} \\text {khi } x &lt; 1 $. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hàm số xác định tại giá trị $x=2$",
        "answer": true
      },
      {
        "text": "Điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ thuộc đồ thị hàm số",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số là $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Giá trị biểu thức $f(0)+f(2)=-1$",
        "answer": true
      }
    ],
    "explain": "<br>- Với $x \\geq 1$ thì hàm số $f(x)=\\sqrt{x-1}+2$ xác định nên hàm số xác định tại $x=2$.<br>- Ta có $f(1)=\\sqrt{1-1}+2=2$ nên điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ không thuộc đồ thị hàm số.<br>- Với $x&lt;1$ hàm số $f(x)=\\dfrac{x^2-4}{x+1}$ không xác định tại $x=-1$.<br>- $f(0)=\\dfrac{0-4}{0+1}=-4$, $f(2)=\\sqrt{2-1}+2=3$. Do đó $f(0)+f(2)=-1$."
  },
  {
    "id": "0D312DS9",
    "question": "Cho hàm số $y=\\dfrac{2}{x-1}, x \\in(-\\infty; 0) \\text{ và } \\sqrt{x+1}, x \\in[0; 2] \\text{ và } x^2-1, x \\in(2; 5]$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm sồ là $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Điểm $A(0;2)$ thuộc đồ thị hàm số",
        "answer": false
      },
      {
        "text": "Giá trị $f(4)=15$",
        "answer": true
      },
      {
        "text": "Giá trị $f(0)+f(-1)=0$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập xác định của hàm số là $(-\\infty; 5]$.<br>- Với $x=0$ ta có $f(0)=\\sqrt{0+1}=1$ nên điểm $A(0;2)$ không thuộc đồ thị hàm số.<br>- Với $x=4\\Rightarrow f(4)=4^2-1=15$.<br>- Với $x=-1$ ta có $f(-1)=-1$.<br>  Vậy $f(0)+f(-1)=0$."
  }
];
