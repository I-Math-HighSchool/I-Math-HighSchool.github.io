// =========================================================================
// KHỐI DỮ LIỆU: 1D23 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D23 = [
  {
    "id": "1D232DS1",
    "question": "Cho cấp số nhân $\\left(u_n\\right)$ thoả mãn $u_5-u_2=156 \\text{ và } u_6-u_3=468.$",
    "subQuestions": [
      {
        "text": "Số hạng đầu của cấp số nhân bằng $3$",
        "answer": false
      },
      {
        "text": "Số hạng thứ $5$ của cấp số nhân bằng $160$",
        "answer": false
      },
      {
        "text": "Tổng của $12$ số hạng đầu tiên bằng $531\\,440$",
        "answer": true
      },
      {
        "text": "Số $39\\,366$ là số hạng thứ $10$ của cấp số nhân",
        "answer": true
      }
    ],
    "explain": "Ta có $u_5-u_2=156 \\text{ và } u_6-u_3=468\\Leftrightarrow u_1q^4-u_1q=156 \\text{ và } u_1q^5-u_1q^2=468\\Leftrightarrow u_1q\\left(q^3-1\\right)=156 \\quad(1) \\text{ và } u_1q^2\\left(q^3-1\\right)=468. \\quad(2)$<br> Lấy $(2)$ chia $(1)$ ta được $q=3$, thay vào $(1)$ ta có $u_1=\\dfrac{156}{3\\left(3^3-1\\right)}=2$. <br>- Số hạng đầu của cấp số nhân bằng $2$.<br>- Số hạng thứ $5$ của cấp số nhân là $u_5=u_1q^4=2\\cdot3^4=162$.<br>- Tổng của $12$ số hạng đầu tiên là $S_{12}=u_1\\cdot\\dfrac{1-q^{12}}{1-q}=2\\cdot\\dfrac{1-3^{12}}{1-3}=531\\,440$.<br>- Số hạng thứ $10$ của cấp số nhân là $u_{10}=u_1q^9=2\\cdot3^9=39\\,366$."
  },
  {
    "id": "1D232DS2",
    "question": "Cho cấp số nhân $(u_n)$, biết $u_1+u_5=51$; $u_2+u_6=102$.",
    "subQuestions": [
      {
        "text": "Số hạng đầu $u_1=3$",
        "answer": true
      },
      {
        "text": "Số hạng $u_4=48$",
        "answer": false
      },
      {
        "text": "Số $12\\,288$ là số hạng thứ $12$ của cấp số nhân $(u_n)$",
        "answer": false
      },
      {
        "text": "Tổng tám số hạng đầu của cấp số nhân là $765$",
        "answer": true
      }
    ],
    "explain": "<br>- Gọi $q$ là công bội của cấp số nhân $(u_n)$.<br>  Ta có $u_1+u_5=51 \\Leftrightarrow u_1+u_1\\cdot q^4=51 \\Leftrightarrow u_1(1+q^4)=51$.<br>  Ta có  $u_2+u_6=102 \\Leftrightarrow u_1\\cdot q+u_1\\cdot q^5=102 \\Leftrightarrow u_1 q (1+q^4)=102 \\Leftrightarrow q \\cdot 51=102 \\Leftrightarrow q=2.$  Thay $q=2$ vào $(1)$ ta được $u_1(1+2^4)=51 \\Leftrightarrow u_1=3$.<br>  Vậy số hạng đầu là $u_1=3$.<br>- Số hạng $u_4=u_1 \\cdot q^3=3 \\cdot 2^3=24$.<br>- Số hạng tổng quát của cấp số nhân là $u_n=3\\cdot 2^{n-1}$.<br>  Giả sử $12\\,288$ là một số hạng của cấp số nhân $(u_n)$, khi đó tồn tại số nguyên dương $k$ sao cho $u_k=12\\,288$, suy ra  $3\\cdot 2^{n-1}=12\\,288$<br>$\\Leftrightarrow 2^{n-1}=4\\,096$<br>$\\Leftrightarrow 2^{n-1}=2^{12}.$  Suy ra $n-1=12 \\Leftrightarrow n=13$.<br>  Vậy $12\\,288$ là số hạng thứ $13$ của cấp số nhân $(u_n)$.<br>- Tổng của $8$ số hạng đầu của cấp số nhân là  $S=\\dfrac{3\\cdot (1-2^8)}{1-2}=765.$"
  }
];
