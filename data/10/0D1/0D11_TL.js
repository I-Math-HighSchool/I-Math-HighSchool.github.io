// =========================================================================
// KHỐI DỮ LIỆU: 0D11 - Trả lời ngắn
// Nguồn: Biên soạn mới, bám sát nội dung Mệnh đề (đếm số mệnh đề đúng,
// mệnh đề chứa biến, phủ định, kéo theo/tương đương, ứng dụng đếm).
// =========================================================================
window.traLoiNgan0D11 = [
  {
    "id": "0D111TL1",
    "question": "Trong các phát biểu sau, có bao nhiêu phát biểu là mệnh đề đúng?<br>- (1) $2^{10}=1024$.<br>- (2) Số $91$ là số nguyên tố.<br>- (3) Tổng ba góc trong một tam giác bằng $180^\\circ$.<br>- (4) $\\sqrt{16}=-4$.<br>- (5) Phương trình $x^2+1=0$ vô nghiệm trên $\\mathbb{R}$.",
    "answer": "3",
    "explain": "Xét từng phát biểu:<br>- (1) $2^{10}=1024$ là mệnh đề đúng.<br>- (2) Ta có $91=7\\cdot 13$ nên $91$ không phải là số nguyên tố, mệnh đề (2) sai.<br>- (3) Tổng ba góc trong một tam giác luôn bằng $180^\\circ$, mệnh đề (3) đúng.<br>- (4) Căn bậc hai số học của $16$ là $4$ (không âm) nên $\\sqrt{16}=-4$ là mệnh đề sai.<br>- (5) Với mọi $x\\in\\mathbb{R}$, $x^2\\ge 0$ nên $x^2+1&gt;0$, do đó phương trình $x^2+1=0$ vô nghiệm trên $\\mathbb{R}$, mệnh đề (5) đúng.<br>  Vậy có $3$ mệnh đề đúng, đó là các phát biểu (1), (3), (5)."
  },
  {
    "id": "0D111TL2",
    "question": "Cho mệnh đề chứa biến $P(n)\\colon$ “ $n^2-5n+6\\le 0$” với $n\\in\\mathbb{N}$. Hỏi có bao nhiêu giá trị của $n$ làm cho $P(n)$ trở thành mệnh đề đúng?",
    "answer": "2",
    "explain": "Ta có $n^2-5n+6\\le 0 \\Leftrightarrow (n-2)(n-3)\\le 0 \\Leftrightarrow 2\\le n\\le 3$.<br>  Vì $n\\in\\mathbb{N}$ nên $n\\in\\{2;3\\}$.<br>  Vậy có $2$ giá trị của $n$ làm cho $P(n)$ đúng."
  },
  {
    "id": "0D112TL1",
    "question": "Cho các mệnh đề sau:<br>- (1) “ Tam giác $ABC$ đều $\\Rightarrow$ Tam giác $ABC$ cân”.<br>- (2) “ Tứ giác có bốn cạnh bằng nhau $\\Rightarrow$ Tứ giác đó là hình vuông”.<br>- (3) “ $x&gt;2 \\Rightarrow x^2&gt;4$” với $x\\in\\mathbb{R}$.<br>- (4) “ $x^2&gt;4 \\Rightarrow x&gt;2$” với $x\\in\\mathbb{R}$.<br>- (5) “ Số tự nhiên $n$ chia hết cho $6$ $\\Leftrightarrow$ $n$ chia hết cho $2$ và $n$ chia hết cho $3$”.<br>Có bao nhiêu mệnh đề đúng trong các mệnh đề trên?",
    "answer": "3",
    "explain": "Xét từng mệnh đề:<br>- (1) Tam giác đều là trường hợp đặc biệt của tam giác cân (có ít nhất hai cạnh bằng nhau) nên mệnh đề (1) đúng.<br>- (2) Hình thoi có bốn cạnh bằng nhau nhưng chưa chắc có góc vuông nên chưa chắc là hình vuông, mệnh đề (2) sai.<br>- (3) Với $x&gt;2&gt;0$ thì $x^2&gt;2^2=4$, mệnh đề (3) đúng.<br>- (4) Với $x=-3$ thì $x^2=9&gt;4$ nhưng $x=-3$ không lớn hơn $2$, mệnh đề (4) sai.<br>- (5) Vì $6=2\\cdot 3$ với $\\text{ƯCLN}(2,3)=1$ nên $n\\ \\vdots\\ 6 \\Leftrightarrow n\\ \\vdots\\ 2$ và $n\\ \\vdots\\ 3$, mệnh đề (5) đúng.<br>  Vậy có $3$ mệnh đề đúng, đó là các mệnh đề (1), (3), (5)."
  },
  {
    "id": "0D115TL1",
    "question": "Cho mệnh đề chứa biến $P(x)\\colon$ “ $x^2-4x+3&gt;0$” với $x\\in\\mathbb{Z}$. Trong các số nguyên $x$ thỏa mãn $-2\\le x\\le 6$, có bao nhiêu giá trị của $x$ làm cho mệnh đề phủ định $\\overline{P(x)}$ trở thành mệnh đề đúng?",
    "answer": "3",
    "explain": "Mệnh đề phủ định của $P(x)$ là $\\overline{P(x)}\\colon$ “ $x^2-4x+3\\le 0$”.<br>  Ta có $x^2-4x+3\\le 0 \\Leftrightarrow (x-1)(x-3)\\le 0 \\Leftrightarrow 1\\le x\\le 3$.<br>  Kết hợp với điều kiện $-2\\le x\\le 6$ và $x\\in\\mathbb{Z}$, ta được $x\\in\\{1;2;3\\}$.<br>  Vậy có $3$ giá trị của $x$ làm cho $\\overline{P(x)}$ đúng."
  },
  {
    "id": "0D116TL1",
    "question": "Một lớp học có $40$ học sinh, trong đó có $20$ học sinh giỏi môn Toán, $15$ học sinh giỏi môn Văn và $10$ học sinh không giỏi môn nào trong hai môn Toán, Văn. Xét mệnh đề $P$: “ Học sinh này giỏi cả hai môn Toán và Văn”. Hỏi có bao nhiêu học sinh của lớp làm cho mệnh đề $P$ trở thành mệnh đề đúng?",
    "answer": "5",
    "explain": "Số học sinh giỏi ít nhất một trong hai môn Toán, Văn là $40-10=30$ (học sinh).<br>  Gọi số học sinh giỏi cả hai môn là $x$. Theo công thức bao gồm - loại trừ:<br>  $30=20+15-x \\Rightarrow x=5$.<br>  Vậy có $5$ học sinh làm cho mệnh đề $P$ đúng."
  },
  {
    "id": "0D116TL2",
    "question": "Cho mệnh đề chứa hai biến $P(m,n)\\colon$ “ $m^2+n^2=25$” với $m,n$ là các số nguyên dương. Hỏi có bao nhiêu cặp số $(m,n)$ làm cho $P(m,n)$ trở thành mệnh đề đúng?",
    "answer": "2",
    "explain": "Ta cần tìm các số nguyên dương $m,n$ thỏa $m^2+n^2=25$.<br>  Do $m^2&lt;25$ nên $m\\in\\{1,2,3,4\\}$: với $m=3$ thì $n^2=16\\Rightarrow n=4$ (thỏa mãn); với $m=4$ thì $n^2=9\\Rightarrow n=3$ (thỏa mãn); với $m=1$ thì $n^2=24$ không phải số chính phương; với $m=2$ thì $n^2=21$ không phải số chính phương.<br>  Vậy có đúng $2$ cặp số thỏa mãn là $(3;4)$ và $(4;3)$."
  }
];
