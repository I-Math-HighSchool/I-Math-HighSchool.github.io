// =========================================================================
// KHỐI DỮ LIỆU: 1D23 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D23 = [
  {
    "id": "1D232TL1",
    "question": "Cho cấp số nhân $\\left(u_n\\right)$ có $u_1=-2$ và công bội $q=3$. Tìm số hạng thứ 5 của cấp số nhân?",
    "answer": "-162",
    "explain": "Số hạng thứ $5$ của cấp số nhân là $u_5=u_1\\cdot q^4=-2 \\cdot 3^4=-162$"
  },
  {
    "id": "1D232TL2",
    "question": "Cho cấp số nhân $(u_n)$ có $u_1=3$, $u_4=192$. Tìm công bội của cấp số nhân $(u_n)$.",
    "answer": "4",
    "explain": "Ta có $u_4=u_1\\cdot q^3=192$ do đó $q^3=\\dfrac{192}{3}=64$ suy ra $q=4$."
  },
  {
    "id": "1D232TL3",
    "question": "Từ tờ giấy, cắt một hình tròn bán kính $R=4$ (cm) như Hình $a$.  Tiếp theo, cắt hai hình tròn bán kính $\\dfrac{R}{2}$ rồi chồng lên hình tròn đầu tiên như Hình $b$. Tiếp theo, cắt bốn hình tròn bán kính $\\dfrac{R}{4}$ rồi chồng lên các hình trước như Hình $c$. Cứ thế tiếp tục mãi. Gọi $S$ là tổng diện tích của các hình tròn và $S=\\pi a$. Tính $a$.<br><img src=\"data/11/1D2/im1D23/dlts_11_DLTS15_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "32",
    "explain": "Diện tích của các hình tròn trong các lần cắt là  <br>- Lần thứ 1. $S_1=\\pi R^2$.<br>- Lần thứ 2. $S_2=2\\cdot \\pi \\left(\\dfrac{R}{2}\\right)^2= \\dfrac{\\pi R^2}{2}$.<br>- Lần thứ 3. $S_3=4\\cdot \\pi \\left(\\dfrac{R}{4}\\right)^2= \\dfrac{\\pi R^2}{2^2}$.<br>- Lần thứ $n$. $S_n= \\dfrac{\\pi R^2}{2^{n-1}}$.  Do đó diện tích các hình tròn lập thành một cấp số nhân lùi vô hạn có số hạng đầu $S_1=\\pi R^2$ và công bội $q=\\dfrac{1}{2}$ nên tổng diện tích các hình tròn là   \\[ S_1+S_2+\\cdots=\\dfrac{\\pi R^2}{1-\\dfrac{1}{2}}=2\\pi R^2=32\\pi\\,\\text{cm}^2.\\]"
  },
  {
    "id": "1D232TL4",
    "question": "Một du khách vào trường đua ngựa xem đua ngựa và đặt cược chọn con thắng cuộc. Nếu chọn đúng con thắng cuộc thì sẽ nhận được số tiền gấp đôi số tiền đặt cược, còn nếu chọn sai thì sẽ mất số tiền đặt cược. Người du khách đó lần đầu tiên đặt $100$ USD , mỗi lần sau tiền đặt gấp đôi tiền đặt lần trước. Người đó thua $9$ lần liên tiếp và thắng ở lần thứ $10$. Sau $10$ lần chơi, du khách đó đã lời được $a$ USD. Hãy tìm $a$.",
    "answer": "100",
    "explain": "\\textbf{<em>Cách 1:</em>}<br>  Tổng số tiền đã thua trong $9$ lần đầu tiên là tổng của một cấp số nhân với số hạng đầu $u_1 = 100$, công bội $q = 2$.<br>  Vậy, tổng số tiền thua là $S_9 = \\dfrac{100\\cdot (2^9 - 1)}{2 - 1} = \\dfrac{100\\cdot (512 - 1)}{1} = 100\\cdot 511 = 51100$ USD.<br>  Ở lần thứ $10$, người du khách đặt số tiền là $u_{10}=u_1\\cdot 2^9=51200$.<br>  Ở lần thứ $10$, người du khách thắng và nhận được số tiền gấp đôi số tiền đặt cược là $51200\\cdot 2 = 102400$ USD.<br>  Số tiền lời ở lần thắng này so với số tiền đã đặt là $102400 - 51200 = 51200$ USD.<br>  Vậy, sau $10$ lần chơi, du khách đó đã lời được $51200 - 51100 =100$ USD.<br>  \\textbf{<em>Cách 2:</em>}<br>  Ta sẽ tính số tiền đặt cược và kết quả của từng lần chơi:  <br>- [+)]<br>- Lần 1: Đặt cược $100$ USD, thua. Số tiền mất là $100$ USD.<br>- Lần 2: Đặt cược $100\\cdot 2 = 200$ USD, thua. Số tiền mất là $200$ USD.<br>- Lần 3: Đặt cược $200\\cdot 2 = 400$ USD, thua. Số tiền mất là $400$ USD.<br>- Lần 4: Đặt cược $400\\cdot 2 = 800$ USD, thua. Số tiền mất là $800$ USD.<br>- Lần 5: Đặt cược $800\\cdot 2 = 1600$ USD, thua. Số tiền mất là $1600$ USD.<br>- Lần 6: Đặt cược $1600\\cdot 2 = 3200$ USD, thua. Số tiền mất là $3200$ USD.<br>- Lần 7: Đặt cược $3200\\cdot 2 = 6400$ USD, thua. Số tiền mất là $6400$ USD.<br>- Lần 8: Đặt cược $6400\\cdot 2 = 12800$ USD, thua. Số tiền mất là $12800$ USD.<br>- Lần 9: Đặt cược $12800\\cdot 2 = 25600$ USD, thua. Số tiền mất là $25600$ USD.<br>- Lần 10: Đặt cược $25600\\cdot 2 = 51200$ USD, thắng. Số tiền nhận được là $51200\\cdot 2 = 102400$ USD.<br>  Số tiền lời ở lần thắng này so với số tiền đã đặt là $102400 - 51200 = 51200$ USD.  Vậy, sau $10$ lần chơi, du khách đó đã lời được $51200 - 51100 =100$ USD."
  },
  {
    "id": "1D233TL5",
    "question": "Tìm $x$ để ba số $1+x$; $9+x$; $33+x$ theo thứ tự đó lập thành một cấp số nhân.",
    "answer": "3",
    "explain": "Để ba số $(1+x);(9+x);(33+x)$ lập thành cấp số nhân thì   $(9+x)^2=(1+x)(33+x)$<br>$\\Leftrightarrow 81+18x+x^2=33+34x+x^2$<br>$\\Leftrightarrow 81+18x=33+34x$<br>$\\Leftrightarrow 48=16x$<br>$\\Leftrightarrow x=3.$"
  },
  {
    "id": "1D235TL6",
    "question": "Một loại vi khuẩn được nuôi cấy trong ống nghiệm, cứ $20$ phút vi khuẩn đó lại phân đôi một lần. Nếu ban đầu có $20$ vi khuẩn, tính số lượng vi khuẩn có trong ống nghiệm sau $2$ giờ.",
    "answer": "1280",
    "explain": "$2$ giờ $=120$ phút. Mỗi $20$ phút vi khuẩn phân đôi một lần $\\Rightarrow$ có $6$ lần phân đôi.<br>  Số vi khuẩn sau $6$ lần phân đôi là $20\\cdot 2^6=20\\cdot 64=1\\,280$."
  },
  {
    "id": "1D232TL5",
    "question": "Cho hình vuông $a_1$ có độ dài cạnh là $40\\,m$. Người ta chia mỗi cạnh của hình vuông thành 4 phần bằng nhau và nối các điểm chia một cách thích hợp để được hình vuông $a_2$. Cứ tiếp tục như vậy ta được các hình vuông tương ứng $a_3,a_4,...$ (hình vẽ). Diện tích hình vuông thứ 15 là $a$ ($m^2$). Tìm giá trị của $a$ (làm tròn kết quả đến hàng phần trăm).<br><img src=\"data/11/1D2/im1D23/loc3_1_TL_TN_DS_THPT__003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2,22",
    "explain": "Giả sử $a_i$ là cạnh hình vuông $\\left(C_i\\right)$ ($i\\in \\{1,2,\\ldots\\}$).<br>  Ta có $a_1=40$, hình vuông thứ $(C_{i+1})$ có cạnh bằng cạnh huyền của tam giác vuông với một cạnh tam giác bằng $\\dfrac{1}{4}$ cạnh hình vuông $(C_i)$ và cạnh còn lại bằng $\\dfrac{3}{4}$ cạnh hình vuông $(C_i)$.<br>  Do đó $a_{i+1}= \\sqrt{\\left(\\dfrac{a_i}{4}\\right)^2 + \\left(\\dfrac{3a_i}{4}\\right)^2} =\\sqrt{\\dfrac{a_i^2}{16} + \\dfrac{9a_i^2}{16}} = \\sqrt{\\dfrac{5}{8}a_i^2}$.<br>  Vì vậy $S_1=a_1^2=1600$, $S_{i+1}=a_{i+1}^2 = \\dfrac{5}{8}a_i^2 = \\dfrac{5}{8}S_i$ với mọi $i\\in \\mathbb{N}^*$.<br>  Suy ra $(S_n)$ lập thành cấp số nhân với $S_1=1600$, công bội $q=\\dfrac{5}{8}$.<br>  Công thức tính số hạng thứ \\(n\\) của cấp số nhân là $S_{n}=S_{1}\\cdot q^{n-1}$. <br>  Vậy diện tích hình vuông thứ $15$ là $S_{15}=S_{1}\\cdot q^{15-1}=1600 \\cdot \\left(\\dfrac{5}{8}\\right)^{14}\\approx 2{,}22$."
  },
  {
    "id": "1D235TL1",
    "question": "Một loại thuốc được dùng mỗi ngày một lần. Lúc đầu nồng độ thuốc trong máu của bệnh nhân tăng nhanh, nhưng mỗi liều kế tiếp có tác dụng ít hơn liều trước đó. Lượng thuốc trong máu ở ngày thứ nhất là $50$ mg, và mỗi ngày sau đó giảm chỉ còn một nửa so với ngày kề trước đó. Tính tổng lượng thuốc (tính bằng mg) trong máu của bệnh nhân sau khi dùng thuốc $10$ ngày liên tiếp <em>(kết quả được làm tròn đến hàng phần mười)</em>.",
    "answer": "99,9",
    "explain": "Lượng thuốc trong máu của bệnh nhân mỗi ngày lập thành một cấp số nhân có số hạng đầu $u_1 = 50$ và công bội $q = \\dfrac{1}{2}$.<br>  Tổng lượng thuốc trong máu sau $10$ ngày là tổng của $10$ số hạng đầu của cấp số nhân đó:  $S_{10} = \\dfrac{u_1 \\cdot\\left(1 - q^{10}\\right)}{1 - q}$<br>$= \\dfrac{50 \\cdot\\left(1 - \\left(\\dfrac{1}{2}\\right)^{10}\\right)}{1 - \\dfrac{1}{2}}$<br>$= 100 \\cdot \\left(1 - \\dfrac{1}{1024}\\right)$<br>$= \\dfrac{102\\,300}{1024}$<br>$\\approx 99{,}902.$  Làm tròn đến hàng phần mười, ta được kết quả là $99{,}9$ mg."
  }
];
