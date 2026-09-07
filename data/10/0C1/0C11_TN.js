// =========================================================================
// KHỐI DỮ LIỆU: 0C11 - Trắc nghiệm
// Nguồn: Lý thuyết chuẩn "Hệ ba phương trình bậc nhất ba ẩn" (phương pháp
// Gauss - khử dần ẩn đưa hệ về dạng tam giác/bậc thang rồi giải ngược từ
// dưới lên; biện luận số nghiệm: nghiệm duy nhất, vô nghiệm, vô số nghiệm;
// ứng dụng giải bài toán thực tế) - chuyên đề Toán 10, GV tự soạn câu
// TN/ĐS/TL dựa trên lý thuyết chuẩn, đã tự kiểm tra lại toàn bộ nghiệm
// bằng tính toán trực tiếp (đối chiếu bằng sympy) trước khi đưa vào.
// =========================================================================
window.tracNghiem0C11 = [
  {
    "id": "0C111TN1",
    "question": "Nghiệm của hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$ là",
    "options": [
      "$(x;y;z)=(1;2;3)$",
      "$(x;y;z)=(2;1;3)$",
      "$(x;y;z)=(3;2;1)$",
      "$(x;y;z)=(1;3;2)$"
    ],
    "answer": 0,
    "explain": "Lấy (1) trừ (2): $2y=4\\Rightarrow y=2$. Lấy (1) trừ (3): $2z=6\\Rightarrow z=3$. Thay vào (1): $x=6-2-3=1$. Vậy $(x;y;z)=(1;2;3)$."
  },
  {
    "id": "0C111TN2",
    "question": "Nghiệm của hệ phương trình $\\begin{cases}x+y+z=4\\\\2x-y+z=8\\\\x+2y-z=-3\\end{cases}$ là",
    "options": [
      "$(x;y;z)=(2;-1;3)$",
      "$(x;y;z)=(-1;2;3)$",
      "$(x;y;z)=(2;3;-1)$",
      "$(x;y;z)=(3;-1;2)$"
    ],
    "answer": 0,
    "explain": "Thử trực tiếp $(2;-1;3)$: $2+(-1)+3=4$ ✓; $2\\cdot 2-(-1)+3=8$ ✓; $2+2(-1)-3=-3$ ✓. Vậy nghiệm của hệ là $(2;-1;3)$."
  },
  {
    "id": "0C111TN3",
    "question": "Hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\2x+2y+2z=10\\end{cases}$",
    "options": [
      "Vô nghiệm",
      "Vô số nghiệm",
      "Có nghiệm duy nhất",
      "Có đúng hai nghiệm"
    ],
    "answer": 0,
    "explain": "Nhân hai vế của phương trình (1) với $2$ ta được $2x+2y+2z=12$, mâu thuẫn với phương trình (3) là $2x+2y+2z=10$. Vậy hệ vô nghiệm."
  },
  {
    "id": "0C111TN4",
    "question": "Hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\2x+2y+2z=12\\end{cases}$",
    "options": [
      "Vô số nghiệm",
      "Vô nghiệm",
      "Có nghiệm duy nhất",
      "Chỉ có nghiệm $(0;0;0)$"
    ],
    "answer": 0,
    "explain": "Phương trình (3) chính là $2$ lần phương trình (1) ($2x+2y+2z=2\\cdot 6=12$), nên phương trình (3) không cho thêm thông tin mới. Hệ chỉ còn thực chất $2$ phương trình độc lập với $3$ ẩn nên có vô số nghiệm."
  },
  {
    "id": "0C111TN5",
    "question": "Tổng ba số bằng $30$; số thứ nhất gấp đôi số thứ hai; số thứ ba bằng tổng của số thứ nhất và số thứ hai. Số thứ ba bằng",
    "options": [
      "$15$",
      "$10$",
      "$5$",
      "$20$"
    ],
    "answer": 0,
    "explain": "Gọi ba số là $a,b,c$. Ta có hệ $\\begin{cases}a+b+c=30\\\\a=2b\\\\c=a+b\\end{cases}$. Thế $a=2b$ và $c=3b$ vào phương trình đầu: $2b+b+3b=30\\Rightarrow 6b=30\\Rightarrow b=5$. Suy ra $a=10,\\,c=15$."
  },
  {
    "id": "0C111TN6",
    "question": "Nghiệm của hệ phương trình dạng tam giác $\\begin{cases}x+y+z=9\\\\y+z=5\\\\z=2\\end{cases}$ là",
    "options": [
      "$(x;y;z)=(4;3;2)$",
      "$(x;y;z)=(2;3;4)$",
      "$(x;y;z)=(4;2;3)$",
      "$(x;y;z)=(3;4;2)$"
    ],
    "answer": 0,
    "explain": "Từ phương trình (3): $z=2$. Thay vào (2): $y=5-2=3$. Thay vào (1): $x=9-3-2=4$. Vậy $(x;y;z)=(4;3;2)$."
  },
  {
    "id": "0C111TN7",
    "question": "Phương pháp Gauss để giải hệ ba phương trình bậc nhất ba ẩn là",
    "options": [
      "Khử dần từng ẩn để đưa hệ về dạng tam giác (bậc thang), sau đó giải ngược từ phương trình cuối lên",
      "Chỉ áp dụng được cho hệ hai ẩn",
      "Luôn cho hệ vô số nghiệm",
      "Không thể áp dụng cho hệ ba ẩn"
    ],
    "answer": 0,
    "explain": "Phương pháp Gauss (khử ẩn liên tiếp) đưa hệ phương trình về dạng tam giác, từ đó giải lần lượt từ phương trình cuối (chứa ít ẩn nhất) lên phương trình đầu."
  },
  {
    "id": "0C111TN8",
    "question": "Với hệ ở câu \"Nghiệm của hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$\" (có nghiệm $(1;2;3)$), tích $x\\cdot y\\cdot z$ bằng",
    "options": [
      "$6$",
      "$5$",
      "$0$",
      "$-6$"
    ],
    "answer": 0,
    "explain": "Với $(x;y;z)=(1;2;3)$ ta có $x\\cdot y\\cdot z=1\\cdot 2\\cdot 3=6$."
  },
  {
    "id": "0C111TN9",
    "question": "Một hệ ba phương trình bậc nhất ba ẩn có vô số nghiệm khi",
    "options": [
      "Một trong ba phương trình là tổ hợp tuyến tính của hai phương trình còn lại và hệ vẫn có nghiệm (hệ phụ thuộc)",
      "Ba phương trình đôi một mâu thuẫn với nhau",
      "Định thức của ma trận hệ số khác $0$",
      "Cả ba ẩn số đều bằng $0$"
    ],
    "answer": 0,
    "explain": "Khi một phương trình có thể suy ra từ hai phương trình còn lại (không cung cấp thêm ràng buộc mới) mà hệ vẫn có nghiệm, số ẩn thực chất nhiều hơn số phương trình độc lập nên hệ có vô số nghiệm."
  },
  {
    "id": "0C111TN10",
    "question": "Nghiệm của hệ phương trình $\\begin{cases}x+y+z=6\\\\y+2z=4\\\\z=1\\end{cases}$ là",
    "options": [
      "$(x;y;z)=(3;2;1)$",
      "$(x;y;z)=(1;2;3)$",
      "$(x;y;z)=(3;1;2)$",
      "$(x;y;z)=(2;3;1)$"
    ],
    "answer": 0,
    "explain": "Từ (3): $z=1$. Thay vào (2): $y=4-2\\cdot 1=2$. Thay vào (1): $x=6-2-1=3$. Vậy $(x;y;z)=(3;2;1)$."
  }
];
