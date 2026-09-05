// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D22 = [
  {
    "id": "1D222TL1",
    "question": "Trong một khán phòng có tất cả $30$ dãy ghế, dãy đầu tiên có $15$ ghế, các dãy liền sau nhiều hơn dãy trước đó $4$ ghế, hỏi khán phòng đó có tất cả bao nhiêu ghế?",
    "answer": "2190",
    "explain": "Gọi $u_1, u_2, \\dots, u_{30}$ lần lượt là số ghế của dãy ghế thứ nhất, dãy ghế thứ hai, ..., dãy ghế thứ ba mươi.<br>  Khi đó, $(u_n)$ là một cấp số cộng có số hạng đầu $u_1 = 15$, công sai $d = 4$ (trong đó $1 \\leq n \\leq 30$). <br>  Gọi $S_{30}$ là tổng số ghế trong khán phòng. Ta có   $S_{30} = u_1 + u_2 + \\dots + u_{30} = \\dfrac{30}{2} \\left[ 2u_1 + (30 - 1)d \\right] = 15(2 \\cdot 15 + 29 \\cdot 4) = 2190.$"
  },
  {
    "id": "1D222TL2",
    "question": "Một hội trường có $10$ dãy ghế, mỗi dãy ghế kế tiếp nhiều hơn dãy ghế ngay trước nó là $4$ ghế. Biết dãy ghế cuối cùng có $45$ ghế, hỏi hội trường có bao nhiêu ghế?",
    "answer": "270",
    "explain": "Số ghế mỗi dãy lập thành một cấp số cộng với:  <br>- Số hạng cuối $u_{10}=45$;<br>- Công sai $d=4$;<br>- Số hạng đầu $u_1=u_{10}-(10-1)\\cdot 4=45-36=9$.  Tổng số ghế  $S_{10} = \\dfrac{10}{2}(u_1+u_{10})=\\dfrac{10}{2}(9+45)=5\\cdot 54=270.$"
  },
  {
    "id": "1D222TL3",
    "question": "Một hội trường lớn có $27$ ghế ở hàng đầu tiên, $29$ ghế ở hàng thứ hai, $31$ ghế ở hàng thứ ba và cứ tiếp tục theo quy luật như vậy (số ghế ở hàng ghế sau luôn nhiều hơn so với hàng ghế kề ngay sát phía trước nó là $2$ ghế). Hỏi để xếp hết $1275$ ghế vào hội trường thì hàng cuối cùng có bao nhiêu ghế?",
    "answer": "75",
    "explain": "Dễ thấy số ghế ở mỗi hàng là một cấp số cộng với số hạng đầu tiên $u_1. =27$ và công sai $d=2$.<br>  Gọi $S_n$ là tổng $n$ số hạng đầu tiên của cấp số cộng này. Ta có  $  S_n = \\dfrac{n\\left[2u_1+(n-1)d\\right]}{2} = 1275.  $  Từ đó, ta được phương trình  $\\dfrac{2\\left[54+(n-1) \\cdot 2\\right]}{2} = 1275$<br>$n^2+26n-1275 = 0$<br>$n=25~\\text{(nhận)} \\quad \\text{hoặc} \\quad n=-51~\\text{(loại)}$  Khi đó  $  u_{25} = u_1+24d = 27 + 24 \\cdot 2 = 75.  $  Vậy hàng cuối có $75$ ghế."
  },
  {
    "id": "1D222TL4",
    "question": "[Dự án đề kiểm tra Toán 11 GHKI NH25-26- Hieu Hieu Minh Minh]%[THPT Nguyen Binh Khiem - Ha Noi]  Cho cấp số cộng $(v_n)$ có $v_3 - v_6 = -15 \\text{ và } v_1 + v_2 = 11$. Tính giá trị $v_{25}$.",
    "answer": "123",
    "explain": "Ta có $v_3 - v_6 = -15 \\text{ và } v_1 + v_2 = 11 \\Leftrightarrow \\left(v_1+2d\\right) - \\left(v_1+5d\\right)=-15 \\text{ và } v_1 + \\left(v_1+d\\right) = 11 \\Leftrightarrow -3d=-15 \\text{ và } 2v_1+d=11\\Leftrightarrow v_1=3 \\text{ và } d=5.$<br>  Vậy $v_{25}=v_1+24d = 3+24 \\cdot 5 = 123$."
  },
  {
    "id": "1D222TL5",
    "question": "[Dự án đề kiểm tra Toán 11 GHKI NH25-26- Hieu Hieu Minh Minh]%[THPT Nguyen Binh Khiem - Ha Noi]  Cho dãy số $(u_n)$ xác định bởi $u_1 = 1 \\text{ và } u_{n+1} = \\dfrac{u_n}{2u_n+1}$, với $n \\in \\mathbb{N}^*$, $n \\ge 1$. Tính giá trị của $T = \\dfrac{1}{u_1} + \\dfrac{1}{u_2} + \\dfrac{1}{u_3} + \\ldots + \\dfrac{1}{u_{40}}$.",
    "answer": "1\\,600",
    "explain": "Ta có $u_1 = 1$; $u_2 = \\dfrac{1}{3}$; $u_3 = \\dfrac{1}{5}$; $u_4 = \\dfrac{1}{7}$;\\, $\\ldots$.<br>  Suy ra dãy số có số hạng tổng quát là $u_n = \\dfrac{1}{2n-1}$.<br>  Vậy $T = \\dfrac{1}{u_1} + \\dfrac{1}{u_2} + \\dfrac{1}{u_3} + \\ldots + \\dfrac{1}{u_{40}} = 1 + 3 + 5 + 7 + \\ldots + 79$.<br>  Nhận xét $1$; $3$; $5$; $7$; $\\ldots$; $2n-1$ là cấp số cộng có $v_1=1$ và cộng sai $d = 2$. <br>  Do đó $S_{40} = \\dfrac{40\\cdot (2v_1+39\\cdot d)}{2} = \\dfrac{40 (2\\cdot 1 +39 \\cdot 2)}{2} = 1\\,600$."
  },
  {
    "id": "1D223TL1",
    "question": "Dịp cuối tuần một nhóm $n$ bạn gồm Khoa, Khôi, Thảo và $(n-3)$ bạn khác cùng nhau đến rạp chiếu phim xem bộ phim \\lq\\lq Mưa đỏ\\rq\\rq. Khi xếp tùy ý nhóm bạn này vào một dãy ghế được đánh số từ $1$ đến $n$, mỗi bạn ngồi một ghế thì xác suất để số ghế của Khoa, Thảo, Khôi theo thứ tự lập thành một cấp số cộng là $\\dfrac{13}{675}$. Tìm $n$.",
    "answer": "27",
    "explain": "Số phần tử của không gian mẫu là $n!$.<br>  Gọi $a$, $b$, $c$ lần lượt là số ghế của Khoa, Thảo, Khôi.<br>  Do $a$, $b$, $c$ theo thứ tự lập thành một cấp số cộng nên $a+c=2b$.<br>  Khi đó $a$, $c$ cùng chẵn hoặc cùng lẻ.<br>  Gọi $A$ là tập hợp các ghế số chẵn, $B$ là tập hợp các ghế số lẻ.<br>  Với hai phần tử $a$, $c$ thuộc $A$ hoặc $B$ thì hiển nhiên tồn tại cấp số cộng $a$, $b$, $c$.  <br>- Trường hợp $n$ chẵn.<br>  Khi đó, $A$ có $\\dfrac{n}{2}$ phần tử và $B$ có $\\dfrac{n}{2}$ phần tử.<br>  Có $C_{\\frac{n}{2}}^2 = \\dfrac{\\left(\\dfrac{n}{2}\\right)!}{2! \\cdot \\left(\\dfrac{n}{2}-2\\right)!} = \\dfrac{1}{2} \\cdot \\left(\\dfrac{n}{2}-1\\right) \\cdot \\left(\\dfrac{n}{2}\\right) = \\dfrac{1}{8} \\cdot (n-2)n$.<br>  Nên số cấp số cộng là $2 \\cdot C_{\\frac{n}{2}}^2 = \\dfrac{1}{4} \\cdot (n-2)n$.<br>  Và số kết quả thuận lợi là $\\dfrac{1}{4} \\cdot (n-2)n \\cdot (n-3)! \\cdot 2! = \\dfrac{1}{2} \\cdot (n-2)n \\cdot (n-3)!$ (Do mỗi bộ $(a, c)$ có $2$ thứ tự chọn để tạo ra $1$ cấp số cộng và ba bạn Khoa, Thảo, Khôi chỉ ngồi vào ba ghế có số ghế tạo thành cấp số cộng chứ không thay đổi vị trí).<br>  Theo đề, có phương trình  $\\dfrac{\\dfrac{1}{2} \\cdot (n-2)n \\cdot (n-3)!}{n!} = \\dfrac{13}{675} \\Leftrightarrow \\dfrac{1}{2(n-1)} = \\dfrac{13}{675}$<br>$\\Leftrightarrow n = \\dfrac{701}{26} \\text{ (loại).}$<br>- Trường hợp $n$ lẻ.<br>  Khi đó, $A$ có $\\dfrac{n-1}{2}$ phần tử và $B$ có $\\dfrac{n+1}{2}$ phần tử.<br>  Có $C_{\\frac{n-1}{2}}^2 = \\dfrac{\\left(\\dfrac{n-1}{2}\\right)!}{2! \\cdot \\left(\\dfrac{n-1}{2}-2\\right)!} = \\dfrac{1}{2} \\cdot \\left(\\dfrac{n-1}{2}-1\\right) \\cdot \\left(\\dfrac{n-1}{2}\\right) = \\dfrac{1}{8} \\cdot (n-3)(n-1)$.<br>  Và $C_{\\frac{n+1}{2}}^2 = \\dfrac{\\left(\\dfrac{n+1}{2}\\right)!}{2! \\cdot \\left(\\dfrac{n+1}{2}-2\\right)!} = \\dfrac{1}{2} \\cdot \\left(\\dfrac{n+1}{2}-1\\right) \\cdot \\left(\\dfrac{n+1}{2}\\right) = \\dfrac{1}{8} \\cdot (n-1)(n+1)$.<br>  Nên số cấp số cộng là $C_{\\frac{n-1}{2}}^2 + C_{\\frac{n+1}{2}}^2 = \\dfrac{1}{8}(n-1)(2n-2) = \\dfrac{1}{4}(n-1)^2$.<br>  Và số kết quả có thể là $\\dfrac{1}{4}(n-1)^2 \\cdot 2 \\cdot (n-3)! = \\dfrac{1}{2}(n-1)^2 \\cdot (n-3)!$ (Do mỗi bộ $\\{a;c\\}$ có $2$ cấp số cộng và ba bạn Khoa, Thảo, Khôi chỉ ngồi vào ba ghế có số ghế tạo thành cấp số cộng chứ không thay đổi vị trí).<br>  Theo đề, có phương trình  $\\dfrac{\\dfrac{1}{2} \\cdot (n-1)^2 \\cdot (n-3)!}{n!} = \\dfrac{13}{675} \\Leftrightarrow \\dfrac{n-1}{2n(n-2)} = \\dfrac{13}{675}$<br>$\\Leftrightarrow 26n^2 - 727n + 675 = 0$<br>$\\Leftrightarrow n = 27 \\text{ (nhận)} \\text{ hoặc } n = \\dfrac{25}{26} \\text{ (loại).}$  Vậy $n=27$."
  }
];
