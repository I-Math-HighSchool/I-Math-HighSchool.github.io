// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D22 = [
  {
    "id": "1D222DS1",
    "question": "Trong một hội chợ đón Xuân, một gian hàng sữa muốn xếp $900$ hộp sữa theo quy luật là hàng trên cùng có $1$ hộp sữa, mỗi hàng ngay phía dưới lần lượt được xếp nhiều hơn $2$ hộp so với hàng trên nó.",
    "subQuestions": [
      {
        "text": "Số hộp sữa ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1=1$ và công sai $d=2$",
        "answer": true
      },
      {
        "text": "Hàng thứ $10$ có $20$ hộp sữa",
        "answer": false
      },
      {
        "text": "$23$ hộp là số hộp sữa ở hàng thứ $12$",
        "answer": true
      },
      {
        "text": "Cần $30$ hàng để xếp hết tất cả số hộp sữa lên gian hàng",
        "answer": true
      }
    ],
    "explain": "<br>- Do mỗi hàng ngay phía dưới lần lượt được xếp nhiều hơn $2$ hộp so với hàng trên nó nên số hộp sữa ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1=1$ và công sai $d=2$.<br>- Số hộp sữa ở hàng thứ $10$ là $u_{10}=u_1+9d=1+9\\cdot2=19$ (hộp).<br>- Số hộp sữa ở hàng thứ $12$ là $u_{12}=u_1+11d=1+11\\cdot2=23$ (hộp).<br>- Gọi $n$ là số hàng để đặt $900$ hộp sữa của gian hàng, ta có  $S_n=900 \\Leftrightarrow \\dfrac{n}{2}\\left(2u_1+(n-1)d\\right)=900$<br>$\\Leftrightarrow \\dfrac{n}{2}\\left(2\\cdot1+(n-1)\\cdot2\\right)=900$<br>$\\Leftrightarrow n^2=900\\Leftrightarrow n=30.$  Vậy cần $30$ hàng để xếp hết tất cả số hộp sữa lên gian hàng."
  },
  {
    "id": "1D222DS2",
    "question": "Cho cấp số cộng $(u_n)$ với $u_1=-2$, $u_4=4$.",
    "subQuestions": [
      {
        "text": "Viết thêm $2$ số xen giữa số hạng $u_1$ và $u_{10}$ của cấp số cộng $(u_n)$ để được một cấp số nhân có $4$ số hạng. Nếu viết tiếp thì số hạng thứ $10$ của cấp số nhân vừa tìm được là $1\\,024$",
        "answer": true
      },
      {
        "text": "Công sai của cấp số cộng $(u_n)$ là $d=2$",
        "answer": true
      },
      {
        "text": "Số hạng thứ $10$ của cấp số cộng $(u_n)$ là $16$",
        "answer": true
      },
      {
        "text": "Số hạng tổng quát của cấp số cộng $(u_n)$ là $u_n=2n-3, \\forall n \\in \\mathbb{N}^{*}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $u_4=u_1+3d\\Leftrightarrow 4=-2+3d\\Leftrightarrow d=2$.<br>  Suy ra $u_{10}=u_1+9d=-2+9\\cdot 2=16$.<br>  Ta có cấp số nhân $a_1=u_1=-2$, $a_2$, $a_3$, $a_4=u_{10}=16<br>  \\Leftrightarrow a_1q^3=16\\Leftrightarrow -2q^3=16\\Leftrightarrow q=-2$.<br>  Do đó $a_{10}=a_1q^9=-2\\cdot (-2)^9=1\\,024$.<br>- Công sai của cấp số cộng $(u_n)$ là $d=2$.<br>- $u_{10}=u_1+9d=-2+9\\cdot 2=16$.<br>- Ta có $u_n=u_1+(n-1)d=-2+(n-1)\\cdot 2=2n-4$."
  },
  {
    "id": "1D222DS3",
    "question": "Cho dãy số $\\left(u_n\\right)$ có số hạng tổng quát $u_n=3n+1$.",
    "subQuestions": [
      {
        "text": "Tổng $8$ số hạng đầu của cấp số cộng $\\left(u_n\\right)$ bằng $116$",
        "answer": true
      },
      {
        "text": "Dãy số $\\left(u_n\\right)$ là dãy số giảm",
        "answer": false
      },
      {
        "text": "Số hạng thứ tư của dãy số là $u_4=13$",
        "answer": true
      },
      {
        "text": "Dãy số đã cho là một cấp số cộng có công sai là $d=2$",
        "answer": false
      }
    ],
    "explain": "$u_{n-1}=3(n-1)+1=3n-2$.<br>   $u_n-u_{n-1}=3n+1-(3n-2)=3$.<br>   Vậy dãy $\\left(u_n\\right)$ là cấp số cộng với công sai $d=3$, $u_1=3\\cdot 1+1=4$.  <br>- $S_8=\\dfrac{8\\left[2\\cdot 4+(8-1)\\cdot 3\\right]}{2}=116$.<br>- Công sai $d=3&gt;0$ nên dãy số $\\left(u_n\\right)$ là dãy số tăng.<br>- $u_4=4+3\\cdot 3=13$.<br>- Dãy $\\left(u_n\\right)$ là cấp số cộng với công sai $d=3$."
  }
];
