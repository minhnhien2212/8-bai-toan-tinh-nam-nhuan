function showMessage() {
    var year = document.getElementById('year').value;
    var x = year % 4 == 0;
    var y = year % 100 == 0;
    var z = year % 400 == 0;
    var result = null;

    if (x) {
        if (!y) {
            console.log(year + "Đây là năm nhuận");
            result = "Đây là năm nhuận";
        } else {
            if (z) {
                result = "Đây là năm nhuận";
                console.log(year + "Đây là năm nhuận");
            } else {
                result = "Đây là năm không nhuận";
                console.log(year + "Đây là năm không nhuận");
            }
        }
    } else {
        result = "Đây là năm không nhuận"
        console.log(year + "Đây là năm không nhuận");
    }

    document.getElementById('display').innerText = result;
}

