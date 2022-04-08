$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/
        if ($("#Name").val() == "") {
            $("tbName").html("Khong duoc de trong");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Moi ki tu dau phai viet hoa, khong duoc su dung so");
            return false;
        } else
            $("tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Khong duoc de trong");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dung so tu 1 den 100");
            return false;
        } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("tu 1 den 100")
                return false;
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);


    function kiemTraDiaChi() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("#tbDC").html("Khong duoc de trong");
            return false;
        }
        if (!mauKT.test($("#DC").val())) {
            $("#tbDC").html("Moi ky tu dau viet hoa, khong su dung so");
            return false;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    function kiemTraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("Khong duoc de trong");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("Phai sau ngay hien tai 7 ngay");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }

    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Khong duoc de trong");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("theo dang 0xxx-xxx-xxx-xxx trong do x la so");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraSoAo() == true && kiemTraNTT() == true && kiemTraDiaChi() == true && kiemTraSDT() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})