// =========================================================================
// KHỐI DỮ LIỆU: 1D31 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D31 = [
  {
    "id": "1D312TL1",
    "question": "Giới hạn $\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3 n^2+5 n-4}{9 n^2-1}=\\dfrac{a}{b}\\left(\\dfrac{a}{b}\\right.$ là phân số tối giản, với $a$ nguyên, $b$ nguyên dương $)$. Tính giá trị $10 a+b$.",
    "answer": "-7",
    "explain": "$\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3 n^2+5 n-4}{9 n^2-1}=\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3+\\tfrac{5}{n}-\\tfrac{4}{n^2}}{9-\\tfrac{1}{n^2}}=\\dfrac{-1}{3}$ $\\Rightarrow a=-1$ và $b=3$. Vậy $10a+b=-7$."
  },
  {
    "id": "1D312TL2",
    "question": "Một bệnh nhân hàng ngày phải uống một viên thuốc $8$ mg. Sau ngày đầu, trước mỗi lần uống, hàm lượng thuốc cũ trong cơ thể vẫn còn 5\\%. Ước tính lượng thuốc có trong cơ thể nếu bệnh nhân sử dụng thuốc trong một thời gian dài. (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "8,42",
    "explain": "Gọi $Q_n$ là lượng thuốc (tính bằng mg) có trong cơ thể ngay sau khi uống viên thuốc thứ $n$.  <br>- Sau ngày đầu tiên: $Q_1 = 8$ mg.<br>- Sau ngày thứ hai: $Q_2 = 8 + 0{,}05 \\cdot 8 = 8(1 + 0{,}05)$.<br>- $\\ldots$<br>- Sau ngày thứ $n$: $Q_n = 8(1 + 0{,}05 + 0{,}05^2 + \\ldots + 0{,}05^{n-1})$.  Đây là tổng của một cấp số nhân với số hạng đầu $a = 1$, công bội $q=0{,}05$.<br>  Vậy $Q_n =8\\cdot \\dfrac{1}{1 - 0{,}05} \\approx 8{,}42$ mg."
  }
];
