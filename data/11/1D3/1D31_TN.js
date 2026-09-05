// =========================================================================
// KHỐI DỮ LIỆU: 1D31 - Trắc nghiệm
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D31 = [
  {
    "id": "1D312TN1",
    "question": "Từ hình vuông có độ dài cạnh bằng 1 (đơn vị độ dài), người ta nối các trung điểm của cạnh hình vuông để tạo ra hình vuông mới như hình vẽ. Tiếp tục quá trình này đến vô hạn. Tổng diện tích của tất cả các hình vuông được tạo thành là<br><img src=\"data/11/1D3/im1D31/dlts_11_DLTS11_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$4$",
      "$2$",
      "$\\sqrt{2}$",
      "$4\\sqrt{2}$"
    ],
    "answer": 1,
    "explain": "Diện tích hình vuông ban đầu là $S_1 = 1^2 = 1$.<br>  Hình vuông thứ hai (tạo bởi nối trung điểm) có cạnh bằng $\\dfrac{1}{\\sqrt{2}}$ (đường chéo hình vuông nhỏ bằng cạnh hình vuông lớn), nên diện tích là $S_2 = \\left(\\dfrac{1}{\\sqrt{2}}\\right)^2 = \\dfrac{1}{2}$.<br>  Hình vuông thứ ba có cạnh bằng $\\dfrac{1}{2}$, nên diện tích là $S_3 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$.<br>  Hình vuông thứ tư có cạnh bằng $\\dfrac{1}{2\\sqrt{2}}$ nên diện tích $S_4 = (\\dfrac{1}{2\\sqrt{2}})^2=\\dfrac{1}{8}$.<br>  Ta thấy dãy diện tích các hình vuông là một cấp số nhân lùi vô hạn với số hạng đầu $u_1 = 1$ và công bội $q = \\dfrac{1}{2}$. Vì $|q| &lt; 1$, tổng của cấp số nhân này là  $S = \\dfrac{u_1}{1 - q} = \\dfrac{1}{1 - \\dfrac{1}{2}} = \\dfrac{1}{\\dfrac{1}{2}} = 2.$"
  },
  {
    "id": "1D312TN2",
    "question": "Giới hạn $\\lim\\limits_{n \\to+\\infty}\\left(\\sqrt{n^2+4n}-n\\right)$ bằng",
    "options": [
      "$4$",
      "$+\\infty$",
      "$2$",
      "$0$"
    ],
    "answer": 2,
    "explain": "Ta có $\\begin{aligned}[t]  \\lim\\limits_{n \\to+\\infty}\\left(\\sqrt{n^2+4n}-n\\right)&=\\lim\\limits_{n \\to+\\infty} \\dfrac{\\left(\\sqrt{n^2+4n}\\right)^2-n^2}{\\sqrt{n^2+4n}+n}\\\\  &=\\lim\\limits_{n \\to+\\infty} \\dfrac{4n}{n\\left(\\sqrt{1+\\dfrac{4}{n}}+1\\right)}\\\\  &=\\lim\\limits_{n \\to+\\infty} \\dfrac{4}{\\sqrt{1+\\dfrac{4}{n}}+1}\\\\  &=2.  \\end{aligned}$"
  },
  {
    "id": "1D312TN3",
    "question": "Giới hạn $\\lim\\limits_{n \\to+\\infty}\\left(2^n+3^n-4^n\\right)$ bằng",
    "options": [
      "$1$",
      "$-4$",
      "$+\\infty$",
      "$-\\infty$"
    ],
    "answer": 3,
    "explain": "Ta có $\\lim\\limits_{n \\to+\\infty}\\left(2^n+3^n-4^n\\right)=\\lim\\limits_{n \\to+\\infty} 4^n\\left(\\left(\\dfrac{2}{4}\\right)^n+\\left(\\dfrac{3}{4}\\right)^n-1\\right)$.<br>  Vì $\\lim\\limits_{n \\to+\\infty} 4^n=+\\infty$, $\\lim\\limits_{n \\to+\\infty} \\left(\\left(\\dfrac{2}{4}\\right)^n+\\left(\\dfrac{3}{4}\\right)^n-1\\right)=-1$.<br>  Nên $\\lim\\limits_{n \\to+\\infty}\\left(2^n+3^n-4^n\\right)=-\\infty$.<br>"
  },
  {
    "id": "1D312TN4",
    "question": "Cho hai dãy $(u_n)$ và $(v_n)$ thỏa mãn $\\lim\\limits_{n\\to+\\infty} u_n = 2$ và $\\lim\\limits_{n\\to+\\infty} v_n = 3$. Giá trị của $\\lim\\limits_{n\\to+\\infty} (u_n \\cdot v_n)$ bằng",
    "options": [
      "$5$",
      "$6$",
      "$-1$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{n\\to+\\infty} (u_n \\cdot v_n)=\\lim\\limits_{n\\to+\\infty} u_n \\cdot\\lim\\limits_{n\\to+\\infty}v_n=2\\cdot3=6$."
  },
  {
    "id": "1D312TN5",
    "question": "$\\lim\\limits_{n\\to+\\infty} \\dfrac{2n^2 - 3}{n^6 + 5n^5}$ bằng",
    "options": [
      "$2$",
      "$0$",
      "$-\\dfrac{3}{5}$",
      "$-3$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\dfrac{2n^2 - 3}{n^6 + 5n^5}=\\lim\\dfrac{n^2\\left(2-\\tfrac{3}{n^2}\\right)}{n^6\\left(1+ \\tfrac{5}{n}\\right)}=\\lim\\dfrac{1}{n^4}\\cdot\\dfrac{2-\\tfrac{3}{n^2}}{1+ \\tfrac{5}{n}}=0$."
  },
  {
    "id": "1D312TN6",
    "question": "Giá trị của $\\lim \\limits_{n \\rightarrow+\\infty} \\dfrac{n^{2}+2 n+2024}{2025-2008 n^{2}}$ bằng",
    "options": [
      "$\\dfrac{1}{2025}$",
      "$-\\dfrac{1}{2008}$",
      "$\\dfrac{2024}{2025}$",
      "$0$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim \\limits_{n \\rightarrow+\\infty} \\dfrac{n^{2}+2 n+2024}{2025-2008 n^{2}}=\\lim \\limits_{n \\rightarrow+\\infty} \\dfrac{1+\\dfrac{2}{n}+\\dfrac{2024}{n^2}}{\\dfrac{2025}{n^2}-2008}=-\\dfrac{1}{2008}$."
  },
  {
    "id": "1D312TN7",
    "question": "Giá trị của $\\lim \\limits_{n \\rightarrow+\\infty}\\left(\\dfrac{1}{3}\\right)^{n}$ là",
    "options": [
      "$+\\infty$",
      "$-\\infty$",
      "$0$",
      "$\\dfrac{1}{3}$"
    ],
    "answer": 2,
    "explain": "Vì $\\dfrac{1}{3}&lt;1$ nên $\\lim \\limits_{n \\rightarrow+\\infty}\\left(\\dfrac{1}{3}\\right)^{n}=0$."
  },
  {
    "id": "1D312TN8",
    "question": "Tính tổng $T=2+\\dfrac{2}{3}+\\dfrac{2}{3^2}+\\ldots+\\dfrac{2}{3^{n-1}}+\\ldots$",
    "options": [
      "$4$",
      "$3$",
      "$6$",
      "$5$"
    ],
    "answer": 1,
    "explain": "Ta có $T$ là tổng của một cấp số nhân lùi vô hạn với số hạng đầu $u_1 = 2$ và công bội $q = \\dfrac{1}{3}$.<br>  Vì $|q| = \\left|\\dfrac{1}{3}\\right| &lt; 1$, nên cấp số nhân có tổng  $  T = \\dfrac{u_1}{1-q} = \\dfrac{2}{1-\\dfrac{1}{3}} = \\dfrac{2}{\\dfrac{2}{3}} = 3.  $  Vậy $T = 3$."
  },
  {
    "id": "1D312TN9",
    "question": "Nếu các dãy số $\\left(u_n\\right)$, $\\left(v_n\\right)$ thoả mãn $\\lim u_n=6$ và $\\lim v_n=3$ thì $\\lim \\left(u_n-v_n\\right)$ bằng",
    "options": [
      "$2$",
      "$9$",
      "$3$",
      "$18$"
    ],
    "answer": 2,
    "explain": "$\\lim \\left(u_n-v_n\\right)=\\lim u_n-\\lim v_n=6-3=3$."
  },
  {
    "id": "1D312TN10",
    "question": "$\\lim\\limits_{n \\to+\\infty}\\dfrac{3n-n^4}{4n^4-5}$ bằng",
    "options": [
      "$0$",
      "$\\dfrac{3}{4}$",
      "$-\\infty $",
      "$-\\dfrac{1}{4}$"
    ],
    "answer": 3,
    "explain": "Ta có   $\\lim\\limits_{n \\to+\\infty}\\dfrac{3n-n^4}{4n^4-5} = \\lim\\limits_{n \\to +\\infty} \\dfrac{\\dfrac{3}{n^3}-1}{4- \\dfrac{5}{n^4}}= \\dfrac{0-1}{4-0}= -\\dfrac{1}{4}$."
  },
  {
    "id": "1D312TN11",
    "question": "Giới hạn $\\lim\\limits _{n \\rightarrow+\\infty} \\dfrac{4 n+2}{n-1}$ bằng",
    "options": [
      "$-2$",
      "$2$",
      "$-1$",
      "$4$"
    ],
    "answer": 3,
    "explain": "Ta có: $\\lim\\limits _{n \\rightarrow+\\infty} \\dfrac{4 n+2}{n-1} = \\lim\\limits _{n \\rightarrow+\\infty} \\dfrac{4+\\dfrac{2}{n}}{1-\\dfrac{1}{n}}= 4$"
  },
  {
    "id": "1D312TN12",
    "question": "Dãy số nào sau đây có giới hạn bằng 0 ?",
    "options": [
      "$u_n=\\pi^n$",
      "$u_n=\\left(\\dfrac{2}{5}\\right)^n$",
      "$u_n=\\left(\\dfrac{12}{5}\\right)^n$",
      "$u_n=\\dfrac{n^5}{2 n+3}$"
    ],
    "answer": 1,
    "explain": "Dễ thấy dãy $u_n=\\left(\\dfrac{2}{5}\\right)^n$ có giới hạn bằng $0$ vì $\\dfrac{2}{5}&lt;1$"
  },
  {
    "id": "1D311TN1",
    "question": "Cho $\\lim\\limits_{n\\to +\\infty}u_n=3$, $\\lim\\limits_{n\\to +\\infty}v_n=-1$. Trong các mệnh đề sau, mệnh đề nào <strong>sai</strong>?",
    "options": [
      "$\\lim\\limits_{n\\to +\\infty}\\left(u_n+v_n\\right)=2$",
      "$\\lim\\limits_{n\\to +\\infty}\\left(\\dfrac{u_n}{v_n}\\right)=-3$",
      "$\\lim\\limits_{n\\to +\\infty}\\left(u_n\\cdot v_n\\right)=-3$",
      "$\\lim\\limits_{n\\to +\\infty}\\left(u_n-v_n\\right)=2$"
    ],
    "answer": 3,
    "explain": "Ta có<br>   $\\lim\\limits_{n\\to +\\infty}\\left(u_n+v_n\\right)=\\lim\\limits_{n\\to +\\infty}u_n+\\lim\\limits_{n\\to +\\infty}v_n=3+(-1)=2\\Rightarrow$ Đúng.<br>   $\\lim\\limits_{n\\to +\\infty}\\left(\\dfrac{u_n}{v_n}\\right)=\\dfrac{\\lim\\limits_{n\\to +\\infty}u_n}{\\lim\\limits_{n\\to +\\infty}v_n}=\\dfrac{3}{-1}=-3\\Rightarrow$ Đúng.<br>   $\\lim\\limits_{n\\to +\\infty}\\left(u_n\\cdot v_n\\right)=\\lim\\limits_{n\\to +\\infty}u_n\\cdot \\lim\\limits_{n\\to +\\infty}v_n=3\\cdot (-1)=-3\\Rightarrow$ Đúng.<br>   $\\lim\\limits_{n\\to +\\infty}\\left(u_n-v_n\\right)=\\lim\\limits_{n\\to +\\infty}u_n-\\lim\\limits_{n\\to +\\infty}v_n=3-(-1)=4\\Rightarrow$ Sai."
  },
  {
    "id": "1D312TN13",
    "question": "Giá trị của giới hạn $\\lim\\left(\\sqrt[3]{n^3-2n^2}-n\\right)$ bằng",
    "options": [
      "$\\dfrac{1}{3}$",
      "$-\\dfrac{2}{3}$",
      "$1$",
      "$0$"
    ],
    "answer": 1,
    "explain": "Ta có  $\\lim\\left(\\sqrt[3]{n^3-2n^2}-n\\right)  = \\lim\\dfrac{n^3-2n^2-n^3}{\\sqrt[3]{(n^3-2n^2)^2}+n\\sqrt[3]{n^3-2n^2}+n^2}$<br>$= \\lim\\dfrac{-2n^2}{\\sqrt[3]{(n^3-2n^2)^2}+n\\sqrt[3]{n^3-2n^2}+n^2}$<br>$= \\lim\\dfrac{-2}{\\sqrt[3]{\\left(1-\\dfrac{2}{n}\\right)^2}+\\sqrt[3]{1-\\dfrac{2}{n}}+1}$<br>$= -\\dfrac{2}{3}.$"
  }
];
