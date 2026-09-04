// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
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
  }
];
