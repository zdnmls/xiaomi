$(function(){
    // let daohang = document.getElementsByClassName("daohangzi")[0]
    // let dhs = document.querySelectorAll(".daohangzi li");
    // let navkas = document.querySelectorAll(".navka");
    // // console.log(dhs, navkas);
    // for (let i = 0; i < dhs.length; i++) {
    //     dhs[i].onmouseover = function () {
    //         navkas[i].style.height= "200px";
    //         navkas[i].style.display= "block";
    //     }
    //     dhs[i].onmouseout = function () {
    //         navkas[i].style.height= "0px";
    //         navkas[i].style.display = "none";
    //     }
    // }

    //  jQuery方法
    let dhs = $(".daohangzi > li");
    let navkas =$(".navka");
    let hezi=$(".hezi");
    dhs.each(function (index,value) {
        $(value).hover(function () {
            $(navkas[index]).show();
            $(hezi).css({"height":"300px"});
        },
        function () {
            $(navkas[index]).hide();
            $(hezi).css({"height":"0px"});
        })
    });

//   2
//     let uls = document.getElementsByClassName("liebiao-fenleibox")[0]
//     let lis = uls.getElementsByClassName("liebiao-neirong")
//     let items = document.getElementsByClassName("xuanxiangka")
//     for (let i = 0; i < lis.length; i++) {
//         lis[i].onmouseover = function () {
//             items[i].style.display = "block";
//         }
//         lis[i].onmouseout = function () {
//             items[i].style.display = "none";
//         }
//     }
//  jQuery方法

    let lis = $(".liebiao-fenleibox > li");
    let items =$(".xuanxiangka");
    lis.each(function (index,value) {
        $(value).mouseenter(function () {
            $(items[index]).show();
        })
        $(value).mouseleave(function () {
            $(items[index]).hide();
        })
    })

//    3
//    js方法
//     let rights = document.getElementsByClassName("head-right")[0]
//     let heads = rights.getElementsByClassName("head-shop")
//     let gwcshus = document.getElementsByClassName("gwcshu")
//     for (let i = 0; i < heads.length; i++) {
//         heads[i].onmouseover = function () {
//             gwcshus[i].style.height = "80px";
//         }
//         heads[i].onmouseout = function () {
//             gwcshus[i].style.height = "0px";
//         }
//     }


        $('.head-shop').mouseenter(function () {
            $('.gwcshu').css({'height':'80px'});
        })
        $('.head-shop').mouseleave(function () {
            $('.gwcshu').css({'height':'0px'});
        })
//    轮播图
//     let banner = document.getElementsByClassName("banner")[0];
//     let bannerpic = document.getElementsByClassName("banner-pic")[0];
//     let lis1 = bannerpic.getElementsByTagName("li");
//     // console.log(bannerpic,lis1);
//     let bth = document.getElementsByClassName("bth-list")[0];
//     console.log(bth);
//     let lis2 = bth.getElementsByTagName("li");
//     console.log(lis2);
//     let back = document.getElementsByClassName("banner-left")[0];
//     let forward = document.getElementsByClassName("banner-right")[0];
//
//     let t;
//     let num = 0;
//     t = setInterval(fn, 2000);
//     //banner  鼠标效果
//     banner.onmouseover = function () {
//         clearInterval(t);
//     }
//     banner.onmouseout = function () {
//         t = setInterval(fn, 2000);
//     }
//     back.onclick = fn;
//     forward.onclick = fn1;
//
//     function fn() {
//         num++;
//         if (num == lis1.length) {
//             num = 0;
//         }
//         for (let i = 0; i < lis1.length; i++) {
//             // lis1[i].style.display = "none";
//             lis2[i].style.background = "";
//             lis1[i].style.opacity="0";
//         }
//         // lis1[num].style.display = "block";
//         lis2[num].style.background = "#f9ff3d";
//         lis1[num].style.opacity="1";
//     }
//
//     function fn1() {
//         num--;
//         if (num == -1) {
//             num = lis1.length - 1;
//         }
//         for (let i = 0; i < lis1.length; i++) {
//             lis1[i].style.opacity="0";
//             lis2[i].style.background = "";
//         }
//         lis1[num].style.opacity="1";
//         lis2[num].style.background = "#f9ff3d";
//     }
//
//     for (let i = 0; i < lis2.length; i++) {
//         lis2[i].onclick = function () {
//             lis1[i].style.opacity="1";
//             lis1[num].style.opacity="0";
//             lis2[i].style.background = "#f9ff3d";
//             lis2[num].style.background = "";
//             num = i;
//         }
//     }

    //jQuery 方法

    let banner =$(".banner");
    let bannerpic = $(".banner-pic");
    let lis1 =$(".banner-pic > li");
    // console.log(bannerpic,lis1);
    let bth =$(".bth-list");
    // console.log(bth);
    let lis2 = $(".bth-list > li");
    // console.log(lis2);
    let back =$(".banner-left");
    let forward =$(".banner-right");

    let t;
    let num = 0;
    t = setInterval(fn, 2000);
    //banner  鼠标效果
    $(banner).mouseenter(function () {
        clearInterval(t);
    })
    $(banner).mouseleave(function () {
        t = setInterval(fn, 2000);
    })
    $(back).on('click',fn);
    $(forward).on('click',fn1);

    function fn() {
        num++;
        if (num == $(lis1).length) {
            num = 0;
        }
        $(lis1).each(function (index, value) {
            $(lis2[index]).css({'background': ''});
            $(lis1[index]).css({'opacity': '0'});
            $(lis2[num]).css({'background': '#f9ff3d'});
            $(lis1[num]).css({'opacity': '1'});
        })

    }
    function fn1() {
        num--;
        if (num == -1) {
            num = $(lis1).length-1;
        }
        $(lis1).each(function (index, value) {
            $(lis2[index]).css({'background': ''});
            $(lis1[index]).css({'opacity': '0'});
            $(lis2[num]).css({'background': '#f9ff3d'});
            $(lis1[num]).css({'opacity': '1'});
        })
    }
        $(lis2).each(function (index, value) {
            $(lis2).on('click', function () {
                $(lis1[num]).css({'opacity': '0'});
                $(lis1[index]).css({'opacity': '1'});
                $(lis2[index]).css({'background': '#f9ff3d'});
                $(lis2[num]).css({'background': ''});
            })
        })
//   明星单品
    let button = document.getElementsByTagName("button");
    let btnR = button[0];
    let btnL = button[1];
    // console.log(btnR,btnL);
    let danpin = document.getElementsByClassName("danpin")[0];
    let count = danpin.childElementCount;
    // console.log(count);
    let childw = danpin.children[0].offsetWidth + parseInt(getComputedStyle(danpin.children[0], null).marginRight);
//    console.log(childw);
    danpin.style.width = `${count * childw}px`;
    // console.log(danpin.style.width);
    let num1 = 0;
    btnR.onclick = function () {
        if (num1 == 1) {
            btnR.className = "dis";
            btnL.className = "";
            return;
        }
        num1++;
        btnL.className = "";
        danpin.style.transform = `translateX(${-1240 * num1}px)`;
    }
    btnL.onclick = function () {
        if (num1 == 0) {
            btnL.className = "dis";
            btnR.className = "";
            return;
        }
        num1--;
        btnR.className = "";
        danpin.style.transform = `translateX(${-1240 * num1}px)`;
    }
        // 内容封装函数
        function neirong(num) {
            let neironglb =$(".neirong-lb").eq(num);
            let biaoyu = neironglb.find(".biaoyu");
            let widths = neironglb.outerWidth();

            let back =neironglb.find(".zuofh-fh");
            let forward =neironglb.find(".youfh-fh");
            // let neirongbtn =$(".neirong-btn");
            let btnlist1 = neironglb.find(".neirong-btn > li");

            let flag = true;
            let now = next = 0;
            function fn3() {
                if (next == biaoyu.length-1) {
                    // next = 0;
                    return;
                }
                next++;
                biaoyu.eq(next).css({left:widths+'px'});
                biaoyu.eq(now).animate({left: -widths},200,function () {
                    btnfn(now)
                });
                biaoyu.eq(next).animate({left: 0},200);
                now = next;
            }
            function fn4() {
                if (next == 0) {
                    return;
                }
                next--;
                biaoyu.eq(next).css({left:-widths+'px'});
                biaoyu.eq(now).animate({left:widths}, 200,function(){
                    btnfn(now);
                });
                biaoyu.eq(next).animate({left:0}, 200);
                now = next;
            }
            back.on('click',function () {
                if (flag) {
                    fn4();
                    flag = false;
                }
            })
            forward.on('click',function () {
                if (flag) {
                    fn3();
                    flag = false;
                }
            })
            function btnfn(now) {
                for (let i = 0; i < btnlist1.length; i++) {
                    btnlist1[i].className = "";
                }
                btnlist1[now].className = "btnhot";
                flag = true;
            }
            for (let i = 0; i<btnlist1.length; i++) {
                btnlist1[i].onclick = function () {
                    if (i == now) {
                        return
                    }
                    else if (i < now) {
                        animate(biaoyu[now], {left: widths});
                        animate(biaoyu[i], {left: 0});
                        for (let j = 0; j < btnlist1.length; j++) {
                            btnlist1[j].className = "";
                        }
                        btnlist1[i].className = "btnhot";
                    }
                    else if (i > now) {
                        animate(biaoyu[now], {left: -widths});
                        animate(biaoyu[i], {left: 0});
                        for (let j = 0; j < btnlist1.length; j++) {
                            btnlist1[j].className = "";
                        }
                        btnlist1[i].className = "btnhot";
                    }
                    now = next = i;
                }
            }
        }
        var nei1 = new neirong(0);
        var nei2 = new neirong(1);
        var nei3 = new neirong(2);
        var nei4 = new neirong(3);

//    家电封装函数
        function jia(num) {
            let content =document.getElementsByClassName("jiadian-box")[num];
            let contentright =content.getElementsByClassName("zhuti-box");
            let headright1 = content.getElementsByClassName("jd-t-lianjie");
            console.log(contentright,headright1);
            for (let i = 0; i < headright1.length; i++) {
                headright1[i].onmouseover = function () {
                    for (let j = 0; j < headright1.length; j++) {
                        contentright[j].style.display = "none";
                        headright1[j].style.color = "";
                        headright1[j].style.borderBottom = "";
                    }
                    contentright[i].style.display = "block";
                    headright1[i].style.color = "#ff6700";
                    headright1[i].style.borderBottom = "1px solid #ff6700";
                }
            }
        }
        var jiadian = new jia(0);
        var zhineng = new jia(1);
        var dapei = new jia(2);
        var peijian = new jia(3);

//    jQuery   写法
//             $(".jd-t-lianjie").mouseenter(function (e) {
//                 $(this).parent().children().removeClass('hover');
//                 $(this).addClass('hover');
//                 $('.zhuti-box').each(function(index, val) {
//                     val.style.display="none";
//                 });
//                 $('.zhuti-box')[$(this).index()].style.display='block';
//             })
// // //
});



