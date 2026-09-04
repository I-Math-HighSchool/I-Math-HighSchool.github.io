// =========================================================================
// KHỐI DỮ LIỆU: 0D13 - Đúng sai
// Nguồn: Đề thi Giữa Kì I thật từ các trường THPT (thư mục LocID/BANK-25-26),
// giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0D13 = [
  {
    "id": "0D134DS1",
    "question": "Cho hai tập hợp:  $A=\\{1;2;3;4\\}$; $B=\\{x \\in\\mathbb{R} \\mid-2 \\le x \\le 2\\}$.",
    "subQuestions": [
      {
        "text": "$\\{1; 2\\} \\subset A$",
        "answer": true
      },
      {
        "text": "$B = \\{-2; -1; 0; 1; 2\\}$",
        "answer": false
      },
      {
        "text": "$A \\setminus B = \\varnothing$",
        "answer": false
      },
      {
        "text": "$A \\cup B$ có đúng $7$ phần tử",
        "answer": false
      }
    ],
    "explain": "<br>- Đúng.<br>- Sai. $B=[-2;2]$.<br>- Sai. $A\\setminus B=\\{3;4\\}$.<br>- Sai. $A\\cup B=[-2;2]\\cup \\{3;4\\}$. Tập này có vô số phần tử."
  },
  {
    "id": "0D134DS2",
    "question": "Cho ba tập hợp $A = (1;5)$; $B = [-2;3]$ và $C = (m-1;+\\infty)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$A \\cup B = [-2;1)$",
        "answer": false
      },
      {
        "text": "$A \\cap B = (1;3]$",
        "answer": true
      },
      {
        "text": "$\\mathbb{R} \\setminus A = (-\\infty;1] \\cup [5;+\\infty)$",
        "answer": true
      },
      {
        "text": "Nếu $2 \\le m \\le 4$ thì $B \\cap C = (0;3]$",
        "answer": false
      }
    ],
    "explain": "<br>- $A \\cup B = (1;5) \\cup [-2;3] = [-2;5)$.<br>- $A \\cap B = (1;5) \\cap [-2;3] = (1;3]$.<br>- $\\mathbb{R} \\setminus A = \\mathbb{R} \\setminus (1;5) = (-\\infty;1] \\cup [5;+\\infty)$.<br>- Giả sử $m=4$, ta có $C = (3;+\\infty)$. Khi đó $B \\cap C = [-2;3] \\cap (3;+\\infty) = \\varnothing \\neq (0;3]$."
  },
  {
    "id": "0D133DS1",
    "question": "Cho ba tập hợp $A = [-5;1]$, $B = (-3;2)$ và $C = [2;+\\infty)$. Khi đó:",
    "subQuestions": [
      {
        "text": "$A = \\{x \\in \\mathbb{Q}\\mid-5 \\le x \\le 1\\}$",
        "answer": false
      },
      {
        "text": "$B \\cup C=(-3;+\\infty)$",
        "answer": true
      },
      {
        "text": "$A \\cap B \\cap C = \\varnothing$",
        "answer": true
      },
      {
        "text": "$C_R B = (-\\infty ;-3) \\cup [2 ;+\\infty)$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập $A = \\{x \\in \\mathbb{Q} | -5 \\le x \\le 1\\}$ là sai vì tập $A$ ban đầu là tập hợp các số thực, không phải số hữu tỉ.<br>- $B \\cup C = (-3;2) \\cup [2;+\\infty) = (-3;+\\infty)$ là đúng.<br>- $A \\cap B \\cap C = [-5;1] \\cap (-3;2) \\cap [2;+\\infty) = \\emptyset$ là đúng.<br>- $C_{\\mathbb{R}} B = \\mathbb{R} \\setminus (-3;2) = (-\\infty;-3] \\cup [2;+\\infty)$ là sai."
  },
  {
    "id": "0D134DS3",
    "question": "Cho hai tập hợp $A=[-2;+\\infty)$ và $B=(-\\infty; 5)$.",
    "subQuestions": [
      {
        "text": "$A \\cup B=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "$A \\cap B=[-2;5)$",
        "answer": true
      },
      {
        "text": "$A \\setminus B=(5;+\\infty)$",
        "answer": false
      },
      {
        "text": "$C_R (A \\cap B)=(5;+\\infty)$",
        "answer": false
      }
    ],
    "explain": "<br>- ĐÚNG.<br>  Ta có $A \\cup B=\\mathbb{R}$.<br>- ĐÚNG.<br>  Ta có $A \\cap B=[-2;5)$.<br>- SAI.<br>  Vì $A \\setminus B=[5;+\\infty)$.<br>- SAI.<br>  Vì $C_\\mathbb{R} (A \\cap B)=(-\\infty;-2) \\cup [5;+\\infty]$."
  },
  {
    "id": "0D132DS3",
    "question": "Lớp $10$A có sĩ số $45$ học sinh. Trong lớp có $22$ học sinh tham gia Câu lạc bộ Bóng đá, $18$ học sinh tham gia Câu lạc bộ Bóng rổ và $10$ học sinh tham gia cả hai câu lạc bộ trên.",
    "subQuestions": [
      {
        "text": "Lớp $10$A có $12$ học sinh tham gia Câu lạc bộ Bóng đá và không tham gia Câu lạc bộ Bóng rổ",
        "answer": true
      },
      {
        "text": "Lớp $10$A có $30$ học sinh tham gia ít nhất một trong hai câu lạc bộ trên",
        "answer": true
      },
      {
        "text": "Lớp $10$A có $25$ học sinh không tham gia Câu lạc bộ Bóng đá",
        "answer": false
      },
      {
        "text": "Lớp $10$A có $20$ học sinh không tham gia câu lạc bộ nào trong hai câu lạc bộ trên",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/10/0D1/im0D13/loc2_0_TN_DS_TL_SGD_B_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $A$ là tập hợp các học sinh lớp $10$A tham gia Câu lạc bộ Bóng đá.<br>  $B$ là tập hợp các học sinh lớp $10$A tham gia Câu lạc bộ Bóng rổ.<br>  $A\\cap B$ là tập hợp các học sinh lớp $10$A tham gia cả hai câu lạc bộ trên.<br>  $A\\cup B$ là tập hợp các học sinh lớp $10$A tham gia ít nhất một trong hai câu lạc bộ trên.<br>  Ta có $n(A)=22$, $n(B)=18$, $n\\left(A\\cap B\\right)=10$.  <br>- Số học sinh lớp $10$A tham gia Câu lạc bộ Bóng đá và không tham gia Câu lạc bộ Bóng rổ là $22-10=12$.<br>- Số học sinh lớp $10$A tham gia ít nhất một trong hai câu lạc bộ trên là \\[n\\left(A\\cup B\\right)=n(A)+n(B)-n\\left(A\\cap B\\right)=22+18-10=30.\\]<br>- Số học sinh lớp $10$A học sinh không tham gia Câu lạc bộ Bóng đá có thể  <br>- tham gia câu lạc bộ Bóng rổ là $18-10=8$.<br>- không tham gia cả hai môn Bóng đá và bóng rổ $45-30=15$.  Vậy số học sinh lớp $10$A học sinh không tham gia Câu lạc bộ Bóng đá là $8+15=23$.<br>- Số học sinh lớp $10$A không tham gia cả hai câu lạc bộ trên là $45-30=15$."
  },
  {
    "id": "0D131DS5",
    "question": "Lớp 10A có $19$ học sinh tham gia câu lạc bộ cầu lông, $15$ học sinh tham gia câu lạc bộ bóng đá, $7$ học sinh tham gia cả hai câu lạc bộ cầu lông và bóng đá, $8$ học sinh không tham gia câu lạc bộ nào trong hai câu lạc bộ cầu lông và bóng đá. Gọi $A$ là tập các học sinh tham gia câu lạc bộ cầu lông, $B$ là tập các học sinh tham gia câu lạc bộ bóng đá.",
    "subQuestions": [
      {
        "text": "Số phần tử của tập hợp $A\\cap B$ là $7$",
        "answer": true
      },
      {
        "text": "Tập $A\\cup B$ là tập tất cả các học sinh có tham gia ít nhất một trong hai câu lạc bộ cầu lông và bóng đá",
        "answer": true
      },
      {
        "text": "Số phần tử của tập hợp $A\\backslash B$ là $4$",
        "answer": false
      },
      {
        "text": "Sĩ số lớp 10A là $35$",
        "answer": true
      }
    ],
    "explain": "Từ đề bài, ta có $n(A)=19$, $n(B)=15$, $n(A\\cap B)=7$.  <br>- <strong>Đúng</strong>. Số phần tử của tập hợp $A\\cap B$ là $7$.<br>- <strong>Đúng</strong>. Tập $A\\cup B$ là tập tất cả các học sinh có tham gia ít nhất một trong hai câu lạc bộ cầu lông và bóng đá.<br>- <strong>Sai</strong>. Ta có $n(A\\setminus B)=19-7=12$.<br>- <strong>Đúng</strong>. Số học sinh tham gia thể thao mà $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)=19+15-7=27$.<br>  Do đó số học sinh lớp 10A là $27+8=35$."
  }
];
