// =========================================================================
// KHỐI DỮ LIỆU: 0D02 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0D02 = [
  {
    "id": "0D021DS1",
    "question": "Trong hộp có $45$ quả cầu có cùng kích thước và khối lượng được đánh số từ $1$ đến $45$. Lấy ngẫu nhiên $3$ quả cầu từ hộp đó.",
    "subQuestions": [
      {
        "text": "Số cách lấy được cả $3$ quả cầu đánh số chẵn bằng $1\\,540$",
        "answer": true
      },
      {
        "text": "Xác xuất để tích $3$ số ghi trên $3$ quả cầu là một số chia hết cho $8$ bằng $\\dfrac{523}{1\\,290}$",
        "answer": false
      },
      {
        "text": "Xác xuất để tổng $3$ số ghi trên $3$ quả cầu là số lẻ bằng $\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Xác xuất để tổng $3$ số ghi trên $3$ quả cầu là số chia hết cho $4$ bằng $\\dfrac{323}{1\\,290}$",
        "answer": true
      }
    ],
    "explain": "Số cách lấy ngẫu nhiên $3$ quả cầu từ $45$ quả cầu là  $n(\\Omega) = \\mathrm{C}_{45}^3 = 14\\,190$.  <br>- Trong tập hợp các số $\\{1; 2; \\ldots; 45\\}$ có tập số chẵn là $\\{2; 4; \\dots; 44\\}$ gồm $\\dfrac{44-2}{2} + 1 = 22$ số.<br>  Số cách lấy $3$ quả cầu từ nhóm $22$ quả cầu số chẵn là  $\\mathrm{C}_{22}^3 = 1\\,540$.<br>- Gọi $A$ là biến cố \\lq\\lq tích $3$ số ghi trên $3$ quả cầu là một số chia hết cho $8$\\rq\\rq.<br>  Xét các tập hợp sau  <br>- $S_0=\\{1; 3; \\ldots; 45\\}$ có $23$ số (số lẻ).<br>- $S_1=\\{2; 6; 10; \\ldots; 42\\}$ có $11$ số (số chia hết cho $2$ nhưng không chia hết cho $4$).<br>- $S_2=\\{4; 12; 20; 28; 36; 44\\}$ có $6$ số (số chia hết cho $4$ nhưng không chia hết cho $8$).  Gọi $a$, $b$, $c$ là các số mà tích của chúng không chia hết cho $8$.<br>  Xét các trường hợp  <br>- [$\\bullet$ TH 1.]<br>- $(a,b,c)\\in S_0$ có $\\mathrm{C}_{23}^3 = 1\\,771$ cách.<br>- $a,b\\in S_0$; $c\\in S_1$ có $\\mathrm{C}_{23}^2 \\cdot \\mathrm{C}_{11}^1 = 2\\,783$ cách.<br>- $a,b\\in S_0$; $c\\in S_2$ có $\\mathrm{C}_{23}^2 \\cdot \\mathrm{C}_{6}^1 = 1\\,518$ cách.<br>- $a\\in S_0$; $b,c\\in S_1$ có $\\mathrm{C}_{23}^1 \\cdot \\mathrm{C}_{11}^2 = 1\\,265$ cách.  Tổng số cách để tích không chia hết cho $8$ là   \\[n\\left(\\overline{A}\\right)=1\\,771 + 2\\,783 + 1\\,518 + 1\\,265 = 7\\,337.\\]  Vậy  $\\mathrm{P}(A) = 1-\\mathrm{P}\\left(\\overline{A}\\right)=1-\\dfrac{n\\left(\\overline{A}\\right)}{n(\\Omega)}=1-\\dfrac{7\\,337}{14\\,190} = \\dfrac{623}{1\\,290}$.<br>- Gọi $B$ là biến cố \\lq\\lq tổng $3$ số ghi trên $3$ quả cầu là số lẻ\\rq\\rq.<br>  Vì tổng $3$ số là lẻ khi cả $3$ số đều lẻ hoặc $1$ số lẻ, $2$ số chẵn nên  \\[ n(B) = \\mathrm{C}_{23}^3 + \\mathrm{C}_{23}^1 \\cdot \\mathrm{C}_{22}^2 = 7\\,084.\\]  Vậy xác suất cần tìm là  $\\mathrm{P}(B) = \\dfrac{n(B)}{n(\\Omega)}=\\dfrac{7\\,084}{14\\,190} = \\dfrac{322}{645}$.<br>- Gọi $D$ là biến cố \\lq\\lq tổng $3$ số ghi trên $3$ quả cầu là số chia hết cho $4$\\rq\\rq.<br>  Xét các nhóm số sau  <br>- $T_0=\\{4; 8; \\ldots; 44\\}$ có $11$ số (số chia hết cho $4$).<br>- $T_1=\\{1; 5; \\ldots; 45\\}$ có $12$ số (số chia $4$ dư $1$).<br>- $T_2=\\{2; 6; \\ldots; 42\\}$ có $11$ số (số chia $4$ dư $2$).<br>- $T_3=\\{3; 7; \\ldots; 43\\}$ có $11$ số (số chia $4$ dư $3$).  Đặt $x$, $y$, $z$ là các số được chọn.<br>  Xét các trường hợp sau  <br>- [$\\bullet$ TH 1.]<br>- $(x;y;z)\\in T_0$ có $\\mathrm{C}_{11}^3 = 165$ cách.<br>- $x\\in T_0$; $y\\in T_1$; $z\\in T_3$ có $\\mathrm{C}_{11}^1 \\cdot \\mathrm{C}_{12}^1 \\cdot \\mathrm{C}_{11}^1 = 1\\,452$ cách.<br>- $x\\in T_0$; $y,z\\in T_2$ có $\\mathrm{C}_{11}^1 \\cdot \\mathrm{C}_{11}^2 = 605$ cách.<br>- $x,y\\in T_1$; $z\\in T_2$ có $\\mathrm{C}_{12}^2 \\cdot \\mathrm{C}_{11}^1= 726$ cách.<br>- $x,y\\in T_3$; $z\\in T_2$ có $\\mathrm{C}_{11}^2 \\cdot \\mathrm{C}_{11}^1 = 605$ cách.  Do đó $n(D) = 165 + 1\\,452 + 605 + 726 + 605 = 3\\,553$.<br>  Vậy xác suất cần tìm là   $\\mathrm{P}(D) = \\dfrac{n(D)}{n(\\Omega)}=\\dfrac{3\\,553}{14\\,190} = \\dfrac{323}{1290}$."
  },
  {
    "id": "0D021DS2",
    "question": "Trong đề kiểm tra $15$ phút môn Toán của lớp $11$A có $20$ câu trắc nghiệm. Mỗi câu trắc   nghiệm có $4$ phương án trả lời, trong đó chỉ có một phương án trả lời đúng. Biết rằng mỗi câu trả lời đúng được $0{,}5$ điểm. Nam giải chắc chắn đúng $10$ câu, $10$ câu còn lại lựa chọn ngẫu nhiên đáp án. Biết rằng mỗi câu trả lời đúng được $0{,}5$ điểm, trả lời sai không bị trừ điểm. Khi đó:",
    "subQuestions": [
      {
        "text": "Xác suất để Nam trả lời sai $1$ câu là $\\dfrac{1}{4}$",
        "answer": false
      },
      {
        "text": "Xác suất để Nam trả lời đúng hết $20$ câu là $\\left(\\dfrac{1}{4} \\right)^{20}$",
        "answer": false
      },
      {
        "text": "Xác suất để Nam đạt đúng $8$ điểm là $\\mathrm{C}_{10}^6\\cdot \\left( \\dfrac{1}{4} \\right)^6\\cdot \\left( \\dfrac{3}{4} \\right)^4$",
        "answer": true
      },
      {
        "text": "Xác suất để Nam đạt từ $9$ điểm trở lên lớn hơn $0{,}0004$",
        "answer": true
      }
    ],
    "explain": "<br>- Xác suất để Nam trả lời sai $1$ câu là $\\dfrac{3}{4}$.<br>- Nam giải chắc chắn đúng $10$ câu nên Nam cần trả lời đúng thêm $10$ câu.<br>  Xác suất là $\\mathrm{C}_{10}^{10}\\cdot \\left(\\dfrac{1}{4} \\right)^{10}\\cdot \\left(\\dfrac{3}{4} \\right)^0 =\\left(\\dfrac{1}{4} \\right)^{10}$.<br>- Để Nam đạt được đúng $8$ điểm thì trong $10$ câu còn lại lựa chọn ngẫu nhiên đáp án phải đúng $6$ câu nữa ( vì đã có $5$ điểm chắc chắn), sai $4$ câu.<br>  Xác suất khi đánh ngẫu nhiên đúng một câu trắc nghiệm là $\\dfrac{1}{4}$.<br>  Xác suất khi đánh ngẫu nhiên sai một câu trắc nghiệm là $\\dfrac{3}{4}$.<br>  Chọn $6$ câu trắc nghiệm để đáp đúng từ $10$ câu trắc nghiệm có $\\mathrm{C}_{10}^6$ (cách).<br>  Vậy xác suất để Nam đạt được đúng $8$ điểm là $\\mathrm{C}_{10}^6\\cdot \\left( \\dfrac{1}{4} \\right)^6\\cdot \\left( \\dfrac{3}{4} \\right)^4$.<br>- Để đạt $9$ điểm, Nam cần trả lời đúng thêm $8$ câu. Xác suất là $\\mathrm{C}_{10}^8\\cdot \\left( \\dfrac{1}{4} \\right)^8\\cdot \\left( \\dfrac{3}{4} \\right)^2$.<br>  Để đạt $9{,}5$ điểm, Nam cần trả lời đúng thêm $9$ câu. Xác suất là $\\mathrm{C}_{10}^9\\cdot \\left(\\dfrac{1}{4} \\right)^9\\cdot \\left(\\dfrac{3}{4} \\right)^1$.<br>  Để đạt $10$ điểm, Nam cần trả lời đúng thêm $10$ câu. Xác suất là $\\mathrm{C}_{10}^{10}\\cdot \\left(\\dfrac{1}{4} \\right)^{10}\\cdot \\left(\\dfrac{3}{4} \\right)^0$.<br>  Như vậy, xác suất để đạt từ $9$ điểm trở lên là tổng xác suất đạt $9$ điểm, $9{,}5$ điểm , $10$ điểm và bằng $\\mathrm{C}_{10}^8\\cdot \\left(\\dfrac{1}{4} \\right)^8\\cdot \\left(\\dfrac{3}{4}\\right)^2$+$\\mathrm{C}_{10}^9\\cdot \\left(\\dfrac{1}{4} \\right)^9\\cdot \\left(\\dfrac{3}{4}\\right)^1$+$\\mathrm{C}_{10}^{10}\\cdot \\left(\\dfrac{1}{4} \\right)^{10}\\cdot \\left(\\dfrac{3}{4}\\right)^0 \\approx 0{,}0004158&gt;0{,}0004$."
  },
  {
    "id": "0D021DS3",
    "question": "Cuối tuần bạn Bảo được cha chở đi mua sách tại một tiệm sách cũ. Bảo chọn mua $12$ quyển (không có hai quyển nào giống nhau), trong đó có $7$ quyển thuộc thể loại Khoa Học Tự Nhiên và $5$ quyển còn lại thuộc thể loại Khoa Học Xã Hội. Trước khi tính tiền sách cho Bảo, cha chọn ngẫu nhiên $3$ quyển trong $12$ quyển đã được Bảo chọn mua để kiểm tra nội dung trong sách có thực sự phù hợp với Bảo hay không.",
    "subQuestions": [
      {
        "text": "Nếu $\\mathrm{P}_a$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra đều thuộc thể loại Khoa Học Xã Hội thì $11\\mathrm{P}_a=1$",
        "answer": false
      },
      {
        "text": "Nếu $\\mathrm{P}_b$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra có đúng một quyển thuộc thể loại Khoa Học Tự Nhiên thì $22\\mathrm{P}_b=7$",
        "answer": true
      },
      {
        "text": "Nếu $\\mathrm{P}_c$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra có đúng hai quyển thuộc thể loại Khoa Học Tự Nhiên thì $44\\mathrm{P}_c=21$",
        "answer": true
      },
      {
        "text": "Nếu $\\mathrm{P}_d$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra có đủ hai thể loại Khoa Học Tự Nhiên và Khoa Học Xã Hội thì $44\\mathrm{P}_d=35$",
        "answer": true
      }
    ],
    "explain": "<br>- Chọn $3$ quyển sách trong $12$ quyển sách, ta có số cách chọn là $\\mathrm{C}_{12}^3=220$.<br>  Chọn $3$ quyển sách đều thuộc thể loại khoa học xã hội trong $5$ quyển có số cách chọn là $\\mathrm{C}_5^3=10$.<br>  Vậy $\\mathrm{P}_a=\\dfrac{10}{220}=\\dfrac{1}{22} \\Rightarrow 11\\mathrm{P}_a=\\dfrac{1}{2}$.<br>- Số cách chọn $3$ quyển sách có đúng một quyển thuộc thể loại Khoa Học Tự Nhiên là $\\mathrm{C}_7^1\\cdot \\mathrm{C}_5^2=70$.<br>  Vậy $\\mathrm{P}_b=\\dfrac{70}{220}=\\dfrac{7}{22} \\Rightarrow 22\\mathrm{P}_b=7$.<br>- Số cách chọn để $3$ quyển sách có đúng hai quyển thuộc thể loại Khoa Học Tự Nhiên là $\\mathrm{C}_7^2\\cdot \\mathrm{C}_5^1=105$.<br>  Vậy $\\mathrm{P}_c=\\dfrac{105}{220}=\\dfrac{21}{44} \\Rightarrow 44\\mathrm{P}_c=21$.<br>- Số cách chọn $3$ quyển sách có đủ hai thể loại Khoa Học Tự Nhiên và Khoa Học Xã Hội $\\mathrm{C}_7^2\\cdot \\mathrm{C}_5^1+\\mathrm{C}_7^1\\cdot \\mathrm{C}_5^2=175$.<br>  Vậy $\\mathrm{P}_d=\\dfrac{175}{220}=\\dfrac{35}{44} \\Rightarrow 44\\mathrm{P}_d=35$."
  }
];
