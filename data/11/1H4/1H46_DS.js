// =========================================================================
// KHỐI DỮ LIỆU: 1H46 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1H46 = [
  {
    "id": "1H463DS1",
    "question": "Cho hình chóp $S ABCD$ có đáy $ABCD$ là hình thoi. Trên cạch $SC$ lấy điểm $M$ sao cho $CM =2SM$. Gọi $N$ là giao điểm của đường thẳng $SD$ và mặt phẳng $(ABM )$. Gọi $K$ là giao điểm của hai đường thẳng $AN$ và $BM$<br><img src=\"data/11/1D4/im1H46/dlts_11_DLTS13_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$BC=CD$",
        "answer": true
      },
      {
        "text": "$\\dfrac{SK}{BC}=\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{MN}{CD}=\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "$\\dfrac{SK}{MN}=1$",
        "answer": false
      }
    ],
    "explain": "Trong mặt phẳng $(SCD)$, kẻ $MN$ song song với $CD$, ($N\\in SD$).<br>  Vì $AB\\parallel CD$ nên $MN$ nằm trong mặt phẳng $(ABM)$ hay $N$ thuộc mặt phẳng $(ABM)$. Mà $N\\in SD$ nên $N$ là giao điểm của mặt phẳng $(ABM)$ và $SD$.  <br>- Vì $ABCD$ là hình thoi nên $BC=CD$.<br>- Xét tam giác $SCD$ có $MN\\parallel CD$ nên theo định lý Thalés, ta có: $\\dfrac{SM}{SC}=\\dfrac{MN}{CD}$.<br>  Xét tam giác $KAB$ có $MN\\parallel AB$ nên theo định lý Thalés, ta có: $\\dfrac{KM}{KB}=\\dfrac{MN}{AB}$.<br>  Từ đó suy ra: $\\dfrac{SM}{SC}=\\dfrac{KM}{KB}$.<br>  Mà $\\widehat{SMK}=\\widehat{BMC}$ nên $\\Delta MKS\\sim \\Delta MBC$.<br>  Do đó: $\\dfrac{SK}{BC}=\\dfrac{SM}{MC}=\\dfrac{1}{2}$. %<strong>Đúng</strong>.<br>- Xét tam giác $SCD$ có $MN\\parallel CD$ nên theo định lý Thalés, ta có: $\\dfrac{MN}{CD}=\\dfrac{SM}{SC}=\\dfrac{1}{3}.$<br>- Theo chứng minh phần a) và phần b), ta có:  $\\dfrac{SK}{BC}:\\dfrac{MN}{CD}=\\dfrac{3}{2}.$  Vì $BC=CD$ nên $\\dfrac{SK}{MN}=\\dfrac{3}{2}$."
  },
  {
    "id": "1H463DS2",
    "question": "Cho lăng trụ tam giác $ABC.A'B'C'$. Gọi $M$ và $M'$ lần lượt là trung điểm của các cạnh $BC$ và $B'C'$.",
    "subQuestions": [
      {
        "text": "Giao tuyến của hai mặt phẳng $\\left(AB'C'\\right)$ và $\\left(A'BC\\right)$ đi qua giao điểm của hai đường thẳng $AM'$ và $A'M$",
        "answer": true
      },
      {
        "text": "$AM\\parallel A'M'$",
        "answer": true
      },
      {
        "text": "Hai mặt đáy của hình lăng trụ nằm trên hai mặt phẳng song song",
        "answer": true
      },
      {
        "text": "Điểm $A'$ là hình chiếu của điểm $M$ trên mặt phẳng $\\left(A'B'C'\\right)$ theo phương $CB'$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H46/dlts_11_DLTS6_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Giao tuyến của hai mặt phẳng $\\left(AB'C'\\right)$ và $\\left(A'BC\\right)$ đi qua giao điểm của hai đường thẳng $AM'$ và $A'M$.<br>- Vì $AMM'A'$ là hình bình hành nên $AM\\parallel A'M'$.<br>- Vì $\\left(ABC\\right)\\parallel\\left(A'B'C'\\right)$ nên hai mặt đáy của hình lăng trụ nằm trên hai mặt phẳng song song.<br>- Điểm $A'$ là hình chiếu của điểm $A$ trên mặt phẳng $\\left(A'B'C'\\right)$ theo phương $CC'$ hoặc $BB'$."
  }
];
