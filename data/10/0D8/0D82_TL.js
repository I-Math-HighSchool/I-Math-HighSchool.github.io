// =========================================================================
// KHỐI DỮ LIỆU: 0D82 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan0D82 = [
  {
    "id": "0D821TL1",
    "question": "Một người có $5$ thẻ được đánh số từ $1$ đến $5$. Chọn $3$ thẻ để lập số tự nhiên có $3$ chữ số. Có bao nhiêu số tự nhiên được lập chia hết cho $2$?",
    "answer": "24",
    "explain": "Giả sử số cần lập có dạng $\\overline{abc}$.<br>  Chữ số $c$ có 2 lựa chọn với $ c\\in\\left\\{ 2;4\\right\\}.$<br>  Số cách sắp xếp $\\overline{ab}$ là $ \\mathrm{A}_4^2$.<br>  Vậy số tự nhiên theo yêu cầu bài toán là $ A_4^2\\cdot2=24$"
  },
  {
    "id": "0D821TL2",
    "question": "Anh Nam mới vừa mua xe ô tô nhưng chưa ra biển số, anh rất mong muốn 5 chữ số trên biển số xe của mình là \\lq\\lq không lùi\\rq\\rq\\ hoặc \\lq\\lq không quá bé\\rq\\rq. Theo cách nghĩ của anh Nam, đó là một số tự nhiên có $5$ chữ số dạng $\\overline{m a b c n}$ sao cho $4\\leqslant m \\leqslant a \\leqslant b \\leqslant c \\leqslant n$. Có tất cả bao nhiêu số tự nhiên phù hợp với mong muốn của anh Nam?",
    "answer": "252",
    "explain": "Ta có $m$, $a$, $b$, $c$, $n$ được chọn từ tập $A=\\left\\{4; 5; 6; 7; 8; 9\\right\\}$.<br>  Đây là bài toán chọn $5$ phần từ từ tập hợp $A$ với phép chọn có thể có các phần tử trùng nhau.<br>  Suy ra tổ hợp chập $k$ của $n$ phần tử với phép lặp có công thức là $\\mathrm{C}_{n+k-1}^k$ cách.<br>  Ta có $n=6$ (số lượng phần tử trong tập $A$) và $k=5$ (số lượng chữ số cần chọn).<br>  Suy ra số các số tự nhiên phù hợp là $C_{6+5-1}^5=C_{10}^5=252$.<br>  \\textbf{\\color{red}<u>Cách khác:</u>}<br>  Do $4\\leqslant m \\leqslant a \\leqslant b \\leqslant c \\leqslant n$<br>  nên $4\\leqslant m &lt; a+1&lt; b+2&lt; c+3&lt; n+4\\leqslant 13$<br>  $\\Rightarrow 1\\leqslant m-3&lt; a-2&lt; b-1&lt; c &lt; n+1\\leqslant 10$.<br>  Đặt $m-3=a_1$; $a-2=a_2$; $b-1=a_3$; $c=a_4$; $n+1=a_5 \\Rightarrow 1\\leqslant a_1 &lt; a_2 &lt; a_3 &lt; a_4 &lt; a_5 \\leqslant 10$.<br>  Do đó mỗi các chọn một bộ $(m; a; b; c; n)$ tương ứng với một cách chọn năm số phân biệt từ tập $\\left\\{1; 2; \\ldots; 10\\right\\}$.<br>  Vậy ra số các số tự nhiên phù hợp là $\\mathrm{C}_{10}^5=252$."
  }
];
