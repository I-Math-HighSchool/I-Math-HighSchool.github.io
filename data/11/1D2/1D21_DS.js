// =========================================================================
// KHỐI DỮ LIỆU: 1D21 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D21 = [
  {
    "id": "1D212DS1",
    "question": "Cho dãy số $(u_n)$ được xác định bởi $u_1=1$ và $u_n=u_{n-1}+2n$ với mọi $n \\geq 2$.",
    "subQuestions": [
      {
        "text": "Ba số hạng đầu tiên của dãy số lần lượt là $1; 5; 11$",
        "answer": true
      },
      {
        "text": "Số hạng thứ tư của dãy là $17$",
        "answer": false
      },
      {
        "text": "Ta có $u_4&gt; u_3$",
        "answer": true
      },
      {
        "text": "$(u_n)$ là một dãy số giảm",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $u_1=1$, $u_2=u_1+2\\cdot 2=5$, $u_3=u_2+2\\cdot 3=11$.<br>- <strong>Sai</strong>.<br>  Số hạng thứ tư của dãy là $u_4=u_3+2\\cdot 4=19$.<br>- <strong>Đúng</strong>.<br>  Ta có $u_4=19$ và $u_3=11$ nên $u_4&gt; u_3$.<br>- <strong>Sai</strong>.<br>  Ta có $u_n=u_{n-1}+2n\\Rightarrow u_n-u_{n-1}=2n&gt;0$ với mọi $n\\in \\mathbb{N}^*$ nên $(u_n)$ là một dãy số tăng."
  }
];
