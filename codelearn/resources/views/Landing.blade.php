<!DOCTYPE html>
<html lang="en" class="static dir-ltr codecamp-adauthorization" dir="ltr">

<!-- Mirrored from codelearn.io/landing by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Jul 2019 03:26:03 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
    <meta charset="utf-8">
    <meta name="description"
        content="CodeLearn is an online platform developed by FPT Software company that helps users to learn, practice coding skills and join the developer community" />
    <meta name="author" content="" />
    <link rel="shortcut icon" href="Themes/TheCodeCampPro/Content/cl.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
    <title>Code Learn</title>
    <script>
    (function(d) {
        d.className = "dyn" + d.className.substring(6, d.className.length);
    })(document.documentElement);
    </script>
    <script>
    window.isRTL = false;
    </script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="{!! asset('css/app.css')!!}">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />


    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <meta property="og:title" content="Code Learn - Code Learn" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://codelearn.io/landing" />
    <meta property="og:description"
        content="CodeLearn is an online platform developed by FPT Software company that helps users to learn, practice coding skills and join the developer community" />
    <meta property="og:image" content="https://codelearn.io/Themes/TheCodeCampPro/assets/code-learn/share.jpg" />
    <meta property="fb:app_id" content="648326032295473" />
    <meta name="google-signin-client_id"
        content="16523143533-ovv9lj8c7i8sv36sv3lguom0msmdk8ah.apps.googleusercontent.com" />

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141685371-1"></script>
    <script>
    if ('https://codelearn.io' == location.origin.toLocaleLowerCase()) {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-141685371-1');
        gtag('config', 'USER_MANAGEMENT');
        gtag('set', {
            'user_id': 'CodeLearn-Anonymous'
        });

        // Measure Google Ads conversions
        gtag('event', 'conversion', {
            'send_to': 'USER_MANAGEMENT/CodeLearn-Anonymous',
        });

        window['GoogleAnalyticsObject'] = 'ga';
        window['ga'] = window['ga'] || function() {
            (window['ga'].q = window['ga'].q || []).push(arguments)
        };
        ga('set', 'userId', 'CodeLearn-Anonymous');
    }
    </script>

    <script type="text/javascript">
    if ('https://codelearn.io' == location.origin.toLocaleLowerCase()) {
        var _paq = _paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u = "http://analytics.fsoft.com.vn/";
            _paq.push(['setUserId', 'CodeLearn-Anonymous']);
            _paq.push(['setTrackerUrl', u + 'piwik.php']);
            _paq.push(['setSiteId', '112']);
            var d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = u + 'piwik.js';
            s.parentNode.insertBefore(g, s);
        })();
    }
    </script>
    <script type="text/javascript">
    var strAuthen = '';
    var faceId = '648326032295473';
    var isLoadedFacebook = 'False';
    // $(document).ready(function() {
    //     $('#btn1').click(function openModal(tab) {
    //         console.log("abcd");
    //         $('#loginModal a[data-target="#' + tab + '"]').tab('show');
    //         switch (tab) {
    //             case 'login':
    //                 $(".btn--facebook span").text(translate.instant("Facebook"));
    //                 $(".btn--google span").text(translate.instant("Google"));
    //                 $("#loginModal .header-card").text(translate.instant("PAGES_LOGIN_HEADING"));
    //                 SIGNUP_VALIDATOR && SIGNUP_VALIDATOR.resetForm();
    //                 break;
    //             case 'signup':
    //                 $(".btn--facebook span").text(translate.instant("Facebook"));
    //                 $(".btn--google span").text(translate.instant("Google"));
    //                 $("#loginModal .header-card").text(translate.instant("PAGES_SIGNUP_HEADING"));
    //                 LOGIN_VALIDATOR && LOGIN_VALIDATOR.resetForm();
    //                 break;
    //         }
    //     });
    // });




    window.fbAsyncInit = function() {
        FB.init({
            appId: faceId,
            cookie: false,
            xfbml: true,
            version: 'v3.3'
        });
        FB.AppEvents.logPageView();
        isLoadedFacebook = true;

    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    </script>
</head>

<body class="hold-transition skin-sku-light layout-top-nav">
    <script type="text/javascript">
    var LANG_CURRENT = "en";
    var IS_ADMIN = false;
    </script>
    <div class="zone zone-content">
        <nav id="nav">
            <div class="container">
                <div class="row ml-auto">
                    <div class="nav">
                        <div class="col-sm-5 col-md-5">
                            <a href="#" class="logo">
                                <img src="Themes/TheCodeCamppro/assets/landing/logo-landing3860.svg?v=1"
                                    class="img-responsive img-logo">
                            </a>
                        </div>
                        <div class="col-sm-7 col-md-7">
                            <div class="menu">
                                <ul class="main-menu">
                                    <li><a href="index.html" class="link-menu">Home</a></li>
                                    <li><a href="Learning/index.html" class="link-menu">Learning</a></li>
                                    <li><a href="Training/index.html" class="link-menu">Training</a></li>
                                    <li><a href="Fights/index.html" class="link-menu">Fights</a></li>
                                    <li><a href="Discussion/index.html" class="link-menu">Discussion</a></li>
                                    <li><a href="AboutUs/index.html" class="link-menu">About Us</a></li>
                                    <li><a href="landingbb96.html" class="link-menu">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="header" style="display: flex;">
                        <div class="col-sm-6 col-md-6">
                            <h1 class="title">Join over million developers in the world with <strong>CODELEARN</strong>
                            </h1>
                            <p class="text">CodeLearn is an online platform developed by FPT Software company that helps
                                users to learn, practice coding skills and join the developer community</p>
                            <button type="button" id="btn1" class="btn btn-warning" data-toggle="modal"
                                data-target="#loginModal">Sign In</button>

                        </div>
                        <div class="col-sm-6 col-md-6">
                            <img id="computer" src="Themes/TheCodeCamppro/assets/landing/group3860.png?v=1"
                                class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="get-where">
            <div class="container">
                <div class="row">
                    <div class="get-where" style="display: flex;">
                        <div class="col-sm-6 col-md-6">
                            <h2 class="title">Get where<br> you are going<br> faster with us</h2>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <div class="item">
                                <div class="icon">
                                    <img src="Themes/TheCodeCamppro/assets/landing/elearning.png"
                                        class="img-responsive">
                                </div>
                                <h4 class="title">PRACTICE EVERYDAY</h4>
                                <p class="text">Improve coding skills with a huge amount of coding exercises which are
                                    designed for varied levels</p>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="Themes/TheCodeCamppro/assets/landing/conversation.png"
                                        class="img-responsive">
                                </div>
                                <h4 class="title">GET RESULTS IMMEDIATELY</h4>
                                <p class="text">Get results once the exercise is finished</p>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="Themes/TheCodeCamppro/assets/landing/award.png" class="img-responsive">
                                </div>
                                <h4 class="title">GET REWARDS</h4>
                                <p class="text">Contribute to our learning materials and get points, the points can be
                                    exchanged for gifts.</p>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="Themes/TheCodeCamppro/assets/landing/diploma.png" class="img-responsive">
                                </div>
                                <h4 class="title">GET CERTIFICATES</h4>
                                <p class="text">Get a certificate from FPT software, a global IT services &amp;
                                    outsourcing company, and get ready for the jobs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="get-start">
            <div class="container">
                <div class="row">
                    <div class="get-start">
                        <h2 class="title">IT’S TIME TO TRY CODELEARN</h2>
                        <p class="text">Because coding must be a highly in-demand skill that is useful many years into
                            the future and will allow you to get a great job all around the world.</p>
                        <button class="btn-start" data-toggle="modal" data-target="#loginModal"
                            onclick="openModal('login')">Get started now</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="how-work">
            <div class="container">
                <div class="row">
                    <div class="main-work">
                        <h5 class="title hide">Research & Pedagogy</h5>
                        <h3 class="title2">How It Works?</h3>
                        <div class="wrap">
                            <div class="col-sm-6 col-md-4">
                                <div class="main-work-content">
                                    <img src="Themes/TheCodeCamppro/assets/landing/img_03860.png?v=1"
                                        class="img-responsive">
                                    <h4 class="title">Exercises</h4>
                                    <p class="description">Huge amount of online coding exercises are easy to follow up
                                        and
                                        practice everyday.</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div class="main-work-content">
                                    <img src="Themes/TheCodeCamppro/assets/landing/img_13860.png?v=1"
                                        class="img-responsive">
                                    <h4 class="title">Learning</h4>
                                    <p class="description">Every course is designed for any kind of users from basic to
                                        advanced level.</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div class="main-work-content">
                                    <img src="Themes/TheCodeCamppro/assets/landing/img_23860.png?v=1"
                                        class="img-responsive">
                                    <h4 class="title">Results</h4>
                                    <p class="description">Get result immediately after submitting task.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="testimonial">
            <div class="container">
                <div class="row">
                    <div class="main-testimonial">
                        <h5 class="our-student">Our Students help us to strive for more</h5>
                        <h3 class="students-say">What Our Students Say</h3>
                        <img src="Themes/TheCodeCamppro/assets/landing/dangquang.jpg" id="img_avatar"
                            class="img-testimonial img-responsive">
                        <div class="testimonial">
                            <div class="item">
                                <p class="text-testimonial">“This website is exactly what I am looking for. With a wide
                                    range of exercises which are divided by levels, I can start to learn immediately
                                    without any coding background knowledge. Despite not knowing any thing about coding
                                    at the beginning, now I can code what I love.“</p>
                                <div class="students">Nguyen Dang Quang</div>
                                <div class="company">VNext Software</div>
                                <img class="avatar hide" src="Themes/TheCodeCamppro/assets/landing/dangquang.jpg" />
                            </div>
                            <div class="item">
                                <p class="text-testimonial">“What I love most about this website is the community.
                                    Codelearn connects many coding lovers all around the world. We can team up, discuss
                                    and solve coding problems together via this website. We shared and learnt from each
                                    other a lot.“</p>
                                <div class="students">Tong Ba Vinh</div>
                                <div class="company">FPT Software</div>
                                <img class="avatar hide" src="Themes/TheCodeCamppro/assets/landing/vinhtb.jpg" />
                            </div>
                            <div class="item">
                                <p class="text-testimonial">“Codelearn opens a new world for me. I had been looking for
                                    a website where I could practice coding everyday until Codelearn appeared and then
                                    my life changed. I learn, get hired and be more confident.“</p>
                                <div class="students">Vu Hoang Bao Trung</div>
                                <div class="company">VNext Software</div>
                                <img class="avatar hide" src="Themes/TheCodeCamppro/assets/landing/trungvu.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="partner">
            <div class="container">
                <div class="row" style="margin-bottom:20px;">
                </div>
            </div>
        </section>

        <footer id="footer" class="codecamp__footer">
            <div class="container">
                <div class="credits row">
                    <span class="poweredby">
                        <img src="Themes/TheCodeCampPro/Styles/images/logofpt.fw.png" alt="" class="footer-logo">
                        Powered by CodeLearn
                    </span>
                    <span class="copyright">&#169; 2019.</span>
                    <span>All Rights Reserved.</span>
                    <span class="pull-right my-3">Support: <strong><a
                                href="cdn-cgi/l/email-protection.html#7c1f13181910191d0e12230f090c0c130e083c1a0f131a08521f1311520a12"><span
                                    class="__cf_email__"
                                    data-cfemail="82e1ede6e7eee7e3f0ecddf1f7f2f2edf0f6c2e4f1ede4f6ace1edefacf4ec">[email&#160;protected]</span></a></strong></span>
                </div>
            </div>
            <button id="back-top"><i class="fa fa-arrow-up"></i></button>
        </footer>

        <script type="text/javascript">
        (function() {
            'use strict';
            $(document).ready(function() {
                // Code script
                $('.testimonial').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    autoplay: true,
                    autoplaySpeed: 5000
                });
                $('.testimonial').on("afterChange", function(event, slick, curentSlide) {
                    var imgSrc = $('.testimonial .item').eq(curentSlide).find("img.avatar").attr(
                        "src");
                    $("#img_avatar").attr("src", imgSrc).fadeIn();
                });

                //$('.selectpicker').selectpicker();

                $(window).scroll(function() {
                    var sticky = $('#nav'),
                        scroll = $(window).scrollTop();

                    if (scroll >= 100) $('#nav').addClass('fixed');
                    else sticky.removeClass('fixed');
                });
            })
        }());

        var backTop = function() {
            var btnBackTop = document.querySelector('#back-top');

            var activeButton = function() {
                if ($(this).scrollTop() > 100) {
                    btnBackTop.classList.add('active');
                } else {
                    btnBackTop.classList.remove('active');
                }
            }

            var topScroll = function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            }

            window.addEventListener('scroll', activeButton);
            btnBackTop.addEventListener('click', topScroll);
        };
        backTop();
        </script>

    </div>







    <div class="modal fade modal-center" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body login-modal">
                    <h2 class="header-card text-center">Login</h2>
                    <div>


                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="login">
                                <form id="frmLogin">
                                    <div class="form-group">
                                        <input name="username" type="text" class="form-control"
                                            placeholder="Username or Email address" autocomplete='username' />
                                    </div>
                                    <div class="form-group">
                                        <input name="password" type="password" class="form-control"
                                            placeholder="Please enter password" autocomplete='current-password' />
                                    </div>
                                    <div class="wrap-btn" style="text-align: center;"> <button type="submit" class="btn btn-warning">Login</button>
                                    </div>


                                </form>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="signup">
                                <form id="frmSignup" method="POST" action="https://codelearn.io/">
                                    <div class="form-group">
                                        <input name="username" type="text" class="form-control" placeholder="User name"
                                            autocomplete='username' />
                                    </div>
                                    <div class="form-group">
                                        <input name="email" type="email" class="form-control" placeholder="Email"
                                            autocomplete='email' />
                                    </div>
                                    <div class="form-group">
                                        <input name="password" type="password" class="form-control"
                                            placeholder="Password" autocomplete='current-password' />
                                    </div>
                                    <button type="submit" class="btn btn-default btn-block btn--orange btn-signup">Sign
                                        up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p class="label-or text-center">OR</p>
                    <div class="wrap-btn">
                        <button class="btn btn-primary"
                            onclick="window.location.replace('https://oauth.codelearn.io/Home/SignIn')">
                            <i class="fa fa-windows" style="color: black;"></i>
                            <span>Sign in with Microsoft</span>
                        </button>
                    </div>


                    <div class="wrap-btn">
                        <button class="btn btn-primary" onclick="facebookSignIn()">
                            <i class="fa fa-facebook-square" style="color: black;"></i>
                            <span>Sign in with Facebook</span>
                        </button>
                    </div>


                    <div class="wrap-btn">
                         <button class="btn btn-primary" id="googleSignIn">
                            <i class="fa fa-google"></i>
                            <span>Sign in with Google</span>
                        </button>
                    
                    </div>


                </div>
            </div>
        </div>
    </div>
    <script src="js/app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>


</body>




<!-- Mirrored from codelearn.io/landing by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Jul 2019 03:26:45 GMT -->

</html>