// =========================================================================
// KHỐI DỮ LIỆU: 1H46 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1H46 = [
  {
    "id": "1H463DS1",
    "question": "Cho hình chóp $S ABCD$ có đáy $ABCD$ là hình thoi. Trên cạch $SC$ lấy điểm $M$ sao cho $CM =2SM$. Gọi $N$ là giao điểm của đường thẳng $SD$ và mặt phẳng $(ABM )$. Gọi $K$ là giao điểm của hai đường thẳng $AN$ và $BM$<br><img src=\"data/11/1H4/im1H46/dlts_11_DLTS13_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
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
    "explain": "<br><img src=\"data/11/1H4/im1H46/dlts_11_DLTS6_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Giao tuyến của hai mặt phẳng $\\left(AB'C'\\right)$ và $\\left(A'BC\\right)$ đi qua giao điểm của hai đường thẳng $AM'$ và $A'M$.<br>- Vì $AMM'A'$ là hình bình hành nên $AM\\parallel A'M'$.<br>- Vì $\\left(ABC\\right)\\parallel\\left(A'B'C'\\right)$ nên hai mặt đáy của hình lăng trụ nằm trên hai mặt phẳng song song.<br>- Điểm $A'$ là hình chiếu của điểm $A$ trên mặt phẳng $\\left(A'B'C'\\right)$ theo phương $CC'$ hoặc $BB'$."
  },
  {
    "id": "1H461DS1",
    "question": "Cho hình lăng trụ $ABC.A'B'C'$. Khi đó",
    "subQuestions": [
      {
        "text": "$AA'\\parallel CC'$",
        "answer": true
      },
      {
        "text": "$A'$ là hình chiếu của $A$ trên mặt phẳng $(A'B'C')$ theo phép chiếu song song theo phương $CC'$",
        "answer": true
      },
      {
        "text": "Gọi $M$ là một điểm trên đoạn thẳng $AB$. Hình chiếu của $M$ trên mặt phẳng $(A'B'C')$ qua phép chiếu song song theo phương $BB'$ là điểm $M'\\in A'B'$",
        "answer": true
      },
      {
        "text": "Gọi $O$ là tâm của hình bình hành $BCC'B'$. Ảnh của $O$ qua phép chiếu song song theo phương $AA'$ trên mặt phẳng $(A'B'C')$ là trung điểm của $B'C'$",
        "answer": true
      }
    ],
    "explain": "- Vì $ABC.A'B'C'$ là hình lăng trụ nên các cạnh bên song song với nhau, do đó $AA'\\parallel CC'$. Vậy khẳng định này đúng.<br>- Vì $AA'\\parallel CC'$ nên phép chiếu song song theo phương $CC'$ biến điểm $A$ thành giao điểm của đường thẳng qua $A$ song song $CC'$ (tức đường thẳng $AA'$) với mặt phẳng $(A'B'C')$, mà giao điểm đó chính là $A'$. Vậy khẳng định này đúng.<br>- Kẻ đường thẳng qua $M$ song song với $BB'$; vì $M\\in AB$ nên đường thẳng này nằm trong mặt phẳng $(ABB'A')$, mà mặt phẳng $(ABB'A')$ cắt $(A'B'C')$ theo giao tuyến $A'B'$, nên giao điểm $M'$ của đường thẳng đó với $(A'B'C')$ thuộc $A'B'$. Vậy khẳng định này đúng.<br>- Gọi $I$ là trung điểm của $B'C'$. Vì $O$ là tâm của hình bình hành $BCC'B'$ nên $O$ cũng là trung điểm của đường chéo $BC'$. Trong tam giác $BB'C'$, hai điểm $O$ và $I$ lần lượt là trung điểm của hai cạnh $BC'$ và $B'C'$ (cùng xuất phát từ đỉnh $C'$), nên $OI$ là đường trung bình ứng với cạnh còn lại, suy ra $OI\\parallel BB'$; mà $BB'\\parallel AA'$ (tính chất lăng trụ) nên $OI\\parallel AA'$. Vì $I\\in(A'B'C')$ nên $I$ chính là ảnh của $O$ qua phép chiếu song song theo phương $AA'$ lên mặt phẳng $(A'B'C')$. Vậy khẳng định này đúng."
  },
  {
    "id": "1H461DS2",
    "question": "Cho các đoạn thẳng và đường thẳng không song song hoặc không trùng với phương chiếu. Cho biết tính đúng sai của các mệnh đề sau (nếu mệnh đề sai thì hãy phát biểu lại cho đúng):",
    "subQuestions": [
      {
        "text": "Phép chiếu song song bảo toàn thứ tự ba điểm thẳng hàng",
        "answer": true
      },
      {
        "text": "Phép chiếu song song không làm thay đổi tỉ số độ dài của hai đoạn thẳng",
        "answer": false
      },
      {
        "text": "Hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau",
        "answer": true
      },
      {
        "text": "Hình chiếu song song của một đường thẳng là một đường thẳng",
        "answer": true
      }
    ],
    "explain": "- Đây là một tính chất của phép chiếu song song: phép chiếu song song bảo toàn thứ tự ba điểm thẳng hàng. Khẳng định này đúng.<br>- Khẳng định \"Phép chiếu song song không làm thay đổi tỉ số độ dài của hai đoạn thẳng\" là sai vì tính chất đúng phải kèm điều kiện hai đoạn thẳng đó cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song. Phát biểu đúng là: \"Phép chiếu song song không làm thay đổi tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song\".<br>- Đây là một tính chất của phép chiếu song song: hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau. Khẳng định này đúng.<br>- Đây là một tính chất của phép chiếu song song: hình chiếu song song của một đường thẳng (không song song hoặc trùng với phương chiếu) là một đường thẳng. Khẳng định này đúng."
  }
];
