// =========================================================================
// KHỐI DỮ LIỆU: 0D12 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0D12 = [
  {
    "id": "0D121DS1",
    "question": "Cho tập hợp $A$ gồm các số nguyên tố có một chữ số và tập hợp $B=\\left\\{x \\in \\mathbb{N}\\mid x^2-2 x-3=0\\right\\}$.",
    "subQuestions": [
      {
        "text": "Các số tự nhiên lẻ có một chữ số đều thuộc tập hợp $A$",
        "answer": false
      },
      {
        "text": "$B=\\{-1 ; 3\\}$",
        "answer": false
      },
      {
        "text": "Tập hợp $A$ có $4$ phần tử",
        "answer": true
      },
      {
        "text": "Số phần tử của tập $A$ gấp $4$ lần số phần tử của tập hợp $B$",
        "answer": true
      }
    ],
    "explain": "<br>- $1\\notin A$. Suy ra mệnh đề sai.<br>- $B=\\{3\\}$. Suy ra mệnh đề sai.<br>- $A=\\{2;3;5;7\\}$. Suy ra mệnh đề đúng.<br>- Số phần tử của tập $A$ gấp $4$ lần số phần tử của tập hợp $B$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS2",
    "question": "Cho tập hợp $A=\\left\\{x \\in \\mathbb{R}\\mid\\left(x^2-6 x+5\\right)(x-m)=0\\right\\}$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$1 \\in A$",
        "answer": true
      },
      {
        "text": "Tập hợp $A$ có ba phần tử với mọi giá trị của tham số $m$",
        "answer": false
      },
      {
        "text": "Có hai giá trị của tham số $m$ để tập hợp $A$ có đúng hai phần tử",
        "answer": true
      },
      {
        "text": "Có hai giá trị của tham số $m$ để tổng tất cả các phần tử của tập $A$ bằng 6",
        "answer": false
      }
    ],
    "explain": "<br>- $x^2-6 x+5=0\\Leftrightarrow x=1;x=5 \\Rightarrow 1 \\in A$. Suy ra mệnh đề đúng.<br>- $A$ có $2$ hoặc $3$ phần tử. Suy ra mệnh đề sai.<br>- Với $m=1$ hoặc $m=5$ thì $A=\\{1;5\\}$. Suy ra mệnh đề đúng.<br>- Có $3$ giá trị $m=1;m=5;m=0$ để tổng tất cả các phần tử của tập $A$ bằng $6$. Suy ra mệnh đề sai."
  },
  {
    "id": "0D123DS3",
    "question": "Cho hai tập hợp $A=\\left\\{n \\in \\mathbb{N}\\mid \\left(n^2-2 n-3\\right)\\left(n^2-1\\right)=0\\right\\}$ và $B=\\left\\{x \\in \\mathbb{R}\\mid 2 x^2-x+3=0\\right\\}$.  Trong mỗi ý a), b), c), d) thí sinh chọn đúng hay sai.",
    "subQuestions": [
      {
        "text": "Tập hợp $A$ có $3$ phần tử",
        "answer": false
      },
      {
        "text": "Số tập hợp con của tập hợp $A$ là $4$ tập hợp",
        "answer": true
      },
      {
        "text": "Tập hợp $B$ là tập hợp rỗng",
        "answer": true
      },
      {
        "text": "Tổng các phần tử của tập hợp $A$ và tập hợp $B$ là $3$",
        "answer": false
      }
    ],
    "explain": "<br>- $A=\\{3;1\\}$. Suy ra mệnh đề sai.<br>- $A$ có 4 tập con. Suy ra mệnh đề đúng.<br>- $2x^2-x+3=0$ vô nghiệm do đó tập hợp $B$ là tập hợp rỗng. Suy ra mệnh đề đúng.<br>- Tổng các phần tử của tập hợp $A$ và tập hợp $B$ là 2. Suy ra mệnh đề sai."
  },
  {
    "id": "0D123DS4",
    "question": "Trong mỗi ý a,b,c,d ở mỗi câu, thí sinh chọn đúng hoặc sai.",
    "subQuestions": [
      {
        "text": "Tập hợp $(-\\infty ;-3) \\backslash[-5 ; 2)=(-\\infty ;-5)$",
        "answer": true
      },
      {
        "text": "Cho $M=[-3 ; 6]$ và $N=(-\\infty ;-2) \\cup(3 ;+\\infty)$. Khi đó $M \\cap N=(-\\infty ;-2) \\cup(3 ; 6]$",
        "answer": false
      },
      {
        "text": "Cho $X=(-4 ; 3)$, $Y=\\{x \\in \\mathbb{R}\\mid 2 x+4&gt;0, x&lt;5\\}$, $ Z=\\{x \\in \\mathbb{R}\\mid(x+3)(x-4)=0\\}$. Khi đó $Z \\subset X \\cup Y$",
        "answer": false
      },
      {
        "text": "Cho số thực $a&lt;0$. Điều kiện cần và đủ để $(-\\infty ; 9 a) \\cap\\left(\\dfrac{4}{a};+\\infty\\right) \\neq \\varnothing$ là $-\\dfrac{2}{3}&lt;a&lt;0$",
        "answer": true
      }
    ],
    "explain": "<br>- $(-\\infty ;-3) \\backslash[-5 ; 2)=(-\\infty ;-5)$. Suy ra mệnh đề đúng.<br>- $M=[-3 ; 6]$ và $N=(-\\infty ;-2) \\cup(3 ;+\\infty)$. Khi đó $M \\cap N=[-3;-2) \\cup(3 ; 6]$. Suy ra mệnh đề sai.<br>- $Z=\\{-3;4\\}$; $Y=(-2;5)$ và $X \\cup Y=(-4;5)$. Suy ra mệnh đề đúng.<br>- $(-\\infty ; 9 a) \\cap\\left(\\dfrac{4}{a};+\\infty\\right) \\neq \\varnothing \\Leftrightarrow \\dfrac{4}{a}&lt;9a \\Leftrightarrow 4&gt;9a^2 \\Leftrightarrow -\\dfrac{2}{3}&lt;a&lt;\\dfrac{2}{3}$. Vì $a&lt;0$ nên $-\\dfrac{2}{3}&lt;a&lt;0$.<br> Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS5",
    "question": "Cho $A=[m ; +\\infty)$ và $B=(2 m ; 2 m+1]$ là các tập hợp khác rỗng .",
    "subQuestions": [
      {
        "text": "$A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\ge 1$",
        "answer": false
      },
      {
        "text": "$\\mathrm{B}$ nằm trong $\\mathrm{A}$ khi $m&gt;0$",
        "answer": false
      },
      {
        "text": "Với $\\mathrm{m}=2$ thì tập $\\mathrm{A}=[2 ; +\\infty)$",
        "answer": true
      },
      {
        "text": "$A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\ge -1$",
        "answer": true
      }
    ],
    "explain": "<br>- $A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\le 2m+1 \\Leftrightarrow m\\ge -1$. Suy ra mệnh đề sai.<br>- $\\mathrm{B}$ nằm trong $\\mathrm{A}$ khi $2m\\ge m \\Leftrightarrow m\\ge 0$. Suy ra mệnh đề sai.<br>- Với $m=2$ thì $\\mathrm{A}=[2 ; +\\infty)$. Suy ra mệnh đề đúng.<br>- $A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\le 2m+1 \\Leftrightarrow m\\ge -1$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS6",
    "question": "Cho ba tập hợp $A=\\left\\{x \\in \\mathbb{N}\\mid(2 x+1)\\left(x^2-7 x+10\\right)=0\\right\\}$, $B=\\{x \\in \\mathbb{R}\\mid 2&lt;x \\leq 5\\}$ và $C=\\{2 ; m ; 5\\}$",
    "subQuestions": [
      {
        "text": "Tập hợp $A$ có hai tập hợp con khác rỗng",
        "answer": true
      },
      {
        "text": "$A \\subset B$",
        "answer": false
      },
      {
        "text": "$\\{3 ; 4 ; 5\\}\\subset B$",
        "answer": true
      },
      {
        "text": "Không có giá trị nào của $m$ để $A=C$",
        "answer": true
      }
    ],
    "explain": "<br>- $A=\\left\\{2;5\\right\\}$. Suy ra mệnh đề đúng.<br>- $2\\notin B$. Suy ra mệnh đề sai.<br>- $\\{3 ; 4 ; 5\\}\\subset B$. Suy ra mệnh đề đúng.<br>- Vì $m\\ne 2, m\\ne 5$ nên $A\\ne C$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS7",
    "question": "Cho các tập hợp $A=\\left\\{x \\in \\mathbb{N}\\mid 2 x^2-3 x+1=0\\right\\}, B=\\left\\{x \\in \\mathbb{N}^*\\mid x&lt;2\\right\\}$, $ X=\\{x \\in \\mathbb{Z}\\mid|x|&lt;3\\}$<br>  và $Y=\\left\\{y \\in \\mathbb{R}\\mid\\left(y^2-1\\right)\\left(y^2-4\\right)=0\\right\\}$. Ta có",
    "subQuestions": [
      {
        "text": "$A \\subset B$",
        "answer": false
      },
      {
        "text": "$B \\subset X$",
        "answer": true
      },
      {
        "text": "Tập $B$ có tất cả $8$ tập con",
        "answer": false
      },
      {
        "text": "$X=Y$",
        "answer": false
      }
    ],
    "explain": "Ta có $A=\\left\\{1\\right\\}$, $B=\\{1\\}$, $X=\\{-2;-1;0;1;2\\}$ và $Y=\\{-1;1;-2;2\\}$  <br>- Mệnh đề đúng.<br>- Mệnh đề đúng.<br>- $B$ có $2$ tập con. Suy ra mệnh đề đúng.<br>- Mệnh đề sai."
  },
  {
    "id": "0D121DS8",
    "question": "Cho hai tập hợp $A=\\left\\{x \\in \\mathbb{R}\\mid 2 x-x^2=0\\right\\}$ và <br> $B=\\{x \\in \\mathbb{N}\\mid x \\leq 3\\}$.",
    "subQuestions": [
      {
        "text": "$A \\cup B=\\{0 ; 2\\}$",
        "answer": false
      },
      {
        "text": "$B \\backslash A=\\{1 ; 3\\}$",
        "answer": true
      },
      {
        "text": "$(A \\backslash B) \\cap A=\\varnothing$",
        "answer": true
      },
      {
        "text": "$(A \\cap B) \\cup(B \\backslash A)=B$",
        "answer": true
      }
    ],
    "explain": "<br>- $A=\\left\\{0;2\\right\\}$, $B=\\{0;1;2;3\\}$ suy ra $A \\cup B=\\{0 ;1; 2;3\\}$. Suy ra mệnh đề sai.<br>- $B \\backslash A=\\{1 ; 3\\}$. Suy ra mệnh đề đúng.<br>- $A \\backslash B=\\varnothing$ nên $(A \\backslash B) \\cap A=\\varnothing$. Suy ra mệnh đề đúng.<br>- $A \\cap B=\\{0;2\\}$ nên $(A \\cap B) \\cup(B \\backslash A)=B$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D121DS9",
    "question": "Cho hai tập hợp $A=\\{-1 ; 1 ; 2 ; 3 ; 5 ; 7\\}$ và <br>$B=\\left\\{x \\in \\mathbb{N}\\mid x^2&lt;9\\right\\}$",
    "subQuestions": [
      {
        "text": "Tập $A \\cap \\mathbb{N}=\\{1 ; 2 ; 3 ; 5 ; 7\\}$",
        "answer": true
      },
      {
        "text": "$A \\cap B=\\{-1 ; 1 ; 2\\}$",
        "answer": false
      },
      {
        "text": "$ A \\cup B=\\{-2 ;-1 ; 0 ; 1 ; 2 ; 3 ; 5 ; 7\\}$",
        "answer": false
      },
      {
        "text": "Tập $A \\backslash B$ có $4$ phần tử",
        "answer": true
      }
    ],
    "explain": "<br>- $A \\cap \\mathbb{N}=\\{1 ; 2 ; 3 ; 5 ; 7\\}$. Suy ra mệnh đề đúng.<br>- $B=\\{0;1;2\\}$ nên $A \\cap B=\\{1 ; 2\\}$. Suy ra mệnh đề sai.<br>- $ A \\cup B=\\{-1 ; 0 ; 1 ; 2 ; 3 ; 5 ; 7\\}$. Suy ra mệnh đề sai.<br>- $A \\backslash B=\\{-1;3;5;7\\}$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS10",
    "question": "Cho các tập hợp $A=(-\\infty ; m), B=[3 m-1 ; 3 m+3]$ với $m \\in \\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "Khi $m=1$ thì tập $B$ chứa $3$ giá trị nguyên",
        "answer": false
      },
      {
        "text": "Với $m=2$ thì $A \\cap B=\\varnothing$",
        "answer": true
      },
      {
        "text": "Các giá trị của $m$ để $B \\subset A$ là $m \\geq \\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Các giá trị của $m$ để $C_{\\mathbb{R}}A \\cap B \\neq \\varnothing$ là $m \\geq-\\dfrac{3}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Khi $m=1$ thì tập $B=[2;6]$ chứa $5$ giá trị nguyên. Suy ra mệnh đề sai.<br>- Với $m=2$ thì $A=(-\\infty;2)$ và $B=[5;9]$, suy ra $A \\cap B=\\varnothing$. Suy ra mệnh đề đúng.<br>- $B \\subset A$ khi $3m+3&lt;m \\Leftrightarrow m&lt;-\\dfrac{3}{2}$. Suy ra mệnh đề sai.<br>- $C_{\\mathbb{R}}A=[m;+\\infty)$. Ta có $C_{\\mathbb{R}}A \\cap B \\neq \\varnothing$ khi $3m+3\\ge m \\Leftrightarrow m \\geq-\\dfrac{3}{2}$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D121DS11",
    "question": "Cho $A=\\{n \\in \\mathbb{N}\\mid n ~\\vdots ~2\\}$, $B=\\{n \\in \\mathbb{N}\\mid n ~\\vdots~ 4\\}$ và $\\mathrm{C}=\\{n \\in \\mathbb{N}\\mid n ~\\vdots~ 5\\}$.",
    "subQuestions": [
      {
        "text": "$A \\cap B=A$",
        "answer": false
      },
      {
        "text": "$C \\backslash A=\\{10 k+5 \\mid k \\in \\mathbb{N}\\}$",
        "answer": true
      },
      {
        "text": "$B \\cap C=\\{n \\in N \\mid n ~\\vdots ~20\\}$",
        "answer": true
      },
      {
        "text": "Tập hợp $A \\cup C$ có $60$ phần tử nhỏ hơn $100$",
        "answer": true
      }
    ],
    "explain": "<br>- $A \\cap B=B$. Suy ra mệnh đề sai.<br>- $C \\backslash A=\\{10 k+5 \\mid k \\in \\mathbb{N}\\}$. Suy ra mệnh đề đúng.<br>- $B \\cap C=\\{n \\in N \\mid n ~\\vdots~ 20\\}$. Suy ra mệnh đề đúng.<br>- $A \\cup C=\\{0;2;4;6;8;\\ldots; 5;15;25;\\ldots\\}$. Ta có $0;2;4;\\ldots;98$ có $50$ số và $5;15;25;\\ldots;95$ có $19$ số. Do đó có $69$ phần tử nhỏ hơn $100$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS12",
    "question": "Cho hai tập $A=[0 ; 5] ; B=(2 a ; 3 a+1], a&gt;-1$. Trong mỗi ý a), b), c), d) Thí sinh chọn đúng hoặc sai.",
    "subQuestions": [
      {
        "text": "Trong tập $A$ có đúng $5$ số nguyên",
        "answer": false
      },
      {
        "text": "$B \\subset A$ đúng $\\forall a&gt;-1$",
        "answer": false
      },
      {
        "text": "Nếu $a=0$ thì $A \\cap B=A$",
        "answer": false
      },
      {
        "text": "Điều kiện của $a$ để $A \\cap B \\neq \\varnothing$ là $-\\dfrac{1}{3}\\leq a&lt;\\dfrac{5}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Trong tập $A$ có đúng 6 số nguyên. Suy ra mệnh đề sai.<br>- $B \\subset A\\Leftrightarrow 2a&lt;3a+1 \\text{ và } 2a\\ge 0 \\text{ và } 3a+1\\le 5\\Leftrightarrow 0\\le a\\le \\dfrac{4}{3}$. Suy ra mệnh đề sai.<br>- Nếu $a=0$ thì $B=(0;1] \\Rightarrow A \\cap B=(0;1]$. Suy ra mệnh đề sai.<br>- $A \\cap B \\neq \\varnothing \\Leftrightarrow2a&lt;3a+1 \\text{ và } 0&lt;2a&lt;5 \\text{ hoặc } 0\\le 3a+1\\le 5 \\Leftrightarrow-\\dfrac{1}{3}\\leq a&lt;\\dfrac{5}{2}$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D122DS13",
    "question": "Cho tập $A=\\{x \\in \\mathbb{R}\\mid 1 \\leq x \\leq 10\\}$ và $B=\\{x \\in \\mathbb{N}\\mid 2 \\leq x \\leq 11\\}$. Trong mỗi ý a), b), c), d) Thí sinh chọn đúng hoặc sai.",
    "subQuestions": [
      {
        "text": "Tập $A$ có $10$ phần tử",
        "answer": false
      },
      {
        "text": "Số phần tử tập $B$ ít hơn số phần tử tập $A$",
        "answer": true
      },
      {
        "text": "Trong tập $A$ chỉ có $4$ số nguyên tố",
        "answer": true
      },
      {
        "text": "Nếu $C=\\left\\{x \\in \\mathbb{Q}\\mid x^4+3 x^2-2548=0\\right\\}$ thì $C \\subset A$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập $A=[1;10]$ có vô số phần tử. Suy ra mệnh đề sai.<br>- Tập $B$ có $10$ phần tử. Suy ra mệnh đề đúng.<br>- Tập $A$ chỉ có $4$ số nguyên tố là $2;3;5;7$. Suy ra mệnh đề đúng.<br>- $x^4+3 x^2-2548=0\\Leftrightarrow x=7;x=-7\\Rightarrow C=\\left\\{-7;7\\right\\}\\not\\subset A$. Suy ra mệnh đề sai."
  },
  {
    "id": "0D122DS14",
    "question": "Cho tập hợp: $A=\\{x \\in \\mathrm{R}\\mid(x-1)(x-2)(x-3)=0\\}$ và $B=\\{5 ; 3 ; 1\\}$. Ta có",
    "subQuestions": [
      {
        "text": "Tập hợp $A$ có 3 phần tử",
        "answer": true
      },
      {
        "text": "Tập hợp $A \\cup B$ có 6 phần tử",
        "answer": false
      },
      {
        "text": "Tập hợp $A \\subset B$",
        "answer": false
      },
      {
        "text": "Tập hợp $B \\subset A$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập $A=\\{1;2;3\\}$. Suy ra mệnh đề đúng.<br>- Tập $A \\cup B=\\{1;2;3;5\\}$. Suy ra mệnh đề sai.<br>- Tập $A \\not\\subset B$. Suy ra mệnh đề sai.<br>- Tập $B \\not\\subset A$. Suy ra mệnh đề sai."
  },
  {
    "id": "0D123DS15",
    "question": "Cho hai tập hợp $A=\\{x \\in \\mathbb{R}|| x \\mid&gt;4\\}$ và <br> $B=\\{x \\in \\mathbb{R}\\mid-5 \\leq x-1&lt;5\\}$. Xét tính đúng - sai của các mệnh đề sau?",
    "subQuestions": [
      {
        "text": "$B \\backslash A=[-4 ; 4]$",
        "answer": true
      },
      {
        "text": "$A \\cap B=(4 ; 6)$",
        "answer": true
      },
      {
        "text": "$\\mathbb{R}\\backslash(A \\cap B)=(-\\infty ; 4) \\cup[6 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "$\\mathbb{R}\\backslash(A \\cup B)=\\varnothing$",
        "answer": true
      }
    ],
    "explain": "<br>- $A=(-\\infty;-4)\\cup (4;+\\infty)$ và $B=[-4;6)$ nên $B \\backslash A=[-4 ; 4]$. Suy ra mệnh đề đúng.<br>- $A \\cap B=(4;6)$. Suy ra mệnh đề đúng.<br>- $\\mathbb{R}\\backslash(A \\cap B)=(-\\infty ; 4] \\cup[6 ;+\\infty)$. Suy ra mệnh đề sai.<br>- $A \\cup B=\\mathbb{R}\\Rightarrow \\mathbb{R}\\backslash(A \\cup B)=\\varnothing$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS16",
    "question": "Cho hai tập hợp $A=(-\\infty ; 3]$ và $B=[-1 ; 5)$. Xét tính đúng - sai của các mệnh đề sau :",
    "subQuestions": [
      {
        "text": "$A \\cap B=[-1 ; 3]$",
        "answer": true
      },
      {
        "text": "$A \\cup B=(-\\infty ; 5)$",
        "answer": true
      },
      {
        "text": "$A \\backslash B=(-\\infty ;-1]$",
        "answer": false
      },
      {
        "text": "Tập hợp $B \\backslash A$ chứa $2$ số nguyên",
        "answer": false
      }
    ],
    "explain": "<br>- $A \\cap B=[-1 ; 3]$. Suy ra mệnh đề đúng.<br>- $A \\cup B=(-\\infty ; 5)$. Suy ra mệnh đề đúng.<br>- $A \\backslash B=(-\\infty ;-1)$. Suy ra mệnh đề sai.<br>- Tập hợp $B \\backslash A=(3;5)$ chứa $1$ số nguyên. Suy ra mệnh đề sai."
  },
  {
    "id": "0D123DS17",
    "question": "Cho tập hợp các số nguyên $\\mathbb{Z}$ và tập hợp khác rỗng $A=(-5 ; 2-m]$, với $m$ là tham số thực.",
    "subQuestions": [
      {
        "text": "Tập $\\mathbb{Z}$ có vô số phần tử",
        "answer": true
      },
      {
        "text": "Với $m=2$ thì tập hợp $A=(-5 ; 0]$",
        "answer": true
      },
      {
        "text": "Với $m&lt;7$ thì tập hợp $\\mathbb{Z}\\cap A=(-5 ; 2-m]$",
        "answer": false
      },
      {
        "text": "Tập hợp $\\mathbb{Z}\\cap A$ chứa không quá $10$ phần tử khi và chỉ khi $-3 \\leq m&lt;7$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập $\\mathbb{Z}$ có vô số phần tử. Suy ra mệnh đề đúng.<br>- Với $m=2$ thì tập hợp $A=(-5 ; 0]$. Suy ra mệnh đề đúng.<br>- Với $m&lt;7$ thì tập hợp $\\mathbb{Z}\\cap A$ là tập rỗng hoặc các số nguyên. Suy ra mệnh đề sai.<br>- Tập hợp $\\mathbb{Z}\\cap A$ chứa không quá 10 phần tử khi và chỉ khi $ m&lt;7, 2-m\\le 5 \\Leftrightarrow -3 \\leq m&lt;7$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS18",
    "question": "Cho tập hợp $A=[-2 ; 4), B=(0 ; 6]$ và $C=(1 ;+\\infty)$.",
    "subQuestions": [
      {
        "text": "$A \\cup B=[-2 ; 6]$",
        "answer": true
      },
      {
        "text": "$(A \\cap B) \\cup C=(-\\infty ; 0)$",
        "answer": false
      },
      {
        "text": "$A \\backslash(B \\cup C)=\\varnothing$",
        "answer": false
      },
      {
        "text": "Số giá trị nguyên thuộc tập hợp $A \\cap B \\cap C$ là $3$",
        "answer": true
      }
    ],
    "explain": "<br>- $A \\cup B=[-2 ; 6]$. Suy ra mệnh đề đúng.<br>- $A \\cap B=(0;4) \\Rightarrow (A \\cap B) \\cup C=(0;+\\infty)$. Suy ra mệnh đề sai.<br>- $B \\cup C=(0;+\\infty)\\Rightarrow A \\backslash(B \\cup C)=[-2;0]$. Suy ra mệnh đề sai.<br>- $A \\cap B \\cap C=(1;4)$ chứa 3 giá trị nguyên. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS19",
    "question": "Cho hai tập hợp $A=\\left[1-m ; \\dfrac{m+3}{2}\\right] \\neq \\varnothing$ và<br> $B=(-\\infty ;-3) \\cup(3 ;+\\infty)$.",
    "subQuestions": [
      {
        "text": "$A \\neq \\varnothing \\Leftrightarrow m \\geq -\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "Với $m=3$ thì $A \\cap B \\neq \\varnothing$",
        "answer": false
      },
      {
        "text": "Có $6$ giá trị nguyên của tham số $m$ để $A \\subset B$",
        "answer": false
      },
      {
        "text": "Có $7$ giá trị nguyên nhỏ hơn $10$ của tham số $m$ để $A \\cup B=\\mathbb{R}$",
        "answer": true
      }
    ],
    "explain": "<br>- $A \\neq \\varnothing\\Leftrightarrow \\dfrac{m+3}{2}\\ge1-m \\Leftrightarrow m \\geq -\\dfrac{1}{3}$. Suy ra mệnh đề đúng.<br>- Với $m=3$ thì $A=[-2;3] \\Rightarrow A \\cap B= \\varnothing$. Suy ra mệnh đề sai.<br>- $A \\subset B$ khi $m \\geq -\\dfrac{1}{3} \\text{ và } 1-m&gt;3 \\text{ hoặc } \\dfrac{m+3}{2}&lt;-3 \\Leftrightarrow m \\geq -\\dfrac{1}{3} \\text{ và } m&lt;-2 \\text{ hoặc } m&lt;-9$ không tồn tại $m$. Suy ra mệnh đề sai.<br>- $A \\cup B=\\mathbb{R}\\Leftrightarrow m \\geq -\\dfrac{1}{3} \\text{ và } 1-m\\le -3 \\text{ và } \\dfrac{m+3}{2}\\ge 3 \\Leftrightarrow m \\geq -\\dfrac{1}{3} \\text{ và } m\\ge 4 \\text{ và } m\\ge 3 \\Leftrightarrow m\\ge 3$. Có $7$ giá trị nguyên nhỏ hơn $10$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D123DS20",
    "question": "Cho tập $A=(-10 ; 1)$ và $B=(m ; m+7)$. Trong mỗi ý a), b), c), d) dưới đây, thí sinh chọn đúng hoặc sai.",
    "subQuestions": [
      {
        "text": "Điều kiện để $B \\subset A$ là $-10 \\leq m \\leq-6$",
        "answer": true
      },
      {
        "text": "Điều kiện để $A \\cap B=\\varnothing$ là $m \\geq 1$ hoặc $m \\leq-17$",
        "answer": true
      },
      {
        "text": "Điều kiện để $A \\backslash B \\neq \\varnothing$ là $-17&lt;m&lt;1$",
        "answer": false
      },
      {
        "text": "Điều kiện để $A \\cup B$ là một khoảng có độ dài bằng $12$ thì tổng các giá trị $m$ bằng $-18$",
        "answer": false
      }
    ],
    "explain": "<br>- $B \\subset A \\Leftrightarrow m\\ge -10 \\text{ và } m+7\\le 1 \\Leftrightarrow m\\ge -10 \\text{ và } m\\le -6\\Leftrightarrow -10 \\leq m \\leq-6$. Suy ra mệnh đề đúng.<br>- $A \\cap B=\\varnothing\\Leftrightarrow m+7\\le -10 \\text{ hoặc } m\\ge 1 \\Leftrightarrow m\\le -17 \\text{ hoặc } m\\ge 1$. Suy ra mệnh đề đúng.<br>- $A \\backslash B \\neq \\varnothing \\Leftrightarrow A\\not\\subset B$. Độ dài của $A$ là $1-(-10)=11$ và độ dài của $B$ là $(m+7)-m=7$. Vì $11&gt;7$ nên $A\\not\\subset B$ với mọi $m$. Suy ra mệnh đề sai.<br>- $A \\cup B$ là một khoảng có độ dài bằng $12$ khi $-10&lt;m&lt;1;m+7+10=12 \\text{ hoặc } -10&lt;m+7&lt;1; 1-m=12 \\Leftrightarrow m=-5;m=-11.$  Tổng các giá trị $m$ bằng $-16$. Suy ra mệnh đề sai."
  },
  {
    "id": "0D122DS1",
    "question": "Cho tập hợp $A = \\{2,4,6,8\\}$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\varnothing \\subset A$",
        "answer": true
      },
      {
        "text": "$2 \\in A$",
        "answer": true
      },
      {
        "text": "Số tập con của tập hợp $A$ có $1$ phần tử là $8$",
        "answer": false
      },
      {
        "text": "$A = \\{n \\in \\mathbb{N} | n = 2k, 0 \\le k \\le 4, k \\in \\mathbb{N}\\}$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập rỗng là tập con của mọi tập hợp.<br>- $2$ là một phần tử của tập hợp $A$.<br>- Các tập con có $1$ phần tử là $\\{2\\}, \\{4\\}, \\{6\\}, \\{8\\}$. Có $4$ tập con.<br>- Với $k=0$, ta có $n=0$. $0 \\notin A$."
  }
];
