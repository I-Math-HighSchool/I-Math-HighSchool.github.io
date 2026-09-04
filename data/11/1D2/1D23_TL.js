// =========================================================================
// KHỐI DỮ LIỆU: 1D23 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
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
    "answer": "1\\,280",
    "explain": "$2$ giờ $=120$ phút. Mỗi $20$ phút vi khuẩn phân đôi một lần $\\Rightarrow$ có $6$ lần phân đôi.<br>  Số vi khuẩn sau $6$ lần phân đôi là $20\\cdot 2^6=20\\cdot 64=1\\,280$."
  }
];
