// =========================================================================
// KHỐI DỮ LIỆU: 1D23 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
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
  },
  {
    "id": "1D234DS1",
    "question": "Cho cấp số nhân $\\left(u_n\\right)$, biết $u_1+u_5=51$; $u_2+u_6=102$. Khi đó:",
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
        "text": "Số $12288$ là số hạng thứ 12 của cấp số nhân $\\left(u_n\\right)$",
        "answer": false
      },
      {
        "text": "Tổng tám số hạng đầu của cấp số nhân là $765$",
        "answer": true
      }
    ],
    "explain": "Giả sử $q$ là công bội của cấp số nhân $\\left(u_n\\right)$. Khi đó<br>  \\[u_1+u_5=51 \\text{ và } u_2+u_6=102\\Leftrightarrow u_1+u_1q^4=51 \\text{ và } u_1q+u_1q^5=102\\Leftrightarrow u_1(1+q^4)=51\\quad (1) \\text{ và } u_1q(1+q^4)=102.\\quad (2)\\]  Chia vế với vế của (2) cho (1) ta được $q=2$.<br>  Do đó $u_1=\\dfrac{51}{1+q^4}=\\dfrac{51}{1+2^4}=3$.  <br>- Ta có $u_1=3$.<br>- Ta có $u_4=u_1q^3=3\\cdot 2^3=24$.<br>- Ta có $u_{12}=u_1q^{11}=3\\cdot 2^{11}=6144\\ne 12\\,288$.<br>- Ta có $S_8=\\dfrac{u_1\\left(1-q^8\\right) }{1-q}=\\dfrac{3\\left( 1-2^8\\right) }{1-2}=765$."
  },
  {
    "id": "1D233DS1",
    "question": "Trung tâm Trải nghiệm sáng tạo trường Nguyễn Bỉnh Khiêm – Hà Nội lên kế hoạch cho học sinh trồng cây trên các bậc thang đã được cải tạo và bồi đất dọc theo sườn đồi từ thấp lên cao, trong đó có giống xoài mới. Đối với giống xoài mới, theo thiết kế, hàng thứ nhất (mặt đất) sẽ trồng 1 cây và từ hàng trên liền kề sẽ trồng số lượng cây gấp đôi hàng dưới. Để đảm bảo tính thẩm mĩ cho vườn cây thì nhất thiết ở mỗi hàng phải trồng đủ số cây theo thiết kế (hàng trên gấp đôi hàng dưới), nếu hàng cuối chưa đủ sẽ phải mua bổ sung. Hiện trong vườn cây giống, trung tâm đã có $2\\,000$ cây xoài. Gọi $a_1$; $a_2$; $a_3$; $\\ldots$; $a_n$; $\\ldots$ lần lượt là số cây xoài ở hàng thứ $1$; $2$; $3$;$\\ldots$; $n$;$\\ldots $",
    "subQuestions": [
      {
        "text": "Hàng thứ $4$ phải trồng số cây xoài là $a_4=4$",
        "answer": false
      },
      {
        "text": "Số lượng cây xoài ở mỗi hàng lần lượt lập thành cấp số nhân với công bội $q=\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Số lượng cây xoài ở hàng thứ $n$ được tính bởi công thức: $a_n=2^{n-1}(n\\in\\mathbb{N})$",
        "answer": true
      },
      {
        "text": "Trung tâm cần phải mua và trồng bổ sung tối thiểu $347$ cây xoài giống nữa ở hàng cuối mới đảm bảo tính thẩm mĩ",
        "answer": false
      }
    ],
    "explain": "Theo mô tả, dãy số $a_n$ là một cấp số nhân với số hạng đầu $a_1=1$ và công bội $q=2$.<br>  Số hạng tổng quát của cấp số nhân này là $a_n=a_1\\cdot q^{n-1}=1\\cdot 2^{n-1}=2^{n-1}$ (với $n\\ge 1$).<br>- Hàng thứ $4$ có số cây là $a_4=2^{4-1}=2^3=8$.<br>- Cấp số nhân có công bội $q=2$.<br>- Số lượng cây xoài ở hàng thứ $n$ được tính bởi công thức: $a_n=2^{n-1}(n\\in\\mathbb{N})$.<br>- Tổng số cây cần để trồng $n$ hàng là \\[S_n=\\dfrac{a_1(q^n-1)}{q-1}=\\dfrac{1(2^n-1)}{2-1}=2^n-1.\\]  Ta tìm $n$ lớn nhất sao cho $S_n\\le 2\\,000$  \\[2^n-1\\le 2\\,000\\Leftrightarrow 2^n\\le 2\\,001.\\]  Ta có $2^{10}=1\\,024$ và $2^{11}=2\\,048$.<br>  Nên Trung tâm có thể trồng đủ $10$ hàng.<br>  Số cây đã dùng cho $10$ hàng: $S_{10}=2^{10}-1=1\\,023$ cây.<br>  Số cây còn lại: $2\\,000-1\\,023=977$ cây.<br>  Số cây cần cho hàng thứ 11 (hàng cuối cùng được trồng): $a_{11}=2^{11-1}=2^{10}=1\\,024$ cây.<br>  Hàng cuối này (hàng $11$) chưa đủ cây. Số cây cần mua bổ sung là: $1\\,024-977=47$ cây."
  }
];
